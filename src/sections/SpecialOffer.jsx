// Importing necessary assets and components
import { offer } from "../assets/images"; // Importing offer image
import Button from "../components/Button"; // Importing Button component

// Defining the SpecialOffer component
const SpecialOffer = () => {
    return (
      // SpecialOffer section
      <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
        {/* Left side: Image */}
        <div className="flex-1">
          <img src={offer} width={773} height={687} className="object-contain w-full" alt="Special Offer" />
        </div>
        {/* Right side: Content */}
        <div className="flex flex-1 flex-col">
          {/* Title */}
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            <span className="text-coral-red">Special</span> Offer
          </h2>
          {/* Description */}
          <p className="mt-4 lg:max-w-lg info-text">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
          <p className="mt-6 lg:max-w-lg info-text">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
          {/* Buttons */}
          <div className="mt-11 flex flex-wrap gap-4">
            {/* First button with default styles */}
            <Button label="View details" />
            {/* Second button with custom styles */}
            <Button
              label="Learn more"
              backgroundColor="bg-white" // Background color
              borderColor="border-slate-gray" // Border color
              textColor="text-slate-gray" // Text color
            />
          </div>
        </div>
      </section>
    )
}

export default SpecialOffer; // Exporting the SpecialOffer component as default
