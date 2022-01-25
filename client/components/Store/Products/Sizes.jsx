export default function Sizes({ size }) {
  return (
    <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
      <input
        type="radio"
        name="size-choice"
        value="XS"
        className="sr-only"
        aria-labelledby="size-choice-1-label"
      />
      <p id="size-choice-1-label">{size}</p>

      <div
        className="absolute -inset-px rounded-md pointer-events-none"
        aria-hidden="true"
      ></div>
    </label>
  )
}
