# Pageflow Text Page

Page type to display large texts on a page.

## Installation

Add this line to your application's `Gemfile`:

    gem 'pageflow-text-page'

Register the page type inside the configure block in `config/initializers/pageflow.rb`

    Pageflow.configure do |config|
      config.register_page_type(Pageflow::TextPage::PageType.new)
    end

Include javascripts and stylesheets:

    # app/assets/javascripts/pageflow/application.js
    //= require pageflow/text_page

    # app/assets/javascripts/pageflow/editor.js
    //= require pageflow/text_page/editor

    # app/assets/stylesheets/pageflow/application.css.scss
    @import "pageflow/text_page";

Mount the routes in `config/routes.rb`:

    authenticated do
      mount Pageflow::TextPage::Engine, :at => '/text_page'
    end

Install dependencies:

    bundle install

Migrate the database:

    bundle exec rake db:migrate

Restart the application server.

## Troubleshooting

If you run into problems while installing the page type, please also refer to the
[Troubleshooting](https://github.com/codevise/pageflow/wiki/Troubleshooting) wiki 
page in the [Pageflow  repository](https://github.com/codevise/pageflow). If that 
doesn't help, consider 
[filing an issue](https://github.com/codevise/pageflow-text-page/issues).
