self.addEventListener('install', e=>{
  e.waitUntil(caches.open('gudang-v1').then(c=>c.addAll([
    './',
    './index.html',
    './style.css',
    './manifest.json',
    './icon-192.png',
    './icon-512.png'
  ])));
  self.skipWaiting();
});
