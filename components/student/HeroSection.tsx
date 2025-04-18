import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="text-center py-28 bg-white text-blue-900">
      <motion.h1 
        className="text-5xl font-extrabold tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Unlock Your Potential with Free Resources
      </motion.h1>
      <motion.p 
        className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Access study materials, test series, career guidance, and psychometric tests—all for free!
      </motion.p>
      <motion.div 
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Button className="px-6 py-3 text-lg font-semibold bg-blue-900 text-white rounded-2xl shadow-lg hover:bg-blue-800 transition-all duration-300">
          Explore Resources
        </Button>
      </motion.div>
    </div>
  );
}
