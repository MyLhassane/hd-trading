import React from 'react'
import Link from 'next/link'

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
        <header className='bg-fuchsia-100 mb-8 py-4'>
            <div className='container mx-auto flex justify-center'>
                <Link href='/'>
                    <a className='text-5xl'>🏡</a>
                </Link>
                <span className='mx-auto text-3xl py-1'>HD-Trading</span>
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