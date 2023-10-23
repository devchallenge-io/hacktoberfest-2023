import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

export function ModeToggle({ text = "" }) {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      variant="outline"
      size={text != "" ? "default" : "icon"}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] ${
          text !== "" ? "left-7" : ""
        } rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100`}
      />
      <span className="sr-only">Toggle theme</span>
      {text != "" && <p>{text}</p>}
    </Button>
  );
}
