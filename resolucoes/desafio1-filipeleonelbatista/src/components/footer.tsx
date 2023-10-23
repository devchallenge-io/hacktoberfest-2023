function Footer() {
  return (
    <div className="w-full p-2 md:p-20">
      <div className="w-full flex flex-col gap-8 md:gap-1 md:flex-row py-4 px-12 pt-12 border-t justify-between items-start">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-row space-x-2 items-center">
            <img className="w-8 h-8" src="/logo.png" />
            <p className="font-bold">Lalasia</p>
          </div>
          <p className="max-w-sm w-full text-muted-foreground">
            Somos uma agência de notícias do mundo digital para deixar seu dia
            mais informado.
          </p>
        </div>
        <div className="h-full flex flex-row space-x-16 items-center">
          <div className="flex flex-col space-y-2">
            <a className="h-full flex items-center font-bold">Páginas</a>
            <a
              href="#inicio"
              className="h-full flex items-center cursor-pointer hover:text-[#518581]"
            >
              Home
            </a>
            <a
              href="#artigos"
              className="h-full flex items-center cursor-pointer hover:text-[#518581]"
            >
              Artigos
            </a>
            <a
              href="#contato"
              className="h-full flex items-center cursor-pointer hover:text-[#518581]"
            >
              Contato
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <a className="h-full flex items-center font-bold">Siga-nos</a>
            <a
              href="https://github.com/filipeleonelbatista"
              className="h-full flex items-center cursor-pointer hover:text-[#518581]"
            >
              Github
            </a>
            <a
              href="https://linkedin.com/in/filipeleonelbatista"
              className="h-full flex items-center cursor-pointer hover:text-[#518581]"
            >
              Linkedin
            </a>
            <a
              href="https://instagram.com/filipeleonelbatista"
              className="h-full flex items-center cursor-pointer hover:text-[#518581]"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
