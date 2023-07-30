const Investmenttable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full mt-4 ">
        <thead className="bg-red-600 text-white h-8 text-left">
          <tr>
            <th className="w-[40%] px-2">Description</th>
            <th className="w-[10%] px-2">Count</th>
            <th className="w-[25%] px-2">Price</th>
            <th className="w-[25%] px-2">Subtotal</th>
          </tr>
        </thead>

        <tbody className="text-sm">
          <tr className="h-8 even:bg-gray-200">
            <td className="px-2 truncate">Service</td>
            <td className="px-2 truncate">1.0</td>
            <td className="px-2 truncate">$ 15,000.00</td>
            <td className="px-2 truncate">$ 15,000.00</td>
          </tr>

          <tr className="h-8 even:bg-gray-200">
            <td className="px-2 truncate">Discount</td>
            <td className="px-2 truncate"></td>
            <td className="px-2 truncate">50%</td>
            <td className="px-2 truncate">-750.00.0</td>
          </tr>

          <tr className="h-8 even:bg-gray-200">
            <td className="px-2 truncate"></td>
            <td className="px-2 truncate"></td>
            <td className="px-2 truncate">Subtotal</td>
            <td className="px-2 truncate">$ 750.00.0</td>
          </tr>

          <tr className="h-8 even:bg-gray-200">
            <td className="px-2 truncate">
              <strong>Options</strong>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr className="h-8 even:bg-gray-200">
            <td className="px-2 truncate">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Service A
              </label>
            </td>
            <td className="px-2 truncate">1.00</td>
            <td className="px-2 truncate">$ 150.00</td>
            <td className="px-2 truncate">$ 0.00</td>
          </tr>

          <tr className="h-8 even:bg-gray-200">
            <td className="px-2 truncate">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Service A
              </label>
            </td>
            <td className="px-2 truncate">1.00</td>
            <td className="px-2 truncate">$ 150.00</td>
            <td className="px-2 truncate">$ 0.00</td>
          </tr>

          <tr className="h-8 border-t-2 border-red-600">
            <td></td>
            <td></td>
            <td className="px-2 truncate">Subtotal</td>
            <td className="px-2 truncate">$ 14,325.00</td>
          </tr>

          <tr className="h-8 border-t">
            <td></td>
            <td></td>
            <td className="px-2 truncate">Total</td>
            <td className="px-2 truncate">$ 14,325.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Investmenttable;
