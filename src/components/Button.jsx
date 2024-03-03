// Defining a functional component named Button
const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    // Button element with dynamic class names based on props
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}` // If background color is provided, use it along with text color and border color
        : "bg-coral-red text-white border-coral-red" // Otherwise, use default coral red colors
    } rounded-full ${fullWidth && 'w-full'}`}> {/* Applying dynamic class for full-width button */}
    
        {label} {/* Displaying button label */}
        {iconURL && <img
        src={iconURL} // If iconURL is provided, display the image
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5"
        />}
    </button>
  )
}

export default Button; // Exporting the Button component as default
