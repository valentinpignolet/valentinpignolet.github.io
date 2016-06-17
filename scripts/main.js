document.domain = 'facebook.com';
__transform_includes = {};

function emptyFunction() {};
if (!Array.from) Array.from = function(a) {
    if (a == null) throw new TypeError('Object is null or undefined');
    var b = arguments[1],
        c = arguments[2],
        d = this,
        e = Object(a),
        f = typeof Symbol === 'function' ? typeof Symbol === 'function' ? Symbol.iterator : '@@iterator' : '@@iterator',
        g = typeof b === 'function',
        h = typeof e[f] === 'function',
        i = 0,
        j, k;
    if (h) { j = typeof d === 'function' ? new d() : [];
        var l = e[f](),
            m;
        while (!(m = l.next()).done) { k = m.value;
            if (g) k = b.call(c, k, i);
            j[i] = k;
            i += 1; }
        j.length = i;
        return j; }
    var n = e.length;
    if (isNaN(n) || n < 0) n = 0;
    j = typeof d === 'function' ? new d(n) : new Array(n);
    while (i < n) { k = e[i];
        if (g) k = b.call(c, k, i);
        j[i] = k;
        i += 1; }
    j.length = i;
    return j; };
if (!Array.isArray) Array.isArray = function(a) {
    return Object.prototype.toString.call(a) == '[object Array]'; };
self.__DEV__ = self.__DEV__ || 0;
(function(a) {
    function b(c, d) {
        if (this == null) throw new TypeError('Array.prototype.findIndex called on null or undefined');
        if (typeof c !== 'function') throw new TypeError('predicate must be a function');
        var e = Object(this),
            f = e.length >>> 0;
        for (var g = 0; g < f; g++)
            if (c.call(d, e[g], g, e)) return g;
        return -1; }
    if (!Array.prototype.findIndex) Array.prototype.findIndex = b;
    if (!Array.prototype.find) Array.prototype.find = function(c, d) {
        if (this == null) throw new TypeError('Array.prototype.find called on null or undefined');
        var e = b.call(this, c, d);
        return e === -1 ? a : this[e]; };
    if (!Array.prototype.fill) Array.prototype.fill = function(c) {
        if (this == null) throw new TypeError('Array.prototype.fill called on null or undefined');
        var d = Object(this),
            e = d.length >>> 0,
            f = arguments[1],
            g = f >> 0,
            h = g < 0 ? Math.max(e + g, 0) : Math.min(g, e),
            i = arguments[2],
            j = i === a ? e : i >> 0,
            k = j < 0 ? Math.max(e + j, 0) : Math.min(j, e);
        while (h < k) { d[h] = c;
            h++; }
        return d; }; })();
(function() {
    var a = Object.prototype.toString,
        b = Object("a"),
        c = b[0] != "a";

    function d(e) { e = +e;
        if (e !== e) { e = 0; } else if (e !== 0 && e !== 1 / 0 && e !== -(1 / 0)) e = (e > 0 || -1) * Math.floor(Math.abs(e));
        return e; }
    if (!Array.prototype.map) Array.prototype.map = function(e, f) {
        if (typeof e != 'function') throw new TypeError();
        var g, h = this.length,
            i = new Array(h);
        for (g = 0; g < h; ++g)
            if (g in this) i[g] = e.call(f, this[g], g, this);
        return i; };
    if (!Array.prototype.forEach) Array.prototype.forEach = function(e, f) { this.map(e, f); };
    if (!Array.prototype.filter) Array.prototype.filter = function(e, f) {
        if (typeof e != 'function') throw new TypeError();
        var g, h, i = this.length,
            j = [];
        for (g = 0; g < i; ++g)
            if (g in this) { h = this[g];
                if (e.call(f, h, g, this)) j.push(h); }
        return j; };
    if (!Array.prototype.every) Array.prototype.every = function(e, f) {
        if (typeof e != 'function') throw new TypeError();
        var g = new Object(this),
            h = g.length;
        for (var i = 0; i < h; i++)
            if (i in g)
                if (!e.call(f, g[i], i, g)) return false;
        return true; };
    if (!Array.prototype.some) Array.prototype.some = function(e, f) {
        if (typeof e != 'function') throw new TypeError();
        var g = new Object(this),
            h = g.length;
        for (var i = 0; i < h; i++)
            if (i in g)
                if (e.call(f, g[i], i, g)) return true;
        return false; };
    if (!Array.prototype.indexOf) Array.prototype.indexOf = function(e, f) {
        var g = this.length;
        f |= 0;
        if (f < 0) f += g;
        for (; f < g; f++)
            if (f in this && this[f] === e) return f;
        return -1; };
    if (!Array.prototype.lastIndexOf || [0, 1].lastIndexOf(0, -3) != -1) Array.prototype.lastIndexOf = function(e) {
        var f = c && a.call(this) == "[object String]" ? this.split("") : Object(this),
            g = f.length >>> 0;
        if (!g) return -1;
        var h = g - 1;
        if (arguments.length > 1) h = Math.min(h, d(arguments[1]));
        h = h >= 0 ? h : g - Math.abs(h);
        for (; h >= 0; h--)
            if (h in f && e === f[h]) return h;
        return -1; };
    if (!Array.prototype.reduce) Array.prototype.reduce = function(e) {
        if (typeof e !== 'function') throw new TypeError(e + ' is not a function');
        var f = this.length >>> 0,
            g, h, i = arguments.length === 2;
        if (i) g = arguments[1];
        for (h = 0; h < f; ++h)
            if (this.hasOwnProperty(h))
                if (i === false) { g = this[h];
                    i = true; } else g = e(g, this[h], h, this);
        if (i === false) throw new TypeError('Reduce of empty array with no initial value');
        return g; };
    if (!Array.prototype.reduceRight) Array.prototype.reduceRight = function(e) {
        if (typeof e !== 'function') throw new TypeError(e + ' is not a function');
        var f = this.length >>> 0,
            g, h, i = arguments.length === 2;
        if (i) g = arguments[1];
        for (h = f - 1; h > -1; --h)
            if (this.hasOwnProperty(h))
                if (i === false) { g = this[h];
                    i = true; } else g = e(g, this[h], h, this);
        if (i === false) throw new TypeError('Reduce of empty array with no initial value');
        return g; }; })();
