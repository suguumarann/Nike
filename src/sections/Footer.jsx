// Importing necessary assets and constants
import { copyrightSign } from "../assets/icons"; // Importing copyrightSign icon image
import { footerLogo } from "../assets/images"; // Importing footerLogo image
import { footerLinks, socialMedia } from "../constants"; // Importing footerLinks and socialMedia constants from '../constants'

// Defining the Footer component
const Footer = () => {
    return (
      // Footer section
      <footer className="max-container">
        {/* Footer content */}
        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
          {/* Left section of the footer */}
          <div className="flex flex-col items-start">
            {/* Footer logo */}
            <a href="/">
              <img
              src={footerLogo} // Footer logo image URL
              width={150}
              height={46}
              />
            </a>
            {/* Footer description */}
            <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards!</p>
            {/* Social media icons */}
            <div className="flex items-center gap-5 mt-8">
              {/* Mapping over social media icons and rendering each one */}
              {socialMedia.map((icon) => (
                <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full" key={icon.alt}>
                  <img
                  src={icon.src} // Social media icon image URL
                  alt={icon.alt} // Alt text for accessibility
                  width={24}
                  height={24}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Right section of the footer */}
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {/* Mapping over footer links sections and rendering each one */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
                <ul>
                  {/* Mapping over links in each section and rendering each one */}
                  {section.links.map((link) => (
                    <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer" key={link.name}>
                      <a>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom section of the footer */}
        <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
          {/* Left part of the bottom section */}
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img
            src={copyrightSign} // Copyright sign
            alt="copy right sign"
            width={20}
            height={20}
            className="rounded-full m-0"
            />
            <p>Copyright. All rights reserved.</p>
          </div>
          {/* Right part of the bottom section */}
          <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
        </div>
      </footer>
    )
}

export default Footer; // Exporting the Footer component as default
