import { useEffect, useRef, useState } from "react";
import "./Carousel.css";

export function Carousel({ slides }) {
  let [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const goToPrevious = () => {
    let previousIndex =
      currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(previousIndex);
  };

  const goToNext = () => {
    let nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    console.log("Hello");
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 2000);
  });
  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       goToNext();
  //       //console.log("Hi");
  //     }, 2000);
  //     return () => clearInterval(intervalId);
  //   }, []);

  return (
    <>
      <div className="carousel">
        <button className="leftArrow" onClick={goToPrevious}>
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/arrow_homepage.svg?v=1685355827"
            alt="arrow"
          />
        </button>
        <button className="rightArrow" onClick={goToNext}>
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/arrow_homepage.svg?v=1685355827"
            alt="arrow"
          />
        </button>
        <img src={slides[currentIndex].img} alt={slides[currentIndex].title} />
      </div>
      <ul className="dotsContainer">
        {slides.map((slide, slideIndex) => (
          <li
            className="dots"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          ></li>
        ))}
      </ul>
    </>
  );
}
