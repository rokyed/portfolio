window.Hyc.addBlueprint('App.Scene.SideBar', {
    mixins: ['App.Mixins.Visual'],

    autoInitialize: 'initialize',

    element: null,

    elementData: {
        nodeType: 'div',
        classList: ['v-side-bar','v-box-shadow-small'],
        template: [
            '<div class="v-side-bar-container"></div>',
            '<div class="v-side-bar-controls v-flex-container">',
                '<div class="v-side-bar-control-button v-fontello">&#xe80f;</div>',
            '</div>',
        ],
        values: {
        }
    },

    items: [],
    actionItemCallback: null,
    actionItemScope: null,

    initialize: function() {
        this.initializeElement({
            scope: this,
            click: this.onClick
        });
        this.toggle();
    },

    onClick: function (e) {
        if (e.getTarget('.v-side-bar-control-button'))
            return this.toggle();

        this.onItemTapped(e.getTarget('.v-side-bar-item'));
    },

    toggle: function() {
        var element = this.element,
            button = element.querySelector('.v-side-bar-control-button'),
            container = element.querySelector('.v-side-bar-container');

        if (container.classList.contains('v-hidden')) {
            container.classList.remove('v-hidden');
            element.classList.remove('v-compact');

            button.innerHTML = '&#xe810;';
        } else {
            container.classList.add('v-hidden');
            element.classList.add('v-compact');

            button.innerHTML = '&#xe80f;';
        }
    },

    hide: function() {
        var element = this.element,
            button = element.querySelector('.v-side-bar-control-button'),
            container = element.querySelector('.v-side-bar-container');

        container.classList.add('v-hidden');
        element.classList.add('v-compact');
        button.innerHTML = '&#xe810;';
    },

    cleanItems: function () {
        this.items = [];

        this.drawItems();
    },

    setDefaultActionItemCallback: function (callback, scope) {
        this.actionItemCallback = callback;
        this.actionItemScope = scope;
    },

    populate: function (configItems, callback, scope) {
        var items = this.items;

        for (var i = 0, ln = configItems.length; i < ln; i++) {
            this.items.push(configItems[i]);
        }

        this.setDefaultActionItemCallback(callback, scope);

        this.drawItems();
    },

    drawItems: function () {
        var items = this.items,
            html = [],
            element = this.element.querySelector('.v-side-bar-container');

        for (var k = 0, lnk = items.length; k < lnk; k++) {
            if (items[k].actionName.indexOf('direction') > -1)
                html.push('<div class="v-side-bar-item"><a class="v-link" target="_blank" href="',
                items[k].href,'"><div class="v-icon ',items[k].iconCls,'">',items[k].icon,'</div><span>',items[k].label,'</span></a></div>');
            else
                html.push('<div class="v-side-bar-item" data-action="',items[k].actionName,
                '"><div class="v-icon ',items[k].iconCls,'">',items[k].icon,'</div><span>',items[k].label,'</span></div>');
        }

        // not using a filler anymore
        //html.push('<div class="v-side-bar-filler"></div>');

        element.innerHTML = html.join('');
    },

    onItemTapped: function(item) {
        if (! item)
            return;

        this.toggle();

        var actionName = item.getAttribute('data-action'),
            items = this.items;

        for (var i = 0, ln = items.length; i < ln; i++)
            if (items[i].actionName === actionName)
                if (items[i].callback){
                    items[i].callback.apply(items[i].scope, [actionName]);
                } else {
                    this.actionItemCallback.apply(this.actionItemScope, [actionName]);
                }
    }
});
