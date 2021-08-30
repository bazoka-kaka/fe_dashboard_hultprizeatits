import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useTranslation from "next-translate/useTranslation";

function ImageSlider() {
  const settings = {
    dots: false,
    infinite: true,
    time: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "-8",
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1196,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "100",
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "50",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "-16",
        },
      },
    ],
  };

  let { t } = useTranslation();

  return (
    <Slider className="z-50 px-3" {...settings}>
      <div className="z-20 card-container">
        <div
          className="flex flex-col justify-between px-4 py-4 rounded-lg"
          style={{
            width: "250px",
            height: "370px",
            background: "linear-gradient(30.41deg, #C11873 0%, #EC83BD 100%)",
          }}
        >
          <h1 className="text-3xl font-semibold">
            10 September -<br />7 {t("common:october")}
          </h1>
          <h1 className="text-lg font-semibold text-right">
            Preliminary <br />
            <span className="text-3xl">{t("common:abstract-submission")}</span>
          </h1>
        </div>
      </div>
      <div className="card-container">
        <div
          className="px-1 py-1 rounded-lg"
          style={{
            width: "250px",
            height: "370px",
            background: "linear-gradient(30.41deg, #C11873 0%, #EC83BD 100%)",
          }}
        >
          <div
            className="flex flex-col justify-between w-full h-full px-4 py-4 rounded-lg"
            style={{ background: "black" }}
          >
            <h1 className="text-3xl font-semibold text-white">
              17 October -<br />7 November
            </h1>
            <h1 className="text-lg font-semibold text-right text-white">
              Semi-final
              <br />
              <span className="text-3xl">
                {t("common:video-pitching-presentation")}
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div
          className="px-1 py-1 rounded-lg"
          style={{
            width: "250px",
            height: "370px",
            background: "linear-gradient(30.41deg, #C11873 0%, #EC83BD 100%)",
          }}
        >
          <div
            className="flex flex-col justify-between w-full h-full px-4 py-4 rounded-lg"
            style={{ background: "black" }}
          >
            <h1 className="text-3xl font-semibold text-white">
              20 - 21
              <br />
              November
            </h1>
            <h1 className="text-lg font-semibold text-right text-white">
              Road to Final
              <br />
              <span className="text-3xl">{t("common:incubation-program")}</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div
          className="px-1 py-1 rounded-lg"
          style={{
            width: "250px",
            height: "370px",
            background: "linear-gradient(30.41deg, #C11873 0%, #EC83BD 100%)",
          }}
        >
          <div
            className="flex flex-col justify-between w-full h-full px-4 py-4 rounded-lg"
            style={{ background: "black" }}
          >
            <h1 className="text-3xl font-semibold text-white">
              4 - 5<br />
              {t("common:december")}
            </h1>
            <h1 className="text-lg font-semibold text-right text-white">
              Final
              <br />
              <span className="text-3xl">{t("common:award-ceremony")}</span>
            </h1>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default ImageSlider;
