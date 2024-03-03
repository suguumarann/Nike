// Defining the ShoeCard component
const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  // Function to handle click event
  const handleClick = () => {
      // If the big shoe image is not the same as the clicked shoe image
      if(bigShoeImg !== imgURL.bigShoe) {
          // Change the big shoe image to the clicked shoe image
          changeBigShoeImage(imgURL.bigShoe);
      }
  }

  return (
      // Shoe card container
      <div className={`border-2 
          rounded-xl
          ${bigShoeImg === imgURL.bigShoe
              ? 'border-coral-red' // If the big shoe image matches the current shoe image, apply coral-red border
              : 'border-transparent' // Otherwise, apply transparent border
          } cursor-pointer max-sm:flex-1
      `}
      onClick={handleClick} // onClick event to handle image change
      >
          {/* Shoe image container */}
          <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
              <img
              src={imgURL.thumbnail} // Thumbnail image URL
              alt="shoe collection" // Alt text for accessibility
              width={127}
              height={103}
              className="object-contain" // Image styling
              />
          </div>
      </div>
  )
}

export default ShoeCard; // Exporting the ShoeCard component as default
