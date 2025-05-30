import { useEffect, useState } from "react";
import ProductSlider from "../components/ProductSlider";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://devcase.isiksoftyazilim.com/api/products?page=1")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Cevabı:", data);
        setProducts(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Hata:", err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-rose-100 via-fuchsia-200 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-700 px-4 py-8 sm:px-8 md:px-16 overflow-hidden">

      <div className="absolute top-[-100px] left-[-100px] w-[200px] h-[200px] bg-pink-400 opacity-70 rounded-full blur-xl pointer-events-none z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[200px] h-[200px] bg-indigo-400 opacity-70 rounded-full blur-xl pointer-events-none z-0" />

      <h1 className="relative z-10 text-5xl sm:text-6xl font-extrabold text-center bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg tracking-tight mb-12">
        Ürünler
      </h1>

      <div className="relative z-10">
        {loading ? (
          <p className="text-center text-gray-700 dark:text-gray-300">Yükleniyor...</p>
        ) : (
          <ProductSlider products={products} />
        )}
      </div>
    
  </main>
);
}
