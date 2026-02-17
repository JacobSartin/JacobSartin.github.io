export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  icon?: string;
}

export const projects: Project[] = [
  {
    slug: "3d-renderer",
    title: "3D Renderer",
    subtitle: "A simple software renderer",
    description:
      "A lightweight 3D renderer written as a learning project. Includes basic mesh loading, rasterization, and shading demos.",
    icon: "fa-solid fa-cube",
  },
  {
    slug: "cluster",
    title: "Cluster",
    subtitle: "Distributed tooling project",
    description:
      "A collection of utilities and experiments for orchestrating small compute clusters and distributed tasks.",
    icon: "fa-solid fa-network-wired",
  },
  {
    slug: "smesh-vpn",
    title: "Smesh VPN",
    subtitle: "Mesh VPN experiment",
    description:
      "Experimentation with peer-to-peer mesh VPNs, focusing on ease-of-use and secure key exchange.",
    icon: "fa-solid fa-shield-halved",
  },
  {
    slug: "this-page",
    title: "This Page",
    subtitle: "Meta project — this website",
    description:
      "The personal website itself. Source, experiments, and small demos for UI/UX.",
    icon: "fa-solid fa-file",
  },
  {
    slug: "unicorns",
    title: "Unicorns",
    subtitle: "A playful demo",
    description: "An intentionally silly demo about unicorns and horns.",
    icon: "fa-solid fa-chess-knight",
  },
  {
    slug: "otters",
    title: "Otters",
    subtitle: "Cute little animals",
    description: "A gallery and small writeup about why otters are neat.",
    icon: "fa-solid fa-otter",
  },
];
