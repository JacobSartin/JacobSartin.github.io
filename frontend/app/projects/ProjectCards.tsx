"use client";
import Card, { CardData, iconStyle } from "@/components/Card";
import { useCallback, type MouseEvent } from "react";

// Build card list from projects where appropriate, and keep a few action cards.
const cards: CardData[] = [
  {
    title: "Duplicate",
    subtitle: "Open This Page in a New Tab",
    icon: "fa-window-restore",
    iconStyle: iconStyle.solid,
    handleClick: () => window.open(window.location.href),
  },
  {
    title: "3D Renderer",
    subtitle: "A lightweight renderer",
    icon: "fa-cube",
    iconStyle: iconStyle.solid,
    slug: "3d-renderer",
  },
  {
    title: "Cluster",
    subtitle: "Distributed tooling",
    icon: "fa-network-wired",
    iconStyle: iconStyle.solid,
    slug: "cluster",
  },
  {
    title: "Smesh VPN",
    subtitle: "Mesh VPN experiment",
    icon: "fa-shield-halved",
    iconStyle: iconStyle.solid,
    slug: "smesh-vpn",
  },
  {
    title: "This Page",
    subtitle: "About this website",
    icon: "fa-file",
    iconStyle: iconStyle.solid,
    slug: "this-page",
  },
  {
    title: "Copy",
    subtitle: "Copy this page URL",
    icon: "fa-copy",
    iconStyle: iconStyle.regular,
    handleClick: () => {
      const url = window.location.href;
      navigator.clipboard
        .writeText(url)
        .then(() => alert("Copied the url: " + url))
        .catch((err) => console.error("Failed to copy URL:", err));
    },
  },
  {
    title: "Unicorns",
    subtitle: "A playful demo",
    icon: "fa-chess-knight",
    iconStyle: iconStyle.solid,
    slug: "unicorns",
  },
  {
    title: "Otters",
    subtitle: "Cute little animals",
    icon: "fa-otter",
    iconStyle: iconStyle.solid,
    slug: "otters",
  },
  {
    title: "Adios",
    subtitle: "See you...",
    icon: "fa-hand-peace",
    iconStyle: iconStyle.solid,
    handleClick: () => window.close(),
  },
];

export default function ProjectCards() {
  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const cardElements = container.querySelectorAll<HTMLElement>(".card");

    cardElements.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  }, []);

  return (
    <div id="cards" onMouseMove={handleMouseMove}>
      {cards.map((card) => (
        <Card key={card.title} {...card} />
      ))}
    </div>
  );
}
