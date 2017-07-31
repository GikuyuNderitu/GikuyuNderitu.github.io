const CACHE_VERSION = 'v1.0'
const CACHE_ITEMS = [
    'index.html',
    'assets/css/main.css',
    
]

this.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_VERSION)
        .then( cache => {
            return cache.addAll(CACHE_ITEMS)
        })
    )
})