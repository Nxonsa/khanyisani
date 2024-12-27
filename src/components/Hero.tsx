import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary to-accent">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/2fe542ce-4bdd-4e82-b27d-437013ad1b50.png')] bg-cover bg-center opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Khanyisani Firearm and Security Training Academy
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Professional security training and firearm handling courses by industry experts
          </p>
          <Link to="#courses">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground group"
            >
              Explore Our Courses
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};