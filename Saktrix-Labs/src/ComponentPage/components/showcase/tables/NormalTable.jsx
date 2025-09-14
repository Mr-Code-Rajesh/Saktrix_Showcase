const data = [
  { id: 1, name: "Item 1", price: "$10" },
  { id: 2, name: "Item 2", price: "$20" },
  { id: 3, name: "Item 3", price: "$30" },
];

export default function NormalTable() {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full text-left border">
        <thead className="bg-gray-200 dark:bg-gray-700">
          <tr>
            <th className="p-3">ID</th>
            <th className="p-3">Name</th>
            <th className="p-3">Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-gray-100 dark:hover:bg-gray-800">
              <td className="p-3">{row.id}</td>
              <td className="p-3">{row.name}</td>
              <td className="p-3">{row.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