if (typeof Number.isFinite !== 'function') Number.isFinite = function(a) {
    return typeof a === 'number' && isFinite(a); };
if (typeof Number.isNaN !== 'function') Number.isNaN = function(a) {
    return typeof a === 'number' && isNaN(a); };
if (typeof Number.EPSILON !== 'number') Number.EPSILON = Math.pow(2, -52);
if (typeof Number.MAX_SAFE_INTEGER !== 'number') Number.MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;
if (typeof Number.MIN_SAFE_INTEGER !== 'number') Number.MIN_SAFE_INTEGER = -1 * Number.MAX_SAFE_INTEGER;
if (typeof Number.isInteger !== 'function') Number.isInteger = function(a) {
    return Number.isFinite(a) && Math.floor(a) === a; };
if (typeof Number.isSafeInteger !== 'function') Number.isSafeInteger = function(a) {
    return Number.isFinite(a) && a >= Number.MIN_SAFE_INTEGER && a <= Number.MAX_SAFE_INTEGER && Math.floor(a) === a; };
(function() { 'use strict';
    var a = Array.prototype.indexOf;
    if (!Array.prototype.includes) Array.prototype.includes = function(e) { 'use strict';
        if (e !== undefined && Array.isArray(this) && !Number.isNaN(e)) return a.apply(this, arguments) !== -1;
        var f = Object(this),
            g = f.length ? b(f.length) : 0;
        if (g === 0) return false;
        var h = arguments.length > 1 ? c(arguments[1]) : 0,
            i = h < 0 ? Math.max(g + h, 0) : h,
            j = Number.isNaN(e);
        while (i < g) {
            var k = f[i];
            if (k === e || j && Number.isNaN(k)) return true;
            i++; }
        return false; };

    function b(e) {
        return Math.min(Math.max(c(e), 0), Number.MAX_SAFE_INTEGER); }

    function c(e) {
        var f = Number(e);
        return Number.isFinite(f) && f !== 0 ? d(f) * Math.floor(Math.abs(f)) : f; }

    function d(e) {
        return e >= 0 ? 1 : -1; } })();
if (!Date.now) Date.now = function() {
    return new Date().getTime(); };
(function() {
    if (!Date.prototype.toISOString) {
        var a = function(b) {
            if (b < 10) return '0' + b;
            return b; };
        Date.prototype.toISOString = function() {
            if (!isFinite(this)) throw new Error('Invalid time value');
            var b = this.getUTCFullYear();
            b = (b < 0 ? '-' : b > 9999 ? '+' : '') + ('00000' + Math.abs(b)).slice(0 <= b && b <= 9999 ? -4 : -6);
            return b + '-' + a(this.getUTCMonth() + 1) + '-' + a(this.getUTCDate()) + 'T' + a(this.getUTCHours()) + ':' + a(this.getUTCMinutes()) + ':' + a(this.getUTCSeconds()) + '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z'; }; } })();
if (!Function.prototype.bind) Function.prototype.bind = function(a) {
    if (typeof this != 'function') throw new TypeError('Bind must be called on a function');
    var b = this,
        c = Array.prototype.slice,
        d = c.call(arguments, 1);

    function e() {
        var f = b.prototype && this instanceof b;
        return b.apply(!f && a || this, d.concat(c.call(arguments))); }
    e.prototype = b.prototype;
    e.displayName = 'bound:' + (b.displayName || b.name || '(?)');
    e.toString = function f() {
        return 'bound: ' + b; };
    return e; };

(function() {
    var a = {},
        b = function(i, j) {
            if (!i && !j) return null;
            var k = {};
            if (typeof i !== 'undefined') k.type = i;
            if (typeof j !== 'undefined') k.signature = j;
            return k; },
        c = function(i, j) {
            return b(i && /^[A-Z]/.test(i) ? i : undefined, j && (j.params && j.params.length || j.returns) ? 'function(' + (j.params ? j.params.map(function(k) {
                return (/\?/.test(k) ? '?' + k.replace('?', '') : k); }).join(',') : '') + ')' + (j.returns ? ':' + j.returns : '') : undefined); },
        d = function(i, j, k) {
            return i; },
        e = function(i, j, k) {
            if ('sourcemeta' in __transform_includes) i.__SMmeta = j;
            if ('typechecks' in __transform_includes) {
                var l = c(j ? j.name : undefined, k);
                if (l) __w(i, l); }
            return i; },
        f = function(i, j, k) {
            return k.apply(i, j); },
        g = function(i, j, k, l) {
            if (l && l.params) __t.apply(i, l.params);
            var m = k.apply(i, j);
            if (l && l.returns) __t([m, l.returns]);
            return m; },
        h = function(i, j, k, l, m) {
            if (m) {
                if (!m.callId) m.callId = m.module + ':' + (m.line || 0) + ':' + (m.column || 0);
                var n = m.callId;
                a[n] = (a[n] || 0) + 1; }
            return k.apply(i, j); };
    if (typeof __transform_includes === 'undefined') { __annotator = d;
        __bodyWrapper = f; } else { __annotator = e;
        if ('codeusage' in __transform_includes) { __annotator = d;
            __bodyWrapper = h;
            __bodyWrapper.getCodeUsage = function() {
                return a; };
            __bodyWrapper.clearCodeUsage = function() { a = {}; }; } else if ('typechecks' in __transform_includes) { __bodyWrapper = g; } else __bodyWrapper = f; } })();
