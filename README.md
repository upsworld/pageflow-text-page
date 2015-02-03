# Pageflow Text Page

[![Gem Version](https://badge.fury.io/rb/pageflow-text-page.svg)](http://badge.fury.io/rb/pageflow-text-page)

Page type to display large texts on a page.

## Installation

Add this line to your application's `Gemfile`:

    gem 'pageflow-text-page'

Register the page type inside the configure block in `config/initializers/pageflow.rb`

    Pageflow.configure do |config|
      config.register_page_type(Pageflow::TextPage.page_type)
    end

Include javascripts and stylesheets:

    # app/assets/javascripts/pageflow/application.js
    //= require pageflow/text_page

    # app/assets/javascripts/pageflow/editor.js
    //= require pageflow/text_page/editor

    # app/assets/stylesheets/pageflow/application.css.scss
    @import "pageflow/text_page";

Execute `bundle install` Restart the application server.

## Troubleshooting

If you run into problems while installing the page type, please also refer to the
[Troubleshooting](https://github.com/codevise/pageflow/wiki/Troubleshooting) wiki 
page in the [Pageflow  repository](https://github.com/codevise/pageflow). If that 
doesn't help, consider 
[filing an issue](https://github.com/codevise/pageflow-text-page/issues).

## Contributing Locales

Edit the translations directly on the
[pageflow-text-page](http://www.localeapp.com/projects/public?search=tf/pageflow-text-page)
locale project.
