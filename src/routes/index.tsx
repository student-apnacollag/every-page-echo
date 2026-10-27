import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { BODY_HTML, SCRIPT_TEXT } from "@/servemirates/content";
import "../servemirates/servemirates.css";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Servemirates | Cleaning, Pest Control and Home Care in UAE" },
      {
        name: "description",
        content:
          "Book cleaning, pest control, AC care, painting and property maintenance services across Dubai, Sharjah, Ajman and Abu Dhabi.",
      },
      {
        property: "og:title",
        content: "Servemirates | Cleaning, Pest Control and Home Care in UAE",
      },
      {
        property: "og:description",
        content:
          "Book cleaning, pest control, AC care, painting and property maintenance services across Dubai, Sharjah, Ajman and Abu Dhabi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: HERO_IMAGE },
      { name: "twitter:image", content: HERO_IMAGE },
    ],
  }),
  component: ServemiratesPage,
});

function ServemiratesPage() {
  // The original design runs one global script that builds the menus, cards,
  // tabs, gallery, service pages and all animations. Re-run it verbatim after
  // the markup is in the DOM, exactly as the uploaded file does.
  useEffect(() => {
    const s = document.createElement("script");
    s.textContent = SCRIPT_TEXT;
    document.body.appendChild(s);
    return () => {
      s.remove();
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />;
}
