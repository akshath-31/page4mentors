import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Facebook, Linkedin, Twitter, Link as LinkIcon } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import { blogPosts } from "./Blog";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

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

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied!");
  };

  // Simple markdown-ish rendering
  const renderContent = (content: string) => {
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

  return (
    <Layout>
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Posts
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">{post.title}</h1>
          <div className="h-64 bg-muted rounded-xl flex items-center justify-center mb-8">
            <span className="text-muted-foreground">Featured Image</span>
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
            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
              <button
                key={i}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <Icon className="w-4 h-4 text-muted-foreground" />
              </button>
            ))}
            <button
              onClick={copyLink}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
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
