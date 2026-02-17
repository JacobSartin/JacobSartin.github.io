"use client";

import Link from "next/link";
import { useCallback, type MouseEvent } from "react";

interface CardData {
  icon: string;
  iconStyle?: string; // "fa-solid" | "fa-regular"
  title: string;
  subtitle: string;
  slug?: string;
  action?: "duplicate" | "copy" | "close";
}

// Build card list from projects where appropriate, and keep a few action cards.
const cards: CardData[] = [
  {
    title: "Duplicate",
    subtitle: "Open This Page in a New Tab",
    icon: "fa-window-restore",
    iconStyle: "fa-solid",
    action: "duplicate",
  },
  {
    title: "3D Renderer",
    subtitle: "A lightweight renderer",
    icon: "fa-cube",
    iconStyle: "fa-solid",
    slug: "3d-renderer",
  },
  {
    title: "Cluster",
    subtitle: "Distributed tooling",
    icon: "fa-network-wired",
    iconStyle: "fa-solid",
    slug: "cluster",
  },
  {
    title: "Smesh VPN",
    subtitle: "Mesh VPN experiment",
    icon: "fa-shield-halved",
    iconStyle: "fa-solid",
    slug: "smesh-vpn",
  },
  {
    title: "This Page",
    subtitle: "About this website",
    icon: "fa-file",
    iconStyle: "fa-solid",
    slug: "this-page",
  },
  {
    title: "Copy",
    subtitle: "Copy this page URL",
    icon: "fa-copy",
    iconStyle: "fa-regular",
    action: "copy",
  },
  {
    title: "Unicorns",
    subtitle: "A playful demo",
    icon: "fa-chess-knight",
    iconStyle: "fa-solid",
    slug: "unicorns",
  },
  {
    title: "Otters",
    subtitle: "Cute little animals",
    icon: "fa-otter",
    iconStyle: "fa-solid",
    slug: "otters",
  },
  {
    title: "Adios",
    subtitle: "See you...",
    icon: "fa-hand-peace",
    iconStyle: "fa-solid",
    action: "close",
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

  const handleCardClick = useCallback((action?: string) => {
    if (action === "duplicate") {
      window.open(window.location.href);
    } else if (action === "copy") {
      const url = window.location.href;
      navigator.clipboard
        .writeText(url)
        .then(() => alert("Copied the url: " + url))
        .catch((err) => console.error("Failed to copy URL:", err));
    } else if (action === "close") {
      window.close();
    }
  }, []);

  return (
    <div id="cards" onMouseMove={handleMouseMove}>
      {cards.map((card) => {
        const iconClass = `${card.iconStyle ?? "fa-solid"} ${card.icon}`;

        const content = (
          <div className="card-content">
            <div className="card-image">
              <i className={iconClass} aria-hidden="true" />
            </div>
            <div className="card-info">
              <i className={iconClass} aria-hidden="true" />
              <h3>{card.title}</h3>
              <h4>{card.subtitle}</h4>
            </div>
          </div>
        );

        // If the card maps to a project slug, render a link to that project
        if (card.slug) {
          return (
            <Link
              key={card.title}
              href={`/projects/${card.slug}`}
              className="card"
            >
              {content}
            </Link>
          );
        }

        // Otherwise render a button with any action attached
        return (
          <button
            key={card.title}
            type="button"
            className="card"
            onClick={() => handleCardClick(card.action)}
          >
            {content}
          </button>
        );
      })}
    </div>
  );
}
