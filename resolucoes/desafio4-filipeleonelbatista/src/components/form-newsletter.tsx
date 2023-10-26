import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function FormNewsletter() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //@ts-ignore
    if (form.current?.elements[3].checked) {
      emailjs
        .sendForm(
          "service_4o2awb7",
          "template_tjvp20c",
          form.current,
          "user_y1zamkr7P7dPydkNhdhxi"
        )
        .then((result) => {
          console.log("result", result.text);
        })
        .catch((error) => {
          console.log("error", error.text);
        });

      document.getElementById("closebutton")?.click();
    } else {
      alert("É necessário aceitar os termos para participar!");
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-6">
      <h2 className="text-2xl font-semibold">Cadastre-se Agora!!!</h2>
      <p className="text-muted-foreground">
        Complete o cadastro para participar da newsletter e acessar as
        informações da newsletter
      </p>

      <div className="space-y-2">
        <Label>Nome</Label>
        <Input placeholder="Digite seu nome aqui" name="name" />
      </div>
      <div className="space-y-2">
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          placeholder="Digite seu melhor email"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="terms" name="terms" />
        <Label htmlFor="terms" className="font-normal">
          Eu aceito os{" "}
          <u>
            <b>Termos de serviço</b>
          </u>{" "}
          para acessar as informações da newsletter
        </Label>
      </div>

      <Button
        type="submit"
        className="w-full bg-[#54E1EA] hover:bg-[#54E1EA]/70"
      >
        Cadastre-se na nossa newseltter
      </Button>
    </form>
  );
}
