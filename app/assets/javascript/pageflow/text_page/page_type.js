pageflow.pageType.register('text_page', _.extend({

  prepareNextPageTimeout: 0,

  enhance: function(pageElement, configuration) {
    this.pageSpacerElement = pageElement.find('.page_spacer');
    this.contentArea = pageElement.find('.contentText');
    this.backgroundArea = pageElement.find('.background');
    this.titleArea = pageElement.find('.contentInnerWrapper .page_header');
    this.resizePageSpacer(pageElement, configuration);
    /* for min height: pageElement.find('.contentInnerWrapper').css('min-height', pageElement.height() + 'px'); */

    this.iscroll = pageElement.find('.content.scroller').data('pageflow-scroller').iscroll;
    $(pageElement).on('scrollermove', this.applyBackgroundEffects.bind(this, pageElement));
  },

  applyBackgroundEffects: function(pageElement) {
    pageElement.find('.backgroundArea.dim .background, .backgroundArea.dim .fixedHeaderArea').css('opacity', (0.5 * pageElement.height() + this.iscroll.y)/(pageElement.height()*0.5)); // Abblenden */
    pageElement.find('.backgroundArea.parallax .background').css('-webkit-transform', "translateY(" + this.iscroll.y *0.05 + "px)"); // Parallax
  },

  resizePageSpacer: function(pageElement, configuration) {
    /* for fullscreen: this.pageSpacerElement.css('height', pageElement.height() + 'px'); */
    if(pageElement.hasClass('banner_only')) {
      this.pageSpacerElement.css('height', pageElement.height() / 3 + this.titleArea.height() + 'px');
    }
    else if (pageElement.hasClass('title_only')) {
      this.pageSpacerElement.css('height', pageElement.height() + 'px');
    }
    else {
      if(pageElement.height() - 200 > 200) {
        this.pageSpacerElement.css('height', pageElement.height() - 200 + 'px');
      }
    }

    this.backgroundArea.css('height', this.pageSpacerElement.height() + 'px');

    this.contentArea.css('min-height', pageElement.height() + 'px'); //min-heights for white area/ text area for short text?
  },

  resize: function(pageElement, configuration) {
    this.resizePageSpacer(pageElement, configuration);
    this.applyBackgroundEffects(pageElement);
  },

  prepare: function(pageElement, configuration) {},

  preload: function(pageElement, configuration) {
    return pageflow.preload.backgroundImage(pageElement.find('.background_image'));
  },

  activating: function(pageElement, configuration) {
    this.applyBackgroundEffects(pageElement);
  },

  activated: function(pageElement, configuration) {
  },

  deactivating: function(pageElement, configuration) {},

  deactivated: function(pageElement, configuration) {},

  update: function(pageElement, configuration) {
    pageElement.find('h2 .tagline').text(configuration.get('tagline') || '');
    pageElement.find('h2 .title').text(configuration.get('title') || '');
    pageElement.find('h2 .subtitle').text(configuration.get('subtitle') || '');
    pageElement.find('.contentText .text-title').text(configuration.get('text_title') || '');
    pageElement.find('.contentText p').html(configuration.get('text') || '');

    this.updateCommonPageCssClasses(pageElement, configuration);

    _.forEach(pageflow.textPage.titlePositions, function(position) {
      pageElement.toggleClass('title_position_' + position, configuration.get('title_position') === position);
    });

    _.forEach(pageflow.Page.textPositions, function(position) {
      pageElement.toggleClass('text_position_' + position, configuration.get('text_position') === position);
    });

    _.forEach(pageflow.textPage.textCoverageOptions, function(option) {
      pageElement.toggleClass(option, configuration.get('text_coverage') === option);
    });

    pageElement.find('.shadow').css({
      opacity: configuration.get('gradient_opacity') / 100
    });
  },

  embeddedEditorViews: function() {
    return {
      '.background_image': {
        view: pageflow.BackgroundImageEmbeddedView,
        options: {propertyName: 'background_image_id'}
      },
      '.inline-image': {
        view: pageflow.textPage.ContentImageEmbeddedView,
        options: {
          imagePropertyName: 'text_image_id',
          descriptionPropertyName: 'image_description'
        }
      }
    };
  }
}, pageflow.commonPageCssClasses));