var JSON = void 0;
if (!JSON) JSON = {};
(function() { 'use strict';

    function f(n) {
        return n < 10 ? '0' + n : n; }
    if (typeof Date.prototype.toJSON !== 'function') { Date.prototype.toJSON = function(key) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + '-' + f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate()) + 'T' + f(this.getUTCHours()) + ':' + f(this.getUTCMinutes()) + ':' + f(this.getUTCSeconds()) + 'Z' : null; };
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(key) {
            return this.valueOf(); }; }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap = void 0,
        indent = void 0,
        meta = { '\b': '\\b', '\t': '\\t', '\n': '\\n', '\f': '\\f', '\r': '\\r', '"': '\\"', '\\': '\\\\' },
        rep = void 0;

    function quote(string) { escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
            var c = meta[a];
            return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4); }) + '"' : '"' + string + '"'; }

    function str(key, holder) {
        var i = void 0,
            k = void 0,
            v = void 0,
            length = void 0,
            mind = gap,
            partial = void 0,
            value = holder[key];
        if (value && typeof value === 'object' && typeof value.toJSON === 'function') value = value.toJSON(key);
        if (typeof rep === 'function') value = rep.call(holder, key, value);
        switch (typeof value) {
            case 'string':
                return quote(value);
            case 'number':
                return isFinite(value) ? String(value) : 'null';
            case 'boolean':
            case 'null':
                return String(value);
            case 'object':
                if (!value) return 'null';
                gap += indent;
                partial = [];
                if (Object.prototype.toString.apply(value) === '[object Array]') { length = value.length;
                    for (i = 0; i < length; i += 1) partial[i] = str(i, value) || 'null';
                    v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[' + partial.join(',') + ']';
                    gap = mind;
                    return v; }
                if (rep && typeof rep === 'object') { length = rep.length;
                    for (i = 0; i < length; i += 1)
                        if (typeof rep[i] === 'string') { k = rep[i];
                            v = str(k, value);
                            if (v) partial.push(quote(k) + (gap ? ': ' : ':') + v); } } else
                    for (k in value)
                        if (Object.prototype.hasOwnProperty.call(value, k)) { v = str(k, value);
                            if (v) partial.push(quote(k) + (gap ? ': ' : ':') + v); }
                v = partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' : '{' + partial.join(',') + '}';
                gap = mind;
                return v; } }
    if (typeof JSON.stringify !== 'function') JSON.stringify = function(value, replacer, space) {
        var i = void 0;
        gap = '';
        indent = '';
        if (typeof space === 'number') {
            for (i = 0; i < space; i += 1) indent += ' '; } else if (typeof space === 'string') indent = space;
        rep = replacer;
        if (replacer && typeof replacer !== 'function' && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) throw new Error('JSON.stringify');
        return str('', { '': value }); };
    if (typeof JSON.parse !== 'function') JSON.parse = function(text, reviver) {
        var j = void 0;

        function walk(holder, key) {
            var k = void 0,
                v = void 0,
                value = holder[key];
            if (value && typeof value === 'object')
                for (k in value)
                    if (Object.prototype.hasOwnProperty.call(value, k)) { v = walk(value, k);
                        if (v !== undefined) { value[k] = v; } else delete value[k]; }
            return reviver.call(holder, key, value); }
        text = String(text);
        cx.lastIndex = 0;
        if (cx.test(text)) text = text.replace(cx, function(a) {
            return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4); });
        if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) { j = eval('(' + text + ')');
            return typeof reviver === 'function' ? walk({ '': j }, '') : j; }
        throw new SyntaxError('JSON.parse'); }; })();
if (JSON.stringify(["\u2028\u2029"]) === '["\u2028\u2029"]') JSON.stringify = function(a) {
    var b = /\u2028/g,
        c = /\u2029/g;
    return function d(e, f, g) {
        var h = a.call(this, e, f, g);
        if (h) {
            if (-1 < h.indexOf('\u2028')) h = h.replace(b, '\\u2028');
            if (-1 < h.indexOf('\u2029')) h = h.replace(c, '\\u2029'); }
        return h; }; }(JSON.stringify);
if (typeof JSON === 'object' && typeof JSON.parse === 'function') try { JSON.parse(null); } catch (e) { JSON.originalParse = JSON.parse;
    JSON.parse = function(a) {
        return a === null ? null : JSON.originalParse(a); }; }
if (typeof Math.log2 !== 'function') Math.log2 = function(a) {
    return Math.log(a) / Math.LN2; };
if (typeof Math.log10 !== 'function') Math.log10 = function(a) {
    return Math.log(a) / Math.LN10; };
if (typeof Math.trunc !== 'function') Math.trunc = function(a) {
    return a < 0 ? Math.ceil(a) : Math.floor(a); };
(function() {
    var a = !{ toString: true }.propertyIsEnumerable('toString');
    if (!a) return;
    var b = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'constructor'];
    Object.keys = function(c) {
        var d = typeof c;
        if (d != 'object' && d != 'function' || c === null) throw new TypeError('Object.keys called on non-object');
        var e = Object.prototype.hasOwnProperty,
            f = [];
        for (var g in c)
            if (e.call(c, g)) f.push(g);
        for (var h = 0; h < b.length; h++) {
            var i = b[h];
            if (e.call(c, i)) f.push(i); }
        return f; };
    Object.assign = function(c, d) {
        if (c == null) throw new TypeError('Object.assign target cannot be null or undefined');
        var e = Object(c),
            f = Object.prototype.hasOwnProperty;
        for (var g = 1; g < arguments.length; g++) {
            var h = arguments[g];
            if (h == null) continue;
            var i = Object(h);
            for (var j in i)
                if (f.call(i, j)) e[j] = i[j];
            for (var k = 0; k < b.length; k++) {
                var l = b[k];
                if (f.call(i, l)) e[l] = i[l]; } }
        return e; }; })();
if (!Object.create) Object.create = function(a) {
    var b = typeof a;
    if (b != 'object' && b != 'function') throw new TypeError('Object prototype may only be a Object or null');
    var c = function() {
        if (a === null) { this.__proto__ = a;
            delete this.__proto__; } };
    c.prototype = a;
    return new c(); };
if (!Object.keys) Object.keys = function a(b) {
    var c = typeof b;
    if (c != 'object' && c != 'function' || b === null) throw new TypeError('Object.keys called on non-object');
    var d = Object.prototype.hasOwnProperty,
        e = [];
    for (var f in b)
        if (d.call(b, f)) e.push(f);
    return e; };
if (!Object.freeze) Object.freeze = function(a) {
    return a; };
if (!Object.seal) Object.seal = function(a) {
    return a; };
(function() {
    try { Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value'); } catch (a) { Object.getOwnPropertyDescriptor = function(b) {
            return function c(d, e) {
                try {
                    return b(d, e); } catch (f) {
                    return { enumerable: d.propertyIsEnumerable(e), configurable: true, get: d.__lookupGetter__(e), set: d.__lookupSetter__(e) }; } }; }(Object.getOwnPropertyDescriptor); } })();
