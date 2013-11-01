(function (App, Backbone, _, $, undefined) {
    App.views.HomeView = Backbone.View.extend({

      template: App.tmpl.home,

      el: '#main-content',

      initialize: function(){
        this.render();
      },

      render: function(){
        this.$el.html(this.template());
      }
    });
})(window.Project07, window.Backbone, window._, window.jQuery);