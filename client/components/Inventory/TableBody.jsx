export default function TableBody({ products, deleteHandler, editHandler }) {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {products.map((doc) => {
        return (
          <tr key={doc.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="ml-1">
                  <div className="text-sm font-medium text-gray-900">
                    {doc.name}
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{doc.description}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {doc.status ? (
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  In Stock
                </span>
              ) : (
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                  Out of Stock
                </span>
              )}
            </td>
            <td className="px-8 py-4 whitespace-nowrap text-sm text-gray-500">
              {doc.price}
            </td>
            <td className="px-12 py-4 whitespace-nowrap text-sm text-gray-500">
              {doc.qty}
            </td>
            <td className="py- whitespace-nowrap text-left text-sm font-medium">
              <button
                onClick={(e) => {
                  editHandler(doc.id)
                }}
                className="text-blue-600 hover:text-indigo-900"
              >
                Edit
              </button>
            </td>
            <td className="py-4 whitespace-nowrap text-left text-sm font-medium">
              <button
                onClick={(e) => {
                  deleteHandler(doc.id)
                }}
                className="text-red-600 hover:text-indigo-900"
              >
                Delete
              </button>
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}
