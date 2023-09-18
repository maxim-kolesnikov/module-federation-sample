const moduleFileName = 'remoteEntry.js';

const appModule = {
    fileName: moduleFileName,
    name: 'app',
    port: 3001,
};

const homeModule = {
    fileName: moduleFileName,
    name: 'home',
    port: 3002,
    get url() {
        return `//localhost:${this.port}`;
    },
    urlGlobalVariable: 'homeUrl',
    get federationConfig() {
        // app2@[window.app2Url]/remoteEntry.js
        return `${this.name}@[window.${this.urlGlobalVariable}]/${this.fileName}`;
    },
};

module.exports = {
    appModule,
    homeModule,
};
