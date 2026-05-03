"use client";

import { useState } from "react";
import { portfolioData } from "@/lib/portfolio-data";
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send, Loader2, ExternalLink } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  user_name: z.string().min(2, "Name must be at least 2 characters."),
  user_email: z.string().email("Please enter a valid email address."),
  organization: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: portfolioData.email,
    href: `mailto:${portfolioData.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: portfolioData.phone,
    href: `tel:${portfolioData.phone.replace(/\s/g, "")}`,
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "Himasri Nandam",
    href: portfolioData.socials.linkedin,
  },
  {
    icon: MapPin,
    label: "Location",
    value: portfolioData.location,
    href: "https://maps.google.com/?q=Hyderabad,India",
  },
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    console.log("Attempting to send email...");
    console.log("Service ID:", serviceId ? "Present" : "MISSING");
    console.log("Template ID:", templateId ? "Present" : "MISSING");
    console.log("Public Key:", publicKey ? "Present" : "MISSING");

    try {
      if (!serviceId || !templateId || !publicKey) {
        console.warn("⚠️ EmailJS environment variables are missing. The site is currently in 'Simulation Mode'. No real email will be sent.");
        
        // Simulate success for local testing UI
        await new Promise((resolve) => setTimeout(resolve, 1500));
        
        toast.warning("Simulation Mode", {
          description: "Environment variables missing. Check your .env file and restart the server.",
        });
      } else {
        const response = await emailjs.send(serviceId, templateId, data as any, publicKey);
        console.log("EmailJS Success:", response.status, response.text);
        
        toast.success("Message sent successfully!", {
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
      }
      reset();
    } catch (error: any) {
      console.error("❌ EmailJS Error:", error);
      toast.error("Failed to send message.", {
        description: error?.text || "Please try again or use the direct email link.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" label="Get in Touch" icon={<Mail className="size-4" />}>
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start max-w-6xl mx-auto">
        <div className="space-y-8 lg:sticky lg:top-24">
          <div className="space-y-4">
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tighter leading-none">
              Let&apos;s build <br className="hidden lg:block"/>
              something <span className="text-muted-foreground/50">great.</span>
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed font-light">
              Looking for a Business Analyst or Project Coordinator to drive your next big initiative? Fill out the form or reach out directly.
            </p>
          </div>

          <div className="space-y-4">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="size-12 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                  <Icon className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-0.5">{label}</p>
                  <p className="text-sm font-medium text-foreground">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-border/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="user_name">Full Name</Label>
                <Input 
                  id="user_name" 
                  placeholder="John Doe" 
                  {...register("user_name")}
                  className={errors.user_name ? "border-destructive" : ""}
                />
                {errors.user_name && (
                  <p className="text-xs text-destructive">{errors.user_name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="user_email">Email Address</Label>
                <Input 
                  id="user_email" 
                  type="email" 
                  placeholder="john@example.com" 
                  {...register("user_email")}
                  className={errors.user_email ? "border-destructive" : ""}
                />
                {errors.user_email && (
                  <p className="text-xs text-destructive">{errors.user_email.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization">Organization / Company Name (Optional)</Label>
              <Input 
                id="organization" 
                placeholder="Tech Innovators Inc." 
                {...register("organization")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Your Message</Label>
              <Textarea 
                id="message" 
                placeholder="How can I help you?" 
                rows={5}
                {...register("message")}
                className={errors.message ? "border-destructive resize-none" : "resize-none"}
              />
              {errors.message && (
                <p className="text-xs text-destructive">{errors.message.message}</p>
              )}
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full btn-hover h-12"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="mr-2 size-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
