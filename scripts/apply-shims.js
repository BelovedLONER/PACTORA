// PACTORA Post-Install Shim Script
// Applies compatibility shims for Node.js 26 / Next.js 14 deployment environments
// where certain transitive dependencies are missing or broken.
// Only writes stubs if the real package is NOT already installed.

const fs = require("fs");
const path = require("path");

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function writeFileIfMissing(filePath, content) {
  if (fs.existsSync(filePath)) {
    console.log(`[pactora-shims] Skipped (already exists): ${filePath}`);
    return;
  }
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content);
  console.log(`[pactora-shims] Wrote ${filePath}`);
}

const root = process.cwd();
const nodeModules = path.join(root, "node_modules");

console.log("[pactora-shims] Applying compatibility shims...");

// 1. get-proto Reflect.getPrototypeOf shim (only if file missing)
writeFileIfMissing(
  path.join(nodeModules, "get-proto", "Reflect.getPrototypeOf.js"),
  `'use strict';\n\nvar objectGetProto = require('./Object.getPrototypeOf');\n\nmodule.exports = function getProto(O) {\n\treturn objectGetProto(O);\n};\n`
);

// 2. ts-interface-checker stub index.js (only if file missing)
writeFileIfMissing(
  path.join(nodeModules, "ts-interface-checker", "dist", "index.js"),
  `'use strict';\nObject.defineProperty(exports, "__esModule", { value: true });\nexports.createCheckers = exports.Checker = void 0;\nfunction TArray() {}\nfunction TEnumType() {}\nfunction TEnumLiteral() {}\nfunction TFunc() {}\nfunction TIface() {}\nfunction TLiteral() {}\nfunction TName() {}\nfunction TOptional() {}\nfunction TParam() {}\nfunction TParamList() {}\nfunction TProp() {}\nfunction TTuple() {}\nfunction TType() {}\nfunction TUnion() {}\nfunction TIntersection() {}\nexports.TArray = TArray;\nexports.TEnumType = TEnumType;\nexports.TEnumLiteral = TEnumLiteral;\nexports.TFunc = TFunc;\nexports.TIface = TIface;\nexports.TLiteral = TLiteral;\nexports.TName = TName;\nexports.TOptional = TOptional;\nexports.TParam = TParam;\nexports.TParamList = TParamList;\nexports.TProp = TProp;\nexports.TTuple = TTuple;\nexports.TType = TType;\nexports.TUnion = TUnion;\nexports.TIntersection = TIntersection;\nexports.array = TArray;\nexports.enumlit = TEnumLiteral;\nexports.enumtype = TEnumType;\nexports.func = TFunc;\nexports.iface = TIface;\nexports.lit = TLiteral;\nexports.name = TName;\nexports.opt = TOptional;\nexports.param = TParam;\nexports.tuple = TTuple;\nexports.union = TUnion;\nexports.intersection = TIntersection;\nexports.basicTypes = {};\nfunction createCheckers() {\n\treturn { Options: function Options() {} };\n}\nexports.createCheckers = createCheckers;\nexports.Checker = createCheckers;\n`
);

// 3. ts-interface-checker types/index.js stub (only if file missing)
ensureDir(path.join(nodeModules, "ts-interface-checker", "dist", "types"));
writeFileIfMissing(
  path.join(nodeModules, "ts-interface-checker", "dist", "types", "index.js"),
  `'use strict';\nmodule.exports = {\n\tTArray: function TArray() {},\n\tTEnumType: function TEnumType() {},\n\tTEnumLiteral: function TEnumLiteral() {},\n\tTFunc: function TFunc() {},\n\tTIface: function TIface() {},\n\tTLiteral: function TLiteral() {},\n\tTName: function TName() {},\n\tTOptional: function TOptional() {},\n\tTParam: function TParam() {},\n\tTParamList: function TParamList() {},\n\tTProp: function TProp() {},\n\tTTuple: function TTuple() {},\n\tTType: function TType() {},\n\tTUnion: function TUnion() {},\n\tTIntersection: function TIntersection() {},\n\tarray: {},\n\tenumlit: {},\n\tenumtype: {},\n\tfunc: {},\n\tiface: {},\n\tlit: {},\n\tname: {},\n\topt: {},\n\tparam: {},\n\ttuple: {},\n\tunion: {},\n\tintersection: {},\n\tbasicTypes: {}\n};\n`
);

// 4. call-bind shim (only if file missing)
writeFileIfMissing(
  path.join(nodeModules, "call-bind", "index.js"),
  `'use strict';\nvar bind = Function.prototype.call.bind(Function.prototype.bind);\nmodule.exports = function callBind() {\n\treturn bind.apply(null, arguments);\n};\n`
);

