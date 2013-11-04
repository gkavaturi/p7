(function (App, Backbone, _, $, undefined) {
    App.views.ResultsView = App.views.BaseView.extend({

      template: App.tmpl.results,

      el: '#actions-wrapper',

      events: {
        'click .buy-now': 'reserveSlot',
        'click .parking-lot': 'showInMaps' 
      },

      initialize: function(options){

        var that = this;
        _.bindAll(this, 'render');
        _.bindAll(this, 'reserveSlot');
        _.bindAll(this, 'activateResult');

        this.collection.on('add', this.render);

        this.collection.on('change:active',  this.activateResult);

        this.options = options || {};
        //since backbone 1.1.0 (oct 2013) backbone no longer passes options by default

        this.render();
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

        if (!date){
          this.showMiniNotification('Please select a date', 'danger');
          return;
        }    

        model.set('date', date);
        model.set('spaceNum', Math.round(Math.random() * (100-1)+1));

        reservations.add(model);
        this.showMiniNotification('Parking Space Successfully Booked', 'success')    
      },

      showInMaps: function(e){
        var id = $(e.target).data('id'),
            model = this.collection.get(id);

        if (this.options.currentActiveModel)
          this.options.currentActiveModel.set('active', false);
        model.set('active', true);
        this.options.currentActiveModel = model;
      },

      activateResult: function(model){
        if (model.get('active') !== true || $(event.target).hasClass('parking-lot'))
          return;

        var id = model.get('id'),
            first = 

        this.$el.find('.panel-collapse.in').removeClass('in');

        this.$el.find('#'+id).addClass('in');
        this.collection.remove(model);
        this.collection.unshift(model);
        this.render();

      }
    });
})(window.Project07, window.Backbone, window._, window.jQuery);