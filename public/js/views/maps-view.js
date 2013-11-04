(function (App, Backbone, _, $, undefined) {
    App.views.MapsView = App.views.BaseView.extend({

      template: App.tmpl.home,

      el: '#maps',

      initialize: function(options){
        _.bindAll(this, 'showMarkers');
        _.bindAll(this, 'highlightMarker');
        _.bindAll(this, 'showInResults');

        google.maps.visualRefresh = true;

        this.options = options || {}; 
        this.render();
      },

      render: function(options){
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

        this.options.map = map;
        this.options.location = defaultLocation;
        this.options.activeMarkers = {};

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
            that = this,
            results = this.options.results,
            service = new google.maps.places.PlacesService(map);

        service.textSearch(request, function(data) {
          if (!(data instanceof Array)){
            console.log('ERROR: invalid response from server');
            return;
          }
          console.log(data);
          results.reset();
          data.forEach(function(obj){
            var marker = new google.maps.Marker({
                  position: obj.geometry.location,
                  map: map,
                  icon: {
                    url: 'img/parking.png',
                    scaledSize: new google.maps.Size(25, 25)
                  },
                  title: obj.name,
                  modelId: obj.id
                }),
                infoWindow = new google.maps.InfoWindow();
                id = obj.id,
                resultItem = new App.models.ResultItem();

            //add event handlers to resulItem to react if the item is active
            resultItem.on('change:active', that.highlightMarker);    

            google.maps.event.addListener(marker, 'click', function(){
              that.showInResults(this.get('modelId'));
            });

            resultItem.set({
              id: obj.id,
              name: obj.name,
              address: obj.formatted_address,
              location: obj.geometry.location
            });

            results.add(resultItem);
            that.options.activeMarkers[id] = marker;
            marker.setVisible(true);
            infoWindow.setContent(obj.name);
            // infoWindow.open(map, marker);
          });
        });
      },

      highlightMarker: function(model){
        if(model.get('active') !== true)
          return;
        var id = model.get('id'),
            marker = this.options.activeMarkers[id];

        if (this.options.recentMarker)
          this.options.recentMarker.setIcon({
                      url: 'img/parking.png',
                      scaledSize: new google.maps.Size(25, 25)
                    });

        marker.setIcon({
                    url: 'img/parking-active.png',
                    scaledSize: new google.maps.Size(50, 50)
                  });
        this.options.recentMarker = marker;
      },

      showInResults: function(modelId){
        if (this.options.recentModel)
          this.options.recentModel.set('active', false);
        var result = this.options.results.get(modelId);
        result.set('active', true);
        this.highlightMarker(result);
        this.options.recentModel = result;
      }

    });
})(window.Project07, window.Backbone, window._, window.jQuery);