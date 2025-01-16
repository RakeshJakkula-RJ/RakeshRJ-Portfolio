import React from 'react';
import { links } from '../Data';


const Navbar = () => {
  return (
   
    <nav className='bg-slate-800 sticky top-0'>
        <div className='mx-auto max-w-7xl px-8 py-4  flex flex-col 
                sm:flex-row sm:gap-x-16 sm:items-center sm:py-8' >  
            <h2 className='text-3xl font-bold text-transparent bg-clip-text  bg-gradient-to-r 
                  from-cyan-600 via-pink-500 to-red-600 '>
                Rakesh
                 <span className='text-transparent bg-clip-text  bg-gradient-to-r
                  from-cyan-600 via-pink-500 to-rose-700'>RJ</span>
            </h2>

            <div className='flex gap-x-3 text-emerald-50 hover:text-purple-400' >
                {links.map((link) => {
                    const{ id,href,text } = link;  // destructuring from data.jsx (links)
                     
                     return (
                         <a href={href} key={id} >
                             { text }
                          </a>
                     )
                })}
            </div>
        </div>
    </nav>
    
  )
}

export default Navbar