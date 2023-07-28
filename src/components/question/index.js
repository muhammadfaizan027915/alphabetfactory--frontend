const Question = () => {
  return (
    <div className="question mt-2 flex flex-col md:flex-row md:items-end gap-2">
      <label className="w-full md:w-1/2">
        <p className="mb-2 font-semibold">Your Question:</p>
        <textarea
          className="p-2 w-full rounded-md bg-gray-200 border-2 border-gray-300 focus:outline-none"
          placeholder="Please write your question..."
          cols={20}
          rows={5}
        />
      </label>
      <button
        className="py-2 px-6 mb-2 text-md rounded-md font-semibold text-white bg-black uppercase"
      >
        Submit
      </button>
    </div>
  );
};

export default Question;
