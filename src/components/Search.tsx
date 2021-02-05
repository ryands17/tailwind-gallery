import * as React from 'react'
import { useHotkeys } from 'react-hotkeys-hook'

type SearchProps = {
  onSubmit: (val: string) => void
}

const Search = ({ onSubmit }: SearchProps) => {
  let [search, setSearch] = React.useState('')
  let searchRef = React.useRef<HTMLInputElement>(null)
  useHotkeys('ctrl+/', () => {
    searchRef.current?.focus()
    searchRef.current?.select()
  })

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form
        onSubmit={e => {
          e.preventDefault()
          onSubmit(search)
          searchRef.current?.blur()
        }}
        className="w-full max-w-sm"
      >
        <div className="flex items-center border-b-2 border- py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            name="search"
            placeholder="Search Image..."
            ref={searchRef}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
      <div className="text-sm flex justify-center mt-2 text-gray-500 font-semibold">
        Press <kbd className="px-2">ctrl + /</kbd> to search
      </div>
    </div>
  )
}

export default Search
