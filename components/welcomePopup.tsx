"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function WelcomePopup() {
  const [open, setOpen] = useState(false);

useEffect(() => {
  let closeTimer: NodeJS.Timeout;

  const openTimer = setTimeout(() => {
    setOpen(true);

    closeTimer = setTimeout(() => {
      setOpen(false);
    }, 3000);
  }, 1000);

  return () => {
    clearTimeout(openTimer);
    if (closeTimer) clearTimeout(closeTimer);
  };
}, []);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{
    duration: 0.2,
    ease: "easeOut",
  }}
        >
          <motion.div
  initial={{
    opacity: 0,
    scale: 0.985,
  }}
  animate={{
    opacity: 1,
    scale: 1,
  }}
  exit={{
    opacity: 0,
    scale: 0.99,
  }}
  transition={{
    duration: 0.25,
    ease: "easeOut",
  }}
  className="relative w-full max-w-4xl overflow-hidden rounded-[32px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
>
  

            {/* Top Accent */}
            <div className="h-2 bg-linear-to-r from-teal-400 to-emerald-500" />

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-6 top-6 text-gray-400 transition hover:text-gray-500"
            >
              <X size={28} />
            </button>

            <div className="px-10 py-14 text-center">
              <h1 className="text-5xl md:text-7xl font-extrabold text-emerald-500">
                Welcome!
              </h1>

              <div className="mx-auto mt-5 h-1.5 w-28 rounded-full bg-teal-500" />

              <p className="mt-8 text-lg md:text-xl font-semibold uppercase tracking-[0.35em] text-teal-700">
                TO ENVIROZONE INSTRUMENTS &amp; EQUIPMENTS
              </p>


              <motion.button
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                onClick={() => setOpen(false)}
                className="mt-10 rounded-full bg-emerald-500 px-10 py-4 text-lg font-semibold text-white transition hover:bg-emerald-600"
              >
                Explore Website
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}