pageflow.textPage.TextPageEmbeddedView = Backbone.Marionette.View.extend({
  modelEvents: {
    'change': 'update'
  },

  render: function() {

    this.update();
    return this;
  },

  update: function() {
  }
});