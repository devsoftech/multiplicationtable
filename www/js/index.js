var App = angular.module('ecp', []);

var app = {
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        //document.addEventListener('offline', this.onDeviceReady, false);
        //document.addEventListener('online', reloadpage, false);
    },

    onDeviceReady: function() {
        navigator.splashscreen.hide();
        app.receivedEvent('deviceready');

        App.controller('ECPController', function($scope) {
            $scope.ecpapiresponse = [
                {"number": 9}
            ];
        });
    },

    receivedEvent: function(id) {
    }
};

