require 'pageflow/text_page/engine'

module Pageflow
  module TextPage
    def self.page_type
      TextPage::PageType.new
    end
  end
end
