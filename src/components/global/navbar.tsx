import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


type Props = {}

const Navbar = async (props: Props) => {
  return <header className='fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between'>
    <aside className='flex items-center gap-[2px]'>
    <Image
          src="/fused.png"
          width={35}
          height={35}
          alt="fuzzie logo"
          className="shadow-sm"
        />

        <p className='text-2xl font-bold'>Fused Flow</p>
        <Image
          src="/flow.png"
          width={30}
          height={30}
          alt="fuzzie logo"
          className="shadow-sm"
        />
    </aside>
    
    <aside className="flex items-center gap-4">
    <Link
          href="/dashboard"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
    <span className="absolute inset-0 bg-gradient-to-r from-[#1c9ce4] to-[#cae03c] rounded-lg" />
    <span className="relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
      Open Dashboard
    </span>
  </Link>
</aside>

  </header>
}

export default Navbar 
