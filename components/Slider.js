import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import styled from "styled-components";
import { useAppContext } from "../context/app_context";
import Image from "next/image";

const SliderN = () => {
  const {
    slider,
    slider_loading: loading,
    slider_error: error,
  } = useAppContext();

  //   const [slider, setslider] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = slider.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, slider]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  // const slide = slider.map((sl) => sl.slide.url)[index];
  return (
    <Wrapper>
      <section className="slider" id="slider">
        <div className="ssection-center">
          {slider.map((slides, slideIndex) => {
            const { id, slide } = slides;

            let position = "nextSlide";
            if (slideIndex === index) {
              position = "activeSlide";
            }
            if (
              slideIndex === index - 1 ||
              (index === 0 && slideIndex === slider.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <article className={position + " sarticle"} key={id}>
                <center>
                  <Image
                    alt="Bennetts Car Care"
                    src={slide.url || `/assets/Bennettscarcare.png`}
                    width={500}
                    height={500}
                    className="person-img"
                  />
                </center>
              </article>
            );
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .slider {
    /* min-height: 100vh; */
    /* padding: 8rem 0; */
  }

  .ssection-center {
    margin: 0 auto;
    margin-top: 4rem;
    width: 80vw;
    height: 580px;
    max-width: 600px;
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;
  }
  .person-img {
    border-radius: 50%;
    margin-bottom: 1rem;
    width: 500px;
    height: 500px;
    object-fit: cover;
    border: 4px solid var(--clr-grey-8);
    box-shadow: var(--dark-shadow);
  }

  .prev,
  .next {
    position: absolute;
    top: 250px;
    transform: translateY(-50%);
    /* background: var(--clr-primary-1); */
    color: var(--clr-primary-1);
    width: 1.25rem;
    height: 1.25rem;
    display: grid;
    place-items: center;
    border-color: transparent;
    font-size: 1rem;
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);
  }
  .prev:hover,
  .next:hover {
    /* background: var(--clr-primary-5); */
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }

  .sarticle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: var(--transition);
  }
  .sarticle.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }
  .sarticle.lastSlide {
    transform: translateX(-100%);
  }
  .sarticle.nextSlide {
    transform: translateX(100%);
  }

  @media (min-width: 800px) {
    .prev,
    .next {
      width: 2rem;
      height: 2rem;
      font-size: 1.5rem;
    }
  }

  @media (max-width: 767px) {
    .ssection-center {
      margin: 0 auto;
      margin-top: 4rem;
      width: 80vw;
      height: 350px;
    }
    .person-img {
      width: 300px;
      height: 300px;
    }

    .prev,
    .next {
      top: 125px;
      display: none;
    }
  }
`;

export default SliderN;
