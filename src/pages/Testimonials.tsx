import { motion } from "framer-motion";
import { Play, Quote } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import TestimonialsHeroBackground from "@/components/hero-backgrounds/TestimonialsHeroBackground";

const writtenTestimonials = [
  {
    name: "Sri Vidya",
    role: "Parent of a teen participant",
    text: "mindfulness programs at Page4mentors have been transformative for my daughter. She has embraced a sense of calm, developed valuable coping mechanisms, and feels supported by the dedicated team.",
  },
  {
    name: "Siddhan",
    role: "12-year-old Participant",
    text: "I liked talking to the Page4 mentors. They were kind and listened to me. I felt better and happier after the sessions.",
  },
  {
    name: "Chinmay",
    role: "15-year-old Participant",
    text: "I genuinely enjoyed the sessions at Page4mentors. They were engaging and calming, and helped me understand myself better. The coaches were warm, supportive, and created a space where I felt comfortable opening up.",
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
      <section className="bg-primary text-primary-foreground py-20 relative">
        <TestimonialsHeroBackground />
        <div className="container mx-auto px-4 text-center relative z-10">
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
          {[
            "/videos/testimonials/student-testimonial-1.mp4#t=0.5",
            "/videos/testimonials/student-testimonial-2.mp4#t=0.5",
            "/videos/testimonials/student-testimonial-3.mp4#t=0.5"
          ].map((videoSrc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-video bg-black rounded-xl overflow-hidden shadow-lg"
            >
              <video 
                controls 
                preload="metadata"
                className="w-full h-full object-cover"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
          {[
            "/images/gallery/gallery-1.avif",
            "/images/gallery/gallery-2.avif",
            "/images/gallery/gallery-3.avif",
            "/images/gallery/gallery-4.avif",
            "/images/gallery/gallery-5.avif",
            "/images/gallery/gallery-6.avif",
            "/images/gallery/gallery-7.avif",
            "/images/gallery/gallery-8.avif"
          ].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="aspect-square bg-muted rounded-xl overflow-hidden flex items-center justify-center group"
            >
              <img 
                src={src} 
                alt={`Workshop moment ${i + 1}`} 
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
