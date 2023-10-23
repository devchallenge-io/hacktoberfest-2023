interface BlogPost {
  category: string;
  title: string;
  avatar: string;
  author: string;
  author_link: string;
  content: string;
  created_at: string;
  featured_images: string[];
}

const posts: BlogPost[] = [
  {
    category: "Dicas",
    title: "O maior css de todos os tempos. Tailwind",
    avatar: "https://github.com/filipeleonelbatista.png",
    author: "Filipe Batista",
    author_link: "https://filipeleonelbatista.vercel.app/",
    content: "Algumas palavras sobre o negócio.",
    created_at: "2023-10-23",
    featured_images: [
      "https://plus.unsplash.com/premium_photo-1661634993112-6a019f5cc9e2?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1540800458874-73e6a5eed8ac?auto=format&fit=crop&q=80&w=1171&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&q=80&w=1173&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    category: "Tecnologia",
    title: "Desenvolvendo Aplicações Web com React",
    avatar: "https://github.com/johnsmith.png",
    author: "John Smith",
    author_link: "https://www.johnsmith.com/",
    content: "Dicas e truques para criar aplicações web incríveis com React.",
    created_at: "2023-10-24",
    featured_images: [
      "https://plus.unsplash.com/premium_photo-1661634993112-6a019f5cc9e2?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1540800458874-73e6a5eed8ac?auto=format&fit=crop&q=80&w=1171&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&q=80&w=1173&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    category: "Viagens",
    title: "Descobrindo as Belezas da América do Sul",
    avatar: "https://github.com/marianagarcia.png",
    author: "Mariana Garcia",
    author_link: "https://www.marianagarcia.com/",
    content: "Uma jornada pelas paisagens deslumbrantes da América do Sul.",
    created_at: "2023-10-25",
    featured_images: [
      "https://plus.unsplash.com/premium_photo-1661634993112-6a019f5cc9e2?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1540800458874-73e6a5eed8ac?auto=format&fit=crop&q=80&w=1171&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&q=80&w=1173&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    category: "Moda",
    title: "Tendências de Moda Primavera-Verão 2024",
    avatar: "https://github.com/lucasfernandes.png",
    author: "Lucas Fernandes",
    author_link: "https://www.lucasfernandesmoda.com/",
    content: "As últimas tendências de moda para a temporada primavera-verão.",
    created_at: "2023-10-26",
    featured_images: [
      "https://plus.unsplash.com/premium_photo-1661634993112-6a019f5cc9e2?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1540800458874-73e6a5eed8ac?auto=format&fit=crop&q=80&w=1171&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&q=80&w=1173&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    category: "Saúde",
    title: "Mantenha-se Ativo e Saudável",
    avatar: "https://github.com/andreacosta.png",
    author: "Andrea Costa",
    author_link: "https://www.andreacosta.com/",
    content: "Dicas para manter um estilo de vida saudável e ativo.",
    created_at: "2023-10-27",
    featured_images: [
      "https://plus.unsplash.com/premium_photo-1661634993112-6a019f5cc9e2?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1540800458874-73e6a5eed8ac?auto=format&fit=crop&q=80&w=1171&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&q=80&w=1173&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    category: "Culinária",
    title: "Receitas Deliciosas de Sobremesas",
    avatar: "https://github.com/mariarodrigues.png",
    author: "Maria Rodrigues",
    author_link: "https://www.mariarodriguesculinaria.com/",
    content:
      "Aprenda a fazer sobremesas incríveis para impressionar seus convidados.",
    created_at: "2023-10-28",
    featured_images: [
      "https://plus.unsplash.com/premium_photo-1661634993112-6a019f5cc9e2?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1540800458874-73e6a5eed8ac?auto=format&fit=crop&q=80&w=1171&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&q=80&w=1173&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    category: "Finanças",
    title: "Dicas para Economizar Dinheiro",
    avatar: "https://github.com/ricardosilva.png",
    author: "Ricardo Silva",
    author_link: "https://www.ricardosilvafinancas.com/",
    content:
      "Estratégias para economizar dinheiro e alcançar suas metas financeiras.",
    created_at: "2023-10-29",
    featured_images: [
      "https://plus.unsplash.com/premium_photo-1661634993112-6a019f5cc9e2?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1540800458874-73e6a5eed8ac?auto=format&fit=crop&q=80&w=1171&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&q=80&w=1173&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    category: "Arte",
    title: "Explorando a Criatividade com Pintura a Óleo",
    avatar: "https://github.com/carolinasantos.png",
    author: "Carolina Santos",
    author_link: "https://www.carolinasantosarte.com/",
    content:
      "Inspire-se e crie obras de arte deslumbrantes com pintura a óleo.",
    created_at: "2023-10-30",
    featured_images: [
      "https://plus.unsplash.com/premium_photo-1661634993112-6a019f5cc9e2?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1540800458874-73e6a5eed8ac?auto=format&fit=crop&q=80&w=1171&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&q=80&w=1173&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    category: "Esportes",
    title: "Treinamento Físico para Iniciantes",
    avatar: "https://github.com/pedrooliveira.png",
    author: "Pedro Oliveira",
    author_link: "https://www.pedrooliveiraesportes.com/",
    content:
      "Comece sua jornada de condicionamento físico com dicas e orientações.",
    created_at: "2023-10-31",
    featured_images: [
      "https://plus.unsplash.com/premium_photo-1661634993112-6a019f5cc9e2?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1540800458874-73e6a5eed8ac?auto=format&fit=crop&q=80&w=1171&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&q=80&w=1173&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    category: "Tecnologia",
    title: "Segurança Cibernética: Proteja seus Dados Online",
    avatar: "https://github.com/andreapereira.png",
    author: "Andrea Pereira",
    author_link: "https://www.andreapereiratecnologia.com/",
    content:
      "Mantenha seus dados seguros na era digital com práticas de segurança cibernética.",
    created_at: "2023-11-01",
    featured_images: [
      "https://plus.unsplash.com/premium_photo-1661634993112-6a019f5cc9e2?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1540800458874-73e6a5eed8ac?auto=format&fit=crop&q=80&w=1171&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&q=80&w=1173&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
];

export default posts;
