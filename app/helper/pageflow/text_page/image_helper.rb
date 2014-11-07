module Pageflow
  module TextPage
    module ImageHelper
      def content_image(id, alt, format = :medium)
        image = Pageflow::ImageFile.find_by_id(id)
        if image
          image_tag(image.attachment.url(:medium))
        else
          ''
        end
      end

      def content_image_present_css_class(id)
        image = Pageflow::ImageFile.find_by_id(id)
        image ? '' : 'no_background_image'
      end
    end
  end
end
