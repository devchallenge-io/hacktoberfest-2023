import { ModeToggle } from "./mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";

function Header() {
  return (
    <div className="w-full flex flex-row h-16 px-12 border-b justify-between items-center">
      <div className="flex flex-row space-x-2 items-center">
        <img className="w-8 h-8" src="/logo.png" />
        <p className="font-bold">Lalasia</p>
      </div>
      <div className="h-full hidden md:flex flex-row space-x-8 items-center">
        <a
          href="#inicio"
          className="h-full flex items-center px-4 border-b-4 border-b-[#518581] text-[#518581]"
        >
          Home
        </a>
        <a href="#artigos" className="h-full flex items-center">
          Artigos
        </a>
        <a href="#contato" className="h-full flex items-center">
          Contato
        </a>
      </div>
      <div className="hidden md:flex">
        <ModeToggle />
      </div>
      <div className="flex md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline" size="icon">
              <Menu className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Abrir Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <ModeToggle text="Mudar tema" />
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <a
                href="#inicio"
                className="h-full flex items-center px-4 border-l-4 border-l-[#518581] text-[#518581]"
              >
                Home
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#artigos" className="h-full flex items-center">
                Artigos
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#contato" className="h-full flex items-center">
                Contato
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Header;
