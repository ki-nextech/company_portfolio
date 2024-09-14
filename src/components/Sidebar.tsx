import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
};

const Sidebar = ({ isOpen, closeModal }: Props) => {
  const scrollToRepresentative = (transition: string) => {
    closeModal();
    const section = document.getElementById(transition);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        {/* 以下のclassの指定は画面全体 */}
        <Dialog as="div" className="fixed z-50 inset-0" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200" // 0.2secかけてanimationする
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* 背景を薄暗くする */}
            <div className="fixed inset-0 !top-14 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-100"
                enterFrom="opacity-0 -translate-x-full" // 自分の横幅分左にずらす
                enterTo="opacity-100 translate-x-0"
                leave="ease-in duration-100"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 -translate-x-full"
              >
                <Dialog.Panel
                  className="w-[308px] fixed right-0 top-14 bottom-0 text-left  z-20 overflow-auto"
                  style={{ backgroundColor: "#F9F8F4" }}
                >
                  <ul className="space-y-3 mt-5">
                    <li className="sidebarLi hover:bg-primary/10">
                      <a className="px-6  block font-medium text-gray-600">
                        <div onClick={() => scrollToRepresentative("top")}>
                          top
                        </div>
                      </a>
                    </li>
                    <li className="sidebarLi hover:bg-primary/10">
                      <a className="px-6 block font-medium text-gray-600">
                        <div onClick={() => scrollToRepresentative("aboutus")}>
                          about us
                        </div>
                      </a>
                    </li>
                    <li className="sidebarLi hover:bg-primary/10">
                      <a className="px-6 block font-medium text-gray-600">
                        <div onClick={() => scrollToRepresentative("aboutus")}>
                          support system
                        </div>
                      </a>
                    </li>
                    <li className="sidebarLi hover:bg-primary/10">
                      <a className="px-6 block font-medium text-gray-600 ">
                        <div onClick={() => scrollToRepresentative("representative")}>
                          representative
                        </div>
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

export default Sidebar;
