import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Courses } from "@/components/Courses";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Index = () => {
  useEffect(() => {
    console.log("Page loaded - Khanyisani Training Academy");
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Hero />
      <Services />
      <Courses />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Index;