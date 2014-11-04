pageflow.pageType.register('text_page', _.extend({

  prepareNextPageTimeout: 0,

  enhance: function(pageElement, configuration) {
    this.content = pageElement.find('.scroller');
    this.pageSpacerElement = pageElement.find('.page_spacer');
    this.contentArea = pageElement.find('.contentText');
    this.backgroundArea = pageElement.find('.background');
    this.titleArea = pageElement.find('.contentInnerWrapper .page_header');

    this.resizePageSpacer(pageElement, configuration);

    pageElement.data('invertIndicator', !configuration.invert_text);
    pageElement.on('scrollermove', this.applyBackgroundEffects.bind(this, pageElement, configuration));
  },

  applyBackgroundEffects: function(pageElement, configuration) {
    var spacerPageRatio = this.pageSpacerElement.height() / pageElement.height();
    var y = this.content.scroller('positionY');

    pageElement.find('.backgroundArea .fixed_header_area').css('opacity', (0.5 * pageElement.height() + y)/(pageElement.height() * 0.5)); // Abblenden des Titels, immer*/

    if(configuration.topasset_dim) {
      pageElement.find('.backgroundArea .background').css('opacity', (spacerPageRatio * pageElement.height() + y)/(pageElement.height() * spacerPageRatio)); // Abblenden */
    }
    else {
      pageElement.find('.backgroundArea .background').css('opacity', 1);
    }

    var parallaxPosition = y *0.05;

    if(configuration.topasset_parallax) {
      pageElement.find('.backgroundArea.parallax .background').css({"-webkit-transform":"translateY(" + parallaxPosition + "px)", "-moz-transform":"translateY(" + parallaxPosition + "px)", "-ms-transform":"translateY(" + parallaxPosition + "px)", "-o-transform":"translateY(" + parallaxPosition + "px)", "transform":"translateY(" + parallaxPosition + "px)"}); // Parallax
    }
    else {
      pageElement.find('.backgroundArea.parallax .background').css({'-webkit-transform': 'translateY(0)','-o-transform': 'translateY(0)','-ms-transform': 'translateY(0)', '-moz-transform': 'translateY(0)', 'transform': 'translateY(0)'}); // Parallax
    }
  },

  resizePageSpacer: function(pageElement, configuration) {
    if (pageElement.hasClass('banner')) {
      this.pageSpacerElement.css('height', pageElement.height() / 3 + this.titleArea.height() + 'px');
    }
    else if (pageElement.hasClass('title_only')) {
      this.pageSpacerElement.css('height', pageElement.height() + 'px');
    }
    else {
      if (pageElement.height() - 200 > 200) {
        this.pageSpacerElement.css('height', pageElement.height() - 200 + 'px');
      }
    }

    this.backgroundArea.css('height', this.pageSpacerElement.height() + 'px');

    this.contentArea.css('min-height', pageElement.height() + 'px'); //min-heights for white area/ text area for short text?
    this.content.scroller('refresh');
  },

  resize: function(pageElement, configuration) {
    this.resizePageSpacer(pageElement, configuration);
    this.applyBackgroundEffects(pageElement, configuration);
  },

  prepare: function(pageElement, configuration) {
  },

  preload: function(pageElement, configuration) {
    return pageflow.preload.backgroundImage(pageElement.find('.background_image'));
  },

  activating: function(pageElement, configuration) {
    this.resizePageSpacer(pageElement, configuration);
    this.applyBackgroundEffects(pageElement, configuration);
  },

  activated: function(pageElement, configuration) {
  },

  deactivating: function(pageElement, configuration) {},

  deactivated: function(pageElement, configuration) {},

  update: function(pageElement, configuration) {
    pageElement.attr('data-template', 'text_page');
    pageElement.find('h2 .tagline').text(configuration.get('tagline') || '');
    pageElement.find('h2 .title').text(configuration.get('title') || '');
    pageElement.find('h2 .subtitle').text(configuration.get('subtitle') || '');
    pageElement.find('.contentText .text_title').text(configuration.get('text_title') || '');
    pageElement.find('.contentText p').html(configuration.get('text') || '');

    this.updateCommonPageCssClasses(pageElement, configuration);

    _.forEach(pageflow.textPage.titlePositions, function(position) {
      pageElement.find('.content_and_background').toggleClass('text_position_' + position, configuration.get('title_position') === position);
    });

    _.forEach(pageflow.Page.textPositions, function(position) {
      pageElement.find('.content').toggleClass('inline_text_position_' + position, configuration.get('text_position') === position);
    });

    _.forEach(pageflow.textPage.textCoverageOptions, function(option) {
      pageElement.toggleClass(option, configuration.get('text_coverage') === option);
    });

    pageElement.find('.content').toggleClass('invert_text', !!configuration.get('invert_text'));
    pageElement.data('invertIndicator', !configuration.get('invert_text'));

    pageElement.find('.shadow, .header_background_layer').css({
      opacity: configuration.get('gradient_opacity') / 100
    });

    this.resizePageSpacer(pageElement, configuration);
    this.applyBackgroundEffects(pageElement, configuration.attributes);
  },

  embeddedEditorViews: function() {
    return {
      '.background_image': {
        view: pageflow.BackgroundImageEmbeddedView,
        options: {propertyName: 'background_image_id'}
      },
      '.inline_image': {
        view: pageflow.textPage.ContentImageEmbeddedView,
        options: {
          imagePropertyName: 'text_image_id',
          descriptionPropertyName: 'image_description'
        }
      }
    };
  }
}, pageflow.commonPageCssClasses));
