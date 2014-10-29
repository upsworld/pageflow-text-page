//= require_self
//= require ./editor/text_page_embedded_view

pageflow.textPage = pageflow.textPage || {};

pageflow.ConfigurationEditorView.register('text_page', {
  configure: function () {
    this.tab('general', function () {
      this.group('general');
    });

    this.tab('files', function () {
      this.input('background_image_id', pageflow.FileInputView, {collection: pageflow.imageFiles});
      this.input('thumbnail_image_id', pageflow.FileInputView, {
        collection: pageflow.imageFiles,
        imagePositioning: false
      });
    });

    this.tab('options', function () {
      this.group('options');
    });
  }
});