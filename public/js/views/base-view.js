(function (App, Backbone, _, $, undefined) {
    App.views.BaseView = Backbone.View.extend({

      showView: function(){
        return this;
      },

      showMiniNotification: function(message, classNames){
        this.$el.find('.mini-notification').remove();
        this.$el.append(new App.tmpl.miniNotification({
          message: message,
          classNames: classNames
        }));
      }      

    });
})(window.Project07, window.Backbone, window._, window.jQuery);