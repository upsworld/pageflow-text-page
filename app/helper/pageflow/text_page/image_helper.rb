module Pageflow
  module TextPage
    module ImageHelper
      def content_image(id, alt, format = :medium)
        image = Pageflow::ImageFile.find_by_id(id)
        if image
          image_tag.attachment.url(:medium)
        else
          ''
        end
      end
    end
  end
end
