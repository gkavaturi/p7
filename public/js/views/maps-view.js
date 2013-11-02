(function (App, Backbone, _, $, undefined) {
    App.views.MapsView = App.views.BaseView.extend({

      template: App.tmpl.home,

      el: '#maps',

      initialize: function(){

        _.bindAll(this, 'showMarkers');
        google.maps.visualRefresh = true;
        this.render();
        
      },

      render: function(){
        var defaultLocation = new google.maps.LatLng(37.77493, -122.41942),
            defaultZoom = 16,
            mapOptions = {
              zoom: defaultZoom,
              center: defaultLocation,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            },
            that = this,
            map = new google.maps.Map(document.getElementById('map-canvas'),
                  mapOptions);

        this.options = this.options || {};        
        this.options.map = map;
        this.options.location = defaultLocation;

        var input = document.getElementById('search-query');
        var options = {
          location: defaultLocation,
          // types: ['(regions)']
        },
        infoWindow = new google.maps.InfoWindow();

        var autocomplete = new google.maps.places.Autocomplete(input, options);
        autocomplete.bindTo('bounds', map);
        
        this.showMarkers();

        google.maps.event.addListener(autocomplete, 'place_changed', function() {
          var place = autocomplete.getPlace(),
              destMarker = new google.maps.Marker({
                 position: defaultLocation,
                 map: map
              });;
          if (!place.geometry) {
            // Inform the user that a place was not found and return.
            return;
          }

          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
          }
          map.setZoom(defaultZoom);
          that.options.location = place.geometry.location;
          that.showMarkers();
        });
      },

      showMarkers: function(){
        var map = this.options.map,
            location = this.options.location,
            request = {
              location: location,
              radius: '200',
              query: 'Parking'    
            },
            service = new google.maps.places.PlacesService(map);

        service.textSearch(request, function(data) {
          if (!(data instanceof Array)){
            console.log('ERROR: invalid response from server');
            return;
          }
          console.log(data);
          data.forEach(function(obj){
            var marker = new google.maps.Marker({
                  position: obj.geometry.location,
                  map: map,
                  icon:{
                    url: 'img/parking.png',
                    scaledSize: new google.maps.Size(25, 25)
                  },
                  title: obj.name
                });
            marker.setVisible(true);
          });
        });
      }

    });
})(window.Project07, window.Backbone, window._, window.jQuery);