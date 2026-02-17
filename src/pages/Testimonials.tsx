import { motion } from "framer-motion";
import { Play, Quote } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const writtenTestimonials = [
  {
    name: "Sri Vidya",
    role: "Parent",
    text: "My daughter has transformed since joining the PAGE4 workshops. She's calmer, more focused, and handles her emotions with a maturity beyond her years. I'm so grateful for this program.",
  },
  {
    name: "Siddhan",
    role: "12-year-old student",
    text: "The mindfulness sessions make me feel better and happier. I used to get really angry but now I know how to pause and breathe. It's like having a superpower!",
  },
  {
    name: "Chinmay",
    role: "15-year-old student",
    text: "The sessions are super engaging and the coaches are really supportive. I learned so much about myself — how to manage stress and stay focused during exams.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            They felt it. They said it.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg opacity-80"
          >
            Feedback from our students that keeps us going
          </motion.p>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="container mx-auto px-4 py-20">
        <SectionHeading title="Watch Their Stories" />
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-video bg-muted rounded-xl flex items-center justify-center relative group cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
              <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 text-primary-foreground ml-1" />
              </div>
              <span className="absolute bottom-3 left-3 text-xs text-muted-foreground">
                Student Testimonial {i}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="In Their Words" />
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {writtenTestimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={item}
                className="bg-background rounded-xl border border-border p-8 relative hover:shadow-lg transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-brand-teal/30 absolute top-4 right-4" />
                <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-serif font-bold text-primary">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="container mx-auto px-4 py-20">
        <SectionHeading title="The Fun We Have With Our Kids" subtitle="Snapshots from our mindfulness workshops" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="aspect-square bg-muted rounded-xl overflow-hidden flex items-center justify-center"
            >
              <span className="text-muted-foreground text-sm">Workshop {i}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
