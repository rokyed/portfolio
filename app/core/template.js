window.Hyc.addBlueprint('App.Core.Template', {

    singleton: true,

    applyTemplate: function(strOrArray, obj) {
        if(Hyc.typeOf(strOrArray) === "Array")
            strOrArray = strOrArray.join('');

        return strOrArray.replace(/{(\w+)}/g, function(_,k){
              return obj[k] || '';
        });
    },

    createElement: function(config) {
        var element = document.createElement(config.nodeType);

        if (config.classList)
            this.attachClasses(element, config.classList);

        if (config.template && config.values)
            element.innerHTML = this.applyTemplate(config.template, config.values);

        return element;
    },

    attachClasses: function(element, classes) {
        for (var i = 0, ln = classes.length; i < ln; i++)
            element.classList.add(classes[i]);
    },

    updateElement: function (config) {
        var element = config.element;

        if (config.classList) {
            element.className = "";

            this.attachClasses(element, config.classList);
        }

        if (config.template && config.values)
            element.innerHTML = this.applyTemplate(config.template, config.values);

        return element;
    }
});

//TESTS
//Lib.Basics.Template.applyTemplate('<div>{someFunc} falsjd{fdf}fjasdfs{someOtherFunc}</div>',{someFunc:'$%$%#',fdf:'BANGING MONEY',someOtherFunc:'CREEPY'})
//Lib.Basics.Template.tokenizer('<div>{someVal} some more text.</div>')
