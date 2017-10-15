/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2017/10/10/index/index.html","bcf5674d45fbd557c314b49c1b5e1526"],["/archives/2017/10/index.html","cbfc8b689898788f6c8d070874ec9076"],["/archives/2017/index.html","cbfc8b689898788f6c8d070874ec9076"],["/archives/index.html","cbfc8b689898788f6c8d070874ec9076"],["/css/index.css","2dafe771dfa6bd7dc482a54f936495a6"],["/css/page.css","8a3c578ef817eab6b98fa09e6ae1fade"],["/css/search.css","0c862a31bc30e397ce15ba989a8ce2ff"],["/doc/app-custom.html","ad864dd5d1bf9d7f8a236db4dfe31cb7"],["/doc/app-grpc.html","ec99b3c4243faf2a4a1a9b489e80acd5"],["/doc/app-inline.html","cf223ab144ad16503fa65ba680f20b45"],["/doc/app-jsonrpc.html","02e1bda70d5fc263519a7524cf220a3b"],["/doc/app-micro.html","00b5eea0fc5beb3f3862bee7a1ee01b2"],["/doc/app-none.html","497095731980408810991dc961857a0b"],["/doc/app-rest.html","51baa770da2bcf9e22df43362c51ffa3"],["/doc/app-standard.html","172c9dc492620851b5ce9ef1ffb32c81"],["/doc/app.html","773344664241eaa5c8b2b6a01dc3b676"],["/doc/config.html","940b6d7517b9d58d1c9e20fa37b40996"],["/doc/container.html","43e50524eee290467faa1ce68cd19d9b"],["/doc/db-join-query.html","3e1a470a4914ae334906e80f1866b61f"],["/doc/db-query.html","4116134b6209c65f0d8b22252db8ddb8"],["/doc/db.html","c6fe4235386a7c093f6496b85e694ba9"],["/doc/driver-cache.html","d6d92fcc1c0ea29ea92b66ae0ca5ace2"],["/doc/driver-email.html","9e0989f274379b6b00599b47825339b9"],["/doc/driver-other.html","a5a63b8c889b868eec07cdd98d974964"],["/doc/driver-rpc.html","2aa172ae999d9384abf57fa2952361f2"],["/doc/driver-sms.html","d5c5c9ede0c243fdeacb809fde7ee470"],["/doc/driver-storage.html","67434424d18b19f6d621b97b289d3d69"],["/doc/error.html","2be85690e828e8fdd994051c262de737"],["/doc/function.html","747745fa2b4bbb5437a94b2c5e65478f"],["/doc/hook.html","a91dff2c872ac611b7d352a055ba57d1"],["/doc/http-client.html","972ff7f6da8b9d67127decd093017a0e"],["/doc/http-cookie-session.html","6705c2e7139da835b4bd0d7e92eb7bbb"],["/doc/http-request.html","72feeb50276c8c348499ac01c6ddb745"],["/doc/http-response.html","e3c3116ff77e3c937ec338e3563be78c"],["/doc/index.html","10e0ecbbece50e21395095397a1a5482"],["/doc/installation.html","b642fa1fe5b6018f7df08c426f1c7f16"],["/doc/loader.html","31dbd28f39069647e6308358882f49c5"],["/doc/logger.html","51b57b25138c09422837cfee44646d33"],["/doc/quickstart.html","6a58e5161952b0ffd2bcdbb0070e481d"],["/doc/router.html","8ffb8b589ef2e002de237fce8e8f67d3"],["/doc/structure.html","a69eea491e50e0393dec8116015799ef"],["/doc/template.html","8b6e52a87d56457a6461d72a60f25518"],["/doc/validator.html","262f47adbcd75f8afe714c9d5d499611"],["/doc/view.html","bd03f74080551845579c5dfa9423065a"],["/fonts/Dosis/Dosis-Medium.ttf","1a7809b30cc0cb7fc96feb3cad2eefb7"],["/fonts/Roboto_Mono/RobotoMono-Regular.ttf","a48ac41620cd818c5020d0f4302489ff"],["/fonts/Source_Sans_Pro/SourceSansPro-Light.ttf","b2e90cc01cdd1e2e6f214d5cb2ae5c26"],["/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf","ba6cad25afe01d394e830f548a7f94df"],["/fonts/Source_Sans_Pro/SourceSansPro-Semibold.ttf","52984b3a4e09652a6feee711d5c169fd"],["/images/check.png","1ab55a9d7d368f9e185314b4ee3e108a"],["/images/custom_app_page.png","5c25a06aa0bf44d8bad805396a8a1e7c"],["/images/down.png","39cee69a29f44c5ae8acacf0c7c0c9fe"],["/images/feed.png","fc48422363785bd7645699a57c9c9660"],["/images/icons.png","24c9ea5274c732f8ec0ee13fb2361313"],["/images/menu.png","f97c6cafce76896f725f56d22c33dc5d"],["/images/search.png","57bde6918157195ab105e3c5d0967dec"],["/index.html","26df73c575caf510e11cac2906c0a3d4"],["/js/common.js","a9f854dd98980215b2892dc9db952115"],["/js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["/js/smooth-scroll.min.js","53a7fcc785e987d5ed08302f36de6653"],["/js/vue.js","037d997219804a79cea6540312fc8e0a"],["/js/vue.min.js","da0a22604cc8026ba840a75719362727"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







