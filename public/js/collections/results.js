(function (App, Backbone, _, $, undefined) {
    App.collections.Results = App.collections.BaseCollection.extend({

      model: App.models.ResultItem,

      url: 'data/results-sample.json',


    });
})(window.Project07, window.Backbone, window._, window.jQuery);