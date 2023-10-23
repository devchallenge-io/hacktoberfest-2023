import Header from "@/components/header";
import Footer from "./components/footer";
import posts from "@/assets/posts.json";
import { Button } from "./components/ui/button";
import { useEffect, useMemo, useRef, useState } from "react";
import { ListFilter, ArrowRight } from "lucide-react";

import { register } from "swiper/element/bundle";
register();

function App() {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  const latestThreePosts = useMemo(() => {
    const sortedPosts = posts
      .slice()
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    return sortedPosts.slice(0, 3);
  }, [posts]);

  const latestTwoPosts = useMemo(() => {
    const sortedPosts = posts
      .slice()
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    return sortedPosts.slice(0, 2);
  }, [posts]);

  const [selectOrder, setSelectOrder] = useState("Up");

  const [selectedFilter, setSelectedFilter] = useState("Todos");
  const uniqueCategories = useMemo(() => {
    const categoriesSet = new Set<string>();

    posts.forEach((post) => {
      categoriesSet.add(post.category);
    });

    const uniqueCategories = Array.from(categoriesSet);

    return uniqueCategories.slice(-4);
  }, [posts]);

  const [visiblePosts, setVisiblePosts] = useState(3);

  const filteredPosts = useMemo(() => {
    let filteredArray = [];

    if (selectedFilter === "" || selectedFilter === "Todos") {
      filteredArray = [...posts];
    } else {
      filteredArray = posts.filter((post) => post.category === selectedFilter);
    }
    if (selectOrder === "Up") {
      filteredArray.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
    } else if (selectOrder === "Down") {
      filteredArray.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
      );
    }

    return filteredArray;
  }, [posts, selectedFilter, selectOrder]);

  const displayedPosts = filteredPosts.slice(0, visiblePosts);

  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 3);
  };

  return (
    <div className="flex flex-col items-center">
      <Header />

      <div
        id="inicio"
        className="w-full max-w-[1024px] py-4 px-8 md:px-20 flex flex-col items-center space-y-8"
      >
        <h2 className="font-bold text-5xl">Artigos</h2>
        <p className="text-muted-foreground">
          Veja mais artigos relacionados a tecnologias
        </p>

        <swiper-container
          ref={swiperElRef}
          slides-per-view="1"
          navigation="true"
          css-mode="true"
        >
          {latestThreePosts.map((post, idx) => (
            <swiper-slide key={idx}>
              <div className="w-full h-fit relative">
                <img
                  className="w-full rounded h-96 object-cover"
                  src={post.featured_images[0]}
                />
                <div className="absolute w-full flex justify-center bottom-0">
                  <div className="-mb-16 drop-shadow-2xl rounded w-10/12 bg-white dark:bg-zinc-900 flex flex-col px-4 py-6 space-y-1">
                    <p className="text-muted-foreground font-semibold">
                      {post.category}
                    </p>
                    <h3 className="text-xl font-semibold">{post.title}</h3>
                    <div className="flex flex-row items-center space-x-2">
                      <img
                        className="object-cover w-6 h-6 rounded-full"
                        src={post.avatar}
                      />
                      <p className="text-sm font-semibold">{post.author}</p>
                      <p className="text-xs text-muted-foreground">
                        {post.created_at}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>

      <div className="w-full max-w-[1024px] py-4 px-8 md:px-20 space-y-4">
        <div className="w-full flex flex-col">
          <p className="text-[#FFB23F]">Notícias do dia</p>
          <p className="text-2xl font-semibold">Principais notícias</p>
        </div>
        <div className="flex flex-col md:flex-row gap-16 md:gap-4">
          {latestTwoPosts.map((post, idx) => (
            <div
              key={idx}
              className="flex flex-col space-y-2 w-full md:w-1/2 rounded overflow-hidden"
            >
              <img
                className="w-full h-46 object-cover"
                src={post.featured_images[0]}
              />
              <p className="text-sm text-muted-foreground font-semibold">
                {post.category}
              </p>
              <h3 className="text-xl font-semibold">{post.title}</h3>

              <p className="text-sm text-muted-foreground mb-2">
                {post.content}
              </p>
              <div className="flex flex-row items-center space-x-2">
                <img
                  className="object-cover w-6 h-6 rounded-full"
                  src={post.avatar}
                />
                <p className="text-sm font-semibold">{post.author}</p>
                <p className="text-xs text-muted-foreground">
                  {post.created_at}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        id="artigos"
        className="w-full max-w-[1024px] py-4 px-8 md:px-20 space-y-8"
      >
        <div className="w-full flex flex-col">
          <p className="text-[#FFB23F]">Topicos populares</p>
          <p className="text-2xl font-semibold">Populares da semana</p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row w-full flex-nowrap overflow-hidden space-x-2">
            <Button
              onClick={() => setSelectedFilter("Todos")}
              variant={selectedFilter === "Todos" ? "default" : "outline"}
            >
              Todos
            </Button>
            {uniqueCategories.map((cat, idx) => (
              <Button
                key={idx}
                onClick={() => setSelectedFilter(cat)}
                variant={selectedFilter === cat ? "default" : "outline"}
              >
                {cat}
              </Button>
            ))}
          </div>

          <Button
            onClick={() =>
              setSelectOrder(selectOrder === "Down" ? "Up" : "Down")
            }
            variant="outline"
            className="hidden md:flex"
          >
            <ListFilter
              data-sort={selectOrder}
              className="h-[1.2rem] w-[1.2rem] mr-2 transition-all data-[sort=Down]:rotate-180"
            />
            Filtro
          </Button>
        </div>
        <div className="flex flex-col space-y-6 md:space-y-4 w-full">
          {displayedPosts.map((post, idx) => (
            <div
              key={idx}
              className="flex flex-row space-x-4 overflow-hidden w-full"
            >
              <img
                className="w-24 h-24 md:w-36 md:h-36 object-cover"
                src={post.featured_images[0]}
              />
              <div className="flex flex-col w-full">
                <p className="text-sm text-muted-foreground font-semibold">
                  {post.category}
                </p>
                <h3 className="text-xl font-semibold">{post.title}</h3>

                <p className="hidden md:flex text-sm text-muted-foreground mb-2">
                  {post.content}
                </p>
                <div className="flex flex-row items-center space-x-2">
                  <img
                    className="object-cover w-6 h-6 rounded-full"
                    src={post.avatar}
                  />
                  <p className="text-sm font-semibold">{post.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {post.created_at}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="flex w-full justify-center">
            <Button onClick={loadMorePosts} variant="outline" className="w-32">
              Carregar mais
            </Button>
          </div>
        </div>
      </div>

      <div
        id="contato"
        className="w-full max-w-[1024px] py-4 px-8 md:px-20 space-y-4 flex flex-col md:flex-row justify-between items-center"
      >
        <h2 className="text-2xl font-semibold">
          Inscreva-se na nossa Newsletter
        </h2>

        <Button className="w-56 bg-[#518581] text-white shadow hover:bg-[#518581]/90">
          Quero me inscrever
          <ArrowRight className="h-[1.2rem] w-[1.2rem] ml-2" />
        </Button>
      </div>

      <Footer />
    </div>
  );
}

export default App;
