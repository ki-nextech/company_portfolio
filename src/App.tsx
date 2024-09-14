import "./style.css";
import triangle from "./assets/triangle.png";
import top from "./assets/top.png";
import about_us from "./assets/about_us.png";
import support_system from "./assets/support_system.png";
import representative from "./assets/representative.png";
import { Bars3Icon } from "@heroicons/react/24/solid";
import "./components/custom_underline.css";
import { FadeAnimation } from "./FadeAnimation";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
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
            <img src={top} alt="Top" className="w-full" />
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
            <img src={about_us} />
          </div>
        </FadeAnimation>
      </section>
      <section className="" id="support_system">
        <FadeAnimation>
          <div>
            <img src={support_system} />
          </div>
        </FadeAnimation>
      </section>
      <section className="" id="representative">
        <FadeAnimation>
          <div>
            <img src={representative} />
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
