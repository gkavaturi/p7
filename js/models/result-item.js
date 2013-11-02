(function (App, Backbone, _, $, undefined) {
    App.models.ResultItem = App.models.BaseModel.extend({

    defaults: {
        'name': 'Name UnAvailable',
        'date': 'Date UnAvailable',
        'location': 'Location UnAvailable',
        'address': 'Address UnAvailable',
        'numSlots': 'N/A'
    },

    initialize: function(){
        if (!this.id)
            this.set('id', this.guid());

        //random no of available slots

        this.set('numSlots', Math.round(Math.random() * (100-1)+1));

        return this;
    }


    });
})(window.Project07, window.Backbone, window._, window.jQuery);