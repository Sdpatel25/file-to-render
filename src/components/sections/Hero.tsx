import { Button } from "@/components/ui/button";
import { ChevronRight, Play, Star, Users, Trophy } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full glass border-glass-border/50 mb-6 animate-fade-in">
              <Star className="h-4 w-4 text-accent mr-2" />
              <span className="text-sm font-medium">Most Engaging Quiz Platform</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Create{" "}
              <span className="text-gradient">Stunning</span>{" "}
              Quizzes in Minutes
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Transform boring assessments into engaging experiences with our 
              world-class quiz builder featuring fluid animations and glassmorphism design.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Quizzes Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">1M+</div>
                <div className="text-sm text-muted-foreground">Quiz Takers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">95%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button size="xl" variant="hero" className="group">
                Start Creating for Free
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button size="xl" variant="glass" className="group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 mt-8 animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary border-2 border-background" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground ml-3">
                Trusted by educators worldwide
              </span>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 w-24 h-16 glass rounded-lg p-3 animate-float z-10">
                <Users className="h-6 w-6 text-primary mb-1" />
                <div className="text-xs font-medium">Live Quiz</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-24 h-16 glass rounded-lg p-3 animate-float z-10" style={{ animationDelay: '1s' }}>
                <Trophy className="h-6 w-6 text-accent mb-1" />
                <div className="text-xs font-medium">High Score!</div>
              </div>

              {/* Main Illustration */}
              <div className="relative rounded-2xl overflow-hidden shadow-glow-lg">
                <img 
                  src={heroIllustration} 
                  alt="QuizEasy Platform Preview" 
                  className="w-full h-auto animate-float"
                  style={{ animationDelay: '0.5s' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-2xl -z-10 animate-pulse-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}