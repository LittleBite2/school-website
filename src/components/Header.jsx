import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router'

function Header() {
    const [open, setOpen] = useState(false)
    return (
        <div>
            {/* top bar */}
            <div className='bg-secondary py-1'>
                <div className='w-11/12 mx-auto flex justify-between text-white text-xs'>
                    <p>xyz@gmail.com</p>
                    <p>facebook</p>
                </div>
            </div>


            {/* logo */}
            <div className='w-11/12 mx-auto flex justify-between'>
                <img src="./images/logo-name.jpg" alt="logo" className='pb-3 w=[300px] sm:w-auto h-[40px] sm:h-auto' /> <div className='mr-5 block sm:hidden'>
                    <button onClick={() => setOpen(!open)} > {open ? <X color='black' /> : <Menu color='black' />}</button>
                </div>
            </div>
            {/* navigation */}
            <nav className='bg-primary '>
                <ul className={`w-11/12 mx-auto sm:divide-y-0 divide-white sm:flex flex-col sm:flex-row items-center gap-y-5 sm:gap-x-5 text-white py-2 ${open ? "block" : "hidden"}`}>
                    <Link to="/"><li onClick={()=>setOpen(!open)}>Home</li></Link>
                    <Link to="/about"><li onClick={()=>setOpen(!open)}>About us</li></Link>
                    <Link to="/admission"><li onClick={()=>setOpen(!open)}>Admission</li></Link>
                    <Link to="/PublicDisclosure"><li onClick={()=>setOpen(!open)}>Mandatory Public Disclosure</li></Link>
                    <Link to="/academic"><li onClick={()=>setOpen(!open)}>Academic</li></Link>
                    <Link to="/achievement"><li onClick={()=>setOpen(!open)}>Achievement</li></Link>
                    <Link to="/infrastructure"><li onClick={()=>setOpen(!open)}>Infrastructure</li></Link>
                    <Link to="/gallery"><li onClick={()=>setOpen(!open)}>Gallery</li></Link>
                    <Link to="/contact"><li onClick={()=>setOpen(!open)}>Contact</li></Link>

                </ul>

            </nav>
        </div> 
    )
}

export default Header
