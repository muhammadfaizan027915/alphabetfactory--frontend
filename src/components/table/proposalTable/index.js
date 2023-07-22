const ProposalTable = ({ onCraeteNew, onView, onDownload }) => {
  return (
    <>
      <div className="mt-4 flex justify-between items-center mb-4 pl-2">
        <h2 className="text-xl font-bold">Sent Proposals</h2>
        <button
          className="py-2 px-4 rounded-full text-sm font-semibold text-white bg-black hover:shadow-md"
          onClick={onCraeteNew}
        >
          Create New Proposal
        </button>
      </div>
      <div className="overflow-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="pb-4">Name</th>
              <th className="pb-4">Email</th>
              <th className="pb-4">Phone</th>
              <th className="pb-4">GST</th>
            </tr>
          </thead>
          <tbody className="text-center ]">
            <tr className="bg-gray-200">
              <td className="py-2 rounded-s-lg w-1/5 min-w-[150px]">
                Muhammad Faizan
              </td>
              <td className="w-1/5 min-w-[150px]">
                <a
                  href="mailto:muhammadfaizan027915@gmai.com"
                  className="hover:underline"
                >
                  muhammadfaizan027915@gmail.com
                </a>
              </td>
              <td className="w-1/5 min-w-[150px]">+92317332423</td>
              <td className="w-1/5 min-w-[150px]">xxxx-xxxx-xxxx</td>
              <td className="rounded-e-lg w-1/5 min-w-[150px]">
                <button
                  className=" underline mr-4 italic text-sm "
                  onClick={onView}
                >
                  View
                </button>
                <button
                  className=" underline italic text-sm"
                  onClick={onDownload}
                >
                  Download
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProposalTable;