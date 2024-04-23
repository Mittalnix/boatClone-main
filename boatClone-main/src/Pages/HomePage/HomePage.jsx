import { Link } from "react-router-dom";

import { Header } from "../../components/Header/Header";
import "./HomePage.css";
import Image1 from "../../Assests/Images/CarouselImage1.webp";
import Image2 from "../../Assests/Images/CarouselImage2.webp";
import Image3 from "../../Assests/Images/CarouselImage3.webp";
import Image4 from "../../Assests/Images/CarouselImage4.webp";
import { Carousel } from "../../components/Carousel/Carousel";
import Video1 from "../../Assests/Videos/headphonesVideo.mp4";
import Video2 from "../../Assests/Videos/neckBandVideo.mp4";
import Video3 from "../../Assests/Videos/smartWatchVideo.mp4";
import Video4 from "../../Assests/Videos/speakersVideo.mp4";
import Video5 from "../../Assests/Videos/wirelessEarbudVideo.mp4";
import WarrantyImage from "../../Assests/Images/Warranty.svg";
import ReplacementImage from "../../Assests/Images/Replacement.svg";
import ShippingImage from "../../Assests/Images/Shipping.svg";
import BillingImage from "../../Assests/Images/Billing.svg";
import { Footer } from "../../components/Footer/Footer";
const slides = [
  {
    img: Image1,
    title: "Image1",
  },
  {
    img: Image2,
    title: "Image2",
  },
  {
    img: Image3,
    title: "Image3",
  },
  {
    img: Image4,
    title: "Image4",
  },
];

const categoryVideos = [
  {
    src: Video1,
    name: "headphones",
    displayName: "Headphones",
  },
  {
    src: Video2,
    name: "neckband",
    displayName: "Neckband",
  },
  {
    src: Video3,
    name: "smartWatch",
    displayName: "Smart Watch",
  },
  {
    src: Video4,
    name: "speakers",
    displayName: "Speakers",
  },
  {
    src: Video5,
    name: "wirelessEarbuds",
    displayName: "Wireless Earbuds",
  },
];

const promiseIcons = [
  {
    src: WarrantyImage,
    name: "Warranty",
    adj: "1 year",
  },
  {
    src: ReplacementImage,
    name: "Replacement",
    adj: "7 days",
  },
  {
    src: ShippingImage,
    name: "Shipping",
    adj: "Free",
  },
  {
    src: BillingImage,
    name: "Billing",
    adj: "GST",
  },
];

export function HomePage() {
  return (
    <>
      <div className="main">
        <div className="header">
          <Header />
        </div>
        <div className="carouselContainer">
          <Carousel slides={slides} />
        </div>
        <div className="categoryContainer">
          <div className="categoryHeading">
            <h3>
              Explore{" "}
              <span>
                <b>Categories</b>
              </span>
            </h3>
          </div>
          <div className="categoryBlock">
            {categoryVideos.map((video) => (
              <Link to={`/categories/${video.name}`}>
                <div className="videoCardContainer">
                  <div className="videoCard">
                    <video
                      src={video.src}
                      onMouseOver={(event) => event.target.play()}
                      muted
                      loop
                      onMouseOut={(event) => event.target.pause()}
                    />
                  </div>
                  <div className="categoryName">
                    <p>{video.displayName}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="promiseIconsBlock">
          {promiseIcons.map((icon) => (
            <div className="promiseIconContainer">
              <div className="promiseIcon">
                <img src={icon.src} alt={icon.name} />
                <div className="iconName">
                  <p>
                    <b>{icon.adj} </b>
                    {icon.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
