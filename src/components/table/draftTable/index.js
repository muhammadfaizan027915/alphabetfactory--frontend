const DraftTable = ({ onEdit, onRemove }) => {
  return (
    <>
      <h2 className="text-xl font-bold py-4">Drafts</h2>
      <div className="overflow-auto">
        <table className="w-full">
          <tbody className="text-center text-sm">
            <tr className="bg-gray-200">
              <td className="py-2 rounded-s-lg w-1/5 min-w-[150px]">
                Muhammad Faizan
              </td>
              <td className="w-fit">
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
                  onClick={onEdit}
                >
                  Edit
                </button>
                <button
                  className=" underline text-red-600 italic text-sm"
                  onClick={onRemove}
                >
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DraftTable;
