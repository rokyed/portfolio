window.Hyc.addBlueprint('App.Mixins.Visual', {
    initializeElement: function(listeners) {
        var elementData = this.elementData;

        this.element = App.Core.Template.createElement({
            nodeType: elementData.nodeType,
            classList: elementData.classList,
            template: elementData.template,
            values: elementData.values
        });

        if (! listeners)
            return;

        var scope = listeners.scope;

        for( var key in listeners) {
            if (key === "scope")
                continue;

            this.element.addEventListener(key, function(e) {
                /**
                 * @NOTE this retreives parent or element of e.target
                 */
                e.getTarget = function (selector) {
                    var newTargets = document.querySelectorAll(selector);

                    for (var i = 0, ln = newTargets.length; i < ln; i++){
                        if (newTargets[i].contains(e.target))
                            return newTargets[i];
                    }

                    return false;
                }

                listeners[key].apply(scope, arguments);
            });
        }

    },

    updateElement: function() {
        var elementData = this.elementData;

        this.element = App.Core.Template.updateElement({
            element: this.element,
            classList: elementData.classList,
            template: elementData.template,
            values: elementData.values
        });
    },
    
    renderTo: function (element) {
        element.appendChild(this.element);
    }
});
