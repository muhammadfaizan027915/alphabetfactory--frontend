import { useContext } from "react";
import { AppContext } from "../../context/store";

const Sidebar = ({ isOpen, onClose }) => {
  const { question, accept, slidesName, selectedSlide } =
    useContext(AppContext);
  const [, setQuestionOpen] = question;
  const [, setAcceptOpen] = accept;
  const [SelectedSlide, setSelectedSlide] = selectedSlide;

  const onModalOpen = ({ target: { name } }) => {
    if (name === "accept") setAcceptOpen(true);
    else setQuestionOpen(true);
    onClose();
  };

  const onNavClick = ({ target: { name } }) => setSelectedSlide(name);

  return (
    <>
      {isOpen && (
        <div className="w-80 h-full bg-white absolute top-0 left-0 py-4 z-[100] shadow-2xl animate-move-in">
          <div className="flex justify-between items-center">
            <div className=" px-4 pb-2 w-full">
              <h2 className="font-bold">Example</h2>
              <p className="text-xs font-semibold">29 jun. 2023 (23:53)</p>
            </div>

            <button className="p-4 hover:text-red-600" onClick={onClose}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="text-sm text-black ">
            <button
              name="accept"
              onClick={onModalOpen}
              className={`flex items-center gap-2 ${styles.navLink} w-full block sm:hidden`}
            >
              <span className="material-symbols-outlined">done</span>
              Accept Prooposal
            </button>

            <button
              name="question"
              onClick={onModalOpen}
              className={`flex items-center gap-2 ${styles.navLink} w-full block sm:hidden`}
            >
              <span className="material-symbols-outlined">speaker_notes</span>
              <span>Question</span>
            </button>
            {slidesName.map((slide) => (
              <button
                key={slide}
                className={
                  slide === SelectedSlide
                    ? styles.activeLink 
                    : styles.navLink
                }
                name={slide}
                onClick={onNavClick}
              >
                {slide}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  navLink:
  "w-full text-left py-2 px-4 border-b-[1px] border-b-gray-300 hover:bg-red-600 hover:text-white  cursor-pointer capitalize",
  activeLink: "bg-red-600 text-white w-full text-left py-2 px-4 border-b-[1px] border-b-gray-300  cursor-pointer capitalize",
};

export default Sidebar;
