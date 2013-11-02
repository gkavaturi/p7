(function (App, Backbone, _, $, undefined) {
    App.models.BaseModel = Backbone.Model.extend({

    defaults: {
    
    },

    S4: function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    },

    guid: function() {
       return (this.S4()+this.S4()+"-"+this.S4()+"-"+this.S4()+"-"+this.S4()+"-"+this.S4()+this.S4()+this.S4());
    }

    });
})(window.Project07, window.Backbone, window._, window.jQuery);