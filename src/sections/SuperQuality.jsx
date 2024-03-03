// Importing necessary assets and components
import { arrowRight } from "../assets/icons"; // Importing arrowRight icon image
import { shoe8 } from "../assets/images"; // Importing shoe8 image
import Button from "../components/Button"; // Importing Button component

// Defining the SuperQuality component
const SuperQuality = () => {
    return (
      // SuperQuality section
      <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
        {/* Left side: Content */}
        <div className="flex flex-1 flex-col">
          {/* Title */}
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            We Provide You <span className="text-coral-red">Super</span> <span className="text-coral-red">Quality</span> Shoes
          </h2>
          {/* Description */}
          <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
          <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction.</p>
          {/* Button */}
          <div className="mt-11">
            <Button label="Shop now" iconURL={arrowRight} /> {/* Button for shopping with arrowRight icon */}
          </div>
        </div>
        {/* Right side: Image */}
        <div className="flex-1 flex justify-center items-center">
          <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
        </div>
      </section>
    )
}

export default SuperQuality; // Exporting the SuperQuality component as default
