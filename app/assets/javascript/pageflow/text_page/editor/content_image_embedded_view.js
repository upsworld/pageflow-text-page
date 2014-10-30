pageflow.textPage.ContentImageEmbeddedView = Backbone.Marionette.View.extend({
  modelEvents: {
    'change': 'update'
  },

  render: function() {
    this.img = this.$el.find('img');
    this.text = this.$el.find('.inline-image-text');

    this.update();
    return this;
  },

  update: function() {
    console.log('baam');

    var image = this.model.getImageFileUrl(this.options.imagePropertyName);
    var description = this.model.get(this.options.descriptionPropertyName);

    if (image) {
      if(!this.img || this.img.length === 0) {
        this.img = $('<img/>');
        this.$el.prepend(this.img);
      }
      if(this.text) {
        this.text.remove();
        this.text = null;
      }

      this.img.attr('src', image);
      this.img.attr('title', description);
    }
    else {
      if (description && !this.defaulImage) {
        this.defaultImage = $('<div/>').addClass('default-image');
        this.$el.prepend(this.defaultImage);
      }
      else if(this.defaultImage) {
        this.defaultImage.remove();
        this.defaultImage = null;
      }

      this.img.remove();
      this.img = null;
    }

    if (description) {
      if(!this.text) {
        this.text = $('<div/>')
          .addClass('inline-image-text')
          .append($('<span/>'));
        this.$el.append(this.text);
      }

      this.text.find('span').html(description);
    }
    else {
      this.text.remove();
      this.text = null;
    }

  }
});