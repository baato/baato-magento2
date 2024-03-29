(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if(typeof define === 'function' && define.amd)
        define("Baato", [], factory);
    else if(typeof exports === 'object')
        exports["Baato"] = factory();
    else
        root["Baato"] = factory();
})(this, function() {
    return /******/ (function(modules) { // webpackBootstrap
        /******/ 	// The module cache
        /******/ 	var installedModules = {};
        /******/
        /******/ 	// The require function
        /******/ 	function __webpack_require__(moduleId) {
            /******/
            /******/ 		// Check if module is in cache
            /******/ 		if(installedModules[moduleId]) {
                /******/ 			return installedModules[moduleId].exports;
                /******/ 		}
            /******/ 		// Create a new module (and put it into the cache)
            /******/ 		var module = installedModules[moduleId] = {
                /******/ 			i: moduleId,
                /******/ 			l: false,
                /******/ 			exports: {}
                /******/ 		};
            /******/
            /******/ 		// Execute the module function
            /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ 		// Flag the module as loaded
            /******/ 		module.l = true;
            /******/
            /******/ 		// Return the exports of the module
            /******/ 		return module.exports;
            /******/ 	}
        /******/
        /******/
        /******/ 	// expose the modules object (__webpack_modules__)
        /******/ 	__webpack_require__.m = modules;
        /******/
        /******/ 	// expose the module cache
        /******/ 	__webpack_require__.c = installedModules;
        /******/
        /******/ 	// identity function for calling harmony imports with the correct context
        /******/ 	__webpack_require__.i = function(value) { return value; };
        /******/
        /******/ 	// define getter function for harmony exports
        /******/ 	__webpack_require__.d = function(exports, name, getter) {
            /******/ 		if(!__webpack_require__.o(exports, name)) {
                /******/ 			Object.defineProperty(exports, name, {
                    /******/ 				configurable: false,
                    /******/ 				enumerable: true,
                    /******/ 				get: getter
                    /******/ 			});
                /******/ 		}
            /******/ 	};
        /******/
        /******/ 	// getDefaultExport function for compatibility with non-harmony modules
        /******/ 	__webpack_require__.n = function(module) {
            /******/ 		var getter = module && module.__esModule ?
                /******/ 			function getDefault() { return module['default']; } :
                /******/ 			function getModuleExports() { return module; };
            /******/ 		__webpack_require__.d(getter, 'a', getter);
            /******/ 		return getter;
            /******/ 	};
        /******/
        /******/ 	// Object.prototype.hasOwnProperty.call
        /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
        /******/
        /******/ 	// __webpack_public_path__
        /******/ 	__webpack_require__.p = "";
        /******/
        /******/ 	// Load entry module and return exports
        /******/ 	return __webpack_require__(__webpack_require__.s = 32);
        /******/ })
        /************************************************************************/
        /******/ ([
            /* 0 */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                var bind = __webpack_require__(9);

                /*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

                var toString = Object.prototype.toString;

                /**
                 * Determine if a value is an Array
                 *
                 * @param {Object} val The value to test
                 * @returns {boolean} True if value is an Array, otherwise false
                 */
                function isArray(val) {
                    return toString.call(val) === '[object Array]';
                }

                /**
                 * Determine if a value is undefined
                 *
                 * @param {Object} val The value to test
                 * @returns {boolean} True if the value is undefined, otherwise false
                 */
                function isUndefined(val) {
                    return typeof val === 'undefined';
                }

                /**
                 * Determine if a value is a Buffer
                 *
                 * @param {Object} val The value to test
                 * @returns {boolean} True if value is a Buffer, otherwise false
                 */
                function isBuffer(val) {
                    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
                        && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
                }

                /**
                 * Determine if a value is an ArrayBuffer
                 *
                 * @param {Object} val The value to test
                 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
                 */
                function isArrayBuffer(val) {
                    return toString.call(val) === '[object ArrayBuffer]';
                }

                /**
                 * Determine if a value is a FormData
                 *
                 * @param {Object} val The value to test
                 * @returns {boolean} True if value is an FormData, otherwise false
                 */
                function isFormData(val) {
                    return (typeof FormData !== 'undefined') && (val instanceof FormData);
                }

                /**
                 * Determine if a value is a view on an ArrayBuffer
                 *
                 * @param {Object} val The value to test
                 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
                 */
                function isArrayBufferView(val) {
                    var result;
                    if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
                        result = ArrayBuffer.isView(val);
                    } else {
                        result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
                    }
                    return result;
                }

                /**
                 * Determine if a value is a String
                 *
                 * @param {Object} val The value to test
                 * @returns {boolean} True if value is a String, otherwise false
                 */
                function isString(val) {
                    return typeof val === 'string';
                }

                /**
                 * Determine if a value is a Number
                 *
                 * @param {Object} val The value to test
                 * @returns {boolean} True if value is a Number, otherwise false
                 */
                function isNumber(val) {
                    return typeof val === 'number';
                }

                /**
                 * Determine if a value is an Object
                 *
                 * @param {Object} val The value to test
                 * @returns {boolean} True if value is an Object, otherwise false
                 */
                function isObject(val) {
                    return val !== null && typeof val === 'object';
                }

                /**
                 * Determine if a value is a Date
                 *
                 * @param {Object} val The value to test
                 * @returns {boolean} True if value is a Date, otherwise false
                 */
                function isDate(val) {
                    return toString.call(val) === '[object Date]';
                }

                /**
                 * Determine if a value is a File
                 *
                 * @param {Object} val The value to test
                 * @returns {boolean} True if value is a File, otherwise false
                 */
                function isFile(val) {
                    return toString.call(val) === '[object File]';
                }

                /**
                 * Determine if a value is a Blob
                 *
                 * @param {Object} val The value to test
                 * @returns {boolean} True if value is a Blob, otherwise false
                 */
                function isBlob(val) {
                    return toString.call(val) === '[object Blob]';
                }

                /**
                 * Determine if a value is a Function
                 *
                 * @param {Object} val The value to test
                 * @returns {boolean} True if value is a Function, otherwise false
                 */
                function isFunction(val) {
                    return toString.call(val) === '[object Function]';
                }

                /**
                 * Determine if a value is a Stream
                 *
                 * @param {Object} val The value to test
                 * @returns {boolean} True if value is a Stream, otherwise false
                 */
                function isStream(val) {
                    return isObject(val) && isFunction(val.pipe);
                }

                /**
                 * Determine if a value is a URLSearchParams object
                 *
                 * @param {Object} val The value to test
                 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
                 */
                function isURLSearchParams(val) {
                    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
                }

                /**
                 * Trim excess whitespace off the beginning and end of a string
                 *
                 * @param {String} str The String to trim
                 * @returns {String} The String freed of excess whitespace
                 */
                function trim(str) {
                    return str.replace(/^\s*/, '').replace(/\s*$/, '');
                }

                /**
                 * Determine if we're running in a standard browser environment
                 *
                 * This allows axios to run in a web worker, and react-native.
                 * Both environments support XMLHttpRequest, but not fully standard globals.
                 *
                 * web workers:
                 *  typeof window -> undefined
                 *  typeof document -> undefined
                 *
                 * react-native:
                 *  navigator.product -> 'ReactNative'
                 * nativescript
                 *  navigator.product -> 'NativeScript' or 'NS'
                 */
                function isStandardBrowserEnv() {
                    if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                        navigator.product === 'NativeScript' ||
                        navigator.product === 'NS')) {
                        return false;
                    }
                    return (
                        typeof window !== 'undefined' &&
                        typeof document !== 'undefined'
                    );
                }

                /**
                 * Iterate over an Array or an Object invoking a function for each item.
                 *
                 * If `obj` is an Array callback will be called passing
                 * the value, index, and complete array for each item.
                 *
                 * If 'obj' is an Object callback will be called passing
                 * the value, key, and complete object for each property.
                 *
                 * @param {Object|Array} obj The object to iterate
                 * @param {Function} fn The callback to invoke for each item
                 */
                function forEach(obj, fn) {
                    // Don't bother if no value provided
                    if (obj === null || typeof obj === 'undefined') {
                        return;
                    }

                    // Force an array if not already something iterable
                    if (typeof obj !== 'object') {
                        /*eslint no-param-reassign:0*/
                        obj = [obj];
                    }

                    if (isArray(obj)) {
                        // Iterate over array values
                        for (var i = 0, l = obj.length; i < l; i++) {
                            fn.call(null, obj[i], i, obj);
                        }
                    } else {
                        // Iterate over object keys
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                                fn.call(null, obj[key], key, obj);
                            }
                        }
                    }
                }

                /**
                 * Accepts varargs expecting each argument to be an object, then
                 * immutably merges the properties of each object and returns result.
                 *
                 * When multiple objects contain the same key the later object in
                 * the arguments list will take precedence.
                 *
                 * Example:
                 *
                 * ```js
                 * var result = merge({foo: 123}, {foo: 456});
                 * console.log(result.foo); // outputs 456
                 * ```
                 *
                 * @param {Object} obj1 Object to merge
                 * @returns {Object} Result of all merge properties
                 */
                function merge(/* obj1, obj2, obj3, ... */) {
                    var result = {};
                    function assignValue(val, key) {
                        if (typeof result[key] === 'object' && typeof val === 'object') {
                            result[key] = merge(result[key], val);
                        } else {
                            result[key] = val;
                        }
                    }

                    for (var i = 0, l = arguments.length; i < l; i++) {
                        forEach(arguments[i], assignValue);
                    }
                    return result;
                }

                /**
                 * Function equal to merge with the difference being that no reference
                 * to original objects is kept.
                 *
                 * @see merge
                 * @param {Object} obj1 Object to merge
                 * @returns {Object} Result of all merge properties
                 */
                function deepMerge(/* obj1, obj2, obj3, ... */) {
                    var result = {};
                    function assignValue(val, key) {
                        if (typeof result[key] === 'object' && typeof val === 'object') {
                            result[key] = deepMerge(result[key], val);
                        } else if (typeof val === 'object') {
                            result[key] = deepMerge({}, val);
                        } else {
                            result[key] = val;
                        }
                    }

                    for (var i = 0, l = arguments.length; i < l; i++) {
                        forEach(arguments[i], assignValue);
                    }
                    return result;
                }

                /**
                 * Extends object a by mutably adding to it the properties of object b.
                 *
                 * @param {Object} a The object to be extended
                 * @param {Object} b The object to copy properties from
                 * @param {Object} thisArg The object to bind function to
                 * @return {Object} The resulting value of object a
                 */
                function extend(a, b, thisArg) {
                    forEach(b, function assignValue(val, key) {
                        if (thisArg && typeof val === 'function') {
                            a[key] = bind(val, thisArg);
                        } else {
                            a[key] = val;
                        }
                    });
                    return a;
                }

                module.exports = {
                    isArray: isArray,
                    isArrayBuffer: isArrayBuffer,
                    isBuffer: isBuffer,
                    isFormData: isFormData,
                    isArrayBufferView: isArrayBufferView,
                    isString: isString,
                    isNumber: isNumber,
                    isObject: isObject,
                    isUndefined: isUndefined,
                    isDate: isDate,
                    isFile: isFile,
                    isBlob: isBlob,
                    isFunction: isFunction,
                    isStream: isStream,
                    isURLSearchParams: isURLSearchParams,
                    isStandardBrowserEnv: isStandardBrowserEnv,
                    forEach: forEach,
                    merge: merge,
                    deepMerge: deepMerge,
                    extend: extend,
                    trim: trim
                };


                /***/ }),
            /* 1 */
            /***/ (function(module, exports, __webpack_require__) {

                module.exports = __webpack_require__(15);

                /***/ }),
            /* 2 */
            /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";

                /* eslint no-bitwise: ["off"] */
                /* eslint no-plusplus: ["off"] */
                class BaatoUtil {
                    decodePath(encoded, is3D) { //eslint-disable-line
                        const len = encoded.length
                        let index = 0
                        const array = []
                        let lat = 0
                        let lng = 0
                        let ele = 0

                        while (index < len) {
                            let b
                            let shift = 0
                            let result = 0
                            do {
                                b = encoded.charCodeAt(index++) - 63
                                result |= (b & 0x1f) << shift
                                shift += 5
                            } while (b >= 0x20)
                            const deltaLat = ((result & 1) ? ~(result >> 1) : (result >> 1))
                            lat += deltaLat

                            shift = 0
                            result = 0
                            do {
                                b = encoded.charCodeAt(index++) - 63
                                result |= (b & 0x1f) << shift
                                shift += 5
                            } while (b >= 0x20)
                            const deltaLon = ((result & 1) ? ~(result >> 1) : (result >> 1))
                            lng += deltaLon

                            if (is3D) {
                                // elevation
                                shift = 0
                                result = 0
                                do {
                                    b = encoded.charCodeAt(index++) - 63
                                    result |= (b & 0x1f) << shift
                                    shift += 5
                                } while (b >= 0x20)
                                const deltaEle = ((result & 1) ? ~(result >> 1) : (result >> 1))
                                ele += deltaEle
                                array.push([lng * 1e-5, lat * 1e-5, ele / 100])
                            } else { array.push([lng * 1e-5, lat * 1e-5]) }
                        }
                        // var end = new Date().getTime();
                        // console.log("decoded " + len + " coordinates in " + ((end - start) / 1000) + "s");
                        return array
                    }

                    getGeoJsonFromEncodedPolyLine(encoded) {
                        return {
                            type: 'LineString',
                            coordinates: this.decodePath(encoded, false),
                        }
                    }

                    getGeoJsonFromSearchResults(searchResults) { //eslint-disable-line

                        const createFeature = item => ({
                            type: 'Feature',
                            properties: {
                                name: item.name,
                                address: item.address,
                                tags: item.tags,
                                classification: item.classification,
                                type: item.type,
                            },
                            geometry: {
                                type: 'Point',
                                coordinates: [
                                    item.centroid.lon,
                                    item.centroid.lat,
                                ],
                            },
                        })

                        const features = searchResults.data.map(result => createFeature(result))


                        return {
                            type: 'FeatureCollection',
                            features,
                        }
                    }
                }


                /* harmony default export */ __webpack_exports__["a"] = (BaatoUtil);


                /***/ }),
            /* 3 */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                var utils = __webpack_require__(0);
                var settle = __webpack_require__(22);
                var buildURL = __webpack_require__(10);
                var buildFullPath = __webpack_require__(19);
                var parseHeaders = __webpack_require__(29);
                var isURLSameOrigin = __webpack_require__(27);
                var createError = __webpack_require__(6);

                module.exports = function xhrAdapter(config) {
                    return new Promise(function dispatchXhrRequest(resolve, reject) {
                        var requestData = config.data;
                        var requestHeaders = config.headers;

                        if (utils.isFormData(requestData)) {
                            delete requestHeaders['Content-Type']; // Let the browser set it
                        }

                        var request = new XMLHttpRequest();

                        // HTTP basic authentication
                        if (config.auth) {
                            var username = config.auth.username || '';
                            var password = config.auth.password || '';
                            requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
                        }

                        var fullPath = buildFullPath(config.baseURL, config.url);
                        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

                        // Set the request timeout in MS
                        request.timeout = config.timeout;

                        // Listen for ready state
                        request.onreadystatechange = function handleLoad() {
                            if (!request || request.readyState !== 4) {
                                return;
                            }

                            // The request errored out and we didn't get a response, this will be
                            // handled by onerror instead
                            // With one exception: request that using file: protocol, most browsers
                            // will return status as 0 even though it's a successful request
                            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                                return;
                            }

                            // Prepare the response
                            var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
                            var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
                            var response = {
                                data: responseData,
                                status: request.status,
                                statusText: request.statusText,
                                headers: responseHeaders,
                                config: config,
                                request: request
                            };

                            settle(resolve, reject, response);

                            // Clean up request
                            request = null;
                        };

                        // Handle browser request cancellation (as opposed to a manual cancellation)
                        request.onabort = function handleAbort() {
                            if (!request) {
                                return;
                            }

                            reject(createError('Request aborted', config, 'ECONNABORTED', request));

                            // Clean up request
                            request = null;
                        };

                        // Handle low level network errors
                        request.onerror = function handleError() {
                            // Real errors are hidden from us by the browser
                            // onerror should only fire if it's a network error
                            reject(createError('Network Error', config, null, request));

                            // Clean up request
                            request = null;
                        };

                        // Handle timeout
                        request.ontimeout = function handleTimeout() {
                            var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
                            if (config.timeoutErrorMessage) {
                                timeoutErrorMessage = config.timeoutErrorMessage;
                            }
                            reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
                                request));

                            // Clean up request
                            request = null;
                        };

                        // Add xsrf header
                        // This is only done if running in a standard browser environment.
                        // Specifically not if we're in a web worker, or react-native.
                        if (utils.isStandardBrowserEnv()) {
                            var cookies = __webpack_require__(25);

                            // Add xsrf header
                            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
                                cookies.read(config.xsrfCookieName) :
                                undefined;

                            if (xsrfValue) {
                                requestHeaders[config.xsrfHeaderName] = xsrfValue;
                            }
                        }

                        // Add headers to the request
                        if ('setRequestHeader' in request) {
                            utils.forEach(requestHeaders, function setRequestHeader(val, key) {
                                if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
                                    // Remove Content-Type if data is undefined
                                    delete requestHeaders[key];
                                } else {
                                    // Otherwise add header to the request
                                    request.setRequestHeader(key, val);
                                }
                            });
                        }

                        // Add withCredentials to request if needed
                        if (!utils.isUndefined(config.withCredentials)) {
                            request.withCredentials = !!config.withCredentials;
                        }

                        // Add responseType to request if needed
                        if (config.responseType) {
                            try {
                                request.responseType = config.responseType;
                            } catch (e) {
                                // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
                                // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
                                if (config.responseType !== 'json') {
                                    throw e;
                                }
                            }
                        }

                        // Handle progress if needed
                        if (typeof config.onDownloadProgress === 'function') {
                            request.addEventListener('progress', config.onDownloadProgress);
                        }

                        // Not all browsers support upload events
                        if (typeof config.onUploadProgress === 'function' && request.upload) {
                            request.upload.addEventListener('progress', config.onUploadProgress);
                        }

                        if (config.cancelToken) {
                            // Handle cancellation
                            config.cancelToken.promise.then(function onCanceled(cancel) {
                                if (!request) {
                                    return;
                                }

                                request.abort();
                                reject(cancel);
                                // Clean up request
                                request = null;
                            });
                        }

                        if (requestData === undefined) {
                            requestData = null;
                        }

                        // Send the request
                        request.send(requestData);
                    });
                };


                /***/ }),
            /* 4 */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                /**
                 * A `Cancel` is an object that is thrown when an operation is canceled.
                 *
                 * @class
                 * @param {string=} message The message.
                 */
                function Cancel(message) {
                    this.message = message;
                }

                Cancel.prototype.toString = function toString() {
                    return 'Cancel' + (this.message ? ': ' + this.message : '');
                };

                Cancel.prototype.__CANCEL__ = true;

                module.exports = Cancel;


                /***/ }),
            /* 5 */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                module.exports = function isCancel(value) {
                    return !!(value && value.__CANCEL__);
                };


                /***/ }),
            /* 6 */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                var enhanceError = __webpack_require__(21);

                /**
                 * Create an Error with the specified message, config, error code, request and response.
                 *
                 * @param {string} message The error message.
                 * @param {Object} config The config.
                 * @param {string} [code] The error code (for example, 'ECONNABORTED').
                 * @param {Object} [request] The request.
                 * @param {Object} [response] The response.
                 * @returns {Error} The created error.
                 */
                module.exports = function createError(message, config, code, request, response) {
                    var error = new Error(message);
                    return enhanceError(error, config, code, request, response);
                };


                /***/ }),
            /* 7 */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                var utils = __webpack_require__(0);

                /**
                 * Config-specific merge-function which creates a new config-object
                 * by merging two configuration objects together.
                 *
                 * @param {Object} config1
                 * @param {Object} config2
                 * @returns {Object} New object resulting from merging config2 to config1
                 */
                module.exports = function mergeConfig(config1, config2) {
                    // eslint-disable-next-line no-param-reassign
                    config2 = config2 || {};
                    var config = {};

                    var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
                    var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
                    var defaultToConfig2Keys = [
                        'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
                        'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
                        'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
                        'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
                        'httpsAgent', 'cancelToken', 'socketPath'
                    ];

                    utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
                        if (typeof config2[prop] !== 'undefined') {
                            config[prop] = config2[prop];
                        }
                    });

                    utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
                        if (utils.isObject(config2[prop])) {
                            config[prop] = utils.deepMerge(config1[prop], config2[prop]);
                        } else if (typeof config2[prop] !== 'undefined') {
                            config[prop] = config2[prop];
                        } else if (utils.isObject(config1[prop])) {
                            config[prop] = utils.deepMerge(config1[prop]);
                        } else if (typeof config1[prop] !== 'undefined') {
                            config[prop] = config1[prop];
                        }
                    });

                    utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
                        if (typeof config2[prop] !== 'undefined') {
                            config[prop] = config2[prop];
                        } else if (typeof config1[prop] !== 'undefined') {
                            config[prop] = config1[prop];
                        }
                    });

                    var axiosKeys = valueFromConfig2Keys
                        .concat(mergeDeepPropertiesKeys)
                        .concat(defaultToConfig2Keys);

                    var otherKeys = Object
                        .keys(config2)
                        .filter(function filterAxiosKeys(key) {
                            return axiosKeys.indexOf(key) === -1;
                        });

                    utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
                        if (typeof config2[prop] !== 'undefined') {
                            config[prop] = config2[prop];
                        } else if (typeof config1[prop] !== 'undefined') {
                            config[prop] = config1[prop];
                        }
                    });

                    return config;
                };


                /***/ }),
            /* 8 */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";
                /* WEBPACK VAR INJECTION */(function(process) {

                    var utils = __webpack_require__(0);
                    var normalizeHeaderName = __webpack_require__(28);

                    var DEFAULT_CONTENT_TYPE = {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    };

                    function setContentTypeIfUnset(headers, value) {
                        if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
                            headers['Content-Type'] = value;
                        }
                    }

                    function getDefaultAdapter() {
                        var adapter;
                        if (typeof XMLHttpRequest !== 'undefined') {
                            // For browsers use XHR adapter
                            adapter = __webpack_require__(3);
                        } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
                            // For node use HTTP adapter
                            adapter = __webpack_require__(3);
                        }
                        return adapter;
                    }

                    var defaults = {
                        adapter: getDefaultAdapter(),

                        transformRequest: [function transformRequest(data, headers) {
                            normalizeHeaderName(headers, 'Accept');
                            normalizeHeaderName(headers, 'Content-Type');
                            if (utils.isFormData(data) ||
                                utils.isArrayBuffer(data) ||
                                utils.isBuffer(data) ||
                                utils.isStream(data) ||
                                utils.isFile(data) ||
                                utils.isBlob(data)
                            ) {
                                return data;
                            }
                            if (utils.isArrayBufferView(data)) {
                                return data.buffer;
                            }
                            if (utils.isURLSearchParams(data)) {
                                setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
                                return data.toString();
                            }
                            if (utils.isObject(data)) {
                                setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
                                return JSON.stringify(data);
                            }
                            return data;
                        }],

                        transformResponse: [function transformResponse(data) {
                            /*eslint no-param-reassign:0*/
                            if (typeof data === 'string') {
                                try {
                                    data = JSON.parse(data);
                                } catch (e) { /* Ignore */ }
                            }
                            return data;
                        }],

                        /**
                         * A timeout in milliseconds to abort a request. If set to 0 (default) a
                         * timeout is not created.
                         */
                        timeout: 0,

                        xsrfCookieName: 'XSRF-TOKEN',
                        xsrfHeaderName: 'X-XSRF-TOKEN',

                        maxContentLength: -1,

                        validateStatus: function validateStatus(status) {
                            return status >= 200 && status < 300;
                        }
                    };

                    defaults.headers = {
                        common: {
                            'Accept': 'application/json, text/plain, */*'
                        }
                    };

                    utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
                        defaults.headers[method] = {};
                    });

                    utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
                        defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
                    });

                    module.exports = defaults;

                    /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

                /***/ }),
            /* 9 */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                module.exports = function bind(fn, thisArg) {
                    return function wrap() {
                        var args = new Array(arguments.length);
                        for (var i = 0; i < args.length; i++) {
                            args[i] = arguments[i];
                        }
                        return fn.apply(thisArg, args);
                    };
                };


                /***/ }),
            /* 10 */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                var utils = __webpack_require__(0);

                function encode(val) {
                    return encodeURIComponent(val).
                    replace(/%40/gi, '@').
                    replace(/%3A/gi, ':').
                    replace(/%24/g, '$').
                    replace(/%2C/gi, ',').
                    replace(/%20/g, '+').
                    replace(/%5B/gi, '[').
                    replace(/%5D/gi, ']');
                }

                /**
                 * Build a URL by appending params to the end
                 *
                 * @param {string} url The base of the url (e.g., http://www.google.com)
                 * @param {object} [params] The params to be appended
                 * @returns {string} The formatted url
                 */
                module.exports = function buildURL(url, params, paramsSerializer) {
                    /*eslint no-param-reassign:0*/
                    if (!params) {
                        return url;
                    }

                    var serializedParams;
                    if (paramsSerializer) {
                        serializedParams = paramsSerializer(params);
                    } else if (utils.isURLSearchParams(params)) {
                        serializedParams = params.toString();
                    } else {
                        var parts = [];

                        utils.forEach(params, function serialize(val, key) {
                            if (val === null || typeof val === 'undefined') {
                                return;
                            }

                            if (utils.isArray(val)) {
                                key = key + '[]';
                            } else {
                                val = [val];
                            }

                            utils.forEach(val, function parseValue(v) {
                                if (utils.isDate(v)) {
                                    v = v.toISOString();
                                } else if (utils.isObject(v)) {
                                    v = JSON.stringify(v);
                                }
                                parts.push(encode(key) + '=' + encode(v));
                            });
                        });

                        serializedParams = parts.join('&');
                    }

                    if (serializedParams) {
                        var hashmarkIndex = url.indexOf('#');
                        if (hashmarkIndex !== -1) {
                            url = url.slice(0, hashmarkIndex);
                        }

                        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
                    }

                    return url;
                };


                /***/ }),
            /* 11 */
            /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(1);
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


                class BaatoSearch {
                    constructor(props) {
                        this.key = props && props.key ? props.key : 'YOURAPIKEY'
                        this.baseUrl = props && props.baseUrl ? props.baseUrl : 'http://baato.io/api'
                        this.apiVersion = props && props.apiVersion ? props.apiVersion : '1'
                    }

                    setKey(key) {
                        this.key = key
                        return this
                    }

                    setApiVersion(apiVersion) {
                        this.apiVersion = apiVersion.match(/\d+/)[0]
                        return this
                    }

                    setBaseUrl(baseUrl) {
                        this.baseUrl = baseUrl
                        return this
                    }

                    setPlaceId(placeId) {
                        this.placeId = placeId
                        return this
                    }

                    async doRequest() {
                        if (this.key !== null) {
                            return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${this.baseUrl}/v${this.apiVersion}/places`, {
                                params: {
                                    key: this.key,
                                    placeId: this.placeId,
                                },
                            })
                                .then(response => response.data)

                            // return fetch(this.getBaseUrl())
                        }

                        return null
                    }
                }


                /* harmony default export */ __webpack_exports__["a"] = (BaatoSearch);


                /***/ }),
            /* 12 */
            /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(1);
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


                class BaatoReverseSearch {
                    constructor(
                        props,
                    ) {
                        this.key = props && props.key ? props.key : 'YOURQUERY'
                        this.radius = props && props.radius ? props.radius : 0.5 // based on spring-boot API design
                        this.baseUrl = props && props.baseUrl ? props.baseUrl : 'http://baato.io/api'
                        this.apiVersion = props && props.apiVersion ? props.apiVersion : '1'
                    }

                    setKey(key) {
                        this.key = key
                        return this
                    }

                    setApiVersion(apiVersion) {
                        this.apiVersion = apiVersion.match(/\d+/)[0]
                        return this
                    }

                    setCoordinates(coordinates) {
                        this.lat = coordinates[0];
                        this.lon = coordinates[1];
                        return this;
                    }

                    // setLat(lat) {
                    //     this.lat = lat
                    //     return this
                    // }
                    //
                    // setLon(lon) {
                    //     this.lon = lon
                    //     return this
                    // }

                    setRadius(radius) {
                        this.radius = radius
                        return this
                    }

                    setBaseUrl(baseUrl) {
                        this.baseUrl = baseUrl
                        return this
                    }


                    async doRequest() {
                        if (this.key !== null) {
                            return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${this.baseUrl}/v${this.apiVersion}/reverse`, {
                                params: {
                                    key: this.key,
                                    lat: this.lat,
                                    lon: this.lon,
                                    radius: this.radius,
                                },
                            })
                                .then(response => response.data)

                            // return fetch(this.getBaseUrl())
                        }

                        return null
                    }
                }


                /* harmony default export */ __webpack_exports__["a"] = (BaatoReverseSearch);


                /***/ }),
            /* 13 */
            /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(1);
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BaatoUtil__ = __webpack_require__(2);



                class BaatoRouting {
                    constructor({
                                    key, vehicle, baseUrl, apiVersion,
                                }) {
                        this.alternatives = false
                        this.instructions = false
                        this.points = []


                        this.key = key
                        this.vehicle = vehicle
                        this.baseUrl = baseUrl || 'http://baato.io/api'
                        this.apiVersion = apiVersion || '1'
                    }

                    setBaseUrl(url) {
                        this.baseUrl = url
                        return this
                    }

                    setApiVersion(apiVersion) {
                        this.apiVersion = apiVersion.match(/\d+/)[0]
                        return this
                    }

                    setVehicle(vehicle) {
                        this.vehicle = vehicle
                        return this
                    }

                    addPoint({ lat, lon }) {
                        this.points.push(`${lat},${lon}`)
                        return this
                    }

                    getAlternatives() {
                        this.alternatives = true
                        return this
                    }

                    addPoints(points) {
                        this.points = points
                        return this
                    }

                    getBaseUrl() {
                        if (this.alternatives) {
                            return `${this.baseUrl}/directions`
                        }

                        return `${this.baseUrl}/directions`
                    }


                    getKey() {
                        return this.key
                    }

                    includeAlternativeRoutes() {
                        this.alternatives = true
                        return this
                    }

                    getBest() {
                        this.alternatives = false
                        return this
                    }


                    hasInstructions(bool) {
                        this.hasInstructions = bool
                        return this
                    }

                    async doRequest() {
                        if (this.key !== null) {
                            const response = await __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${this.baseUrl}/v${this.apiVersion}/directions`, {
                                params: {
                                    points: this.points,
                                    key: this.key,
                                    mode: this.vehicle,
                                    alternatives: this.alternatives,
                                },
                            })

                            const bUtil = new __WEBPACK_IMPORTED_MODULE_1__BaatoUtil__["a" /* default */]()

                            const finalData = response.data.data.length > 0 ? response.data.data.map(item => ({
                                geojson: bUtil.getGeoJsonFromEncodedPolyLine(item.encodedPolyline),
                                distanceInMeters: item.distanceInMeters,
                                timeInMs: item.timeInMs,
                            })) : []

                            return finalData

                            // return fetch(this.getBaseUrl())
                        }

                        return null
                    }
                }

                /* harmony default export */ __webpack_exports__["a"] = (BaatoRouting);


                /***/ }),
            /* 14 */
            /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(1);
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);



                class Search {
                    constructor(props) {
                        this.key = props && props.key ? props.key : 'YOURAPIKEY'
                        this.query = props && props.query ? props.query : 'YOURQUERY'
                        this.baseUrl = props && props.baseUrl ? props.baseUrl : 'http://baato.io/api'
                        this.apiVersion = props && props.apiVersion ? props.apiVersion : '1'
                    }

                    setKey(key) {
                        this.key = key
                        return this
                    }

                    setApiVersion(apiVersion) {
                        this.apiVersion = apiVersion.match(/\d+/)[0]
                        return this
                    }

                    setQuery(query) {
                        this.query = query
                        return this
                    }

                    setBaseUrl(baseUrl) {
                        this.baseUrl = baseUrl
                        return this
                    }

                    setLimit(limit) {
                        this.limit = limit
                        return this
                    }

                    setCoordinates(coordinates, radius) {
                        this.lat = coordinates[0]
                        this.lon = coordinates[1]
                        this.radius = radius
                        return this
                    }

                    async doRequest() {
                        if (this.key !== null) {
                            return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${this.baseUrl}/v${this.apiVersion}/search`, {
                                params: {
                                    key: this.key,
                                    q: this.query,
                                    limit: this.limit,
                                    lat: this.lat,
                                    lon: this.lon,
                                    radius: this.radius,
                                },
                            })
                                .then(response => response.data)

                            // return fetch(this.getBaseUrl())
                        }
                        return null
                    }
                }


                /* harmony default export */ __webpack_exports__["a"] = (Search);


                /***/ }),
            /* 15 */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                var utils = __webpack_require__(0);
                var bind = __webpack_require__(9);
                var Axios = __webpack_require__(17);
                var mergeConfig = __webpack_require__(7);
                var defaults = __webpack_require__(8);

                /**
                 * Create an instance of Axios
                 *
                 * @param {Object} defaultConfig The default config for the instance
                 * @return {Axios} A new instance of Axios
                 */
                function createInstance(defaultConfig) {
                    var context = new Axios(defaultConfig);
                    var instance = bind(Axios.prototype.request, context);

                    // Copy axios.prototype to instance
                    utils.extend(instance, Axios.prototype, context);

                    // Copy context to instance
                    utils.extend(instance, context);

                    return instance;
                }

