const VERSION = 'v1.0.1';

class Plugin {
  constructor(registry) {
    this.registry = registry;
    console.log(`[${VERSION}] constructing plugin!`);
  }

  setup = () => {
    // this.registry.register('MyPlugin', this); // uncomment this to fix segfault
    console.log(`[${VERSION}] setup called!`);
  }

  start = () => {
    console.log(`[${VERSION}] start called!`);
  }

  stop = () => {
    console.log(`[${VERSION}] stop called!`);
  }

  something = () => {
    console.log('oh yeah something v2!');
  }
}

module.exports = { Plugin }