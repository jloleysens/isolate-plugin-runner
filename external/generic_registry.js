const registry = {};

module.exports = {
  register: function register(id, anyValue) {
    registry[id] = anyValue;
  },
  get: function get(id) {
    return registry[id];
  },
  unregister: function unregister(id) {
    delete registry[id];
  }
}