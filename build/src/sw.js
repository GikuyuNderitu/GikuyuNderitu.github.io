const CACHE_NAME = 'Cache_v1'
addEventListener('install', e => {
    console.log('Installed service worker.');

    e.waitUntil(
        caches.open(CACHE_NAME)
        .then( cache => 
            cache.addAll(["/"])
        ).then(() => self.skipWaiting())
    )
})

addEventListener('push', e => {
    console.log(e);
})