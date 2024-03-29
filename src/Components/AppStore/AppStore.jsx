import React from "react";
import AppStorePng from "../../assets/website/app_store.png";
import PlayStore from "../../assets/website/play_store.png";

const AppStore = () => {
  return (
    <div className="container py-10 sm:min-h-[400px] sm:grid sm:place-items-center">
      <div className="space-y-6 max-w-xl mx-auto">
        <h1
          data-aos="fade-up"
          className="text-2xl text-center sm:text-4xl font-semibold"
        >
          Get Started with our App
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center sm:px-20"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          magnam harum accusantium odit?
        </p>
        <div className="flex flex-wrap justify-center gap-4 items-center">
          <a href="#" data-aos="fade-up" data-aos-delay="500">
            <img
              src={AppStorePng}
              alt="App Store"
              className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] "
            />
          </a>
          <a href="#" data-aos="fade-up" data-aos-delay="700">
            <img
              src={PlayStore}
              alt="Play Store"
              className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
