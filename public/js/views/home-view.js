(function (App, Backbone, _, $, undefined) {
    App.views.HomeView = App.views.BaseView.extend({

      template: App.tmpl.home,

      el: '#main-content',

      initialize: function(){
        this.render();
      },

      render: function(){
        var reservations = new App.collections.Results(),
            results = new App.collections.Results(),
            baseView = this;
        reservations.url = 'data/reservations-sample.json';
        
        this.$el.html(this.template());
        this.showView(new App.views.MapsView({
          results: results
        }));

        this.showView(new App.views.ResultsView({
          collection: results,
          reservations: reservations
        }));
        this.showView(new App.views.ReservationsView({
          collection: reservations
        }));


      }
    });
})(window.Project07, window.Backbone, window._, window.jQuery);