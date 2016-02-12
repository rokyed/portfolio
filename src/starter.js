/// imports
var imports = [
    'App.Mixins.Visual',

    'App.Core.MobileDetection',
    'App.Core.Template',

    'App.Scene.SideBar',
    'App.Scene.MainView',

    'App.App'
];

window.Hycs.setUp({
    scripts: imports,
    callbackFunction: window.runningNow,
    callbackScope: window,
    callbackDelay: 100,
    startImporting: true,
    consoleLog: false,
    //shallReloadPage: true
    appFolderUrl: '/portfolio'
});

function runningNow() {
    console.time('Application intitialization time');
    // do something when all scripts loaded
    window['appInstance'] = window.Hyc.getInstance(window.Hyc.makeInstance({
        blueprint: 'App.App'
    }));
    window['appInstance'].setData(window['portfolio-data']);
    window['appInstance'].initialize();

    console.timeEnd('Application intitialization time');
}
