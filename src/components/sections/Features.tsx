import { FeatureCard } from "@/components/ui/feature-card";
import { 
  Palette, 
  Zap, 
  BarChart3, 
  Share2, 
  Timer, 
  Shield,
  Smartphone,
  Sparkles
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Palette,
      title: "Beautiful Design System",
      description: "Stunning glassmorphism UI with fluid animations that make every interaction delightful and memorable."
    },
    {
      icon: Zap,
      title: "Lightning Fast Builder",
      description: "Create engaging quizzes in minutes with our intuitive drag-and-drop interface and smart templates."
    },
    {
      icon: BarChart3,
      title: "Powerful Analytics",
      description: "Track performance with comprehensive analytics, completion rates, and detailed answer breakdowns."
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Generate shareable links and embeddable widgets to distribute your quizzes across any platform."
    },
    {
      icon: Timer,
      title: "Smart Timing",
      description: "Set time limits for entire quizzes or individual questions to create the perfect challenge level."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with data protection and reliable hosting for peace of mind."
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Perfect experience on all devices with responsive design and touch-friendly interactions."
    },
    {
      icon: Sparkles,
      title: "Engaging Animations",
      description: "Captivate your audience with smooth transitions and satisfying micro-interactions throughout."
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border-glass-border/50 mb-6">
            <Sparkles className="h-4 w-4 text-accent mr-2" />
            <span className="text-sm font-medium">Powerful Features</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Everything You Need to Create{" "}
            <span className="text-gradient">Amazing Quizzes</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From beautiful design to powerful analytics, QuizEasy provides all the tools 
            you need to create engaging assessments that your audience will love.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto border-glass-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Quizzes?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of educators and content creators who are already creating 
              stunning quizzes with QuizEasy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold px-8 py-3 rounded-lg shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all duration-300">
                Start Building Now
              </button>
              <button className="glass text-foreground px-8 py-3 rounded-lg border-glass-border/50 hover:border-primary/30 hover:shadow-glow-sm transition-all duration-300">
                View Examples
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}