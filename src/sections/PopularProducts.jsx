// Importing necessary components and constants
import PopularProductCard from "../components/PopularProductCard"; // Importing PopularProductCard component
import { products } from "../constants"; // Importing products constant from '../constants'

// Defining the PopularProducts component
const PopularProducts = () => {
    return (
      // PopularProducts section
      <section id="products" className="max-container max-sm:mt-12">
        {/* Title and description */}
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
          <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value.</p>
        </div>
        
        {/* Grid for displaying popular products */}
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
          {/* Mapping over products and rendering each PopularProductCard */}
          {products.map ((product) => (
            <PopularProductCard key={product.name} {...product} /> // Passing product details as props
          ))}
        </div>
      </section>
    )
}

export default PopularProducts; // Exporting the PopularProducts component as default
