import logo from '@/assets/logo.svg';
import { Search } from 'lucide-react';
import Image from "next/image";

interface HeaderProps {
  searchTerm: string;
  onSetSearch: (search: string) => void;
}

export default function Header({ onSetSearch, searchTerm }: HeaderProps) {
  return (
    <div className='flex items-center justify-between'>
      <Image src={logo} alt="Logo" width={100} />
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name="search-character"
          id="search-character"
          className="block w-full sm:w-96 rounded-md border-0 py-2 pl-2.5 pr-10 text-zinc-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-0 sm:leading-6 focus:outline-none"
          placeholder="Busque pelo personagem..."
          onChange={(e) => onSetSearch(e.target.value)}
          value={searchTerm}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}