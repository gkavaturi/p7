(function (App, Backbone, _, $, undefined) {
    App.views.ReservationsView = App.views.BaseView.extend({

      template: App.tmpl.reservations,

      el: '#reservations-wrapper',

      events: {
        'click .cancel-reservation': 'cancelReservation'
      },

      initialize: function(){

        var that = this;
        _.bindAll(this, 'render');
        _.bindAll(this, 'cancelReservation');

        this.collection.on('add', this.render);
        this.collection.on('remove', this.render);

        this.collection.fetch({
          success: that.render,
          error: function(){
            that.showMiniNotification('Fetching existing reservations failed', 'danger danger-lg');
          }
        });
      },

      render: function(){
        this.$el.html(this.template());

        _.each(this.collection.models, function(model){
          this.$el.find('#reservations').append(App.tmpl.reservationItem(model.toJSON()));
        }, this);
        if (this.collection.models.length < 1)
          this.$el.find('.no-reservations').html('No Existing Reservations');
      },

      cancelReservation: function(e){
        var id = $(e.target).closest('.reservation-item').data('id');
        this.collection.remove(id);
      }
    });
})(window.Project07, window.Backbone, window._, window.jQuery);