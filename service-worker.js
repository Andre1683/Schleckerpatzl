const CACHE_NAME = 'schleckerpatzl-app-cache-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/bilder/slide1.jpg',
  '/bilder/slide2.jpg',
  '/bilder/slide3.jpg',
  '/bilder/slide4.jpg',
  // weitere Assets
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
  );
});