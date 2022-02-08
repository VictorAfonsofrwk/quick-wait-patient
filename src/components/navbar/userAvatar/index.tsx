export default function UserThumbNail({ children }: { children: { userName: any } }) {
  const { userName } = children
  return (
    <>
      <div className="flex flex-row space-x-8 items-center">
        <span className="text-sm rounded-xl shadow-md py-2 px-6 font-semibold bg-white text-gray-500 ">{userName}</span>
        <i className={`text-center rounded-full shadow-xl border-t-8 h-12 w-12 flex flex-col items-center`} >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </i>
      </div>
    </>
  )
}
