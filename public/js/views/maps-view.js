(function (App, Backbone, _, $, undefined) {
    App.views.MapsView = App.views.BaseView.extend({

      template: App.tmpl.home,

      el: '#maps',

      initialize: function(){
        google.maps.visualRefresh = true;
        this.render();
        
      },

      render: function(){
        var map, 
            mapOptions = {
              zoom: 14,
              center: new google.maps.LatLng(37.77493, -122.41942),
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
        map = new google.maps.Map(document.getElementById('map-canvas'),
                  mapOptions);
      }
    });
})(window.Project07, window.Backbone, window._, window.jQuery);