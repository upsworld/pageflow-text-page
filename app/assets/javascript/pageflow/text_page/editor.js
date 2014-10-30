//= require_self
//= require ./editor/content_image_embedded_view

pageflow.textPage = pageflow.textPage || {};

pageflow.ConfigurationEditorView.register('text_page', {
  configure: function () {
    this.tab('general', function () {
      this.input('title', pageflow.TextInputView, {required: true});
      this.input('hide_title', pageflow.CheckBoxInputView);
      this.input('tagline', pageflow.TextInputView);
      this.input('subtitle', pageflow.TextInputView);
      this.input('title_position', pageflow.SelectInputView, {values: pageflow.textPage.titlePositions});

      this.input('text_title', pageflow.TextInputView);
      this.input('text', pageflow.TextAreaInputView);
      this.input('text_position', pageflow.SelectInputView, {values: pageflow.Page.textPositions});
      this.input('text_coverage', pageflow.SelectInputView, {values: pageflow.textPage.textCoverageOptions});
      this.input('image_description', pageflow.TextInputView);

      this.input('invert_title', pageflow.CheckBoxInputView);
      this.input('invert_text', pageflow.CheckBoxInputView);
    });

    this.tab('files', function () {
      this.input('background_image_id', pageflow.FileInputView, {collection: pageflow.imageFiles});
      this.input('thumbnail_image_id', pageflow.FileInputView, {
        collection: pageflow.imageFiles,
        imagePositioning: false
      });
      this.input('text_image_id', pageflow.FileInputView, {
        collection: pageflow.imageFiles,
        imagePositioning: false
      });
    });

    this.tab('options', function () {
      this.input('paralax', pageflow.CheckBoxInputView);
      this.input('dim', pageflow.CheckBoxInputView);
      this.group('options');
    });
  }
});