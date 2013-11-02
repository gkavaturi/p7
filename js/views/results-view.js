(function (App, Backbone, _, $, undefined) {
    App.views.ResultsView = App.views.BaseView.extend({

      template: App.tmpl.results,

      el: '#actions-wrapper',

      events: {
        'click .buy-now': 'reserveSlot'
      },

      initialize: function(options){

        var that = this;
        _.bindAll(this, 'render');
        _.bindAll(this, 'reserveSlot');

        this.options = options || {};
        //since backbone 1.1.0 (oct 2013) backbone no longer passes options by default

        this.collection.fetch({
          success: that.render,
          error: function(){
            console.log('Fetching available parking spots failed');
          }
        });
      },

      render: function(){
        this.$el.html(this.template());

        _.each(this.collection.models, function(model){
          this.$el.find('#accordion').append(App.tmpl.resultItem(model.toJSON()));
        }, this);
        this.$el.find('.panel-collapse:first').addClass('in');
      },

      reserveSlot: function(e){
        var $parent = $(e.target).closest('.panel-collapse')
            id = $parent.data('id'),
            date = this.$el.find('.date').val(),
            model = this.collection.get(id),
            reservations = this.options.reservations;

        model.set('date', date);

        reservations.add(model);    
            
      }
    });
})(window.Project07, window.Backbone, window._, window.jQuery);