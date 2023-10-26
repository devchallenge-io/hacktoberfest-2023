import Header from "@/components/header";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronRight } from "lucide-react";
import HeroImage from "./assets/heroimage.png";
import FormNewsletter from "./components/form-newsletter";
import { Button } from "./components/ui/button";

function App() {
  return (
    <Dialog>
      <div className="flex w-screen h-screen flex-col bg-[#111829] items-center">
        <Header />
        <div className="w-full max-w-[1024px] py-4 md:py-24 px-8 md:px-20 flex flex-col lg:flex-row items-center space-y-8">
          <div className="flex flex-col space-y-8 w-full md:w-1/2">
            <div className="flex flex-row space-x-4 items-center bg-[#140202] rounded-full px-1 py-1 w-fit">
              <span className="flex flex-row items-center bg-gradient-to-r from-sky-400 via-cyan-700 to-sky-600 rounded-full px-3 py-0.5 font-semibold">
                Tecnologia
              </span>
              <p className="text-sm md:text-md text-white">
                Estamos por dentro dela para ajudar você
              </p>
              <ChevronRight className="w-6 h-6 text-[#707485]" />
            </div>
            <h2 className="text-5xl font-semibold leading-snug">
              O Melhor jeito de <br />{" "}
              <span className="text-[#54E1EA]">ficar informado</span>
            </h2>
            <p>
              Se informe sobre os principais acontecimentos e novidades no mundo
              da tecnologia e não perca oportunidades de estudo e vagas dentro
              da àrea.
            </p>

            <DialogTrigger>
              <Button className="w-full bg-[#54E1EA] hover:bg-[#54E1EA]/70">
                Cadastre-se na nossa newseltter
              </Button>
            </DialogTrigger>

            <p className="text-[#54E1EA]">
              Ao cadastrar na newsletter com seus dados você aceita os{" "}
              <b>
                <u>termos de serviço</u>
              </b>
              .
            </p>
          </div>
          <img src={HeroImage} className="w-full md:w-1/2" />
        </div>

        <DialogContent>
          <FormNewsletter />
        </DialogContent>
      </div>
    </Dialog>
  );
}

export default App;
