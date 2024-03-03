// Importing necessary components
import Button from "../components/Button"; // Importing Button component

// Defining the Subscribe component
const Subscribe = () => {
    return (
      // Subscribe section
      <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
        {/* Title */}
        <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">Sign Up For <span className="text-coral-red">Updates</span> & Newsletter</h3>
        {/* Form */}
        <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
          {/* Input field for email */}
          <input type="text" placeholder="subscribe@nike.com" className="input" />
          {/* Button for signing up */}
          <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <Button label="Sign Up" fullWidth /> {/* Button for signing up with fullWidth prop */}
          </div>
        </div>
      </section>
    )
}

export default Subscribe; // Exporting the Subscribe component as default
