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

var precacheConfig = [["/2017/10/10/index/index.html","bcf5674d45fbd557c314b49c1b5e1526"],["/archives/2017/10/index.html","d43672cadd3f8a6eebee104d17476624"],["/archives/2017/index.html","d43672cadd3f8a6eebee104d17476624"],["/archives/index.html","d43672cadd3f8a6eebee104d17476624"],["/css/index.css","2dafe771dfa6bd7dc482a54f936495a6"],["/css/page.css","8a3c578ef817eab6b98fa09e6ae1fade"],["/css/search.css","0c862a31bc30e397ce15ba989a8ce2ff"],["/doc/app-custom.html","472e46a1e143eb3464f2e065149f4aa9"],["/doc/app-grpc.html","9764a4800a306f13295565ffc0366ea0"],["/doc/app-inline.html","2017c0c98a1b1f5e6cac937dfc6f8553"],["/doc/app-jsonrpc.html","b986b50d6a256e0dfcd6032036e168cb"],["/doc/app-micro.html","601cce66e0127daf724a6870eff1fdaa"],["/doc/app-none.html","a862c332488ef1f959dc36e3df1e5148"],["/doc/app-rest.html","235fec8b481eac7f6d264f6eef8bbab9"],["/doc/app-standard.html","7dac1a95439e407e0af3735b62593851"],["/doc/app.html","4307cd9cb2617faa929881d4badf36cf"],["/doc/config.html","f6997c98d217f52ab9f2502eb64d3546"],["/doc/container.html","60059fd31ff01140c28b2bd1eec5eafb"],["/doc/db-join-query.html","808c2490ee271042ce433ae850831c52"],["/doc/db-query.html","76c009dbef36f2c66e61b2d39030401b"],["/doc/db-sample.html","ad3baf1cef8e95052654cdbd91102798"],["/doc/db.html","7009b6712d0ae37f8398289b4b9ace5e"],["/doc/driver-cache.html","4081dee2ac742a52041495df9f181975"],["/doc/driver-email.html","050eac8db6fc3cffec0c330dfae283e7"],["/doc/driver-more.html","a143982c376a4c09ce478c85cff605aa"],["/doc/driver-other.html","d2c028b2f601dc989698340d409c11cd"],["/doc/driver-rpc.html","6e65c1332bd285567f9a096ff364f3d0"],["/doc/driver-sms.html","776ec9453be90cdacad4f0c88c5f449f"],["/doc/driver-storage.html","b03b2df79bf3954cab7a393831a72446"],["/doc/error.html","82c89c2a42cbf5e129c72f3ff1b5c211"],["/doc/function.html","4d833c6a5f1b57e2f8de0bdf17a12eba"],["/doc/hook.html","92a89c3d860ff646e875a6ea34af7b8e"],["/doc/http-client.html","8bb05b3e3c14b514def7b5d9adce61dd"],["/doc/http-cookie-session.html","82eb29ec08d5230167958f33627f027f"],["/doc/http-more.html","13554ee29cc367c098c705bb3e8766b5"],["/doc/http-request.html","7f4b1bda2a75b3e7986979d136769b70"],["/doc/http-response.html","09b9918bde07c35462beba69b6a12fb0"],["/doc/index.html","00de932cb30e7c73826dc09ad8f28da4"],["/doc/installation.html","10a035606caa28fdc04dd07e008b2e04"],["/doc/loader.html","bea8e370161dfafebb186d40ab0b2b9e"],["/doc/logger.html","d3f107211727b37e5142a4cc896e2e4c"],["/doc/quickstart.html","cf47b64ea1cedbe6929c2211a7ecbf3a"],["/doc/router.html","01a59b56e8a44f9fa9b1d73b5343265e"],["/doc/structure.html","df9a8762eb469c688c2b83e7f591958c"],["/doc/template.html","3574cc78a3e17ac58ee0b728ad7bb6b6"],["/doc/validator.html","442d8fa4fcf3b87b656fa56c3ea9f716"],["/doc/view.html","b9c51866a5997c75ea9e61f66cbafc14"],["/fonts/Dosis/Dosis-Medium.ttf","1a7809b30cc0cb7fc96feb3cad2eefb7"],["/fonts/Roboto_Mono/RobotoMono-Regular.ttf","a48ac41620cd818c5020d0f4302489ff"],["/fonts/Source_Sans_Pro/SourceSansPro-Light.ttf","b2e90cc01cdd1e2e6f214d5cb2ae5c26"],["/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf","ba6cad25afe01d394e830f548a7f94df"],["/fonts/Source_Sans_Pro/SourceSansPro-Semibold.ttf","52984b3a4e09652a6feee711d5c169fd"],["/images/check.png","1ab55a9d7d368f9e185314b4ee3e108a"],["/images/custom_app_page.png","5c25a06aa0bf44d8bad805396a8a1e7c"],["/images/down.png","39cee69a29f44c5ae8acacf0c7c0c9fe"],["/images/feed.png","fc48422363785bd7645699a57c9c9660"],["/images/icons.png","24c9ea5274c732f8ec0ee13fb2361313"],["/images/menu.png","f97c6cafce76896f725f56d22c33dc5d"],["/images/search.png","57bde6918157195ab105e3c5d0967dec"],["/index.html","d5e78430a88135cd028965e9e973c6c8"],["/js/common.js","a9f854dd98980215b2892dc9db952115"],["/js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["/js/smooth-scroll.min.js","53a7fcc785e987d5ed08302f36de6653"],["/js/vue.js","037d997219804a79cea6540312fc8e0a"],["/js/vue.min.js","da0a22604cc8026ba840a75719362727"]];
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







