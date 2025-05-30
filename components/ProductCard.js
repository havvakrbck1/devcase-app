import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all border-2 border-purple-200"
    >
      <h2 className="text-2xl font-semibold text-purple-700 mb-2">{product.name}</h2>
      <p className="text-green-600 font-bold text-lg mb-2">{product.price} ₺</p>
      <p className="text-gray-600 text-sm">{product.description}</p>
    </motion.div>
  );
}
