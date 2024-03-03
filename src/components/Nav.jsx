// Importing necessary assets and constants
import { headerLogo } from '../assets/images'; // Importing header logo image
import { hamburger } from '../assets/icons'; // Importing hamburger icon image
import { navLinks } from '../constants'; // Importing navigation links from constants

// Defining the Nav component
const Nav = () => {
  return (
    // Header containing navigation
    <header className="padding-x py-8 absolute z-10 w-full ">
        {/* Navigation section */}
        <nav className="flex justify-between items-center max-container">
            {/* Logo */}
            <a href="/">
                <img 
                src={headerLogo} // Logo image
                alt="Logo"
                width={130}
                height={29}
                />
            </a>
            {/* List of navigation links */}
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {/* Mapping over navigation links */}
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a
                        href={item.href} // Link URL
                        className="font-montserrat leading-normal text-lg text-slate-gray" // Styling for link
                        >
                            {item.label} {/* Link label */}
                        </a>
                    </li>
                ))}
            </ul>
            {/* Hamburger icon for mobile */}
            <div className="hidden max-lg:block">
                <img
                src={hamburger} // Hamburger icon
                alt="Hamburger"
                width={25}
                height={25}
                />
            </div>
        </nav>
    </header>
  )
}

export default Nav; // Exporting the Nav component as default