// Create the default instance to be exported
                var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
                axios.Axios = Axios;

// Factory for creating new instances
                axios.create = function create(instanceConfig) {
                    return createInstance(mergeConfig(axios.defaults, instanceConfig));
                };

// Expose Cancel & CancelToken
                axios.Cancel = __webpack_require__(4);
                axios.CancelToken = __webpack_require__(16);
                axios.isCancel = __webpack_require__(5);

// Expose all/spread
                axios.all = function all(promises) {
                    return Promise.all(promises);
                };
                axios.spread = __webpack_require__(30);

                module.exports = axios;

// Allow use of default import syntax in TypeScript
                module.exports.default = axios;


                /***/ }),
            /* 16 */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                var Cancel = __webpack_require__(4);

                /**
                 * A `CancelToken` is an object that can be used to request cancellation of an operation.
                 *
                 * @class
                 * @param {Function} executor The executor function.
                 */
                function CancelToken(executor) {
                    if (typeof executor !== 'function') {
                        throw new TypeError('executor must be a function.');
                    }

                    var resolvePromise;
                    this.promise = new Promise(function promiseExecutor(resolve) {
                        resolvePromise = resolve;
                    });

                    var token = this;
                    executor(function cancel(message) {
                        if (token.reason) {
                            // Cancellation has already been requested
                            return;
                        }

                        token.reason = new Cancel(message);
                        resolvePromise(token.reason);
                    });
                }

                /**
                 * Throws a `Cancel` if cancellation has been requested.
                 */
                CancelToken.prototype.throwIfRequested = function throwIfRequested() {
                    if (this.reason) {
                        throw this.reason;
                    }
                };

                /**
                 * Returns an object that contains a new `CancelToken` and a function that, when called,
                 * cancels the `CancelToken`.
                 */
                CancelToken.source = function source() {
                    var cancel;
                    var token = new CancelToken(function executor(c) {
                        cancel = c;
                    });
                    return {
                        token: token,
                        cancel: cancel
                    };
                };

                module.exports = CancelToken;


                /***/ }),
            /* 17 */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                var utils = __webpack_require__(0);
                var buildURL = __webpack_require__(10);
                var InterceptorManager = __webpack_require__(18);
                var dispatchRequest = __webpack_require__(20);
                var mergeConfig = __webpack_require__(7);

                /**
                 * Create a new instance of Axios
                 *
                 * @param {Object} instanceConfig The default config for the instance
                 */
                function Axios(instanceConfig) {
                    this.defaults = instanceConfig;
                    this.interceptors = {
                        request: new InterceptorManager(),
                        response: new InterceptorManager()
                    };
                }

                /**
                 * Dispatch a request
                 *
                 * @param {Object} config The config specific for this request (merged with this.defaults)
                 */
                Axios.prototype.request = function request(config) {
                    /*eslint no-param-reassign:0*/
                    // Allow for axios('example/url'[, config]) a la fetch API
                    if (typeof config === 'string') {
                        config = arguments[1] || {};
                        config.url = arguments[0];
                    } else {
                        config = config || {};
                    }

                    config = mergeConfig(this.defaults, config);

                    // Set config.method
                    if (config.method) {
                        config.method = config.method.toLowerCase();
                    } else if (this.defaults.method) {
                        config.method = this.defaults.method.toLowerCase();
                    } else {
                        config.method = 'get';
                    }

                    // Hook up interceptors middleware
                    var chain = [dispatchRequest, undefined];
                    var promise = Promise.resolve(config);

                    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
                        chain.unshift(interceptor.fulfilled, interceptor.rejected);
                    });

                    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
                        chain.push(interceptor.fulfilled, interceptor.rejected);
                    });

                    while (chain.length) {
                        promise = promise.then(chain.shift(), chain.shift());
                    }

                    return promise;
                };

                Axios.prototype.getUri = function getUri(config) {
                    config = mergeConfig(this.defaults, config);
                    return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
                };

