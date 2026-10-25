import { useRef } from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, Sprout, HandHeart, Globe, GraduationCap } from "lucide-react";
import Hero from "@/_components/Hero";
import AboutSect from "@/_components/AboutSect";
// import TargetAudience from "@/_components/TargetAudience";
import MisVis from "@/_components/MisVis";
import CTA from "@/_components/CTA";
import DonateHero from "@/_components/DonateHero";
import DreamHubs from "@/_components/DreamsHub";
import WhatWeDo from "@/_components/WhatWeDo";
// import TeamsOverview from "@/_components/TeamsOverview";
import BlogPreview from "@/_components/BlogPreview";
import FAQSect from "@/_components/FAQSect";
import DownPart from "@/components/DownPart";
import Impacts from "./Impacts";
import MilestoneSection from "@/_components/MilestoneSection.tsx";
import SpotlightAct from "@/_components/SpotlightAct.tsx";
// import heroBg from "@/assets/hero-bg.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const stats = [
  { value: "2,450+", label: "Children / Youth Reached", icon: Users },
  { value: "8", label: "Active Communities ", icon: Globe },
  { value: "11", label: "Partner Schools", icon: HandHeart },
  { value: "4+", label: "Programs Running", icon: BookOpen },
];

const programs = [
  {
    title: "Education & Literacy",
    description: "Providing quality education and literacy programs to children in underserved communities.",
    icon: GraduationCap,
  },
  {
    title: "Sustainable Agriculture",
    description: "Empowering rural communities with modern farming techniques and sustainable practices.",
    icon: Sprout,
  },
  {
    title: "Community Development",
    description: "Building infrastructure and capacity for lasting community transformation.",
    icon: Users,
  },
  {
    title: "Youth Empowerment",
    description: "Equipping young Africans with skills and opportunities for a brighter future.",
    icon: BookOpen,
  },
];

const Index = () => {
  const sectionRef = useRef(null);
  return (
    <div>
      <div id="hero-section" ref={sectionRef} className="">
      {/* Hero Section */}
      <Hero title={"Give Africa Children and Youth in Rural and Peri-urban Communities a Chance"} />

      </div>

      <section className="relative overflow-hidden bg-white py-14 dark:bg-gradient-to-b dark:from-[#064e3b] dark:to-[#064e3b]">


        <div className="container relative mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-4 gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5 }}
                className="group relative flex min-w-0 flex-col items-center justify-center rounded-2xl border border-emerald-100 bg-white/50 p-10 transition-all duration-500 hover:bg-white sm:rounded-[2.5rem] sm:p-10 dark:border-white/5 dark:bg-emerald-950/10 dark:hover:bg-emerald-950/20"
              >
                {/* Subtle Glow Effect on Hover */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-5" />

                {/* Icon Circle */}
                <div className="relative mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors duration-500 group-hover:bg-emerald-600 group-hover:text-white sm:h-10 sm:w-10 sm:rounded-2xl dark:bg-emerald-800/30 dark:text-emerald-400">
                    <stat.icon
                      size={20}
                      strokeWidth={1.5}
                      className="sm:h-7 sm:w-7"
                    />
                  </div>

                  {/* Floating particle animation */}
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-amber-400 opacity-0 transition-opacity group-hover:opacity-100 sm:-right-2 sm:-top-2 sm:h-3 sm:w-3"
                  />
                </div>

                <div className="min-w-0 text-center">
                  <motion.h3 className="text-xl font-black tracking-tighter text-zinc-900 sm:text-4xl lg:text-5xl dark:text-white">
                    {stat.value}
                  </motion.h3>

                  <p className="mt-1 text-[7px] font-bold uppercase leading-tight tracking-[0.08em] text-zinc-400 transition-colors group-hover:text-emerald-600 sm:mt-2 sm:text-xs sm:tracking-[0.2em] dark:text-emerald-500/60">
                    {stat.label}
                  </p>
                </div>

                {/* Bottom Line Detail */}
                <div className="absolute bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-emerald-500/20 transition-all duration-500 group-hover:w-8 sm:bottom-4 sm:h-1 sm:group-hover:w-12" />
              </motion.div>
            ))}
          </motion.div>
        </div>
    </section>

      {/* About Teaser */}
      <section id="about" className="bg-[#064e3b]">
        <AboutSect />
      </section>

      {/* <div className="">
        <TargetAudience />
      </div> */}

      {/* <div className="">
        <TeamsOverview />
      </div> */}

      <div className="">
        <MisVis />
      </div>

      <div className="">
        <CTA />
      </div>

      {/* Programs */}
      {/* <div>
        <WhatWeDo />
      </div> */}

      <div className="">
        <DreamHubs />
      </div>

      <div className="">
        <DownPart />
      </div>

      <div className="">
        <SpotlightAct />
      </div>

      <div className="">
        <BlogPreview />
      </div>

      <div className="">
        <FAQSect />
      </div>

      <div className="">
        <MilestoneSection />
      </div>

      <div className="">
        <DonateHero />
      </div>
    </div>
  );
};

export default Index;
