document.addEventListener("DOMContentLoaded", () => {
  let db;
  const request = indexedDB.open("Modulo1DB", 1);
  request.onerror = () => console.error("IndexedDB no disponible.");
  request.onsuccess = e => db = e.target.result;
  request.onupgradeneeded = e => {
    db = e.target.result;
    if (!db.objectStoreNames.contains("registros"))
      db.createObjectStore("registros", { keyPath: "id", autoIncrement: true });
  };

  document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    const data = {};
    new FormData(e.target).forEach((v, k) => {
      if (data[k]) {
        if (!Array.isArray(data[k])) data[k] = [data[k]];
        data[k].push(v);
      } else data[k] = v;
    });
    const tx = db.transaction("registros", "readwrite").objectStore("registros").add(data);
    tx.onsuccess = () => {
      alert("✅ Registro guardado.");
      e.target.reset();
    };
  });

  document.getElementById("exportarJSON").addEventListener("click", () => {
    const tx = db.transaction("registros", "readonly").objectStore("registros").getAll();
    tx.onsuccess = () => {
      const blob = new Blob([JSON.stringify(tx.result, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "registros_encuesta.json";
      a.click();
      URL.revokeObjectURL(url);
    };
  });
});