import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Logo {
  src: string;
  alt: string;
}

const logos: Logo[] = [
  {
    src: "html_css.png",
    alt: "HTML and CSS logos",
  },
  {src: "react.png", alt: "React logo"},
  {src: "tailwindcss.png", alt: "Tailwind CSS logo"},
  {src: "blueprintjs.png", alt: "BlueprintJS logo"},
  {src: "Bulma Logo.png", alt: "Bulma logo"},
  {
    src: "bootstrap.png",
    alt: "Bootstrap logo",
  },
  {
    src: "p5.png",
    alt: "p5.js logo",
  },
  {
    src: "ts-logo-128.png",
    alt: "TypeScript logo",
  },
  {
    src: "js.png",
    alt: "JavaScript logo",
  },
  {
    src: "node.png",
    alt: "Node.js logo",
  },
  {
    src: "express.png",
    alt: "Express logo",
  },
  { src: "REST_api.png", alt: "REST API"},
  { src: "graphql.png", alt: "GraphQL logo" },
  {
    src: "mongodb.png",
    alt: "MongoDB logo",
  },
  {
    src: "PostgreSQL.png",
    alt: "PostgreSQL logo",  },
    {
      src: "sqlserver.png",
      alt: "Microsoft SQL Server logo",
    },
    {
      src: "git.png",
      alt: "Git logo",
    },
];

export default function SimpleSlider() {
  const settings = {
    arrows: false,
    className: "px-10",
    infinite: true,
    speed: 2500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="">
      {logos.map((logo) => (
        <div>
          <h3 className="flex justify-center h-14 m-2">
            <img
              className="object-contain saturate-0 opacity-60 hover:opacity-100 hover:saturate-100"
              src={`/public/carousel-logos/${logo.src}`}
              alt={logo.alt}
            />
          </h3>
        </div>
      ))}
    </Slider>
  );
}