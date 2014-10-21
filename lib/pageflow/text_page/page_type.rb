module Pageflow
  module TextPage
    class PageType < Pageflow::PageType
      name 'text_page'

      def revision_components
        [Site]
      end

      def view_helpers
        [SitesHelper]
      end
    end
  end
end
