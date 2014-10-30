module Pageflow
  module TextPage
    class PageType < Pageflow::PageType
      name 'text_page'

      def view_helpers
        [Pageflow::TextPage::ImageHelper]
      end
    end
  end
end
