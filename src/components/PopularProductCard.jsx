// Importing necessary assets
import { star } from '../assets/icons'; // Importing star icon image

// Defining the PopularProductCard component
const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    // Card container
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        {/* Product image */}
        <img
        src={imgURL} // Image URL
        alt={name} // Alt text for accessibility
        className="w-[280px] h-[280px]" // Image size
        />
        {/* Rating section */}
        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="rating" width={24} height={24} /> {/* Star icon */}
            <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p> {/* Rating */}
        </div>
        {/* Product name */}
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
        {/* Product price */}
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{price}</p>
    </div>
  )
}

export default PopularProductCard; // Exporting the PopularProductCard component as default
