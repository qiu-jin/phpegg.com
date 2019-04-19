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

var precacheConfig = [["/2017/10/10/index/index.html","bcf5674d45fbd557c314b49c1b5e1526"],["/archives/2017/10/index.html","7aa9d7f41bc4f0b0a80a5eb70d0f7ecc"],["/archives/2017/index.html","7aa9d7f41bc4f0b0a80a5eb70d0f7ecc"],["/archives/index.html","7aa9d7f41bc4f0b0a80a5eb70d0f7ecc"],["/css/index.css","2dafe771dfa6bd7dc482a54f936495a6"],["/css/page.css","8a3c578ef817eab6b98fa09e6ae1fade"],["/css/search.css","0c862a31bc30e397ce15ba989a8ce2ff"],["/doc/app-cli.html","7958f92fb62463f45162a3aeaad13872"],["/doc/app-custom.html","777de4d11b37ba353982ccbae6860c42"],["/doc/app-grpc.html","98165ba33aed5cdec7b24755c24062a8"],["/doc/app-inline.html","d135445a5aebae5fff0bbb9bf5e870b2"],["/doc/app-jsonrpc.html","3cd26a4c3c2e4caceb314c1d912b3366"],["/doc/app-micro.html","5d97107d46ee3aacfe8423c4f851fe8e"],["/doc/app-none.html","edf3c130b2ce4828b1e05a8ded38784c"],["/doc/app-rest.html","1895c4a5eb038b5222680afcdf1adc6a"],["/doc/app-standard.html","b715b4c7a284c01e5ebbeb57c8992595"],["/doc/app.html","99b6ad08d6a48de1dfc8b023189da3ce"],["/doc/config.html","26ac3cac22d05cab9998de1bc42c1259"],["/doc/container.html","9e8b8adeb6dbcf4a8e0dd3c7e3e86232"],["/doc/db-join-query.html","b36813333008faf5c194c76032bff9ad"],["/doc/db-query.html","a307350a2a2ef90f2965dcff90cdac5a"],["/doc/db-sample.html","e273103fd5e217c264ed230d39e4aa00"],["/doc/db.html","ea83ac0a724b79cdf0c1fc45481b4afc"],["/doc/driver-cache.html","3dd7b40dd9b7b4ee3ae8da929aa81e2c"],["/doc/driver-email.html","5c7734939036ec54d0d805774e8f4c6e"],["/doc/driver-more.html","4dda845761e546aae27dae9667ede2c4"],["/doc/driver-other.html","d2c028b2f601dc989698340d409c11cd"],["/doc/driver-rpc.html","b4435c61d031ebc7769404e61733264e"],["/doc/driver-sms.html","bb8244226dc8c65818946cf4f7b4c9b1"],["/doc/driver-storage.html","a3785f2b2dbdfd3be76b54c3115b5412"],["/doc/error.html","8195e67c2f0580771811967d7e25ed5a"],["/doc/event.html","121fbe0caf91f320de0050750908ddd6"],["/doc/function.html","a2dde5ad65aac49b7379321adafb89e9"],["/doc/hook.html","323bfe47497ff189e556a30eb6df1816"],["/doc/http-client.html","be69c964466f3199ad3b86200d6488b7"],["/doc/http-cookie-session.html","dda814e83e6898cec4663966027a1267"],["/doc/http-more.html","b13bc940e9053f54719e3ee19362f088"],["/doc/http-request.html","c067b61a8b9f5cf5c53f54d273a804da"],["/doc/http-response.html","2788b3cb7412fcd59dd7e862b49e0110"],["/doc/index.html","f0ede2ab636706ff93ba064e13f0e6f3"],["/doc/installation.html","75e501c6456198d3d07654c15c7246b4"],["/doc/loader.html","679c89fb038685592d192ebc7fd8e858"],["/doc/logger.html","d5fa5118438024947a34958dc8f9c09d"],["/doc/quickstart.html","46bb77d3d49eb5224cc798de2a52e215"],["/doc/router.html","c0bb61b918b03adbc452ef95d7bb7ec3"],["/doc/structure.html","38a880e2ad078bb2915257ca147c3de5"],["/doc/template.html","a4ab3a4d66fa9adb62316017e2ceb3dd"],["/doc/validator.html","32f59d87c71bbd291d07f2c8ea190555"],["/doc/view.html","67a5c6f99f5b4ac26a9b3ecf6f1cbc77"],["/fonts/Dosis/Dosis-Medium.ttf","1a7809b30cc0cb7fc96feb3cad2eefb7"],["/fonts/Roboto_Mono/RobotoMono-Regular.ttf","a48ac41620cd818c5020d0f4302489ff"],["/fonts/Source_Sans_Pro/SourceSansPro-Light.ttf","b2e90cc01cdd1e2e6f214d5cb2ae5c26"],["/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf","ba6cad25afe01d394e830f548a7f94df"],["/fonts/Source_Sans_Pro/SourceSansPro-Semibold.ttf","52984b3a4e09652a6feee711d5c169fd"],["/images/check.png","1ab55a9d7d368f9e185314b4ee3e108a"],["/images/custom_app_page.png","5c25a06aa0bf44d8bad805396a8a1e7c"],["/images/down.png","39cee69a29f44c5ae8acacf0c7c0c9fe"],["/images/feed.png","fc48422363785bd7645699a57c9c9660"],["/images/icons.png","24c9ea5274c732f8ec0ee13fb2361313"],["/images/menu.png","f97c6cafce76896f725f56d22c33dc5d"],["/images/search.png","57bde6918157195ab105e3c5d0967dec"],["/index.html","5840cac98aa4a5945200085944ceea9b"],["/js/common.js","a9f854dd98980215b2892dc9db952115"],["/js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["/js/smooth-scroll.min.js","53a7fcc785e987d5ed08302f36de6653"],["/js/vue.js","037d997219804a79cea6540312fc8e0a"],["/js/vue.min.js","da0a22604cc8026ba840a75719362727"]];
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







