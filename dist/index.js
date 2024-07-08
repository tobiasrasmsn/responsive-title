"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/index.ts
var src_exports = {};
__export(src_exports, {
    ResponsiveTitle: function() {
        return ResponsiveTitle_default;
    }
});
module.exports = __toCommonJS(src_exports);
// src/ResponsiveTitle.tsx
var import_react = __toESM(require("react"));
var ResponsiveTitle = function(_param) {
    var text = _param.text, containerStyle = _param.containerStyle, props = _object_without_properties(_param, [
        "text",
        "containerStyle"
    ]);
    var parentRef = (0, import_react.useRef)(null);
    var textMeasureRef = (0, import_react.useRef)(null);
    var _ref = _sliced_to_array((0, import_react.useState)("calc(5vw + 1vh)"), 2), fontSize = _ref[0], setFontSize = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react.useState)(false), 2), isMounted = _ref1[0], setIsMounted = _ref1[1];
    (0, import_react.useEffect)(function() {
        setIsMounted(true);
    }, []);
    (0, import_react.useEffect)(function() {
        if (!isMounted) return;
        var updateFontSize = function() {
            if (parentRef.current && textMeasureRef.current) {
                var containerWidth = parentRef.current.offsetWidth;
                var textWidth = textMeasureRef.current.offsetWidth;
                if (textWidth > 0) {
                    var scaleFactor = containerWidth / textWidth;
                    var newFontSize = Math.max(10, Math.min(400, 16 * scaleFactor));
                    setFontSize("".concat(newFontSize, "px"));
                }
            }
        };
        updateFontSize();
        var throttledUpdateFontSize = throttle(updateFontSize, 50);
        window.addEventListener("resize", throttledUpdateFontSize);
        return function() {
            window.removeEventListener("resize", throttledUpdateFontSize);
        };
    }, [
        text,
        isMounted
    ]);
    if (!isMounted) {
        return null;
    }
    return /* @__PURE__ */ import_react.default.createElement("div", _object_spread({
        ref: parentRef,
        style: _object_spread({
            width: "100%",
            border: "1px solid transparent"
        }, containerStyle)
    }, props), /* @__PURE__ */ import_react.default.createElement("span", {
        ref: textMeasureRef,
        style: {
            fontSize: "16px",
            visibility: "hidden",
            whiteSpace: "nowrap",
            position: "absolute"
        }
    }, text), /* @__PURE__ */ import_react.default.createElement("p", {
        style: {
            fontSize: fontSize,
            margin: 0,
            whiteSpace: "nowrap",
            transition: "font-size 0.1s ease",
            lineHeight: 1
        }
    }, text));
};
function throttle(func, limit) {
    var lastFunc;
    var lastRan;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var context = this;
        var now = Date.now();
        if (!lastRan) {
            func.apply(context, args);
            lastRan = now;
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if (now - lastRan >= limit) {
                    func.apply(context, args);
                    lastRan = now;
                }
            }, limit - (now - lastRan));
        }
    };
}
var ResponsiveTitle_default = ResponsiveTitle;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    ResponsiveTitle: ResponsiveTitle
});
