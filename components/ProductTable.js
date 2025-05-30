import ProductCard from "./ProductCard";

export default function ProductTable({ products }) {
  if (!products || products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-gray-600 dark:text-gray-300">
        <img
          src="https://www.svgrepo.com/show/79320/empty-box.svg"
          alt="Boş kutu"
          className="w-24 h-24 mb-4 opacity-60"
        />
        <p className="text-lg font-medium">Hiç ürün bulunamadı.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
