import React, { Fragment, useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StopCircleIcon,
} from "@heroicons/react/24/solid";


type Props = {
    autoSlide?: boolean
}

const Carousel = ({autoSlide=false}: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
      {
        url: "https://plus.unsplash.com/premium_photo-1664444190400-c4ec3c11d68a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        desc: "Sağlığınızı Düşünüyoruz...",
        href: "/ota-tss",
      },
      {
        url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80",
        desc: "Tatilinizi Düşünüyoruz...",
        href: "/ota-trip",
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1661370337354-558d7120eb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1554&q=80",
        desc: "Arabanızı Düşünüyoruz...",
        href: "/ota-insurance",
      },

      {
        url: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        desc: "İş Yerinizi Düşünüyoruz...",
        href: "/ota-workplace",
      },
      {
        url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        desc: "Evinizi Düşünüyoruz...",
        href: "/ota-dask",
      },
    ];

    useEffect(() => {
      if (!autoSlide) return;
      const slideInterval = setInterval(nextSlide, 6000);
      return () => clearInterval(slideInterval);
    });

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: React.SetStateAction<number>) => {
      setCurrentIndex(slideIndex);
    };

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 opacity-60 "
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronLeftIcon onClick={prevSlide} className="h-6 w-6" />
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className="absolute justify-center top-[60%] self-center items-center translate-x-50 translate-y-[-50%] text-4xl p-2 text-blue-900 text-center  font-bold z-10">
          İŞ SİGORTA
          <p className="text-base p-2 text-slate-900 mt-2">
            {slides[currentIndex].desc}
          </p>
          <p className="text-sm p-2 text-slate-900">
            İletişim formunu kullanarak bilgi alabilir veya bizi arayabilirsiniz
          </p>
          <div className="flex gap-4 text-md items-center justify-center m-4">
            <a
              href={slides[currentIndex].href}
              className="inline-flex w-[50%] justify-center rounded-md bg-slate-900 bg-opacity-60 p-4 px-7 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              HEMEN TEKLİF AL
            </a>
          </div>
        </div>
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronRightIcon onClick={nextSlide} className="h-6 w-6" />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <BsDot className="h-12 w-12 text-slate-900" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel