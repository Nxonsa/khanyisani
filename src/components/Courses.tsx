import { motion } from "framer-motion";
import { Shield, Target, Award, Users } from "lucide-react";

const courses = [
  {
    icon: Shield,
    title: "Security Officer Training",
    description: "PSIRA Grades E to A training courses for aspiring security officers.",
  },
  {
    icon: Target,
    title: "Firearm Training",
    description: "Comprehensive firearm handling and safety courses for all skill levels.",
  },
  {
    icon: Award,
    title: "Specialized Security Training",
    description: "Advanced security techniques and tactical response training.",
  },
  {
    icon: Users,
    title: "Corporate Security Training",
    description: "Customized security training programs for businesses and organizations.",
  },
];

export const Courses = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Courses</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional security and firearm training courses designed to meet industry standards
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <course.icon className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-primary">{course.title}</h3>
              <p className="text-muted-foreground">{course.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};