'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f93c8856715aab21a424695a3404e28b",
"version.json": "2d98eb97cb64212b4126057c0dbaa8cc",
"splash/img/light-2x.png": "6ed55266c4f0e961d393294bff5ca0d6",
"splash/img/dark-4x.png": "1972407304ff5365e6c5bc2b6257432c",
"splash/img/light-3x.png": "f2e95a79339f032fe45238bdb3818b5f",
"splash/img/dark-3x.png": "f2e95a79339f032fe45238bdb3818b5f",
"splash/img/light-4x.png": "1972407304ff5365e6c5bc2b6257432c",
"splash/img/dark-2x.png": "6ed55266c4f0e961d393294bff5ca0d6",
"splash/img/dark-1x.png": "46e4cda622830ff51e20b02981c4053b",
"splash/img/light-1x.png": "46e4cda622830ff51e20b02981c4053b",
"splash/style.css": "64227ec06c71fef909f75868ada72c30",
"index.html": "149597fbb762dd3a20a78dace0df817c",
"/": "149597fbb762dd3a20a78dace0df817c",
"main.dart.js": "f69b61d86ebbe327377e01a6b7b86c87",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5d86762be660cff27012811126724b8c",
"assets/AssetManifest.json": "bfe14f9f3ba6221827dd4b6698e7f242",
"assets/NOTICES": "9edd205b42f2d605e3056edc772e3bf0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b76b35ebdbfe98c81d20331a0b848b19",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "01002c5a16d6f81c1f02fc4bc674c10a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/wait.json": "3f6082ff8abf1ba7447007846e66aa11",
"assets/assets/upload.json": "98eaf55c0739fed7c078b803e7adc01d",
"assets/assets/8.png": "a0cdb19aa2dd500768f9ed27de95f9aa",
"assets/assets/9.png": "0610672d03cc37079964fc7d0c1262df",
"assets/assets/ChargeRevenuFixe.json": "f2e86b26513c6d21f8f41f45de51dd6d",
"assets/assets/deux.png": "e88c95fc6196b76ddf0079a7f02ab554",
"assets/assets/divider.png": "2d19b3fd77f1dfd2a0cc83677d4e9172",
"assets/assets/hight.json": "09a9bd3b2f81c0dec2927a19d6b9e626",
"assets/assets/bankOut.json": "5c1ee261ec1efad3374fdddfe4bb80c0",
"assets/assets/challenge.json": "a9007d09db7278f7bbd97c487d821a1b",
"assets/assets/11.png": "ef1e6c05432af51e9172b8f9efab9ce4",
"assets/assets/10.png": "589f6e37430847c506561b7f63d58567",
"assets/assets/logo1.png": "5894d9cb2db6f632f90541c4b6df5f00",
"assets/assets/logo.png": "d3f1489383cffa0f2477768560853e65",
"assets/assets/trash.json": "c240d1e151f4fd73116cd9662870018f",
"assets/assets/picture.json": "d88d4bd398457632d1c5a09a0f0e6c49",
"assets/assets/7.png": "8fc8bfeaa168841dca932d96feb46959",
"assets/assets/6.png": "2938c348efb0d3a9666fbf2d09bffeff",
"assets/assets/2.png": "1f36d90cab10b705bc04023d8f9ac36c",
"assets/assets/3.png": "545505fbbe6b6177d9439dcce5b72b4f",
"assets/assets/1.png": "81fc06e9a4a5724d6d2b204f3e356b4c",
"assets/assets/photo.json": "d6273a9a081dae72772ee7f9d9fc9ef9",
"assets/assets/low.json": "cfd7ff75800a7ac7bd9872a8ee82cef1",
"assets/assets/un.png": "987b4527852ddabf58ca8fc944de53d0",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
