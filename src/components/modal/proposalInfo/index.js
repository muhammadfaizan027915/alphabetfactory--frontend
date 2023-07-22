const ProposalInfo = ({ onClose }) => {
  return (
    <div className="max-w-[90%] mx-auto sm:max-w-2xl lg:max-w-3xl p-6 rounded-3xl bg-white shadow-xl">
      <h1 className="font-bold text-2xl text-center mb-4 relative uppercase">
        Your Proposal{" "}
        <button className="absolute right-1 font-normal" onClick={onClose}>
          <span className="material-symbols-outlined text-red-600">close</span>
        </button>
      </h1>

      <div>
        <p className="flex flex-col sm:flex-row items-start mb-4">
          <span className="sm:w-1/5 font-bold">Client's Name:</span>{" "}
          <span>Muhammad Faizan</span>
        </p>

        <p className="flex flex-col sm:flex-row iitems-start mb-4">
          <span className="sm:w-1/5 font-bold">Client's Phone:</span>{" "}
          <span>03171231341</span>
        </p>

        <p className="flex flex-col sm:flex-row items-start mb-4">
          <span className="sm:w-1/5 font-bold">Client's Email:</span>
          <span>muhammadfaizan027915@gmail.com</span>
        </p>

        <p className="flex flex-col sm:flex-row items-startr mb-4">
          <span className="sm:w-1/5 font-bold">Client's GST:</span>{" "}
          <span>xxxx-xxxx-xxxx</span>
        </p>

        <p className="flex flex-col sm:flex-row items-startr mb-4">
          <span className="sm:w-[45%] font-bold">Proposal:</span>{" "}
          <span>
            Taken from the Latin words "dolorem ipsum", which translates to
            "pain itself", Lorem Ipsum text saw a revival in the mid-20th
            century as placeholder text in printing and design.
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProposalInfo;
