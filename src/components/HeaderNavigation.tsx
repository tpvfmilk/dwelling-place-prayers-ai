
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

interface HeaderNavigationProps {
  scrolled?: boolean;
}

const HeaderNavigation = ({ scrolled = false }: HeaderNavigationProps) => {
  const navigate = useNavigate();

  const textColor = scrolled ? "text-sacred-warm-gray" : "text-white";
  const hoverColor = scrolled ? "hover:text-sacred-sage-green" : "hover:text-gray-200";

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8">
        <ul className="flex gap-8 list-none">
          <li><button onClick={() => navigate('/landing')} className={`${textColor} ${hoverColor} transition-colors`}>What</button></li>
          <li><button onClick={() => navigate('/why')} className={`${textColor} ${hoverColor} transition-colors`}>Why</button></li>
          <li><button onClick={() => navigate('/how')} className={`${textColor} ${hoverColor} transition-colors`}>How</button></li>
        </ul>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className={`${textColor} ${hoverColor} hover:bg-transparent transition-colors`}>
            Login
          </Button>
          <Button onClick={() => navigate('/welcome')} className="bg-sacred-sage-green hover:bg-sacred-sage-green/90 text-white">
            Sign Up
          </Button>
        </div>
      </div>

      {/* Tablet Navigation */}
      <div className="hidden md:flex lg:hidden items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className={`${textColor} ${hoverColor} transition-colors`}>
              <Menu className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white z-50">
            <DropdownMenuItem onClick={() => navigate('/landing')}>
              What
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/why')}>
              Why
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/how')}>
              How
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className={`${textColor} ${hoverColor} hover:bg-transparent transition-colors`}>
            Login
          </Button>
          <Button onClick={() => navigate('/welcome')} className="bg-sacred-sage-green hover:bg-sacred-sage-green/90 text-white">
            Sign Up
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className={`${textColor} ${hoverColor} transition-colors`}>
              <Menu className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white z-50">
            <DropdownMenuItem onClick={() => navigate('/landing')}>
              What
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/why')}>
              Why
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/how')}>
              How
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Button variant="ghost" className="w-full justify-start text-sacred-warm-gray">
                Login
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Button onClick={() => navigate('/welcome')} className="w-full bg-sacred-sage-green hover:bg-sacred-sage-green/90 text-white">
                Sign Up
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default HeaderNavigation;
