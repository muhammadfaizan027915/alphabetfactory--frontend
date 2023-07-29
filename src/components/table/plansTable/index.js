const PlansTable = () => {
  return (
    <div className="overflow-auto">
    <table className="w-full mt-4">
      <thead className="bg-red-600 text-white h-8 text-left">
        <tr>
          <th className="w-[20%] px-4">Phase</th>
          <th className="w-[50%] px-4">Information</th>
          <th className="w-[20%] px-4">Who</th>
          <th className="w-[10%] px-4">Week</th>
        </tr>
      </thead>

      <tbody className="text-sm">
        <tr className="h-8 even:bg-gray-200 ">
          <td className="px-4 truncate w-[100px]">Prepration</td>
          <td className="px-4 truncate w-[200px]">
            The final schedule is drawn up and the most important requirements
            are prepared
          </td>
          <td className="px-4 truncate w-[100px]">Offorte</td>
          <td className="px-4 truncate w-[100px]">1</td>
        </tr>

        <tr className="h-8 even:bg-gray-200">
          <td className="px-4 truncate w-[100px]">Prepration</td>
          <td className="px-4 truncate w-[200px]">
            The final schedule is drawn up and the most important requirements
            are prepared
          </td>
          <td className="px-4 truncate w-[100px]">Offorte</td>
          <td className="px-4 truncate w-[100px]">1</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default PlansTable;
