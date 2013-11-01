(function (App, Backbone, _, $, undefined) {
    App.routers.BaseRouter = Backbone.Router.extend({

      routes: {
        'home': 'home',
        '*default': 'home'
      },

      initialize: function(){
        Backbone.history.start();
      },

      home: function(){
        new App.views.HomeView();
      }

    });
})(window.Project07, window.Backbone, window._, window.jQuery);