// Stub for ws module
// Pulled in by WalletConnect but WebSocket is not available in Next.js client build.
function WebSocketStub() {
  throw new Error("ws shim: WebSocket is not supported in this build context");
}
WebSocketStub.CONNECTING = 0;
WebSocketStub.OPEN = 1;
WebSocketStub.CLOSING = 2;
WebSocketStub.CLOSED = 3;
module.exports = WebSocketStub;
module.exports.default = WebSocketStub;
module.exports.WebSocket = WebSocketStub;
module.exports.Server = class {
  constructor() {
    throw new Error("ws shim: Server is not supported");
  }
};
