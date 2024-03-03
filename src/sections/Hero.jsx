// Importing necessary assets, components, constants, and hooks
import { arrowRight } from "../assets/icons"; // Importing arrowRight icon image
import Button from "../components/Button"; // Importing Button component
import { shoes, statistics } from "../constants"; // Importing shoes and statistics constants from '../constants'
import { bigShoe1 } from "../assets/images"; // Importing bigShoe1 image
import ShoeCard from "../components/ShoeCard"; // Importing ShoeCard component
import { useState } from 'react'; // Importing useState hook from React

// Defining the Hero component
const Hero = () => {
  // State to manage the big shoe image
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    // Hero section
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      {/* Left side of the hero section */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        {/* Title */}
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        {/* Description */}
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        {/* Shop now button */}
        <Button label="Shop now" iconURL={arrowRight} />
        
        {/* Statistics */}
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {/* Mapping over statistics and rendering each one */}
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right side of the hero section */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        {/* Big shoe image */}
        <img 
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        /> 
        {/* Shoe cards */}
        <div className= "flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {/* Mapping over shoes and rendering each ShoeCard */}
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)} // Function to change big shoe image
                bigShoeImg={bigShoeImg} // Current big shoe image
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero; // Exporting the Hero component as default
