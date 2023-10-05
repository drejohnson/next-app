export function Banner() {
  return (
    <div className="hidden overflow-hidden text-ellipsis border-b border-blue-900 bg-blue-900 px-3 py-2 text-sm text-gray-200 md:block">
      <span className="bg-blue-800 px-1 py-0.5 text-xs font-semibold">New</span>{" "}
      <a
        href="https://nextjs.org/docs/app"
        target="_blank"
        rel="noreferrer noopened"
        className="cursor-pointer text-gray-100 hover:underline"
      >
        This template is made with Next.js 13 using the new App Router »
      </a>
    </div>
  )
}
