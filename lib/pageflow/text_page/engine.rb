module Pageflow
  module TextPage
    class Engine < Rails::Engine
      isolate_namespace Pageflow::TextPage

      config.autoload_paths << File.join(config.root, 'lib')
    end
  end
end


