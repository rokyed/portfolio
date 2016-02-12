window.Hyc.addBlueprint('App.Scene.MainView', {
    mixins: ['App.Mixins.Visual'],

    autoInitialize: 'initialize',

    element: null,

    items: null,

    elementData: {
        nodeType: 'div',
        classList: ['v-main-view']
    },

    initialize: function() {
        this.initializeElement({
            scope: this,
            click: this.onClick
        });
    },

    populate: function (config) {
        switch (config.view.viewDefinition) {
            case 'show-case-glimpse':
                this.generateShowCaseGlimpse(config);
                break;
            case 'show-case-individual':
                this.generateShowCaseIndividual(config);
                break;
            case 'home':
                this.generateHomePage(config);
                break;
            case 'article':
                this.generateArticles(config);
        }
    },

    onClick: function (e) {
        this.onImageTapped(e.getTarget('.xk-image'));
        this.onItemTapped(e.getTarget('.v-item'));
    },

    onImageTapped: function(image) {
        if (! image)
            return;

        if (image.classList.contains('v-full-screen'))
            image.classList.remove('v-full-screen');
        else
            image.classList.add('v-full-screen');
    },

    onItemTapped: function (item) {
        if (! item)
            return;


        this.getShowCaseIndividual(item.getAttribute('data-uid'));
    },

    getShowCaseIndividual: function(uid) {
        if (! uid)
            return;

        for (var i = 0, items = this.items, ln = items.length;i< ln;i++) {
            if (items[i].urlname == uid) {
                window['appInstance'].pushUrl(false, uid, items[i].definition);
                return this.generateShowCaseIndividual(items[i]);
            }
        }
    },

    generateShowCaseGlimpse: function (config) {
        var showCaseGlimpse = this.getTemplate('showCaseGlimpse'),
            showCaseThumb = this.getTemplate('showCaseThumb'),
            thumbHTML = [];

        this.items = [];

        for (var i = 0, items = config.items, ln = items.length; i < ln; i++) {
            if (! items[i].thumbImage)
                items[i].thumbImage = 'ressources/images/noimage.png';

            thumbHTML.push(App.Core.Template.applyTemplate(showCaseThumb,items[i]));
            this.items.push(items[i]);
        }

        this.element.innerHTML = App.Core.Template.applyTemplate(showCaseGlimpse, {
            title: config.view.label,
            content: thumbHTML.join('')
        });
    },

    generateHomePage: function(config) {
        var home = this.getTemplate('showHome');

        if (config.items && config.items[0])
            this.element.innerHTML = App.Core.Template.applyTemplate(home, config.items[0]);

    },

    generateShowCaseIndividual: function (config) {
        // check for image
        if (! config.image)
            config.image = 'ressources/images/noimage.png';

        this.element.innerHTML = App.Core.Template.applyTemplate(this.getTemplate('showCaseIndividual'), config);


    },

    generateArticles: function(config) {
        var html = [],
            template = this.getTemplate('article');

        for (var i = 0,items = config.items, ln = items.length; i < ln; i++) {
            html.push (App.Core.Template.applyTemplate(template,items[i]));
        }

        this.element.innerHTML = html.join('');
    },

    getTemplate: function (templateType) {
        switch (templateType) {
            case 'article':
                return [
                    '<div class="v-article v-box-shadow-xsmall">',
                        '<div class="v-article-title">{title}</div>',
                        '<div class="v-article-description">{description}</div>',
                        '<div class="v-article-created-on">Created on: {createdOn}</div>',

                    '</div>'
                ];
                break;
            case 'showCaseIndividual':
                return [
                    '<div class="v-show-case-individual">',
                        '<div class="v-show-case-individual-title">{title}</div>',
                        '<div class="v-show-case-individual-container v-flex-container v-box-shadow-xsmall">',
                            '<div class="v-show-case-individual-image v-flex-one v-image xk-image" style="background-image:url(\'{image}\')"></div>',
                            '<div class="v-show-case-individual-content v-flex-one">',
                                '{description}',
                                '<br><br>',
                                '<a class="v-link {urlIconCls}" target="_blank" href={url}><div class="v-icon">{urlIcon}</div><span>Visit here</span></a>',
                            '</div>',
                        '</div>',
                    '</div>'
                ];
                break;
            case 'showCaseGlimpse':
                return [
                    '<div class="v-show-case-glimpse">',
                        '<div class="v-show-case-glimpse-title">{title}</div>',
                        '<div class="v-show-case-glimpse-container v-flex-container">',
                            '{content}',
                        '</div>',
                    '</div>'
                ];
                break;
            case 'showCaseThumb':
                return [
                    '<div data-uid="{urlname}" class="v-show-case-thumb v-box-shadow-xsmall v-flex-zero v-item">',
                        '<div class="v-show-case-thumb-title">{title}</div>',
                        '<div class="v-show-case-thumb-container">',
                            '<div class="v-show-case-thumb-image v-image" style="background-image:url(\'{thumbImage}\')"></div>',
                        '</div>',
                    '</div>'
                ];
                break;
            case 'showHome':
                return [
                    '<div class="v-home-page">',
                        '<div class="v-home-page-title">{title}</div>',
                        '<div class="v-home-page-description">{description}</div>',
                    '</div>'
                ];
                break;
        }
    }
});
