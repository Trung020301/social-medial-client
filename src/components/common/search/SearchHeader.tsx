'use client'
import { CircleX, Search } from 'lucide-react'
import React from 'react'

export default function SearchHeader() {
    const [searchValue, setSearchValue] = React.useState('')

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSearchValue(e.target.value)
    }

    return (
        <form className="w-3/4 relative flex items-center">
            <input
                name="search"
                type="text"
                placeholder="Tìm kiếm gì đó..."
                className="py-2 px-12 rounded-full w-full bg-slate-100 placeholder:italic focus:outline-none "
                value={searchValue}
                onChange={handleSearch}
            />
            {searchValue && (
                <CircleX
                    className="absolute right-3"
                    size={20}
                    onClick={() => setSearchValue('')}
                    cursor="pointer"
                />
            )}
            <Search className="absolute left-3" size={24} />
        </form>
    )
}
