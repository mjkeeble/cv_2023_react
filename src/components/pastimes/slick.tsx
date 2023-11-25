import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Image {
  src: string;
  alt: string;
}

interface SliderProps {
  images: Image[];
}

export const SimpleSlider: React.FC<SliderProps> = ({ images }) => {
  const settings = {
    arrows: false,
    className: "px-10",
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings} className="">
      {images.map((image, index) => (
        <div key={index}>
          <div className="align-center flex h-80 max-h-[calc(98vh_/_4)] justify-center">
            <img className="h-full object-contain p-2" src={`/images/${image.src}`} alt={image.alt} />
          </div>
        </div>
      ))}
    </Slider>
  );
};
