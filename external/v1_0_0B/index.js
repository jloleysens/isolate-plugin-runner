const VERSION = 'v1.0.0';

class Plugin {
  constructor(registry, plugins) {
    this.registry = registry;
    this.otherPlugins = plugins;
    console.log(`[${VERSION}] constructing plugin!`);
  }

  setup = () => {
    console.log(`[${VERSION}] setup called!`);
  }

  start = () => {
    this.iHandle = setInterval(() => {
      this.registry.get('MyPlugin')?.something();
    }, 100);
  }

  stop = () => {
    clearInterval(this.iHandle);
    console.log(`[${VERSION}] stop called!`);
  }
}

module.exports = { Plugin }