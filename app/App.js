window.Hyc.addBlueprint('App.App', {
    mixins: ['App.Mixins.Visual'],

    element: null,

    sideBar: null,
    mainView: null,
    data: null,

    elementData: {
        nodeType: 'div',
        classList: ['v-main-app'],
        template: [
            '<div class="v-main-app-container">','</div>'
        ],
        values: {

        }
    },

    initialize: function() {
        if (App.Core.MobileDetection.detectIsMobile())
            document.body.classList.add('v-mobile');

        this.initializeElement({
            scope: this,
            click: this.onTap
        });
        this.renderTo(document.body);

        this.mainView = window.Hyc.getInstance(window.Hyc.makeInstance({
            blueprint: 'App.Scene.MainView'
        }));

        this.sideBar = window.Hyc.getInstance(window.Hyc.makeInstance({
            blueprint: 'App.Scene.SideBar'
        }));

        this.setBaseForSideBar();

        if (! this.checkUrl())
            this.changeView(this.data.defaultPage);

        this.mainView.renderTo(this.element.querySelector('.v-main-app-container'));
        this.sideBar.renderTo(document.body);
    },

    onTap: function(e) {
        this.sideBar.hide();
    },

    setData: function(data) {
        this.data = data;
    },

    onActionTap: function(actionName) {
        this.changeView(actionName);
    },

    setBaseForSideBar: function() {
        this.sideBar.cleanItems();
        this.sideBar.populate(this.data.menu, this.onActionTap, this);
    },

    changeView: function(actionName) {
        var data = this.data,
            items = [],
            viewType;

        for (var i = 0,views = data.views, ln = views.length; i < ln; i++) {
            if (views[i].definition == actionName) {
                viewType = views[i];
                break;
            }
        }

        this.pushUrl(actionName);

        if (! viewType)
            return false;

        for (var k = 0, allItems = data.items, lnk = allItems.length, viewDefinition = viewType.itemsDefinition; k < lnk; k++) {
            if (allItems[k].definition == viewDefinition)
                items.push(allItems[k]);
        }

        this.mainView.populate({
            view: viewType,
            items: items
        });

        return true;
    },

    goToSubview: function(subviewId) {
        this.mainView.getShowCaseIndividual(subviewId);
    },

    checkUrl: function() {
        if (! window.location.hash)
            return false;

        var hash = window.location.hash;
        hash = hash.replace(/^#/, '');

        if (hash.indexOf('/') > -1) {
            hash = hash.split('/');

                if(this.changeView(hash[0]))
                    this.goToSubview(hash[1]);
                else
                    this.changeView(this.data.defaultPage);
        } else {
            if (! this.changeView(hash))
                this.changeView(this.data.defaultPage);
        }

        return true;
    },

    pushUrl: function(action, subview, definition) {
        if (!action  && !definition)
            return;

        if (! action)
            for (var i = 0, views = this.data.views, ln = views.length; i < ln; i++)
                if (views[i].itemsDefinition === definition) {
                    action = views[i].definition;
                }

        if (! action)
            return;

        if (subview)
            action += '/' +subview;

        window.location.hash = '#'+ action;

    }
});
