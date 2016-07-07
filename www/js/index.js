var app = {
    initialize: function() {
        this.bindEvents();
    },

    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        navigator.splashscreen.hide();
        app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
    }
};
