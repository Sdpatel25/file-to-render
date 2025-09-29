import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Brain, User, Settings, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface NavigationProps {
  isAuthenticated?: boolean;
}

export function Navigation({ isAuthenticated = false }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-glass-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-secondary">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gradient">QuizEasy</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isAuthenticated ? (
              <>
                <a href="/dashboard" className="text-foreground hover:text-primary transition-colors">
                  Dashboard
                </a>
                <a href="/quiz-builder" className="text-foreground hover:text-primary transition-colors">
                  Create Quiz
                </a>
                <a href="/analytics" className="text-foreground hover:text-primary transition-colors">
                  Analytics
                </a>
              </>
            ) : (
              <>
                <a href="#features" className="text-foreground hover:text-primary transition-colors">
                  Features
                </a>
                <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
                <a href="#about" className="text-foreground hover:text-primary transition-colors">
                  About
                </a>
              </>
            )}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        JD
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 glass border-glass-border">
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <a href="/login">Login</a>
                </Button>
                <Button variant="hero" asChild>
                  <a href="/signup">Get Started</a>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-glass-border/30 glass mt-2 rounded-lg mx-4 p-4">
            <div className="flex flex-col space-y-4">
              {isAuthenticated ? (
                <>
                  <a
                    href="/dashboard"
                    className="text-foreground hover:text-primary transition-colors py-2"
                  >
                    Dashboard
                  </a>
                  <a
                    href="/quiz-builder"
                    className="text-foreground hover:text-primary transition-colors py-2"
                  >
                    Create Quiz
                  </a>
                  <a
                    href="/analytics"
                    className="text-foreground hover:text-primary transition-colors py-2"
                  >
                    Analytics
                  </a>
                  <hr className="border-glass-border" />
                  <Button variant="ghost" className="justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                  <Button variant="ghost" className="justify-start text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <a
                    href="#features"
                    className="text-foreground hover:text-primary transition-colors py-2"
                  >
                    Features
                  </a>
                  <a
                    href="#pricing"
                    className="text-foreground hover:text-primary transition-colors py-2"
                  >
                    Pricing
                  </a>
                  <a
                    href="#about"
                    className="text-foreground hover:text-primary transition-colors py-2"
                  >
                    About
                  </a>
                  <hr className="border-glass-border" />
                  <Button variant="ghost" className="justify-start">
                    Login
                  </Button>
                  <Button variant="hero" className="justify-start">
                    Get Started
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}