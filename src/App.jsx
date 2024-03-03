// Importing components and sections from respective files
import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from './sections'; // Importing sections
import Nav from './components/Nav'; // Importing Nav component

// Defining the main App section
const App = () => (
  <main className="relative"> {/* Main container of the application */}
    <Nav /> {/* Rendering the navigation section */}
    <section className="xl:padding-l wide:padding-r padding-b"> {/* Section for Hero section */}
      <Hero /> {/* Rendering the Hero section */}
    </section>
    <section className="padding"> {/* Section for PopularProducts section */}
      <PopularProducts /> {/* Rendering the PopularProducts section */}
    </section>
    <section className="padding"> {/* Section for SuperQuality section */}
      <SuperQuality /> {/* Rendering the SuperQuality section */}
    </section>
    <section className="padding-x py-10"> {/* Section for Services section */}
      <Services /> {/* Rendering the Services section */}
    </section>
    <section className="padding"> {/* Section for SpecialOffer section */}
      <SpecialOffer /> {/* Rendering the SpecialOffer section */}
    </section>
    <section className="bg-pale-blue padding"> {/* Section for CustomerReviews section */}
      <CustomerReviews /> {/* Rendering the CustomerReviews section */}
    </section>
    <section className="padding-x sm:py-32 py-16 w-full"> {/* Section for Subscribe section */}
      <Subscribe /> {/* Rendering the Subscribe section */}
    </section>
    <section className="bg-black padding-x padding-t pb-8"> {/* Section for Footer section */}
      <Footer /> {/* Rendering the Footer section */}
    </section>
  </main>
);

export default App; // Exporting the App as default
