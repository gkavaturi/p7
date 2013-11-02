(function (App, Backbone, _, $, undefined) {
    App.collections.Reservations = App.collections.BaseCollection.extend({

      model: App.models.Reservation,

      url: 'data/reservations-sample.json',

      parse: function(response){
        return response;
      }

    });
})(window.Project07, window.Backbone, window._, window.jQuery);