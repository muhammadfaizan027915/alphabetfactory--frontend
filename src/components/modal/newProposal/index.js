const NewProposal = ({onCreate, onCancel}) => {
  return (
    <div className="max-w-[90%] mx-auto sm:max-w-2xl lg:max-w-3xl p-4 rounded-3xl bg-white shadow-xl">
      <h1 className="font-bold text-2xl text-center mb-4 ">
        Create New Proposal
      </h1>

      <div className="flex flex-col">
        <div className="mb-4 ">
          <label
            className="font-semibold inline-block mb-1"
            htmlFor="clientName"
          >
            Client's Name
          </label>
          <input
            type="text"
            id="clientName"
            placeholder="Enter Client's Name"
            className="bg-gray-100 h-10 w-full border-2 rounded-lg px-4 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label
            className="font-semibold inline-block mb-1"
            htmlFor="clientPhone"
          >
            Client's Phone
          </label>
          <input
            type="text"
            id="clientPhone"
            placeholder="Enter Client's Phone"
            className="bg-gray-100 h-10 w-full border-2 rounded-lg px-4 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label
            className="font-semibold inline-block mb-1"
            htmlFor="clientEmail"
          >
            Client's Email
          </label>
          <input
            type="text"
            id="clientEmail"
            placeholder="Enter Client's Email"
            className="bg-gray-100 h-10 w-full border-2 rounded-lg px-4 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label
            className="font-semibold inline-block mb-1"
            htmlFor="clientGst"
          >
            Client's GST
          </label>
          <input
            type="text"
            id="clientGst"
            placeholder="Enter Client's GST"
            className="bg-gray-100 h-10 w-full border-2 rounded-lg px-4 focus:outline-none"
          />
        </div>

        

        <div className="mb-2 flex justify-between items-center gap-4 mt-2">
          <button className="h-[36px] px-6 rounded-full text-md font-semibold text-white bg-black" onClick={onCreate}>
            Create Proposal
          </button>

          <button className="h-[36px] px-6 rounded-full text-md font-semibold text-gray-500 bg-white border-[1px] border-gray-500" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProposal;
