import * as React from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import clsx from "clsx";

export default function ScrollButton() {
  const [visible, setVisible] = React.useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button
      variant="outline"
      size="icon"
      className={clsx("fixed bottom-4 right-4 z-50", !visible && "hidden")}
      onClick={scrollToTop}
    >
      <ChevronUp />
    </Button>
  );
}
