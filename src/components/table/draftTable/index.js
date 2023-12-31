const DraftTable = ({ onEdit, onRemove }) => {
  return (
    <>
      <h2 className="text-xl font-bold py-4">Drafts</h2>
      <div className="overflow-auto">
        <table className="w-full border-y-separate border-spacing-y-4">
          <tbody className="text-center text-sm">
            <tr className="bg-gray-200">
              <td className="py-2 rounded-s-lg w-1/5 min-w-[150px]">
                XXXXXX
              </td>
              <td className="w-fit">
                <a
                  href="mailto:muhammadfaizan027915@gmai.com"
                  className="hover:underline"
                >
                  XXXXXXXX
                </a>
              </td>
              <td className="w-1/5 min-w-[150px]">XXXXXXX</td>
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
