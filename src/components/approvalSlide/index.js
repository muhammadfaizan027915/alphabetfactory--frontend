import { useEffect, useState } from "react";

const Approval = ({
  approval,
  onNext,
  onPrev,
  setQuestion,
  onSubmitQuestion,
}) => {
  const { title, description } = approval;
  const [isQuestion, setIsQuestion] = useState(false);
  const onQuestion = () => setIsQuestion((isQuestion) => !isQuestion);

  useEffect(() => {
    if (isQuestion)
      document
        .querySelector(".question")
        .scrollIntoView({ behavior: "smooth" });
  }, [isQuestion]);

  console.log(title);

  return (
    <div className="px-2 py-4 flex-shrink-0 w-full sm:px-4 bg-gray-100 rounded-3xl min-h-[350px]">
      <div className="flex justify-end items-center gap-4">
        <button className="py-2 px-6 text-md rounded-md font-semibold text-white bg-black uppercase">
          Accept
        </button>

        <button
          className="py-1 px-2 rounded-md bg-gray-300 flex flex-col items-center"
          onClick={onQuestion}
        >
          <span className="material-symbols-outlined text-[17px]">
            speaker_notes
          </span>
          <span className="text-[10px] font-semibold">Question</span>
        </button>

        <button className="h-10 w-10 rounded-md bg-gray-300 flex items-center justify-center">
          <span
            className="material-symbols-outlined text-lg font-semibold"
            onClick={onPrev}
          >
            arrow_back_ios
          </span>
        </button>

        <button
          className="h-10 w-10 rounded-md bg-gray-300 flex items-center justify-center"
          onClick={onNext}
        >
          <span className="material-symbols-outlined text-lg font-semibold">
            arrow_forward_ios
          </span>
        </button>
      </div>

      <div className="mt-2">
        <h2 className="text-xl mb-2 font-semibold">{title}</h2>
        <p>{description}</p>
      </div>

      {isQuestion && (
        <div className="question mt-2 flex flex-col md:flex-row md:items-end gap-2">
          <label className="w-full md:w-1/2">
            <p className="mb-2 font-semibold">Your Question:</p>
            <textarea
              onChange={({ target: { value } }) => setQuestion(value)}
              className="p-2 w-full rounded-md bg-gray-200 border-2 border-gray-300 focus:outline-none"
              placeholder="Please write your question..."
              cols={20}
              rows={5}
            />
          </label>
          <button
            className="py-2 px-6 mb-2 text-md rounded-md font-semibold text-white bg-black uppercase"
            onClick={onSubmitQuestion}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Approval;
