import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink"

const navbarItems = [
    {path: '/about', text: 'About'},
    {path: '/pricing', text: 'Pricing'},
    {path: '/contact', text: 'Contact'},
]

export const Navbar = () => {
    console.log('Navbar creado')
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
        <Link href={'/'} className="flex items-center">
            <span>Home</span>
        </Link>

        <div className="flex flex-1"></div>
        
       {
         navbarItems.map( item => (            
            <ActiveLink key={item.path} {...item}  />
        ))
       }
    </nav>
  )
}
