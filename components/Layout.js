import React from 'react'
import Link from 'next/link'

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
        <header className=' bg-fuchsia-100 mb-8 py-4'>
            <div className='container flex flex-1 flex-row flex-wrap content-around mx-auto justify-center'>
                <Link href='/'>
                    <a className='text-5xl'>🏡</a>
                </Link>
                <div className='mx-auto text-2xl py-1'>HD-Trading</div>
                <div className='mx-auto text-base py-1'>Merged - EN & AR - | Binance Academy Articles</div>
            </div>
        </header>
        <main className='container mx-auto ceholder flex-1'>{ children }</main>
        <footer className='bg-fuchsia-100 mt-8 py-4'>
            <div className='container mx-auto flex justify-center'>&copy; 2022 Hassan Dev</div>
        </footer>
    </div>
  )
}

export default Layout