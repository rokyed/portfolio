window.Hyc.addBlueprint('App.Core.MobileDetection', {
    singleton: true,

    detectIsMobile: function () {
        return this.detect();
    },

    detectIsDesktop: function () {
        return ! this.detect();
    },

    detect: function () {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
            return true;

        return false;
    }
});
