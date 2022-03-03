import Link from 'next/link'

export default function StoreItem({ route, name, price, image }) {
  return (
    <Link href={route}>
      <a className="group">
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img
            src='https://cdn11.bigcommerce.com/s-405b0/images/stencil/590x590/products/319/16252/anvil-980-white-t-shirt.ca__44861.1636581889.jpg?c=2'
            alt={name}
            className="w-full h-full object-center object-cover group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">${price}</p>
      </a>
    </Link>
  )
}
