import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Eye, MessageCircle, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

export const blogPosts = [
  {
    slug: "valentines-day-mindful-love",
    title: "Valentine's Day: A Mindful Way to Celebrate Love",
    excerpt: "Discover how mindfulness can deepen your connections and help you celebrate love in a more meaningful way this Valentine's Day.",
    date: "Feb 14, 2025",
    readTime: "3 min read",
    views: 245,
    comments: 12,
    content: `Valentine's Day is often associated with grand gestures and material gifts, but what if we celebrated love in a more mindful, intentional way?

## The Power of Presence

The greatest gift we can give someone is our full presence. In a world of constant distractions, truly being present with someone is a radical act of love.

### Practice Mindful Listening

Put away your devices. Make eye contact. Listen not just to respond, but to understand. This simple practice can transform your relationships.

### Express Gratitude

Take time to write a heartfelt note expressing specific things you appreciate about someone. Gratitude strengthens bonds and shifts our focus to what truly matters.

## Mindful Self-Love

Before we can fully love others, we must learn to love ourselves. This Valentine's Day, consider:

- **A self-compassion meditation**: Speak kindly to yourself as you would to a dear friend
- **A digital detox date**: Spend quality time with yourself without screens
- **A gratitude walk**: Notice the beauty around you and within you

Love isn't just a feeling — it's a practice. And mindfulness helps us practice it every day.`,
  },
  {
    slug: "mindfulness-exam-stress",
    title: "How Mindfulness Helps Children Manage Exam Stress",
    excerpt: "Practical mindfulness techniques that help students stay calm, focused, and confident during the exam season.",
    date: "Jan 28, 2025",
    readTime: "4 min read",
    views: 389,
    comments: 18,
    content: `Exam season can be one of the most stressful times for students. But with the right mindfulness tools, children can learn to manage their anxiety and perform at their best.

## Understanding Exam Anxiety

Exam stress triggers our fight-or-flight response. The body floods with cortisol, making it harder to think clearly and recall information. Mindfulness helps interrupt this cycle.

## 5 Techniques That Work

### 1. Box Breathing
Breathe in for 4 counts, hold for 4, breathe out for 4, hold for 4. Repeat 3 times before starting an exam.

### 2. Body Scan
Starting from your toes, slowly notice and release tension in each part of your body. This grounds you in the present moment.

### 3. The STOP Technique
- **S**: Stop what you're doing
- **T**: Take a breath
- **O**: Observe your thoughts and feelings
- **P**: Proceed with awareness

### 4. Mindful Study Sessions
Study in focused 25-minute blocks with 5-minute mindfulness breaks. This improves retention and reduces burnout.

### 5. Visualization
Before exams, visualize yourself calmly reading questions, recalling answers, and completing the paper with confidence.

Remember: Exams test knowledge, not worth. A mindful approach helps children remember this truth.`,
  },
  {
    slug: "mindful-play-teens",
    title: "Mindful Play That Matters: 10 Ways Teens Can Build Emotional Resilience",
    excerpt: "Fun and engaging activities that help teens develop emotional strength and self-awareness through mindful play.",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    views: 512,
    comments: 24,
    content: `Who says mindfulness has to be boring? These 10 activities make building emotional resilience fun and engaging for teens.

## 1. Emotion Charades
Act out different emotions without words. This builds emotional vocabulary and empathy.

## 2. Gratitude Jar
Write one thing you're grateful for each day on a slip of paper. Open the jar when you need a boost.

## 3. Mindful Art
Draw or paint without any goal. Focus on the process, not the outcome. Notice the colors, textures, and movements.

## 4. Nature Scavenger Hunt
Find 5 things in nature that you've never noticed before. Engage all your senses.

## 5. Mindful Music Listening
Listen to a song with full attention. Notice the instruments, the lyrics, the emotions it evokes.

## 6. Body Movement Games
Yoga poses, balance challenges, or freeze dance — activities that connect mind and body.

## 7. Journaling Prompts
"What made me smile today?" "What's one thing I learned about myself this week?"

## 8. Breathing Buddies
Place a stuffed animal on your belly and watch it rise and fall as you breathe deeply.

## 9. Kindness Chain
Create paper chain links, each one representing an act of kindness performed.

## 10. Reflection Circle
Share your highs and lows of the week in a safe, supportive circle.

These activities don't just build resilience — they create joy. And joy is the foundation of a healthy mind.`,
  },
  {
    slug: "exploring-mindfulness-daily-life",
    title: "Exploring Mindfulness in Daily Life: Personal Stories",
    excerpt: "Real stories from everyday people who have integrated mindfulness into their daily routines with transformative results.",
    date: "Dec 20, 2024",
    readTime: "6 min read",
    views: 198,
    comments: 8,
    content: `Mindfulness isn't just for meditation cushions. These personal stories show how mindfulness transforms ordinary moments into extraordinary ones.

## Meera's Morning Routine

"I used to rush through mornings on autopilot. Now I spend 5 minutes with my tea, just feeling its warmth, tasting each sip. My whole day feels different when I start this way."

## Ravi's Commute

"Instead of scrolling my phone on the bus, I now observe — the light through the window, the hum of the engine, the faces around me. My commute became my meditation."

## Priya's Parenting Moment

"When my 8-year-old had a meltdown, instead of reacting, I paused. I breathed. Then I knelt down and said, 'I see you're upset. I'm here.' That pause changed everything."

## Arjun's Study Sessions

"I was always distracted while studying. Learning to focus on just one page at a time, without checking my phone, improved my grades and reduced my anxiety."

## The Common Thread

Each of these stories shares something — the power of pause. Mindfulness doesn't require hours of meditation. It requires moments of intention.

Start small. Start now. Start with the next breath.`,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Blog = () => {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
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
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.slug} variants={cardItem}>
              <Link
                to={`/blog/${post.slug}`}
                className="block bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-52 bg-muted flex items-center justify-center overflow-hidden">
                  <span className="text-muted-foreground text-sm group-hover:scale-110 transition-transform duration-500">
                    Featured Image
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-serif text-xl font-bold text-primary mb-2 group-hover:text-brand-teal transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" />{post.views}</span>
                      <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" />{post.comments}</span>
                    </div>
                    <Heart className="w-4 h-4 hover:text-brand-pink transition-colors cursor-pointer" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Layout>
  );
};

export default Blog;