(function() {
    if (Object.assign) return;
    var a = Object.prototype.hasOwnProperty,
        b;
    if (Object.keys && Object.keys.name !== 'object_keys_polyfill') { b = function(c, d) {
            var e = Object.keys(d);
            for (var f = 0; f < e.length; f++) c[e[f]] = d[e[f]]; }; } else b = function(c, d) {
        for (var e in d)
            if (a.call(d, e)) c[e] = d[e]; };
    Object.assign = function(c, d) {
        if (c == null) throw new TypeError('Object.assign target cannot be null or undefined');
        var e = Object(c);
        for (var f = 1; f < arguments.length; f++) {
            var g = arguments[f];
            if (g != null) b(e, Object(g)); }
        return e; }; })();
(function() {
    var a = Object.prototype.hasOwnProperty;
    if (typeof Object.entries !== 'function') Object.entries = function(b) {
        if (b == null) throw new TypeError('Object.entries called on non-object');
        var c = [];
        for (var d in b)
            if (a.call(b, d)) c.push([d, b[d]]);
        return c; };
    if (typeof Object.values !== 'function') Object.values = function(b) {
        if (b == null) throw new TypeError('Object.values called on non-object');
        var c = [];
        for (var d in b)
            if (a.call(b, d)) c.push(b[d]);
        return c; }; })();
(function() {
    if (!Object.is) Object.is = function(a, b) {
        if (a === b) {
            return a !== 0 || 1 / a === 1 / b; } else return a !== a && b !== b; }; })();
if ({}.hasOwnProperty('__proto__')) Object.prototype.hasOwnProperty = function(a) {
    return function b(c) {
        return c != '__proto__' && a.call(this, c); }; }(Object.prototype.hasOwnProperty);
(function(a) { a.__m = function(b, c) { b.__SMmeta = c;
        return b; }; })(this);
if (typeof String.fromCodePoint !== 'function') String.fromCodePoint = function() { 'use strict';
    var a = [];
    for (var b = arguments.length, c = Array(b), d = 0; d < b; d++) c[d] = arguments[d];
    for (var e = 0; e < c.length; e++) {
        var f = Number(c[e]);
        if (!isFinite(f) || Math.floor(f) != f || f < 0 || 1114111 < f) throw RangeError('Invalid code point ' + f);
        if (f < 65536) { a.push(String.fromCharCode(f)); } else { f -= 65536;
            a.push(String.fromCharCode((f >> 10) + 55296), String.fromCharCode(f % 1024 + 56320)); } }
    return a.join(''); };
if (!String.prototype.startsWith) String.prototype.startsWith = function(a) { "use strict";
    if (this == null) throw TypeError();
    var b = String(this),
        c = arguments.length > 1 ? Number(arguments[1]) || 0 : 0,
        d = Math.min(Math.max(c, 0), b.length);
    return b.indexOf(String(a), c) == d; };
if (!String.prototype.endsWith) String.prototype.endsWith = function(a) { "use strict";
    if (this == null) throw TypeError();
    var b = String(this),
        c = b.length,
        d = String(a),
        e = arguments.length > 1 ? Number(arguments[1]) || 0 : c,
        f = Math.min(Math.max(e, 0), c),
        g = f - d.length;
    if (g < 0) return false;
    return b.lastIndexOf(d, g) == g; };
if (!String.prototype.includes) String.prototype.includes = function(a) { "use strict";
    if (this == null) throw TypeError();
    var b = String(this),
        c = arguments.length > 1 ? Number(arguments[1]) || 0 : 0;
    return b.indexOf(String(a), c) != -1; };
if (!String.prototype.contains) String.prototype.contains = String.prototype.includes;
if (!String.prototype.repeat) String.prototype.repeat = function(a) { "use strict";
    if (this == null) throw TypeError();
    var b = String(this);
    a = Number(a) || 0;
    if (a < 0 || a === Infinity) throw RangeError();
    if (a === 1) return b;
    var c = '';
    while (a) {
        if (a & 1) c += b;
        if (a >>= 1) b += b; }
    return c; };
if (!String.prototype.codePointAt) String.prototype.codePointAt = function(a) { 'use strict';
    if (this == null) throw TypeError('Invalid context: ' + this);
    var b = String(this),
        c = b.length;
    a = Number(a) || 0;
    if (a < 0 || c <= a) return undefined;
    var d = b.charCodeAt(a);
    if (55296 <= d && d <= 56319 && c > a + 1) {
        var e = b.charCodeAt(a + 1);
        if (56320 <= e && e <= 57343) return (d - 55296) * 1024 + e - 56320 + 65536; }
    return d; };
if (!String.prototype.trimLeft) String.prototype.trimLeft = function() {
    return this.replace(/^\s+/, ''); };
if (!String.prototype.trimRight) String.prototype.trimRight = function() {
    return this.replace(/\s+$/, ''); };
if (!String.prototype.trim) String.prototype.trim = function() {
    if (this == null) throw new TypeError('String.prototype.trim called on null or undefined');
    return String.prototype.replace.call(this, /^\s+|\s+$/g, ''); };
(function() {
    var a, b = String.prototype.split,
        c = /()??/.exec("")[1] === a;
    String.prototype.split = function(d, e) {
        var f = this;
        if (Object.prototype.toString.call(d) !== "[object RegExp]") return b.call(f, d, e);
        var g = [],
            h = (d.ignoreCase ? "i" : "") + (d.multiline ? "m" : "") + (d.extended ? "x" : "") + (d.sticky ? "y" : ""),
            i = 0,
            d = new RegExp(d.source, h + "g"),
            j, k, l, m;
        f += "";
        if (!c) j = new RegExp("^" + d.source + "$(?!\\s)", h);
        e = e === a ? -1 >>> 0 : e >>> 0;
        while (k = d.exec(f)) { l = k.index + k[0].length;
            if (l > i) { g.push(f.slice(i, k.index));
                if (!c && k.length > 1) k[0].replace(j, function() {
                    for (var n = 1; n < arguments.length - 2; n++)
                        if (arguments[n] === a) k[n] = a; });
                if (k.length > 1 && k.index < f.length) Array.prototype.push.apply(g, k.slice(1));
                m = k[0].length;
                i = l;
                if (g.length >= e) break; }
            if (d.lastIndex === k.index) d.lastIndex++; }
        if (i === f.length) {
            if (m || !d.test("")) g.push(""); } else g.push(f.slice(i));
        return g.length > e ? g.slice(0, e) : g; }; })();
