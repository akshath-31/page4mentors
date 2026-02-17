import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, School, Users, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedLogo from "@/components/AnimatedLogo";
import SectionHeading from "@/components/SectionHeading";

const programs = [
  {
    icon: BookOpen,
    title: "Student Workshops",
    description: "Interactive sessions helping teens develop focus, manage emotions, and build inner resilience through mindfulness practices.",
    link: "/programs",
  },
  {
    icon: School,
    title: "Program for Schools",
    description: "Comprehensive mindfulness programs designed for school environments, empowering students and teachers alike.",
    link: "/programs",
  },
  {
    icon: Users,
    title: "Parent Sessions",
    description: "Supportive sessions equipping parents with mindful tools to nurture their children's emotional growth.",
    link: "/programs",
  },
];

const blogPosts = [
  {
    title: "Valentine's Day: A Mindful Way to Celebrate Love",
    excerpt: "Discover how mindfulness can deepen your connections and help you celebrate love in a more meaningful way.",
    date: "Feb 14, 2025",
    readTime: "3 min read",
    slug: "valentines-day-mindful-love",
  },
  {
    title: "How Mindfulness Helps Children Manage Exam Stress",
    excerpt: "Practical mindfulness techniques that help students stay calm, focused, and confident during exams.",
    date: "Jan 28, 2025",
    readTime: "4 min read",
    slug: "mindfulness-exam-stress",
  },
  {
    title: "Mindful Play That Matters: 10 Ways Teens Can Build Emotional Resilience",
    excerpt: "Fun and engaging activities that help teens develop emotional strength through mindful play.",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    slug: "mindful-play-teens",
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

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-4">
              Helping students build clarity, attention and learning
            </h1>
            <p className="font-serif text-xl md:text-2xl italic text-muted-foreground mb-6">
              Calm minds. Clear thinking. Confident futures.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              At PAGE4, our Happiitude certified coaches guide teens through mindfulness with values rooted in{" "}
              <strong>Pause, Acceptance, Gratitude,</strong> and <strong>Equanimity</strong> — building a foundation for focused, balanced lives.
            </p>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Explore Our Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <AnimatedLogo size={280} className="mx-auto" />
              <div className="absolute inset-0 bg-brand-teal/5 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="PAGE 4 Programs"
            subtitle="Mindfulness-based programs crafted for students, schools, and parents"
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-10"
          >
            {programs.map((prog) => (
              <motion.div
                key={prog.title}
                variants={item}
                className="bg-background rounded-xl p-8 border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-brand-teal/10 flex items-center justify-center mb-5 group-hover:bg-brand-teal/20 transition-colors">
                  <prog.icon className="w-7 h-7 text-brand-teal" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-3">{prog.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{prog.description}</p>
                <Link
                  to={prog.link}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-teal hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Link
              to="/programs"
              className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Check out our programs
            </Link>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="container mx-auto px-4 py-20">
        <SectionHeading title="Latest Insights" subtitle="Stories and tips from our mindfulness journey" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-10"
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.slug}
              variants={item}
              className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 group"
            >
              <div className="h-48 bg-muted flex items-center justify-center">
                <AnimatedLogo size={60} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-primary mb-2 group-hover:text-brand-teal transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-brand-teal transition-colors"
          >
            VIEW ALL <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
