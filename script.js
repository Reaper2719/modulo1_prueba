
document.addEventListener("DOMContentLoaded", () => {
  let db;
  const request = indexedDB.open("Modulo1DB", 1);

  request.onerror = () => console.error("No se pudo abrir la base de datos");
  request.onsuccess = (event) => db = event.target.result;

  request.onupgradeneeded = (event) => {
    db = event.target.result;
    if (!db.objectStoreNames.contains("registros")) {
      db.createObjectStore("registros", { keyPath: "id", autoIncrement: true });
    }
  };

  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {};
    new FormData(form).forEach((value, key) => data[key] = value);

    const tx = db.transaction("registros", "readwrite");
    const store = tx.objectStore("registros");
    store.add(data);
    tx.oncomplete = () => {
      alert("✅ Registro guardado.");
      form.reset();
    };
  });

  const exportBtn = document.getElementById("exportarJSON");
  exportBtn.addEventListener("click", () => {
    const tx = db.transaction("registros", "readonly");
    const store = tx.objectStore("registros");
    const req = store.getAll();
    req.onsuccess = () => {
      const blob = new Blob([JSON.stringify(req.result, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "modulo1_registros.json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };
  });
});
