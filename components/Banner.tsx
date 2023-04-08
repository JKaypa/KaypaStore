import Slider from "react-slick";
import {
  bannerImg,
  sliderImgFive,
  sliderImgFour,
  sliderImgThree,
  sliderImgTwo,
  sliderImgOne,
} from "@/public/assets/images";
import Image from "next/image";
import BannerText from "./BannerText";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import Button from "./Button";

function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="w-full bg-white px-4 py-6 flex gap-4 border-b">
      <div className="w-2/3 rounded-lg h-[410px] shadow-bannerShadow relative">
        <Slider {...settings}>
          <div className="w-full h-[410px] relative">
            <Image
              src={sliderImgOne}
              alt="sliderImageOne"
              priority
              className="w-full h-full object-cover rounded-lg"
            />
            <BannerText
              title="Spring fashion in bloom"
              description="New trends & styles to run heads anytime, on any budget."
              btnText="Shop now"
              className="absolute w-60 h-full top-4 left-4 flex flex-col gap-3 text-white"
            />
          </div>
          <div className="w-full h-[410px] relative">
            <Image
              src={sliderImgTwo}
              alt="sliderImageTwo"
              priority
              className="w-full h-full object-cover rounded-lg"
            />
            <BannerText
              title="Up to 65% off  "
              description="New savings every week! Hurry to score low, low prices."
              btnText="Shop now"
              className="absolute w-60 h-full top-4 left-4 flex flex-col gap-3 text-black"
            />
          </div>
          <div className="w-full h-[410px] relative">
            <Image
              src={sliderImgThree}
              alt="sliderImageThree"
              priority
              className="w-full h-full object-cover rounded-lg"
            />
            <BannerText
              title="You can save $1300+ a year!*"
              description="Start saving with free delivery, Walmart Reqards & more."
              btnText="Try free"
              className="absolute w-60 h-full top-4 left-4 flex flex-col gap-3 text-blue"
            />
          </div>
          <div className="w-full h-[410px] relative">
            <Image
              src={sliderImgFour}
              alt="sliderImageFour"
              priority
              className="w-full h-full object-cover rounded-lg"
            />
            <BannerText
              title="Up to 50% off in products for your baby"
              description="New savings every month! Hurry to score low, low prices."
              btnText="Shop now"
              className="absolute w-60 h-full top-4 left-4 flex flex-col gap-3 text-black"
            />
          </div>
          <div className="w-full h-[410px] relative">
            <Image
              src={sliderImgFive}
              alt="sliderImageFive"
              priority
              className="w-full h-full object-cover rounded-lg"
            />
            <BannerText
              title="You can save $2000+ a year!*"
              description="Save more with these discounts and free delivery."
              btnText="Shop now"
              className="absolute w-60 h-full top-4 left-4 flex flex-col gap-3 text-black"
            />
          </div>
        </Slider>
      </div>
      <div className="w-1/3 h-[410px] border border-gray-200 rounded-lg shadow-bannerShadow p-4 flex flex-col justify-between">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">Flash pick of the day</h2>
          <p className="text-zinc-600 underline underline-offset-2">View all</p>
        </div>
        <Image src={bannerImg} alt="bannerImg" className="h-60 object-cover my-1"/>
        <Button text={'Options'}/>
        <h2 className="text-lg font-semibold">From $199.90</h2>
        <p className="text-gray-500">uhomepro TV Stand Cabinet for Living Room...</p>
      </div>
    </div>
  );
}

export default Banner;
