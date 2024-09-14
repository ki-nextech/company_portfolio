import "./style.css";
import triangle from "./assets/triangle.png";
import top from "./assets/top.png";
import about_us from "./assets/about_us.png";
import support_system from "./assets/support_system.png";
import representative from "./assets/representative.png";
import top_mobile from "./assets/top_mobile.png";
import about_us_mobile from "./assets/about_us_mobile.png";
import support_system_mobile from "./assets/support_system_mobile.png";
import representative_mobile from "./assets/representative_mobile.png";
import { Bars3Icon } from "@heroicons/react/24/solid";
import "./components/custom_underline.css";
import { FadeAnimation } from "./FadeAnimation";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // mdのブレークポイントは768px
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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
            <img src={isMobile ? top_mobile : top} alt="Top" className="w-full" />
          </div>
        </FadeAnimation>
        <button
          className="absolute right-4 top-2 sm:right-8 sm:top-6 md:right-0 md:top-0 xl:top-5 xl:right-5"
          onClick={openModal}
        >
          <Bars3Icon className="w-10 h-10 sm:w-12 sm:h-12  md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary hover:bg-gray-300/30 hover:rounded-full" />
        </button>
      </section>

      <section className="" id="aboutus">
        <FadeAnimation>
          <div>
            <img src={isMobile ? about_us_mobile : about_us} alt="About Us" />
          </div>
        </FadeAnimation>
      </section>
      <section className="" id="support_system">
        <FadeAnimation>
          <div>
            <img src={isMobile ? support_system_mobile : support_system} alt="Support System" />
          </div>
        </FadeAnimation>
      </section>
      <section className="" id="representative">
        <FadeAnimation>
          <div>
            <img src={isMobile ? representative_mobile : representative} alt="Representative" />
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
