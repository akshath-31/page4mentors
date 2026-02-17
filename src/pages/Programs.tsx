import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const programCategories = [
  {
    title: "For Students",
    programs: [
      { name: "Reflect, Reboot, Reframe", desc: "Building Healthy Digital Habits" },
      { name: "The CALzone", desc: "A Mindful Approach to Exams" },
      { name: "Ikigai for Teens", desc: "Purpose discovery workshop" },
    ],
  },
  {
    title: "For Teachers",
    programs: [
      { name: "The Calm Teacher's Tool Kit", desc: "Mindfulness essentials for educators" },
      { name: "Reflect and Recharge", desc: "Mindfulness workshop for teachers" },
      { name: "Ikigai for Teachers", desc: "Finding purpose in teaching" },
    ],
  },
  {
    title: "For Parents",
    programs: [
      { name: "Mindful Parenting", desc: "Conscious connection with your child" },
      { name: "From Tantrum to Trust", desc: "Raising Emotionally Strong kids" },
      { name: "Ikigai for Parents", desc: "Rediscovering your purpose" },
    ],
  },
];

const formSchema = z.object({
  firstName: z.string().trim().min(1, "Required").max(50),
  lastName: z.string().trim().min(1, "Required").max(50),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(10, "Invalid phone").max(15),
  message: z.string().trim().min(1, "Required").max(1000),
});

type FormData = z.infer<typeof formSchema>;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Programs = () => {
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    toast.success("Thank you! We'll be in touch soon.");
    reset();
  };

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
            Teen Mindfulness Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg opacity-80 max-w-2xl mx-auto"
          >
            Thoughtfully crafted programs for students, teachers, and parents — grounded in mindfulness, designed for real life.
          </motion.p>
        </div>
      </section>

      {/* Program Categories */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {programCategories.map((cat) => (
            <motion.div key={cat.title} variants={item}>
              <h2 className="font-serif text-2xl font-bold text-primary mb-6 pb-3 border-b-2 border-brand-teal">
                {cat.title}
              </h2>
              <div className="space-y-5">
                {cat.programs.map((prog) => (
                  <div
                    key={prog.name}
                    className="bg-card rounded-xl border border-border p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <h3 className="font-serif text-lg font-bold text-primary mb-1">{prog.name}</h3>
                    <p className="text-sm text-muted-foreground">{prog.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <SectionHeading
            title="Get in Touch"
            subtitle="Embrace peace and clarity with our mindfulness programs. Reach out today to start your journey towards a more fulfilling life."
          />

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-background rounded-xl border border-border p-8 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" {...register("firstName")} className="mt-1" />
                {errors.firstName && <p className="text-sm text-destructive mt-1">{errors.firstName.message}</p>}
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" {...register("lastName")} className="mt-1" />
                {errors.lastName && <p className="text-sm text-destructive mt-1">{errors.lastName.message}</p>}
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} className="mt-1" />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" {...register("phone")} className="mt-1" placeholder="+91" />
              {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>}
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={4} {...register("message")} className="mt-1" />
              {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-primary text-primary-foreground py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Submit"}
            </button>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
