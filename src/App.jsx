import "./App.css";
import About from "./components/About";
import SplashCursor from "./components/Animation/SplashCursor";
import { CTASection } from "./components/CTASection";
import { testimonials } from "./components/data";
import DetailedFeatures from "./components/DetailedFeatures";
import { FAQSection } from "./components/FAQSection";
import Features from "./components/Features";
import { Footer } from "./components/Footer";
import Hero from "./components/Hero";
import SupportDevs from "./components/SupportDevs";
import { TestimonialCard } from "./components/TestimonialCard";
import ValuesSection from "./components/Values";

// top imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function App() {
  return (
    <div className="relative">
      <SplashCursor />
      <Hero />
      <Features />
      <About />
      <SupportDevs />
      <DetailedFeatures />
      <ValuesSection />
      {/* Testimonials Section - Data Loop */}
      <section className="py-12 lg:py-20 flex justify-center">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="w-full !pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* FAQ Section */}
      <section>
        <FAQSection />
      </section>

      {/* CTA Section */}
      <section>
        <CTASection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
