import { useState } from "react"

export default function StoreItem({ item }) {
  return (
    <>
      <div className="lg:w-1/4 w-1/2 p-3">
        <div className="block relative h-24 rounded overflow-hidden">
          <img
            alt="e-commerce"
            className="object-cover object-center w-full h-full block"
            src={`https://dummyimage.com/210x140/${item.imageColor}/${item.imageColor}`}
          />
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <h3 className="text-gray-500 text-xs tracking-widest title-font uppercase mb-1">
              {item.category}
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              {item.name}
            </h2>
            <p className="mt-1">{(item.priceCents / 100)}</p>
          </div>
          <button
            className="text-white py-2 px-4 text-lg bg-purple-500 rounded hover:bg-purple-700"
          >
            Details
          </button>
        </div>
      </div>
    </>
  )
}