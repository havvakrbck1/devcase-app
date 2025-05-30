import ProductCard from "./ProductCard";

export default function ProductTable({ products }) {
  if (!products || products.length === 0) {
    return <p className="text-center text-gray-500">Hiç ürün bulunamadı.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
