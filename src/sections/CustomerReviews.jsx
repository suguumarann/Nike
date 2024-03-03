// Importing the ReviewCard component and the reviews constant from separate files
import ReviewCard from "../components/ReviewCard"; // Importing the ReviewCard component from '../components/ReviewCard' file
import { reviews } from "../constants"; // Importing the reviews constant from '../constants' file

// Defining the CustomerReviews component
const CustomerReviews = () => {
    return (
      // Section containing customer reviews
      <section className="max-container ">
        {/* Section title */}
        <h3 className="font-palanquin text-center text-4xl font-bold">
          What Our
          <span className="text-coral-red" > Customers </span>
          Say?
        </h3>
        {/* Section description */}
        <p className="info-text m-auto mt-4 max-w-lg text-center">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
        {/* Container for displaying reviews */}
        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {/* Mapping over reviews and rendering ReviewCard component for each review */}
          {reviews.map((review) => (
            <ReviewCard
              key={review.customerName} // Unique key for each review
              imgURL={review.imgURL} // Customer image URL
              customerName={review.customerName} // Customer name
              rating={review.rating} // Rating given by the customer
              feedback={review.feedback} // Feedback provided by the customer
            />
          ))}
        </div>
      </section>
    )
}

export default CustomerReviews; // Exporting the CustomerReviews component as default
