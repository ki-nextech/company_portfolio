import "./style.css";
import ummImage from "./assets/umm.png";
import reiImage from "./assets/reiImage.png";
import kengoImage from "./assets/kengoImage.png";
import checkImage from "./assets/checkImage.png";
import useImage from "./assets/useImage.png";
import quickImage from "./assets/quickImage.png";
import kengoPicture from "./assets/kengoPicture.png";
import compnayIcon from "./assets/compnayIcon.png";
import dot from "./assets/dot.png";
import triangle from "./assets/triangle.png";
import { Bars3Icon } from "@heroicons/react/24/solid";
import "./components/custom_underline.css";
import { FadeAnimation } from "./FadeAnimation";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const closeModal = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsSidebarOpen(true);
  };
  return (
    <>
      <Sidebar isOpen={isSidebarOpen} closeModal={closeModal} />
      <section className="relative" id="top">
        <FadeAnimation>
          <div>
            <img src="/src/assets/top.png" alt="Top" className="w-full" />
          </div>
        </FadeAnimation>
        <button
          className="absolute right-0 top-0 md:right-0 md:top-0 xl:top-5 xl:right-5"
          onClick={openModal}
        >
          <Bars3Icon className="w-4 h-4 sm:w-8 sm:h-8  md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary hover:bg-gray-300/30 hover:rounded-full" />
        </button>
      </section>

      <section className="" id="aboutus">
        <FadeAnimation>
          <div>
            <img src="/src/assets/about_us.png" />
          </div>
        </FadeAnimation>
      </section>
      <section className="" id="support_system">
        <FadeAnimation>
          <div>
            <img src="/src/assets/support_system.png" />
          </div>
        </FadeAnimation>
      </section>
      <section className="" id="representative">
        <FadeAnimation>
          <div>
            <img src="/src/assets/reprezentative.png" />
          </div>
        </FadeAnimation>
      </section>

      <div
        className="fixed z-10 bottom-2 right-2 md:top-20 md:right-20 border-2 rounded-full cursor-pointer w-20 h-20 xl:w-28 xl:h-28 flex justify-center items-center "
        style={{ backgroundColor: "#FFB6B9" }}
        onClick={() => {
          window.open(
            "https://docs.google.com/forms/d/1Qpt3GTKAA8UNbi9u48SF_ebxJ9K586Qgulha-0U-Uo8/edit"
          );
        }}
      >
        <div className="flex flex-col items-center ">
          <div
            className="text-sm xl:text-xl "
            style={{ fontFamily: "Zen Maru Gothic" }}
          >
            CONTACT
          </div>
          <div className="w-1/4">
            <img src={triangle} alt="triangle" className="object-cover " />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
