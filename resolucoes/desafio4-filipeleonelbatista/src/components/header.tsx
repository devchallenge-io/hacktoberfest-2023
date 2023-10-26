import { Button } from "./ui/button";
import logoImage from "../assets/logo.png";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import FormNewsletter from "./form-newsletter";

function Header() {
  return (
    <Dialog>
      <div className="w-full flex flex-row h-16 px-12 justify-between items-center">
        <div className="flex flex-row space-x-2 items-center">
          <img className="w-12 h-8" src={logoImage} />
        </div>
        <div className="hidden md:flex">
          <DialogTrigger>
            <Button className="bg-[#54E1EA] hover:bg-[#54E1EA]/70">
              Cadastrar
            </Button>
          </DialogTrigger>
        </div>
      </div>
      <DialogContent>
        <FormNewsletter />
      </DialogContent>
    </Dialog>
  );
}

export default Header;