__t = function(a) {
    return a[0]; };
__w = function(a) {
    return a; };
(function(a) {
    var b = a.babelHelpers = {},
        c = Object.prototype.hasOwnProperty;
    b.inherits = function(d, e) { Object.assign(d, e);
        d.prototype = Object.create(e && e.prototype);
        d.prototype.constructor = d;
        d.__superConstructor__ = e;
        return e; };
    b._extends = Object.assign;
    b['extends'] = b._extends;
    b.objectWithoutProperties = function(d, e) {
        var f = {};
        for (var g in d) {
            if (!c.call(d, g) || e.indexOf(g) >= 0) continue;
            f[g] = d[g]; }
        return f; };
    b.taggedTemplateLiteralLoose = function(d, e) { d.raw = e;
        return d; };
    b.bind = Function.prototype.bind; })(typeof global === 'undefined' ? self : global);
if (typeof console == 'undefined')(function() {
    function a() {}
    console = { log: a, info: a, warn: a, debug: a, dir: a, error: a }; })();
(function(a) {
    var b = a.performance;
    if (b && b.setResourceTimingBufferSize) { b.setResourceTimingBufferSize(100000);
        b.setResourceTimingBufferSize = function() {}; } })(this);
var require, __d;
(function(a) {
    var b = {},
        c = {},
        d = ['global', 'require', 'requireDynamic', 'requireLazy', 'module', 'exports'];
    require = function(e, f) {
        if (c.hasOwnProperty(e)) return c[e];
        if (!b.hasOwnProperty(e)) {
            if (f) return null;
            throw new Error('Module ' + e + ' has not been defined'); }
        var g = b[e],
            h = g.deps,
            i = g.factory.length,
            j, k = [];
        for (var l = 0; l < i; l++) {
            switch (h[l]) {
                case 'module':
                    j = g;
                    break;
                case 'exports':
                    j = g.exports;
                    break;
                case 'global':
                    j = a;
                    break;
                case 'require':
                    j = require;
                    break;
                case 'requireDynamic':
                    j = null;
                    break;
                case 'requireLazy':
                    j = null;
                    break;
                default:
                    j = require.call(null, h[l]); }
            k.push(j); }
        g.factory.apply(a, k);
        c[e] = g.exports;
        return g.exports; };
    require.__markCompiled = function() {};
    __d = function(e, f, g, h) {
        if (typeof g == 'function') { b[e] = { factory: g, deps: d.concat(f), exports: {} };
            if (h === 3) require.call(null, e); } else c[e] = g; }; })(this);
__d("sprintf", [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();

    function h(i) {
        for (var j = arguments.length, k = Array(j > 1 ? j - 1 : 0), l = 1; l < j; l++) k[l - 1] = arguments[l];
        var m = 0;
        return i.replace(/%s/g, function(n) {
            return k[m++]; }); }
    f.exports = h; }, null);
__d('Log', ['sprintf'], function a(b, c, d, e, f, g, h) {
    if (c.__markCompiled) c.__markCompiled();
    var i = { DEBUG: 3, INFO: 2, WARNING: 1, ERROR: 0 };

    function j(l, m) {
        var n = Array.prototype.slice.call(arguments, 2),
            o = h.apply(null, n),
            p = window.console;
        if (p && k.level >= m) p[l in p ? l : 'log'](o); }
    var k = { level: -1, Level: i, debug: j.bind(null, 'debug', i.DEBUG), info: j.bind(null, 'info', i.INFO), warn: j.bind(null, 'warn', i.WARNING), error: j.bind(null, 'error', i.ERROR) };
    f.exports = k; }, null);
__d('QueryString', [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();

    function h(l) {
        var m = [];
        Object.keys(l).sort().forEach(function(n) {
            var o = l[n];
            if (typeof o === 'undefined') return;
            if (o === null) { m.push(n);
                return; }
            m.push(encodeURIComponent(n) + '=' + encodeURIComponent(o)); });
        return m.join('&'); }

    function i(l, m) {
        var n = {};
        if (l === '') return n;
        var o = l.split('&');
        for (var p = 0; p < o.length; p++) {
            var q = o[p].split('=', 2),
                r = decodeURIComponent(q[0]);
            if (m && n.hasOwnProperty(r)) throw new URIError('Duplicate key: ' + r);
            n[r] = q.length === 2 ? decodeURIComponent(q[1]) : null; }
        return n; }

    function j(l, m) {
        return l + (l.indexOf('?') !== -1 ? '&' : '?') + (typeof m === 'string' ? m : k.encode(m)); }
    var k = { encode: h, decode: i, appendToUrl: j };
    f.exports = k; }, null);
__d('eprintf', [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = function(i) {
        var j = Array.prototype.slice.call(arguments).map(function(m) {
                return String(m); }),
            k = i.split('%s').length - 1;
        if (k !== j.length - 1) return h('eprintf args number mismatch: %s', JSON.stringify(j));
        var l = 1;
        return i.replace(/%s/g, function(m) {
            return String(j[l++]); }); };
    f.exports = h; }, null);
__d('ex', ['eprintf'], function a(b, c, d, e, f, g, h) {
    if (c.__markCompiled) c.__markCompiled();
    var i = function() {
        for (var j = arguments.length, k = Array(j), l = 0; l < j; l++) k[l] = arguments[l];
        k = k.map(function(m) {
            return String(m); });
        if (k[0].split('%s').length !== k.length) return i('ex args number mismatch: %s', JSON.stringify(k));
        return i._prefix + JSON.stringify(k) + i._suffix; };
    i._prefix = '<![EX[';
    i._suffix = ']]>';
    f.exports = i; }, null);
