import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Eye, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import HeroBackground from "@/components/HeroBackground";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author?: string;
  image_url: string;
  created_at: string;
  readTime?: string; // We can calculate this or add it to DB later
  views?: number;
  comments?: number;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("is_published", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error: any) {
      toast.error("Failed to load blog posts");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-20 relative">
        <HeroBackground />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Our Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg opacity-80"
          >
            Insights, stories, and tips from our mindfulness journey
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {posts.length === 0 ? (
              <div className="col-span-2 text-center text-muted-foreground">
                No posts published yet.
              </div>
            ) : (
              posts.map((post) => (
                <motion.div key={post.id} variants={cardItem}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="h-52 bg-muted flex items-center justify-center overflow-hidden">
                      {post.image_url ? (
                        <img 
                          src={post.image_url} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <span className="text-muted-foreground text-sm group-hover:scale-110 transition-transform duration-500">
                          Featured Image
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <span className="font-medium text-foreground">{post.author || "Page4Mentors"}</span>
                        <span>•</span>
                        <span>{new Date(post.created_at).toLocaleDateString()}</span>
                      </div>
                      <h2 className="font-serif text-xl font-bold text-primary mb-2 group-hover:text-brand-teal transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> 0</span>
                          <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> 0</span>
                        </div>
                        <Heart className="w-4 h-4 hover:text-brand-pink transition-colors cursor-pointer" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            )}
          </motion.div>
        )}
      </section>
    </Layout>
  );
};

export default Blog;
