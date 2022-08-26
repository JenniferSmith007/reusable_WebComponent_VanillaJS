// import { precacheAndRoute } from 'workbox-precaching'
// import {offlineFallback} from 'workbox-recipes';
// import {setDefaultHandler} from 'workbox-routing';
// import {NetworkOnly} from 'workbox-strategies';
// import {staticResourceCache} from 'workbox-recipes';
// import {imageCache} from 'workbox-recipes';

// const pageFallback = 'offline.html';
// precacheAndRoute(pageFallback)

// setDefaultHandler(new NetworkOnly());
// offlineFallback();
// staticResourceCache();
// imageCache();

// self.addEventListener('message', (event) => {
//     if (event.data && event.data.type === 'SKIP_WAITING')
//       self.skipWaiting()
//   })
  

// self.addEventListener("install", (e) => {
//   e.preventDefault()
//   console.log('installed')
// })
// self.addEventListener("activate", (e) => {
//   e.preventDefault()
//   console.log('sw acti')
// })





// Choose a cache name
const cacheName = 'cache-v1';
// List the files to precache
const precacheResources = ["/", '/index.html',"/style/style.js", "main.js", "offline.html" ];

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener('install', (event) => {
  
  console.log('Service worker install event!');
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});
console.log('this isslef', self)
self.addEventListener('activate', (event) => {
  console.log('Service worker activate event!');
  
});

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener('fetch', (event) => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    }),
    
  );
});
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
      self.skipWaiting();
}
});