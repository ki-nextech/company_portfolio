import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { COLORS } from "../constants/colors";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
};

const CompanySidebar = ({ isOpen, closeModal }: Props) => {
  const scrollToSection = (sectionId: string) => {
    closeModal();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed z-50 inset-0" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 -translate-x-full"
                enterTo="opacity-100 translate-x-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 -translate-x-full"
              >
                <Dialog.Panel
                  className="w-[300px] fixed right-0 top-0 bottom-0 text-left z-50 overflow-auto font-sans"
                  style={{ backgroundColor: COLORS.BACKGROUND.LIGHT }}
                >
                  <div className="p-6 border-b border-gray-200">
                    <div
                      className="text-2xl font-bold mb-4"
                      style={{
                        fontFamily: "inherit",
                        color: COLORS.PRIMARY.GOLD.DEFAULT,
                      }}
                    >
                      Tech Value
                    </div>
                    <p className="text-sm text-gray-600">
                      ハイクラスエンジニア集団が運営するIT人材サービス
                    </p>
                  </div>

                  <ul className="py-4">
                    <li className="hover:bg-white transition-all duration-300">
                      <a
                        className="px-6 py-3 block text-gray-700 hover:text-accent-DEFAULT transition-all duration-300"
                        onClick={() => scrollToSection("company_top")}
                      >
                        トップ
                      </a>
                    </li>

                    <li className="hover:bg-white transition-all duration-300">
                      <a
                        className="px-6 py-3 block text-gray-700 hover:text-accent-DEFAULT transition-all duration-300"
                        onClick={() => scrollToSection("achievements")}
                      >
                        実績
                      </a>
                    </li>

                    <li className="hover:bg-white transition-all duration-300">
                      <a
                        className="px-6 py-3 block text-gray-700 hover:text-accent-DEFAULT transition-all duration-300"
                        onClick={() => scrollToSection("concerns")}
                      >
                        お悩み
                      </a>
                    </li>

                    <li className="hover:bg-white transition-all duration-300">
                      <a
                        className="px-6 py-3 block text-gray-700 hover:text-accent-DEFAULT transition-all duration-300"
                        onClick={() => scrollToSection("skill_analysis")}
                      >
                        特徴
                      </a>
                    </li>

                    <li className="hover:bg-white transition-all duration-300">
                      <a
                        className="px-6 py-3 block text-gray-700 hover:text-accent-DEFAULT transition-all duration-300"
                        onClick={() => scrollToSection("why_choose_us")}
                      >
                        Tech Valueの特典
                      </a>
                    </li>

                    <li className="hover:bg-white transition-all duration-300">
                      <a
                        className="px-6 py-3 block text-gray-700 hover:text-accent-DEFAULT transition-all duration-300"
                        onClick={() => scrollToSection("contact_form")}
                      >
                        お問い合わせ
                      </a>
                    </li>
                  </ul>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CompanySidebar;
