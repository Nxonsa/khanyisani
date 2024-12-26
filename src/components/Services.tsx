import { Shield, Target, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Shield,
    title: "Security Training",
    description: "Comprehensive security officer training programs following PSIRA standards",
  },
  {
    icon: Target,
    title: "Firearm Training",
    description: "Professional firearm handling and safety courses for all skill levels",
  },
  {
    icon: GraduationCap,
    title: "Certification",
    description: "Nationally recognized certification upon successful course completion",
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our range of professional security and firearm training services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <service.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-primary">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};