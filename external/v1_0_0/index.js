const VERSION = 'v1.0.0';

class Plugin {
  constructor(registry, plugins) {
    this.registry = registry;
    console.log(`[${VERSION}] constructing plugin!`);
  }

  setup = () => {
    this.registry.register('MyPlugin', this);
    console.log(`[${VERSION}] setup called!`);
  }

  start = () => {
    console.log(`[${VERSION}] start called!`);

  }

  stop = () => {
    this.registry.unregister('plugin');
    console.log(`[${VERSION}] stop called!`);
  }

  something = () => {
    console.log('oh yeah something!');
  }
}

module.exports = { Plugin }