// Importing necessary assets
import { star } from "../assets/icons"; // Importing star icon image

// Defining the ReviewCard component
const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    // Review card container
    <div className="flex justify-center items-center flex-col">
        {/* Customer image */}
        <img
        src={imgURL} // Image URL
        alt="customer" // Alt text for accessibility
        className="rounded-full object-cover w-[120px] h-[120px]" // Image size and styling
        />
        {/* Customer name */}
        <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
        {/* Customer feedback */}
        <p className="mt-2 max-w-sm text-center info-text">{feedback}</p>
        {/* Rating section */}
        <div className="mt-3 flex justify-center items-center gap-2.5">
            {/* Star icon */}
            <img
            src={star} // Star icon image
            width={24}
            height={24}
            className="object-contain m-0" // Icon styling
            />
            {/* Rating */}
            <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
        </div>
    </div>
  )
}

export default ReviewCard; // Exporting the ReviewCard component as default