__d('invariant', ['ex', 'sprintf'], function a(b, c, d, e, f, g, h, i) { 'use strict';
    if (c.__markCompiled) c.__markCompiled();
    var j = h;

    function k(l, m) {
        if (!l) {
            var n = void 0;
            if (m === undefined) { n = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.'); } else {
                var o = [m];
                for (var p = 2, q = arguments.length; p < q; p++) o.push(arguments[p]);
                n = new Error(j.apply(null, o));
                n.name = 'Invariant Violation';
                n.messageWithParams = o; }
            n.framesToPop = 1;
            throw n; } }
    f.exports = k; }, null);
__d('wrapFunction', [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = {},
        i = function j(k, l, m) {
            var n = l || 'default';
            return function() {
                var o = n in h ? h[n](k, m) : k;
                return o.apply(this, arguments); }; };
    i.setWrapper = function(j) {
        var k = arguments.length <= 1 || arguments[1] === undefined ? 'default' : arguments[1];
        h[k] = j; };
    f.exports = i; }, null);
__d('DOMEventListener', ['invariant', 'wrapFunction'], function a(b, c, d, e, f, g, h, i) {
    if (c.__markCompiled) c.__markCompiled();
    var j = void 0,
        k = void 0;
    if (window.addEventListener) { j = function(m, n, o) { o.wrapper = i(o, 'entry', 'DOMEventListener.add ' + n);
            m.addEventListener(n, o.wrapper, false); };
        k = function(m, n, o) { m.removeEventListener(n, o.wrapper, false); }; } else if (window.attachEvent) { j = function(m, n, o) { o.wrapper = i(o, 'entry', 'DOMEventListener.add ' + n);!m.attachEvent ? h(0) : void 0;
            m.attachEvent('on' + n, o.wrapper); };
        k = function(m, n, o) {!m.detachEvent ? h(0) : void 0;
            m.detachEvent('on' + n, o.wrapper); }; } else k = j = function() {};
    var l = { add: function(m, n, o) { j(m, n, o);
            return { remove: function() { k(m, n, o); } }; }, remove: k };
    f.exports = l; }, null);
__d("DOMWrapper", [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h, i, j = { setRoot: function(k) { h = k; }, getRoot: function() {
            return h || document.body; }, setWindow: function(k) { i = k; }, getWindow: function() {
            return i || self; } };
    f.exports = j; }, null);
__d('UserAgent_DEPRECATED', [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = false,
        i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;

    function x() {
        if (h) return;
        h = true;
        var z = navigator.userAgent,
            aa = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(z),
            ba = /(Mac OS X)|(Windows)|(Linux)/.exec(z);
        t = /\b(iPhone|iP[ao]d)/.exec(z);
        u = /\b(iP[ao]d)/.exec(z);
        r = /Android/i.exec(z);
        v = /FBAN\/\w+;/i.exec(z);
        w = /Mobile/i.exec(z);
        s = !!/Win64/.exec(z);
        if (aa) { i = aa[1] ? parseFloat(aa[1]) : aa[5] ? parseFloat(aa[5]) : NaN;
            if (i && document && document.documentMode) i = document.documentMode;
            var ca = /(?:Trident\/(\d+.\d+))/.exec(z);
            n = ca ? parseFloat(ca[1]) + 4 : i;
            j = aa[2] ? parseFloat(aa[2]) : NaN;
            k = aa[3] ? parseFloat(aa[3]) : NaN;
            l = aa[4] ? parseFloat(aa[4]) : NaN;
            if (l) { aa = /(?:Chrome\/(\d+\.\d+))/.exec(z);
                m = aa && aa[1] ? parseFloat(aa[1]) : NaN; } else m = NaN; } else i = j = k = m = l = NaN;
        if (ba) {
            if (ba[1]) {
                var da = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(z);
                o = da ? parseFloat(da[1].replace('_', '.')) : true; } else o = false;
            p = !!ba[2];
            q = !!ba[3]; } else o = p = q = false; }
    var y = { ie: function() {
            return x() || i; }, ieCompatibilityMode: function() {
            return x() || n > i; }, ie64: function() {
            return y.ie() && s; }, firefox: function() {
            return x() || j; }, opera: function() {
            return x() || k; }, webkit: function() {
            return x() || l; }, safari: function() {
            return y.webkit(); }, chrome: function() {
            return x() || m; }, windows: function() {
            return x() || p; }, osx: function() {
            return x() || o; }, linux: function() {
            return x() || q; }, iphone: function() {
            return x() || t; }, mobile: function() {
            return x() || t || u || r || w; }, nativeApp: function() {
            return x() || v; }, android: function() {
            return x() || r; }, ipad: function() {
            return x() || u; } };
    f.exports = y; }, null);
__d('guid', [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();

    function h() {
        return 'f' + (Math.random() * (1 << 30)).toString(16).replace('.', ''); }
    f.exports = h; }, null);
__d('htmlSpecialChars', [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = /&/g,
        i = /</g,
        j = />/g,
        k = /"/g,
        l = /'/g;

    function m(n) {
        if (typeof n == 'undefined' || n === null || !n.toString) return '';
        if (n === false) {
            return '0'; } else if (n === true) return '1';
        return n.toString().replace(h, '&amp;').replace(k, '&quot;').replace(l, '&#039;').replace(i, '&lt;').replace(j, '&gt;'); }
    f.exports = m; }, null);
