import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
     <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.07, boxShadow: "0 15px 30px rgba(139, 92, 246, 0.4)" }}
      className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-shadow border border-transparent hover:border-purple-400"

    >
      <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-400 mb-2">
        {product.name}
      </h2>
      <p className="text-green-600 dark:text-green-400 font-bold text-lg mb-2">
        {product.price} ₺
      </p>
      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
        {product.description}
      </p>

    </motion.div>
  );
}