// 5. es-object-atoms shim (only if missing)
ensureDir(path.join(nodeModules, "es-object-atoms"));
writeFileIfMissing(
  path.join(nodeModules, "es-object-atoms", "index.js"),
  `'use strict';\nmodule.exports = {\n\t__proto__: null,\n\tObject: null,\n\tFunction: null,\n\tArray: null,\n\tString: null,\n\tBoolean: null,\n\tNumber: null,\n\tSymbol: null,\n\tBigInt: null,\n\tRegExp: null,\n\tDate: null,\n\tMap: null,\n\tSet: null,\n\tPromise: null,\n\tProxy: null,\n\tReflect: null,\n\tError: null,\n\tTypeError: null,\n\tRangeError: null,\n\tSyntaxError: null,\n\tReferenceError: null,\n\tEvalError: null,\n\tURIError: null,\n\tInternalError: null,\n\tArrayBuffer: null,\n\tSharedArrayBuffer: null,\n\tDataView: null,\n\tInt8Array: null,\n\tUint8Array: null,\n\tUint8ClampedArray: null,\n\tInt16Array: null,\n\tUint16Array: null,\n\tInt32Array: null,\n\tUint32Array: null,\n\tFloat32Array: null,\n\tFloat64Array: null,\n\tBigInt64Array: null,\n\tBigUint64Array: null\n};\n`
);
writeFileIfMissing(
  path.join(nodeModules, "es-object-atoms", "package.json"),
  `{ "name": "es-object-atoms", "version": "1.0.0", "main": "index.js", "type": "commonjs" }\n`
);

// 6. whatwg-url shim (only if missing)
ensureDir(path.join(nodeModules, "whatwg-url"));
writeFileIfMissing(
  path.join(nodeModules, "whatwg-url", "index.js"),
  `'use strict';\nmodule.exports = {\n\tURL: typeof URL !== 'undefined' ? URL : null,\n\tURLSearchParams: typeof URLSearchParams !== 'undefined' ? URLSearchParams : null,\n\tparseURL: function (url) {\n\t\ttry { return new URL(url); } catch (e) { return null; }\n\t},\n\tserializeURL: function (url) { return url ? String(url) : ''; },\n\tdomainToUnicode: function (domain) { return domain || ''; },\n\tdomainToASCII: function (domain) { return domain || ''; }\n};\n`
);
writeFileIfMissing(
  path.join(nodeModules, "whatwg-url", "package.json"),
  `{ "name": "whatwg-url", "version": "1.0.0", "main": "index.js", "type": "commonjs" }\n`
);

// 7. ws shim (only if missing)
writeFileIfMissing(
  path.join(nodeModules, "ws", "index.js"),
  `'use strict';\nfunction WebSocketStub() {\n\tthrow new Error('ws shim: WebSocket is not supported in this build context');\n}\nWebSocketStub.CONNECTING = 0;\nWebSocketStub.OPEN = 1;\nWebSocketStub.CLOSING = 2;\nWebSocketStub.CLOSED = 3;\nmodule.exports = WebSocketStub;\nmodule.exports.default = WebSocketStub;\nmodule.exports.WebSocket = WebSocketStub;\nmodule.exports.Server = class {\n\tconstructor() { throw new Error('ws shim: Server is not supported'); }\n};\n`
);
writeFileIfMissing(
  path.join(nodeModules, "ws", "package.json"),
  `{ "name": "ws", "version": "1.0.0", "main": "index.js", "type": "commonjs" }\n`
);

// 8. encoding shim (only if missing)
writeFileIfMissing(
  path.join(nodeModules, "encoding", "index.js"),
  `'use strict';\nmodule.exports = {\n\tconvert: function (str, toEncoding, fromEncoding) {\n\t\treturn Buffer.from(str, fromEncoding || "utf8").toString(toEncoding || "utf8");\n\t},\n\tUTF8: "utf8",\n\tASCII: "ascii",\n\tBase64: "base64",\n\tHex: "hex",\n\tTextEncoder: typeof TextEncoder !== "undefined" ? TextEncoder : function () { this.encode = (s) => new Uint8Array([...s].map(c => c.charCodeAt(0))); },\n\tTextDecoder: typeof TextDecoder !== "undefined" ? TextDecoder : function () { this.decode = (b) => String.fromCharCode(...b); }\n};\n`
);
writeFileIfMissing(
  path.join(nodeModules, "encoding", "package.json"),
  `{ "name": "encoding", "version": "1.0.0", "main": "index.js", "type": "commonjs" }\n`
);

// 9. pino-pretty shim (only if missing)
writeFileIfMissing(
  path.join(nodeModules, "pino-pretty", "index.js"),
  `'use strict';\nmodule.exports = function pinoPretty() {\n\treturn function (stream) { return stream; };\n};\n`
);
writeFileIfMissing(
  path.join(nodeModules, "pino-pretty", "package.json"),
  `{ "name": "pino-pretty", "version": "1.0.0", "main": "index.js", "type": "commonjs" }\n`
);

// NOTE: @tanstack/query-core is now installed as a real dependency,
// so we do NOT create a stub for it.

console.log("[pactora-shims] All compatibility shims applied successfully.");
console.log("[pactora-shims] Build should now proceed.");
