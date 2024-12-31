import { IImage } from "@/shared/api";
import { Image } from "@/shared/ui/Image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ProductCarouselProps {
  Images: IImage[];
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ Images }) => {
  function renderImages() {
    return Images.map((image) => (
      <div key={image.id}>
        <Image src={image.imageUrl} alt={image.id} />
      </div>
    ));
  }
  return (
    <Carousel showArrows={false} autoPlay={true} showThumbs={false}>
      {renderImages()}
    </Carousel>
  );
};
