import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const team = [
  {
    name: "Dr. Nandini Shekhar",
    title: "The Mindful Mentor",
    exp: "30+ years experience",
    description: "A seasoned educator and mindfulness coach with over three decades of experience in child psychology and holistic education.",
  },
  {
    name: "K. Sreedevi",
    title: "The Storytelling Strategist",
    exp: "20+ years in media & education",
    description: "Combining the power of storytelling with mindfulness, Sreedevi creates engaging programs that resonate with young minds.",
  },
  {
    name: "Vartikka Arya",
    title: "The Clarity Builder",
    exp: "14+ years in education",
    description: "An innovative educator who helps students discover clarity of thought through structured mindfulness practices.",
  },
  {
    name: "Swathi Vanka",
    title: "The Nurturing Guide",
    exp: "10+ years in early childhood",
    description: "Specializing in early childhood development, Swathi brings warmth and nurture to every mindfulness session.",
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

const About = () => {
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg opacity-80 max-w-xl mx-auto"
          >
            Four Happiitude-certified mindfulness coaches united by a shared purpose
          </motion.p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">Our Work</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are four Happiitude-certified mindfulness coaches who came together with a shared purpose — to help teens, parents, and educators embrace mindfulness as a way of life.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through evidence-based practices and heartfelt engagement, we guide young minds toward clarity, emotional resilience, and self-awareness.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-muted rounded-2xl p-12 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-6xl font-serif font-bold text-brand-teal mb-2">PAGE</div>
              <div className="text-sm text-muted-foreground tracking-widest">
                PAUSE · ACCEPTANCE · GRATITUDE · EQUANIMITY
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-xl p-8 border border-border"
          >
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To impact 1 lakh students by fostering mental wellness, digital balance, and authentic self-expression through structured mindfulness programs that integrate seamlessly into everyday life.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-background rounded-xl p-8 border border-border"
          >
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To create a generation of self-aware, emotionally resilient individuals who lead with compassion, think with clarity, and live with purpose — one mindful moment at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4 py-20">
        <SectionHeading title="The Team" subtitle="Meet the coaches behind PAGE4" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={item}
              className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                <span className="font-serif text-2xl font-bold text-primary">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-primary">{member.name}</h3>
              <p className="text-brand-teal text-sm font-medium mb-1">{member.title}</p>
              <p className="text-xs text-muted-foreground mb-3">{member.exp}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Layout>
  );
};

export default About;
