"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

type SpotlightItem = {
  tag: string;
  title: string;
  img: string;
  description: string;
  extra: string;
  link: string;
};

const spotlightItems: SpotlightItem[] = [
  {
    tag: "SPOTLIGHT ACTIVITY",
    title:
      "Rurban Africa Launches THE GREAT MISSION Across Six Rural Schools in September",
    img: "/great-miss-news-6.jpg",
    description:
      "Rurban Africa joyfully commenced THE GREAT MISSION across six schools in five rural communities.",
    extra:
      "See how Rurban Africa transformed Africa Day into a powerful movement of education, leadership, hygiene, and hope.",
    link: "/blogs/africa-day-2026-great-mission",
  },
  {
    tag: "SPOTLIGHT ACTIVITY",
    title:
      "Rurban Africa Provides Uniforms to Thirty-Six (36) Rural School Students",
    img:
      "/uniform-news-2.jpg" ,
    description:
      "Rurban Africa joyfully commenced THE GREAT MISSION across six schools in five rural communities.",
    extra:
      "See how Rurban Africa transformed Africa Day into a powerful movement of education, leadership, hygiene, and hope.",
    link: "/blogs/africa-day-2026-uniform-mission",
  },
  {
    tag: "SPOTLIGHT ACTIVITY",
    title:
      "Rurban Africa Celebrates Africa Day 2026 with ESUT Primary and Secondary School, Agbani",
    img: "/africaday-11.jpg",
    description:
      "Rising Clean, Rising Strong: Education & Pride for Africa’s Future.",
    extra:
      "See how Rurban Africa transformed Africa Day into a powerful movement of education, leadership, hygiene, and hope.",
    link: "/blogs/africa-day-2026-esut-agbani-enugu",
  },
];

export default function SpotlightAct() {
  const navigate = useNavigate();

  return (
    <section className="pt-28 bg-[#F9FBFA] dark:bg-[#041d14] transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-28 lg:space-y-36">
          {spotlightItems.map((content, index) => {
            const imageOnLeft = index % 2 !== 0;

            return (
              <div
                key={content.title}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-18 items-center ${
                  imageOnLeft ? "" : ""
                }`}
              >
                {/* TEXT */}
                <div
                  className={`flex flex-col ${
                    imageOnLeft
                      ? "lg:order-2"
                      : "lg:order-1"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {/* Eyebrow */}
                      <span className="inline-block text-amber-500 dark:text-amber-400 font-bold uppercase tracking-[0.28em] text-[10px] px-4 py-1.5 rounded-full border border-amber-200 dark:border-amber-800/50 bg-amber-50 dark:bg-amber-900/10 mb-4">
                        {content.tag}
                      </span>

                      {/* Heading */}
                      <h2
                        className="text-3xl md:text-4xl font-black text-stone-900 dark:text-white leading-[1.05] tracking-tight mb-5"
                        style={{
                          fontFamily:
                            "'Playfair Display', Georgia, serif",
                        }}
                      >
                        {content.title}
                      </h2>

                      {/* Description */}
                      <div className="space-y-5 max-w-lg">
                        <p className="text-emerald-600 dark:text-emerald-100/70 leading-relaxed text-base">
                          {content.description}
                        </p>

                        <p className="text-zinc-400 dark:text-emerald-100/40 text-sm leading-relaxed">
                          {content.extra}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Divider */}
                  <div className="my-5 md:my-10 h-px bg-zinc-900/8 dark:bg-white/8" />

                  {/* CTA */}
                  <motion.button
                    onClick={() => navigate(content.link)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="self-start flex items-center gap-3 bg-[#064e3b] text-white px-7 py-3.5 rounded-full font-bold text-sm tracking-wide shadow-xl shadow-emerald-900/20 group"
                  >
                    Explore More

                    <span className="bg-amber-400 text-black rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
                      <ArrowUpRight
                        size={16}
                        strokeWidth={3}
                      />
                    </span>
                  </motion.button>
                </div>

                {/* IMAGE */}
                <div
                  className={`${
                    imageOnLeft
                      ? "lg:order-1"
                      : "lg:order-2"
                  }`}
                >

                  <div className="relative h-[400px] lg:h-[620px] w-full overflow-hidden rounded-3xl">
                    <motion.img
                      src={content.img}
                      alt={content.title}
                      className="w-full h-full object-cover rounded-3xl"
                      initial={{
                        opacity: 0,
                        scale: 1.06,
                        filter: "blur(8px)",
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)",
                      }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.75,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}