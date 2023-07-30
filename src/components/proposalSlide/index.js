import { useState } from "react";
import Modal from "../modal";
import Question from "../modal/question";
import AcceptProposal from "../modal/acceptProposal";

const ProposalSlide = ({ children, onNext, onPrev }) => {
  const [isQuestionOpen, setQuestionOpen] = useState(false);
  const [isAcceptOpen, setAcceptOpen] = useState(false);

  const closeQuestion = () => setQuestionOpen((open) => !open);
  const closeAccept = () => setAcceptOpen((open) => !open);

  return (
    <div className="px-2 py-4 flex-shrink-0 w-full sm:px-4 bg-gray-100 rounded-3xl overflow-y-auto">
      <div className="flex justify-end items-center gap-4">
        <button
          className="h-[36px] px-4 text-md rounded-md font-semibold text-white bg-black uppercase hidden sm:block"
          onClick={closeAccept}
        >
          Accept
        </button>

        <button
          className="py-1 px-2 h-[36px] rounded-md bg-gray-300 flex-col items-center hidden sm:flex"
          onClick={closeQuestion}
        >
          <span className="material-symbols-outlined text-[15px]">
            speaker_notes
          </span>
          <span className="text-[8px] font-semibold">Question</span>
        </button>

        <button className="h-[36px] w-10 rounded-md bg-gray-300 flex items-center justify-center">
          <span
            className="material-symbols-outlined text-lg font-semibold"
            onClick={onPrev}
          >
            arrow_back_ios
          </span>
        </button>

        <button
          className="h-[36px] w-10 rounded-md bg-gray-300 flex items-center justify-center"
          onClick={onNext}
        >
          <span className="material-symbols-outlined text-lg font-semibold">
            arrow_forward_ios
          </span>
        </button>
      </div>
      <div className="w-full mt-4 h-[calc(100vh-186px)] overflow-y-auto">
        {children}
      </div>

      <Modal isOpen={isAcceptOpen}>
        <AcceptProposal onClose={closeAccept} />
      </Modal>

      <Modal isOpen={isQuestionOpen} onOutsideClick={closeQuestion}>
        <Question onClose={closeQuestion} />
      </Modal>
    </div>
  );
};

export default ProposalSlide;
