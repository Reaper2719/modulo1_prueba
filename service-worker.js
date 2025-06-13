self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("modulo1-cache").then((cache) =>
      cache.addAll(["index.html", "style.css", "main.js", "indexedDB.js", "export.js"])
    )
  );
});
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