__d('Flash', ['DOMEventListener', 'DOMWrapper', 'QueryString', 'UserAgent_DEPRECATED', 'guid', 'htmlSpecialChars'], function a(b, c, d, e, f, g, h, i, j, k, l, m) {
    if (c.__markCompiled) c.__markCompiled();
    var n = {},
        o, p = i.getWindow().document;

    function q(v) {
        var w = p.getElementById(v);
        if (w) w.parentNode.removeChild(w);
        delete n[v]; }

    function r() {
        for (var v in n)
            if (n.hasOwnProperty(v)) q(v); }

    function s(v) {
        return v.replace(/\d+/g, function(w) {
            return '000'.substring(w.length) + w; }); }

    function t(v) {
        if (!o) {
            if (k.ie() >= 9) h.add(window, 'unload', r);
            o = true; }
        n[v] = v; }
    var u = { embed: function(v, w, x, y) {
            var z = l();
            v = m(v).replace(/&amp;/g, '&');
            x = babelHelpers['extends']({ allowscriptaccess: 'always', flashvars: y, movie: v }, x);
            if (typeof x.flashvars == 'object') x.flashvars = j.encode(x.flashvars);
            var aa = [];
            for (var ba in x)
                if (x.hasOwnProperty(ba) && x[ba]) aa.push('<param name="' + m(ba) + '" value="' + m(x[ba]) + '">');
            var ca = w.appendChild(p.createElement('span')),
                da = '<object ' + (k.ie() ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ' : 'type="application/x-shockwave-flash"') + 'data="' + v + '" ' + (x.height ? 'height="' + x.height + '" ' : '') + (x.width ? 'width="' + x.width + '" ' : '') + 'id="' + z + '">' + aa.join('') + '</object>';
            ca.innerHTML = da;
            var ea = ca.firstChild;
            t(z);
            return ea; }, remove: q, getVersion: function() {
            var v = 'Shockwave Flash',
                w = 'application/x-shockwave-flash',
                x = 'ShockwaveFlash.ShockwaveFlash',
                y;
            if (navigator.plugins && typeof navigator.plugins[v] == 'object') {
                var z = navigator.plugins[v].description;
                if (z && navigator.mimeTypes && navigator.mimeTypes[w] && navigator.mimeTypes[w].enabledPlugin) y = z.match(/\d+/g); }
            if (!y) try { y = new ActiveXObject(x).GetVariable('$version').match(/(\d+),(\d+),(\d+),(\d+)/);
                y = Array.prototype.slice.call(y, 1); } catch (aa) {}
            return y; }, getVersionString: function() {
            var v = u.getVersion();
            return v ? v.join('.') : ''; }, checkMinVersion: function(v) {
            var w = u.getVersion();
            if (!w) return false;
            return s(w.join('.')) >= s(v); }, isAvailable: function() {
            return !!u.getVersion(); } };
    f.exports = u; }, null);
__d('dotAccess', [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();

    function h(i, j, k) {
        var l = j.split('.');
        do {
            var m = l.shift();
            i = i[m] || k && (i[m] = {}); } while (l.length && i);
        return i; }
    f.exports = h; }, null);
__d('GlobalCallback', ['DOMWrapper', 'dotAccess', 'guid', 'wrapFunction'], function a(b, c, d, e, f, g, h, i, j, k) {
    if (c.__markCompiled) c.__markCompiled();
    var l, m, n = { setPrefix: function(o) { l = i(h.getWindow(), o, true);
            m = o; }, create: function(o, p) {
            if (!l) this.setPrefix('__globalCallbacks');
            var q = j();
            l[q] = k(o, 'entry', p || 'GlobalCallback');
            return m + '.' + q; }, remove: function(o) {
            var p = o.substring(m.length + 1);
            delete l[p]; } };
    f.exports = n; }, null);
__d("emptyFunction", [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();

    function h(j) {
        return function() {
            return j; }; }
    var i = function() {};
    i.thatReturns = h;
    i.thatReturnsFalse = h(false);
    i.thatReturnsTrue = h(true);
    i.thatReturnsNull = h(null);
    i.thatReturnsThis = function() {
        return this; };
    i.thatReturnsArgument = function(j) {
        return j; };
    f.exports = i; }, null);
__d('XDM', ['DOMEventListener', 'DOMWrapper', 'emptyFunction', 'Flash', 'GlobalCallback', 'guid', 'Log', 'UserAgent_DEPRECATED', 'wrapFunction'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    if (c.__markCompiled) c.__markCompiled();
    var q = {},
        r = { transports: [] },
        s = i.getWindow();

    function t(w) {
        var x = {},
            y = w.length,
            z = r.transports;
        while (y--) x[w[y]] = 1;
        y = z.length;
        while (y--) {
            var aa = z[y],
                ba = q[aa];
            if (!x[aa] && ba.isAvailable()) return aa; } }
    var u = { register: function(w, x) { n.debug('Registering %s as XDM provider', w);
            r.transports.push(w);
            q[w] = x; }, create: function(w) {
            if (!w.whenReady && !w.onMessage) { n.error('An instance without whenReady or onMessage makes no sense');
                throw new Error('An instance without whenReady or ' + 'onMessage makes no sense'); }
            if (!w.channel) { n.warn('Missing channel name, selecting at random');
                w.channel = m(); }
            if (!w.whenReady) w.whenReady = j;
            if (!w.onMessage) w.onMessage = j;
            var x = w.transport || t(w.blacklist || []),
                y = q[x];
            if (y && y.isAvailable()) { n.debug('%s is available', x);
                y.init(w);
                return x; } } };
    u.register('flash', function() {
        var w = false,
            x, y = false,
            z = 15000,
            aa;
        return { isAvailable: function() {
                return k.checkMinVersion('8.0.24'); }, init: function(ba) { n.debug('init flash: ' + ba.channel);
                var ca = { send: function(fa, ga, ha, ia) { n.debug('sending to: %s (%s)', ga, ia);
                        x.postMessage(fa, ga, ia); } };
                if (w) { ba.whenReady(ca);
                    return; }
                var da = ba.root.appendChild(s.document.createElement('div')),
                    ea = l.create(function() { l.remove(ea);
                        clearTimeout(aa);
                        n.info('xdm.swf called the callback');
                        var fa = l.create(function(ga, ha) { ga = decodeURIComponent(ga);
                            ha = decodeURIComponent(ha);
                            n.debug('received message %s from %s', ga, ha);
                            ba.onMessage(ga, ha); }, 'xdm.swf:onMessage');
                        x.init(ba.channel, fa);
                        ba.whenReady(ca); }, 'xdm.swf:load');
                x = k.embed(ba.flashUrl, da, null, { protocol: location.protocol.replace(':', ''), host: location.host, callback: ea, log: y });
                aa = setTimeout(function() { n.warn('The Flash component did not load within %s ms - ' + 'verify that the container is not set to hidden or invisible ' + 'using CSS as this will cause some browsers to not load ' + 'the components', z); }, z);
                w = true; } }; }());
    var v = /\.facebook\.com(\/|$)/;
    u.register('postmessage', function() {
        var w = false;
        return { isAvailable: function() {
                return !!s.postMessage; }, init: function(x) { n.debug('init postMessage: ' + x.channel);
                var y = '_FB_' + x.channel,
                    z = { send: function(aa, ba, ca, da) {
                            if (s === ca) { n.error('Invalid windowref, equal to window (self)');
                                throw new Error(); }
                            n.debug('sending to: %s (%s)', ba, da);
                            var ea = function() { ca.postMessage('_FB_' + da + aa, ba); };
                            if (o.ie() == 8 || o.ieCompatibilityMode()) { setTimeout(ea, 0); } else ea(); } };
                if (w) { x.whenReady(z);
                    return; }
                h.add(s, 'message', p(function(event) {
                    var aa = event.data,
                        ba = event.origin || 'native';
                    if (!/^(https?:\/\/|native$)/.test(ba)) { n.debug('Received message from invalid origin type: %s', ba);
                        return; }
                    if (ba !== 'native' && !(v.test(location.hostname) || v.test(event.origin))) return;
                    if (typeof aa != 'string') { n.warn('Received message of type %s from %s, expected a string', typeof aa, ba);
                        return; }
                    n.debug('received message %s from %s', aa, ba);
                    if (aa.substring(0, y.length) == y) aa = aa.substring(y.length);
                    x.onMessage(aa, ba); }, 'entry', 'onMessage'));
                x.whenReady(z);
                w = true; } }; }());
    f.exports = u; }, null);
__d('resolveWindow', [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();

    function h(i) {
        var j = window,
            k = i.split('.');
        try {
            for (var m = 0; m < k.length; m++) {
                var n = k[m],
                    o = /^frames\[['"]?([a-zA-Z0-9\-_]+)['"]?\]$/.exec(n);
                if (o) { j = j.frames[o[1]]; } else if (n === 'opener' || n === 'parent' || n === 'top') { j = j[n]; } else return null; } } catch (l) {
            return null; }
        return j; }
    f.exports = h; }, null);
__d('initXdArbiter', ['QueryString', 'resolveWindow', 'Log', 'XDM', 'XDMConfig'], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    (function() {
        var h = c('QueryString'),
            i = c('resolveWindow'),
            j = c('Log'),
            k = c('XDM'),
            l = c('XDMConfig');

        function m(aa) {
            return aa ? aa.replace(/["'<>\(\)\\@]/g, '') : aa; }

        function n() {
            if (!window.chrome || !location.ancestorOrigins) return false;
            return !/\.facebook\.com$/.test(location.ancestorOrigins[1]); }

        function o(aa, ba) {
            if (n()) return '';
            if (window != parent && window.parent != window.parent.parent) try {
                return parent.parent.XdArbiter.register(window, aa, ba); } catch (ca) { j.error('Could not register with XdArbiter in parent.parent'); }
            return ''; }

        function p(aa, ba, ca) {
            if (!aa && n()) { j.error('Can not use parent.parent to reach facebook.com');
                return; }
            var da = aa ? i(aa) : parent.parent;
            try { da.XdArbiter.handleMessage(ba, ca, window); } catch (ea) { j.error('Could not reach facebook.com using %s', aa); } }

        function q(aa, ba) {
            var ca = 50,
                da = function() {
                    if (!--ca) clearInterval(ea);
                    try { aa();
                        clearInterval(ea); } catch (fa) {} },
                ea = setInterval(da, 50);
            da(); }

        function r() {
            var aa = /^https?:\/\/[^\/]*/.exec(u.origin)[0];
            q(function() {
                var ba = i(u.relation).frames['fb_xdm_frame_' + v];
                if (typeof ba.location.search === 'undefined') throw new Error('Proxy not ready');
                if (location.search === ba.location.search) { ba.proxyMessage(t, aa); } else j.error('Version mismatch: %s, %s', location.search, ba.location.search); }, 50); }

        function s() {
            var aa = /^(.*)\/(.*)$/.exec(u.origin)[1];
            if (window.__fbNative && window.__fbNative.postMessage) { window.__fbNative.postMessage(t, aa); } else {
                var ba = function(ca) { window.removeEventListener('fbNativeReady', ba);
                    window.__fbNative.postMessage(t, aa); };
                window.addEventListener('fbNativeReady', ba); } }
        var t = /#(.*)|$/.exec(location.href)[1];
        if (window == top) location.hash = '';
        if (!t) { j.error('xd_arbiter.php loaded without a valid hash, referrer: %s', document.referrer);
            return; }
        var u = h.decode(t, true),
            v = location.protocol.replace(':', '');
        if (window.name.substring(0, 6) === 'blank_') { parent.frames[u.forIframe].require('Arbiter').inform('blankIframeAck', window);
            return; }
        if (u.relation) {
            if (window == top && /FBAN\/\w+;/i.test(navigator.userAgent)) { j.info('Native proxy');
                s(); } else { j.info('Legacy proxy to %s', u.relation);
                r(); }
            return; }
        if (v != /https?/.exec(window.name)[0]) { j.info('Redirection to %s detected, aborting', v);
            return; }
        var w = m(u.transport),
            x = m(u.channel),
            y = m(u.origin),
            z = m(u.xd_name);
        if (!/^https?/.test(y)) { j.error('Invalid origin presented, aborting.');
            return; }
        k.create({ root: document.body, transport: w, channel: x + '_' + v, flashUrl: l.Flash.path, onMessage: function(aa, ba) {
                if (y !== ba) { j.info('Received message from unknown origin %s, expected %s.', ba, y);
                    return; }
                if (!/^FB_RPC:/.test(aa)) aa = h.decode(aa);
                p(aa.relation, aa, y); }, whenReady: function(aa) { window.proxyMessage = function(ea, fa) {
                    if (fa === y) { aa.send(ea, y, parent, x); } else j.error('Failed proxying to %s, expected %s', fa, y); };
                var ba = null,
                    ca = { xd_action: 'proxy_ready', logged_in: /\bc_user=/.test(document.cookie), data: ba },
                    da = o(z, y);
                if (da) ca.registered = da;
                aa.send(h.encode(ca), y, parent, x); } }); })(); }, null);
__d("XDMConfig", [], { "Flash": { "path": "https:\/\/connect.facebook.net\/rsrc.php\/v1\/yW\/r\/yOZN1vHw3Z_.swf" } });
require("initXdArbiter");
require('initXdArbiter');
