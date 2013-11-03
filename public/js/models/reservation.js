(function (App, Backbone, _, $, undefined) {
    App.models.Reservation = App.models.BaseModel.extend({

    defaults: {
        'name': 'Name UnAvailable',
        'date': 'Date UnAvailable',
        'location': 'Location UnAvailable',
        'address': 'Address UnAvailable',
        'spaceNum': null
    },

    initialize: function(){
        if (!this.id)
            this.set('id', this.guid());

        return this;
    }


    });
})(window.Project07, window.Backbone, window._, window.jQuery);