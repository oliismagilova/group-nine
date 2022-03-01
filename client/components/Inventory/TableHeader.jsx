export default function TableHeader() {
  return (
    <tr>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        Product
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        Description
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        Status
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        Price
      </th>
      <th
        scope="col"
        className="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        QTY
      </th>
      <th scope="col" className="relative px-6 py-3">
        <span className="sr-only">Edit</span>
      </th>
      <th scope="col" className="relative px-6 py-3">
        <span className="sr-only">Delete</span>
      </th>
    </tr>
  )
}
