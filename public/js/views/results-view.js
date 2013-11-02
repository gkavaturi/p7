(function (App, Backbone, _, $, undefined) {
    App.views.ResultsView = App.views.BaseView.extend({

      template: App.tmpl.results,

      el: '#actions-wrapper',

      initialize: function(){

        var that = this;
        _.bindAll(this, 'render');

        this.collection.fetch({
          success: that.render,
          error: function(){
            console.log('Fetching available parking spots failed');
          }
        });
      },

      render: function(){
        this.$el.html(this.template());

        // _.each(this.collection.models, function(model){
        //   this.$el.find('#reservations').append(App.tmpl.reservationItem(model.toJSON()));
        // }, this);
      }
    });
})(window.Project07, window.Backbone, window._, window.jQuery);