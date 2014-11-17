//= require_self
//= require ./editor/content_image_embedded_view

pageflow.textPage = pageflow.textPage || {};

pageflow.ConfigurationEditorView.register('text_page', {
  configure: function () {
    this.tab('header', function () {
      this.input('text_coverage', pageflow.SelectInputView, {values: pageflow.textPage.textCoverageOptions});
      this.input('title', pageflow.TextInputView, {required: true});
      this.input('hide_title', pageflow.CheckBoxInputView);
      this.input('tagline', pageflow.TextInputView);
      this.input('subtitle', pageflow.TextInputView);
      this.input('text_position', pageflow.SelectInputView, {values: pageflow.textPage.titlePositions});
      this.input('background_image_id', pageflow.FileInputView, {
        collection: pageflow.imageFiles,
        fileSelectionHandlerOptions: {
          returnToTab: 'header'
        }
      });
      this.input('gradient_opacity', pageflow.SliderInputView);
      this.input('invert', pageflow.CheckBoxInputView);
    });

    this.tab('content', function () {
      this.input('text_title', pageflow.TextInputView);
      this.input('text', pageflow.TextAreaInputView);
      this.input('invert_text', pageflow.CheckBoxInputView);

      this.input('text_image_id', pageflow.FileInputView, {
        collection: pageflow.imageFiles,
        imagePositioning: false,
        fileSelectionHandlerOptions: {
          returnToTab: 'content'
        },
      });
      this.input('image_description', pageflow.TextInputView);
      this.input('sticky_inline_image', pageflow.CheckBoxInputView);
      this.input('inline_text_position', pageflow.SelectInputView, {values: pageflow.textPage.inlineTextPositions});
    });

    this.tab('options', function () {
      this.input('topasset_parallax', pageflow.CheckBoxInputView);
      this.input('topasset_dim', pageflow.CheckBoxInputView);
      this.input('thumbnail_image_id', pageflow.FileInputView, {
        collection: pageflow.imageFiles,
        imagePositioning: false,
        fileSelectionHandlerOptions: {
          returnToTab: 'options'
        }
      });
      this.group('options');
    });
  }
});