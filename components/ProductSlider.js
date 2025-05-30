import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ProductCard from "./ProductCard";
import { useEffect, useRef } from "react";

export default function ProductSlider({ products }) {
  const timer = useRef();
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1.2, spacing: 15 },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2.2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.2, spacing: 20 },
      },
    },
    created() {
      clearInterval(timer.current);
      timer.current = setInterval(() => {
        instanceRef.current?.next();
      }, 3000);
    },
  });

  useEffect(() => {
    return () => clearInterval(timer.current);
  }, []);

  return (
    <div className="overflow-hidden px-4 md:px-10">
      <div ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <div
            className="keen-slider__slide flex justify-center"
            key={product.id}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
