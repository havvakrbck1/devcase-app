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
      <main className="min-h-screen bg-gradient-to-r from-rose-100 via-fuchsia-200 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">
        Ürünler
      </h1>
      {loading ? (
        <p className="text-center text-gray-700">Yükleniyor...</p>
      ) : (
        <ProductSlider products={products} />
      )}
    </main>
  );
}
