import { motion } from "framer-motion";

const steps = [
  { step: "1️⃣ Sign Up for Free", detail: "Create your account in minutes." },
  { step: "2️⃣ Choose Your Interest", detail: "Select your grade or career path." },
  { step: "3️⃣ Start Learning", detail: "Access all resources and track progress." },
];

export function HowItWorks() {
    return (
      <div className="py-20 px-8 bg-white text-blue-900">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col items-center gap-10 text-center">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="w-full max-w-md p-6 bg-blue-50 border border-blue-300 shadow-lg rounded-2xl transition-all duration-300 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold">{item.step}</h3>
              <p className="mt-3 text-gray-600">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
  