self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('calculator-static-v1').then(function (cache) {
      return cache.addAll([
        '/logo.png',
        '/index.html',
        '/manifest.json',
        
        
      ]);
    }),
  );
});