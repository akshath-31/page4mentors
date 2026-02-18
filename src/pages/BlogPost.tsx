import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Facebook, Linkedin, Twitter, Link as LinkIcon } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import { supabase } from "@/lib/supabase";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author?: string;
  content: string;
  image_url: string;
  created_at: string;
  readTime: string;
}

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data, error } = await supabase
          .from("posts")
          .select("*")
          .eq("slug", slug)
          .single();
  
        if (error) throw error;
        
        setPost({
          ...data,
          readTime: "5 min read" // Placeholder calculation
        });
  
        // Fetch related posts (placeholder logic: just fetch latest 3 other posts)
        const { data: related } = await supabase
          .from("posts")
          .select("*")
          .neq("slug", slug)
          .eq("is_published", true)
          .limit(3);
          
        setRelatedPosts(related || []);
  
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchPost();
  }, [slug]);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied!");
  };

  // Simple markdown-ish rendering
  const renderContent = (content: string) => {
    if (!content) return null;
    return content.split("\n").map((line, i) => {
      if (line.startsWith("## ")) {
        return <h2 key={i} className="font-serif text-2xl font-bold text-primary mt-8 mb-4">{line.replace("## ", "")}</h2>;
      }
      if (line.startsWith("### ")) {
        return <h3 key={i} className="font-serif text-xl font-bold text-primary mt-6 mb-3">{line.replace("### ", "")}</h3>;
      }
      if (line.startsWith("- **")) {
        const match = line.match(/- \*\*(.+?)\*\*:?\s*(.*)/);
        if (match) {
          return (
            <li key={i} className="ml-6 mb-2 text-muted-foreground list-disc">
              <strong className="text-foreground">{match[1]}</strong>{match[2] ? `: ${match[2]}` : ""}
            </li>
          );
        }
      }
      if (line.startsWith("- ")) {
        return <li key={i} className="ml-6 mb-2 text-muted-foreground list-disc">{line.replace("- ", "")}</li>;
      }
      if (line.trim() === "") return <div key={i} className="h-3" />;
      // Handle inline bold
      const parts = line.split(/\*\*(.+?)\*\*/g);
      return (
        <p key={i} className="text-muted-foreground leading-relaxed mb-2">
          {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="text-foreground">{part}</strong> : part)}
        </p>
      );
    });
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">Loading...</div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-serif text-3xl font-bold text-primary mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-brand-teal hover:underline">← Back to Blog</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8 border-b border-border pb-8">
            <span className="font-semibold text-foreground">{post.author || "Page4Mentors"}</span>
            <span>•</span>
            <span>{new Date(post.created_at).toLocaleDateString()}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
          </div>

          <div className="w-full aspect-video bg-muted rounded-xl overflow-hidden mb-12 shadow-sm">
             {post.image_url ? (
                <img src={post.image_url} alt={post.title} className="w-full h-full object-cover" />
             ) : (
                <div className="w-full h-full flex items-center justify-center bg-brand-teal/10">
                  <span className="text-muted-foreground">No Featured Image</span>
                </div>
             )}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          {renderContent(post.content)}
        </motion.div>

        {/* Share */}
        <div className="border-t border-border pt-8 mb-16">
          <p className="text-sm font-semibold text-primary mb-3">Share this article</p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all duration-300"
              title="Share on Facebook"
            >
              <Facebook className="w-4 h-4" />
            </button>
            <button
              onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`, '_blank')}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-all duration-300"
              title="Share on Twitter"
            >
              <Twitter className="w-4 h-4" />
            </button>
            <button
              onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all duration-300"
              title="Share on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </button>
            <button
              onClick={copyLink}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              title="Copy Link"
            >
              <LinkIcon className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Related */}
        {relatedPosts.length > 0 && (
          <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-6">Related Posts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  to={`/blog/${rp.slug}`}
                  className="bg-card rounded-xl border border-border p-5 hover:shadow-lg transition-all duration-300 group"
                >
                  <h3 className="font-serif text-base font-bold text-primary mb-2 group-hover:text-brand-teal transition-colors line-clamp-2">
                    {rp.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{rp.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </Layout>
  );
};

export default BlogPost;
