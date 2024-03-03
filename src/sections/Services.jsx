// Importing necessary components and constants
import ServiceCard from "../components/ServiceCard"; // Importing ServiceCard component
import { services } from "../constants"; // Importing services constant from '../constants'

// Defining the Services component
const Services = () => {
    return (
      // Services section
      <section className="max-container flex justify-center flex-wrap gap-9">
        {/* Mapping over services and rendering each ServiceCard */}
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} /> // Passing service details as props
        ))}
      </section>
    )
}

export default Services; // Exporting the Services component as default
