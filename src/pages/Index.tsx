import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, School, Users, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { supabase } from "@/lib/supabase";

const programs = [
  {
    icon: BookOpen,
    title: "Student Workshops",
    description: "Age-appropriate workshops that help students build focus, manage emotions, and develop effective learning habits especially during exam periods.",
    link: "/programs",
  },
  {
    icon: School,
    title: "Program for Schools",
    description: "Structured, mindfulness-informed programs designed for school environments, supporting attention, emotional regulation, and learning readiness.",
    link: "/programs",
  },
  {
    icon: Users,
    title: "Parent Sessions",
    description: "Guided sessions that help parents understand their child’s learning and emotional needs, and support them with clarity and confidence at home.",
    link: "/programs",
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

interface Post {
  title: string;
  slug: string;
  excerpt: string;
  author?: string;
  image_url: string;
  created_at: string;
}

const Index = () => {
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchLatestPosts();
  }, []);

  const fetchLatestPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("title, slug, excerpt, image_url, created_at")
        .eq("is_published", true)
        .order("created_at", { ascending: false })
        .limit(3);

      if (error) throw error;
      setLatestPosts(data || []);
    } catch (error) {
      console.error("Error fetching latest posts:", error);
    }
  };

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
              PAGE4 designs calm, structured programs that support students’ focus, emotional balance, and learning.
              <br /><br />
              Guided by four diverse professionals and grounded in <strong>Pause</strong>, <strong>Acceptance</strong>, <strong>Gratitude</strong>, and <strong>Equanimity</strong>, we help young minds build clarity, resilience, and confidence.
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
            className="flex justify-center items-center h-[500px]"
          >
            <div className="relative w-full h-full max-w-[600px] flex items-center justify-center">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-brand-teal/5 rounded-full blur-3xl -z-10" />

              {/* Main Logo - Center */}
              <motion.div 
                className="relative z-20 w-48 md:w-64 aspect-square rounded-full bg-white shadow-2xl p-4 flex items-center justify-center border-4 border-white"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/images/hero/hero-logo.avif" 
                  alt="PAGE4MENTORS Logo" 
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Surrounding Images */}
              {/* Top Left */}
              <motion.div 
                className="absolute top-10 left-0 md:left-10 z-10 w-32 md:w-40 aspect-[4/3] rounded-lg overflow-hidden shadow-lg border-2 border-white -rotate-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.1, rotate: 0, zIndex: 30 }}
              >
                <img src="/images/hero/hero-1.jpg" alt="Student Workshop" className="w-full h-full object-cover" />
              </motion.div>

              {/* Top Right */}
              <motion.div 
                className="absolute top-20 right-0 md:right-10 z-10 w-32 md:w-40 aspect-square rounded-lg overflow-hidden shadow-lg border-2 border-white rotate-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.1, rotate: 0, zIndex: 30 }}
              >
                <img src="/images/hero/hero-2.jpg" alt="Mentoring Session" className="w-full h-full object-cover" />
              </motion.div>

              {/* Bottom Left */}
              <motion.div 
                className="absolute bottom-20 left-4 md:left-10 z-10 w-28 md:w-36 aspect-square rounded-lg overflow-hidden shadow-lg border-2 border-white rotate-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 0, zIndex: 30 }}
              >
                <img src="/images/hero/hero-3.jpg" alt="Group Activity" className="w-full h-full object-cover" />
              </motion.div>

              {/* Bottom Right - Certified Coach */}
              <motion.div 
                className="absolute bottom-10 right-4 md:right-20 z-10 w-36 md:w-44 rounded-lg overflow-hidden shadow-lg border-2 border-white -rotate-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.1, rotate: 0, zIndex: 30 }}
              >
                <img src="/images/hero/certified-coach.avif" alt="Certified Coach" className="w-full h-auto object-contain" />
              </motion.div>
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
          {latestPosts.map((post) => (
            <motion.div
              key={post.slug}
              variants={item}
            >
              <Link to={`/blog/${post.slug}`} className="block h-full relative group overflow-hidden rounded-xl shadow-lg aspect-square hover:shadow-2xl transition-all duration-300">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={post.image_url || "/images/hero/hero-logo.avif"} 
                    alt={post.title} 
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${!post.image_url && 'opacity-50 bg-brand-teal/20'}`}
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-brand-light-teal text-xs font-semibold tracking-wider uppercase mb-2">
                       {new Date(post.created_at).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-white leading-tight mb-3 line-clamp-3 group-hover:text-brand-light-teal transition-colors">
                      {post.title}
                    </h3>
                    <div className="w-12 h-1 bg-brand-teal rounded-full mb-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                </div>
              </Link>
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