// Provide aliases for supported request methods
                utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
                    /*eslint func-names:0*/
                    Axios.prototype[method] = function(url, config) {
                        return this.request(utils.merge(config || {}, {
                            method: method,
                            url: url
                        }));
                    };
                });

                utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
                    /*eslint func-names:0*/
                    Axios.prototype[method] = function(url, data, config) {
                        return this.request(utils.merge(config || {}, {
                            method: method,
                            url: url,
                            data: data
                        }));
                    };
                });

                module.exports = Axios;


                /***/ }),
            /* 18 */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                var utils = __webpack_require__(0);

                function InterceptorManager() {
                    this.handlers = [];
                }

                /**
                 * Add a new interceptor to the stack
                 *
                 * @param {Function} fulfilled The function to handle `then` for a `Promise`
                 * @param {Function} rejected The function to handle `reject` for a `Promise`
                 *
                 * @return {Number} An ID used to remove interceptor later
                 */
                InterceptorManager.prototype.use = function use(fulfilled, rejected) {
                    this.handlers.push({
                        fulfilled: fulfilled,
                        rejected: rejected
                    });
                    return this.handlers.length - 1;
                };

                /**
                 * Remove an interceptor from the stack
                 *
                 * @param {Number} id The ID that was returned by `use`
                 */
                InterceptorManager.prototype.eject = function eject(id) {
                    if (this.handlers[id]) {
                        this.handlers[id] = null;
                    }
                };

                /**
                 * Iterate over all the registered interceptors
                 *
                 * This method is particularly useful for skipping over any
                 * interceptors that may have become `null` calling `eject`.
                 *
                 * @param {Function} fn The function to call for each interceptor
                 */
                InterceptorManager.prototype.forEach = function forEach(fn) {
                    utils.forEach(this.handlers, function forEachHandler(h) {
                        if (h !== null) {
                            fn(h);
                        }
                    });
                };

                module.exports = InterceptorManager;


                /***/ }),
            /* 19 */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                var isAbsoluteURL = __webpack_require__(26);
                var combineURLs = __webpack_require__(24);

                /**
                 * Creates a new URL by combining the baseURL with the requestedURL,
                 * only when the requestedURL is not already an absolute URL.
                 * If the requestURL is absolute, this function returns the requestedURL untouched.
                 *
                 * @param {string} baseURL The base URL
                 * @param {string} requestedURL Absolute or relative URL to combine
                 * @returns {string} The combined full path
                 */
                module.exports = function buildFullPath(baseURL, requestedURL) {
                    if (baseURL && !isAbsoluteURL(requestedURL)) {
                        return combineURLs(baseURL, requestedURL);
                    }
                    return requestedURL;
                };


                /***/ }),
            /* 20 */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                var utils = __webpack_require__(0);
                var transformData = __webpack_require__(23);
                var isCancel = __webpack_require__(5);
                var defaults = __webpack_require__(8);

                /**
                 * Throws a `Cancel` if cancellation has been requested.
                 */
                function throwIfCancellationRequested(config) {
                    if (config.cancelToken) {
                        config.cancelToken.throwIfRequested();
                    }
                }

                /**
                 * Dispatch a request to the server using the configured adapter.
                 *
                 * @param {object} config The config that is to be used for the request
                 * @returns {Promise} The Promise to be fulfilled
                 */
                module.exports = function dispatchRequest(config) {
                    throwIfCancellationRequested(config);

                    // Ensure headers exist
                    config.headers = config.headers || {};

                    // Transform request data
                    config.data = transformData(
                        config.data,
                        config.headers,
                        config.transformRequest
                    );

                    // Flatten headers
                    config.headers = utils.merge(
                        config.headers.common || {},
                        config.headers[config.method] || {},
                        config.headers
                    );

                    utils.forEach(
                        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
                        function cleanHeaderConfig(method) {
                            delete config.headers[method];
                        }
                    );

                    var adapter = config.adapter || defaults.adapter;

                    return adapter(config).then(function onAdapterResolution(response) {
                        throwIfCancellationRequested(config);

                        // Transform response data
                        response.data = transformData(
                            response.data,
                            response.headers,
                            config.transformResponse
                        );

                        return response;
                    }, function onAdapterRejection(reason) {
                        if (!isCancel(reason)) {
                            throwIfCancellationRequested(config);

                            // Transform response data
                            if (reason && reason.response) {
                                reason.response.data = transformData(
                                    reason.response.data,
                                    reason.response.headers,
                                    config.transformResponse
                                );
                            }
                        }

                        return Promise.reject(reason);
                    });
                };


                /***/ }),
            /* 21 */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                /**
                 * Update an Error with the specified config, error code, and response.
                 *
                 * @param {Error} error The error to update.
                 * @param {Object} config The config.
                 * @param {string} [code] The error code (for example, 'ECONNABORTED').
                 * @param {Object} [request] The request.
                 * @param {Object} [response] The response.
                 * @returns {Error} The error.
                 */
                module.exports = function enhanceError(error, config, code, request, response) {
                    error.config = config;
                    if (code) {
                        error.code = code;
                    }

                    error.request = request;
                    error.response = response;
                    error.isAxiosError = true;

                    error.toJSON = function() {
                        return {
                            // Standard
                            message: this.message,
                            name: this.name,
                            // Microsoft
                            description: this.description,
                            number: this.number,
                            // Mozilla
                            fileName: this.fileName,
                            lineNumber: this.lineNumber,
                            columnNumber: this.columnNumber,
                            stack: this.stack,
                            // Axios
                            config: this.config,
                            code: this.code
                        };
                    };
                    return error;
                };


                /***/ }),
            /* 22 */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                var createError = __webpack_require__(6);

                /**
                 * Resolve or reject a Promise based on response status.
                 *
                 * @param {Function} resolve A function that resolves the promise.
                 * @param {Function} reject A function that rejects the promise.
                 * @param {object} response The response.
                 */
                module.exports = function settle(resolve, reject, response) {
                    var validateStatus = response.config.validateStatus;
                    if (!validateStatus || validateStatus(response.status)) {
                        resolve(response);
                    } else {
                        reject(createError(
                            'Request failed with status code ' + response.status,
                            response.config,
                            null,
                            response.request,
                            response
                        ));
                    }
                };


                /***/ }),
            /* 23 */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                var utils = __webpack_require__(0);

                /**
                 * Transform the data for a request or a response
                 *
                 * @param {Object|String} data The data to be transformed
                 * @param {Array} headers The headers for the request or response
                 * @param {Array|Function} fns A single function or Array of functions
                 * @returns {*} The resulting transformed data
                 */
                module.exports = function transformData(data, headers, fns) {
                    /*eslint no-param-reassign:0*/
                    utils.forEach(fns, function transform(fn) {
                        data = fn(data, headers);
                    });

                    return data;
                };


                /***/ }),
            /* 24 */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                /**
                 * Creates a new URL by combining the specified URLs
                 *
                 * @param {string} baseURL The base URL
                 * @param {string} relativeURL The relative URL
                 * @returns {string} The combined URL
                 */
                module.exports = function combineURLs(baseURL, relativeURL) {
                    return relativeURL
                        ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
                        : baseURL;
                };


                /***/ }),
            /* 25 */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                var utils = __webpack_require__(0);

                module.exports = (
                    utils.isStandardBrowserEnv() ?

                        // Standard browser envs support document.cookie
                        (function standardBrowserEnv() {
                            return {
                                write: function write(name, value, expires, path, domain, secure) {
                                    var cookie = [];
                                    cookie.push(name + '=' + encodeURIComponent(value));

                                    if (utils.isNumber(expires)) {
                                        cookie.push('expires=' + new Date(expires).toGMTString());
                                    }

                                    if (utils.isString(path)) {
                                        cookie.push('path=' + path);
                                    }

                                    if (utils.isString(domain)) {
                                        cookie.push('domain=' + domain);
                                    }

                                    if (secure === true) {
                                        cookie.push('secure');
                                    }

                                    document.cookie = cookie.join('; ');
                                },

                                read: function read(name) {
                                    var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
                                    return (match ? decodeURIComponent(match[3]) : null);
                                },

                                remove: function remove(name) {
                                    this.write(name, '', Date.now() - 86400000);
                                }
                            };
                        })() :

                        // Non standard browser env (web workers, react-native) lack needed support.
                        (function nonStandardBrowserEnv() {
                            return {
                                write: function write() {},
                                read: function read() { return null; },
                                remove: function remove() {}
                            };
                        })()
                );


                /***/ }),
            /* 26 */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                /**
                 * Determines whether the specified URL is absolute
                 *
                 * @param {string} url The URL to test
                 * @returns {boolean} True if the specified URL is absolute, otherwise false
                 */
                module.exports = function isAbsoluteURL(url) {
                    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
                    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
                    // by any combination of letters, digits, plus, period, or hyphen.
                    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
                };


                /***/ }),
            /* 27 */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                var utils = __webpack_require__(0);

                module.exports = (
                    utils.isStandardBrowserEnv() ?

                        // Standard browser envs have full support of the APIs needed to test
                        // whether the request URL is of the same origin as current location.
                        (function standardBrowserEnv() {
                            var msie = /(msie|trident)/i.test(navigator.userAgent);
                            var urlParsingNode = document.createElement('a');
                            var originURL;

                            /**
                             * Parse a URL to discover it's components
                             *
                             * @param {String} url The URL to be parsed
                             * @returns {Object}
                             */
                            function resolveURL(url) {
                                var href = url;

                                if (msie) {
                                    // IE needs attribute set twice to normalize properties
                                    urlParsingNode.setAttribute('href', href);
                                    href = urlParsingNode.href;
                                }

                                urlParsingNode.setAttribute('href', href);

                                // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
                                return {
                                    href: urlParsingNode.href,
                                    protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
                                    host: urlParsingNode.host,
                                    search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
                                    hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
                                    hostname: urlParsingNode.hostname,
                                    port: urlParsingNode.port,
                                    pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                                        urlParsingNode.pathname :
                                        '/' + urlParsingNode.pathname
                                };
                            }

                            originURL = resolveURL(window.location.href);

                            /**
                             * Determine if a URL shares the same origin as the current location
                             *
                             * @param {String} requestURL The URL to test
                             * @returns {boolean} True if URL shares the same origin, otherwise false
                             */
                            return function isURLSameOrigin(requestURL) {
                                var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
                                return (parsed.protocol === originURL.protocol &&
                                    parsed.host === originURL.host);
                            };
                        })() :

                        // Non standard browser envs (web workers, react-native) lack needed support.
                        (function nonStandardBrowserEnv() {
                            return function isURLSameOrigin() {
                                return true;
                            };
                        })()
                );


                /***/ }),
            /* 28 */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                var utils = __webpack_require__(0);

                module.exports = function normalizeHeaderName(headers, normalizedName) {
                    utils.forEach(headers, function processHeader(value, name) {
                        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
                            headers[normalizedName] = value;
                            delete headers[name];
                        }
                    });
                };


                /***/ }),
            /* 29 */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
                var ignoreDuplicateOf = [
                    'age', 'authorization', 'content-length', 'content-type', 'etag',
                    'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
                    'last-modified', 'location', 'max-forwards', 'proxy-authorization',
                    'referer', 'retry-after', 'user-agent'
                ];

                /**
                 * Parse headers into an object
                 *
                 * ```
                 * Date: Wed, 27 Aug 2014 08:58:49 GMT
                 * Content-Type: application/json
                 * Connection: keep-alive
                 * Transfer-Encoding: chunked
                 * ```
                 *
                 * @param {String} headers Headers needing to be parsed
                 * @returns {Object} Headers parsed into an object
                 */
                module.exports = function parseHeaders(headers) {
                    var parsed = {};
                    var key;
                    var val;
                    var i;

                    if (!headers) { return parsed; }

                    utils.forEach(headers.split('\n'), function parser(line) {
                        i = line.indexOf(':');
                        key = utils.trim(line.substr(0, i)).toLowerCase();
                        val = utils.trim(line.substr(i + 1));

                        if (key) {
                            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
                                return;
                            }
                            if (key === 'set-cookie') {
                                parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
                            } else {
                                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
                            }
                        }
                    });

                    return parsed;
                };


                /***/ }),
            /* 30 */
            /***/ (function(module, exports, __webpack_require__) {

                "use strict";


                /**
                 * Syntactic sugar for invoking a function and expanding an array for arguments.
                 *
                 * Common use case would be to use `Function.prototype.apply`.
                 *
                 *  ```js
                 *  function f(x, y, z) {}
                 *  var args = [1, 2, 3];
                 *  f.apply(null, args);
                 *  ```
                 *
                 * With `spread` this example can be re-written.
                 *
                 *  ```js
                 *  spread(function(x, y, z) {})([1, 2, 3]);
                 *  ```
                 *
                 * @param {Function} callback
                 * @returns {Function}
                 */
                module.exports = function spread(callback) {
                    return function wrap(arr) {
                        return callback.apply(null, arr);
                    };
                };


                /***/ }),
            /* 31 */
            /***/ (function(module, exports) {

// shim for using process in browser
                var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

                var cachedSetTimeout;
                var cachedClearTimeout;

                function defaultSetTimout() {
                    throw new Error('setTimeout has not been defined');
                }
                function defaultClearTimeout () {
                    throw new Error('clearTimeout has not been defined');
                }
                (function () {
                    try {
                        if (typeof setTimeout === 'function') {
                            cachedSetTimeout = setTimeout;
                        } else {
                            cachedSetTimeout = defaultSetTimout;
                        }
                    } catch (e) {
                        cachedSetTimeout = defaultSetTimout;
                    }
                    try {
                        if (typeof clearTimeout === 'function') {
                            cachedClearTimeout = clearTimeout;
                        } else {
                            cachedClearTimeout = defaultClearTimeout;
                        }
                    } catch (e) {
                        cachedClearTimeout = defaultClearTimeout;
                    }
                } ())
                function runTimeout(fun) {
                    if (cachedSetTimeout === setTimeout) {
                        //normal enviroments in sane situations
                        return setTimeout(fun, 0);
                    }
                    // if setTimeout wasn't available but was latter defined
                    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                        cachedSetTimeout = setTimeout;
                        return setTimeout(fun, 0);
                    }
                    try {
                        // when when somebody has screwed with setTimeout but no I.E. maddness
                        return cachedSetTimeout(fun, 0);
                    } catch(e){
                        try {
                            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                            return cachedSetTimeout.call(null, fun, 0);
                        } catch(e){
                            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                            return cachedSetTimeout.call(this, fun, 0);
                        }
                    }


                }
                function runClearTimeout(marker) {
                    if (cachedClearTimeout === clearTimeout) {
                        //normal enviroments in sane situations
                        return clearTimeout(marker);
                    }
                    // if clearTimeout wasn't available but was latter defined
                    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                        cachedClearTimeout = clearTimeout;
                        return clearTimeout(marker);
                    }
                    try {
                        // when when somebody has screwed with setTimeout but no I.E. maddness
                        return cachedClearTimeout(marker);
                    } catch (e){
                        try {
                            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                            return cachedClearTimeout.call(null, marker);
                        } catch (e){
                            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                            return cachedClearTimeout.call(this, marker);
                        }
                    }



                }
                var queue = [];
                var draining = false;
                var currentQueue;
                var queueIndex = -1;

                function cleanUpNextTick() {
                    if (!draining || !currentQueue) {
                        return;
                    }
                    draining = false;
                    if (currentQueue.length) {
                        queue = currentQueue.concat(queue);
                    } else {
                        queueIndex = -1;
                    }
                    if (queue.length) {
                        drainQueue();
                    }
                }

                function drainQueue() {
                    if (draining) {
                        return;
                    }
                    var timeout = runTimeout(cleanUpNextTick);
                    draining = true;

                    var len = queue.length;
                    while(len) {
                        currentQueue = queue;
                        queue = [];
                        while (++queueIndex < len) {
                            if (currentQueue) {
                                currentQueue[queueIndex].run();
                            }
                        }
                        queueIndex = -1;
                        len = queue.length;
                    }
                    currentQueue = null;
                    draining = false;
                    runClearTimeout(timeout);
                }

                process.nextTick = function (fun) {
                    var args = new Array(arguments.length - 1);
                    if (arguments.length > 1) {
                        for (var i = 1; i < arguments.length; i++) {
                            args[i - 1] = arguments[i];
                        }
                    }
                    queue.push(new Item(fun, args));
                    if (queue.length === 1 && !draining) {
                        runTimeout(drainQueue);
                    }
                };

