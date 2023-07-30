const Question = ({ onClose }) => {
  return (
    <div className="relative md:w-[600px] ml-[-0.5rem] p-4 md:p-8 rounded-2xl shadow-xl bg-white">
      <div className="flex items-start">
        <h2 className="mb-2  text-2xl font-semibold">
          Ask question about this proposal:
        </h2>
        <button className="p-2  hover:text-red-600" onClick={onClose}>
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      <label className="w-full md:w-1/2">
        <p className="mb-2">Your Question</p>
        <textarea
          className="p-2 mb-2 w-full rounded-md bg-gray-200 border-2 border-gray-300 focus:outline-none"
          placeholder="Please write your question..."
          cols={20}
          rows={5}
        />
      </label>
      <button className="py-2 px-6 text-md rounded-md font-semibold text-white bg-black uppercase">
        Submit
      </button>
    </div>
  );
};

export default Question;
