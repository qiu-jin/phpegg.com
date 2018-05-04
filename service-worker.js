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

var precacheConfig = [["/2017/10/10/index/index.html","bcf5674d45fbd557c314b49c1b5e1526"],["/archives/2017/10/index.html","d43672cadd3f8a6eebee104d17476624"],["/archives/2017/index.html","d43672cadd3f8a6eebee104d17476624"],["/archives/index.html","d43672cadd3f8a6eebee104d17476624"],["/css/index.css","2dafe771dfa6bd7dc482a54f936495a6"],["/css/page.css","8a3c578ef817eab6b98fa09e6ae1fade"],["/css/search.css","0c862a31bc30e397ce15ba989a8ce2ff"],["/doc/app-custom.html","46a45b8e51b47925af49f1241eea9c1c"],["/doc/app-grpc.html","4fcb0f8e71a1364b7a1c26ba10bf871a"],["/doc/app-inline.html","191f21bb2660bcd51aff5106a170a61b"],["/doc/app-jsonrpc.html","c22d39840f8387d30036977b994b8ef2"],["/doc/app-micro.html","b31a8c707880f0d68cea1ca838c532cd"],["/doc/app-none.html","bb941cabdf3223900cd8aa5a9e929c4a"],["/doc/app-rest.html","f9bfd78da554e2357eb11e92f4fc74f5"],["/doc/app-standard.html","55acdbc4702afd7777d016436b1f619a"],["/doc/app.html","3f7e488acc7d3390b90c66eb6e817b52"],["/doc/config.html","af0233d06dbf543d2db82df8236e8ee3"],["/doc/container.html","18a1465d40bc0845185db8153704d3e9"],["/doc/db-join-query.html","1175be87006a311cb6358ec32b820861"],["/doc/db-query.html","0ec0c903e2ee30541b8611d0351fc021"],["/doc/db-sample.html","181b51e304dc7d47e925914cc0197e0a"],["/doc/db.html","7822fc726ec47f9e46e69df8f09c008a"],["/doc/driver-cache.html","a1a9a063f7ac1e36d987ca73a4c93046"],["/doc/driver-email.html","a1c610458e7fe9d21f2b5d6e545e8111"],["/doc/driver-more.html","23a88a0652388da5b3ff16e61832bc97"],["/doc/driver-other.html","d2c028b2f601dc989698340d409c11cd"],["/doc/driver-rpc.html","4a966bf277d4cda1c698c62f7a2f5679"],["/doc/driver-sms.html","17e19230031f29d1f2c8592893386cdf"],["/doc/driver-storage.html","e4eda44c8bc8fa64cc4dd641dff41fb8"],["/doc/error.html","89ea86dfbde2714e3c52be70be4def40"],["/doc/function.html","cee4166e9f0bd8c6f914fffe00f4190b"],["/doc/hook.html","323bfe47497ff189e556a30eb6df1816"],["/doc/http-client.html","d656d74ebf01f32cfc58c26bfcbd01d1"],["/doc/http-cookie-session.html","c2cd8ed891fc27defbbfa150f8e95073"],["/doc/http-more.html","0e7fc549f76cca0a7226d1105ddcc493"],["/doc/http-request.html","3e9a1ee7c0bc7504c872200fb68f2e3f"],["/doc/http-response.html","a32180c3abf433045ad897efc94101b3"],["/doc/index.html","ce57145adb418ec1b91657f183c33def"],["/doc/installation.html","e656b624ca76515679bb36b286b23267"],["/doc/loader.html","c2a4951416eb059a8ca26f480122a8e7"],["/doc/logger.html","1869c77c2bd70e0158d8e2bca7c569dc"],["/doc/quickstart.html","61e4542659e6400881c6a4c89cf492a9"],["/doc/router.html","42b02d02dd71315ba6e268d97dc22df0"],["/doc/structure.html","5a193105254dea9c1cfd1dc17be9b8b2"],["/doc/template.html","5ae6c4d718104a81b551d0d03a2cfd0f"],["/doc/validator.html","b744084306376f19b82517f0ace014e4"],["/doc/view.html","4fdda7387f9474ba315dd97cf5cc068c"],["/fonts/Dosis/Dosis-Medium.ttf","1a7809b30cc0cb7fc96feb3cad2eefb7"],["/fonts/Roboto_Mono/RobotoMono-Regular.ttf","a48ac41620cd818c5020d0f4302489ff"],["/fonts/Source_Sans_Pro/SourceSansPro-Light.ttf","b2e90cc01cdd1e2e6f214d5cb2ae5c26"],["/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf","ba6cad25afe01d394e830f548a7f94df"],["/fonts/Source_Sans_Pro/SourceSansPro-Semibold.ttf","52984b3a4e09652a6feee711d5c169fd"],["/images/check.png","1ab55a9d7d368f9e185314b4ee3e108a"],["/images/custom_app_page.png","5c25a06aa0bf44d8bad805396a8a1e7c"],["/images/down.png","39cee69a29f44c5ae8acacf0c7c0c9fe"],["/images/feed.png","fc48422363785bd7645699a57c9c9660"],["/images/icons.png","24c9ea5274c732f8ec0ee13fb2361313"],["/images/menu.png","f97c6cafce76896f725f56d22c33dc5d"],["/images/search.png","57bde6918157195ab105e3c5d0967dec"],["/index.html","d5e78430a88135cd028965e9e973c6c8"],["/js/common.js","a9f854dd98980215b2892dc9db952115"],["/js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["/js/smooth-scroll.min.js","53a7fcc785e987d5ed08302f36de6653"],["/js/vue.js","037d997219804a79cea6540312fc8e0a"],["/js/vue.min.js","da0a22604cc8026ba840a75719362727"]];
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