// v8 likes predictible objects
                function Item(fun, array) {
                    this.fun = fun;
                    this.array = array;
                }
                Item.prototype.run = function () {
                    this.fun.apply(null, this.array);
                };
                process.title = 'browser';
                process.browser = true;
                process.env = {};
                process.argv = [];
                process.version = ''; // empty string to avoid regexp issues
                process.versions = {};

                function noop() {}

                process.on = noop;
                process.addListener = noop;
                process.once = noop;
                process.off = noop;
                process.removeListener = noop;
                process.removeAllListeners = noop;
                process.emit = noop;
                process.prependListener = noop;
                process.prependOnceListener = noop;

                process.listeners = function (name) { return [] }

                process.binding = function (name) {
                    throw new Error('process.binding is not supported');
                };

                process.cwd = function () { return '/' };
                process.chdir = function (dir) {
                    throw new Error('process.chdir is not supported');
                };
                process.umask = function() { return 0; };


                /***/ }),
            /* 32 */
            /***/ (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaatoRouting__ = __webpack_require__(13);
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BaatoUtil__ = __webpack_require__(2);
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BaatoPlaces__ = __webpack_require__(11);
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BaatoReverseSearch__ = __webpack_require__(12);
                /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BaatoSearch__ = __webpack_require__(14);






                const Baato = {
                    Routing: __WEBPACK_IMPORTED_MODULE_0__BaatoRouting__["a" /* default */],
                    Util: __WEBPACK_IMPORTED_MODULE_1__BaatoUtil__["a" /* default */],
                    Places: __WEBPACK_IMPORTED_MODULE_2__BaatoPlaces__["a" /* default */],
                    Reverse: __WEBPACK_IMPORTED_MODULE_3__BaatoReverseSearch__["a" /* default */],
                    Search: __WEBPACK_IMPORTED_MODULE_4__BaatoSearch__["a" /* default */],
                }

                /* harmony default export */ __webpack_exports__["default"] = (Baato);


                /***/ })
            /******/ ]);
});
