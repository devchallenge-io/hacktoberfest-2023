import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function AcceptTerms() {
  const [isShow, setIsShow] = useState(false);

  const handleAccept = () => {
    localStorage.setItem("terms", JSON.stringify(true));
    setIsShow(false);
  };

  useEffect(() => {
    const termsAcepted = localStorage.getItem("terms");
    if (termsAcepted !== null) {
      const isTermsAcepted = JSON.parse(termsAcepted);
      setIsShow(isTermsAcepted);
      setIsShow(!isTermsAcepted);
    }
    setIsShow(!termsAcepted === true);
  }, []);

  if (!isShow) return null;

  return (
    <div className="fixed top-0 z-100 w-screen h-screen backdrop-blur-sm bg-black/30 flex items-end justify-center p-4 pb-20 md:pb-4">
      <div className="flex flex-col gap-2 w-full md:w-3/5 rounded p-4 z-10 bg-zinc-950/90 border border-inherit shadow">
        <p className="leading-relaxed font-bold">Seu Próximo Passo!</p>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
          <p className="leading-thigt text-sm font-light">
            Hello World! Estamos empolgados por você estar aqui. Antes de tudo,
            precisamos que você aceite nossos{" "}
            <b className="text-cyan-400 font-semibold underline">
              Termos e Condições
            </b>{" "}
            . É rápido, fácil e ajuda a manter todos seguros.
          </p>

          <Button className="w-64 bg-[#54E1EA] hover:bg-[#54E1EA]/70" onClick={() => handleAccept()}>
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  );
}
