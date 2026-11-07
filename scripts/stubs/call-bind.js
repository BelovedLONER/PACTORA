// Stub for call-bind module
// Pulled in by which-typed-array but not needed in client code.
module.exports = function callBind() {
  return Function.prototype.call.bind(Function.prototype.bind).apply(null, arguments);
};
