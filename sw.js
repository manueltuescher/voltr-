// NEUER SERVICE WORKER (Network First & Cache Cleaner)
self.addEventListener('install', (e) => {
    self.skipWaiting(); // Zwingt den Browser, den neuen SW sofort zu nutzen
});

self.addEventListener('activate', (e) => {
    // Löscht gnadenlos alle alten Caches auf den Handys deiner Nutzer!
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => caches.delete(key)));
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (e) => {
    // Lade ab sofort IMMER direkt aus dem Internet (Network-First)
    e.respondWith(fetch(e.request));
});