const CACHE_NAME = "amile-cache-v1";
const urlsToCache = [
  "/Amile/",
  "/Amile/index.html",
  "/Amile/static/js/main.js",
  "/Amile/static/css/main.css",
  "/Amile/manifest.json",
  "/Amile/favicon.ico",
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});