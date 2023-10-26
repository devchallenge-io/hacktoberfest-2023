import emailjs from "@emailjs/browser";
import { useMemo, useRef } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import * as Yup from "yup";
import { useFormik } from "formik";

interface MyFormValues {
  name: string;
  email: string;
  terms: boolean;
}

export default function FormNewsletter() {
  const form = useRef<HTMLFormElement | null>(null);

  const formSchema = useMemo(() => {
    return Yup.object().shape({
      name: Yup.string().required("O Nome é obrigatório"),
      email: Yup.string().required("O campo Email é obrigatório"),
      terms: Yup.boolean(),
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      terms: false,
    },
    validationSchema: formSchema,
    onSubmit: (values: MyFormValues) => {
      handleSubmitForm(values);
    },
  });

  const handleSubmitForm = (formValues: MyFormValues) => {
    if (formValues.terms) {
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
    <form
      ref={form}
      onSubmit={formik.handleSubmit}
      className="flex flex-col space-y-6"
    >
      <h2 className="text-2xl font-semibold">Cadastre-se Agora!!!</h2>
      <p className="text-muted-foreground">
        Complete o cadastro para participar da newsletter e acessar as
        informações da newsletter
      </p>

      <div className="space-y-2">
        <Label>Nome</Label>
        <Input
          placeholder="Digite seu nome aqui"
          name="name"
          value={formik.values.name}
          onChange={(event) => formik.setFieldValue("name", event.target.value)}
        />
        {!!formik.errors.name && (
          <p className="text-sm text-red-600">{formik.errors.name}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          placeholder="Digite seu melhor email"
          value={formik.values.email}
          onChange={(event) =>
            formik.setFieldValue("email", event.target.value)
          }
        />

        {!!formik.errors.email && (
          <p className="text-sm text-red-600">{formik.errors.email}</p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          name="terms"
          checked={formik.values.terms}
          onCheckedChange={(value) => {
            formik.setFieldValue("terms", value);
          }}
        />
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
