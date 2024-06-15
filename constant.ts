export const BASE_URL = "http://localhost:3000";

export const servicesList = [
  { link: "/services/modular-kitchen", text: "MODULAR KITCHEN" },
  { link: "/services/modular-office", text: "MODULAR OFFICE" },
  { link: "/services/chair-and-sofa", text: "CHAIR AND SOFA" },
  { link: "/services/skylight-dome", text: "SKYLIGHT DOME" },
  { link: "/services/stone-art", text: "STONE ART" },
  { link: "/services/water-proofing", text: "WATER PROOFING" },
];

export const nav_options = [
  { id: "1", name: "Home", path: "/" },
  { id: "2", name: "About Us", path: "/about-us" },
  {
    id: "3",
    name: "Services",
    path: "/services",
    submenu: [
      { id: "s1", path: "/services/modular-kitchen", name: "MODULAR KITCHEN" },
      { id: "s2", path: "/services/modular-office", name: "MODULAR OFFICE" },
      { id: "s3", path: "/services/chair-and-sofa", name: "CHAIR AND SOFA" },
      { id: "s4", path: "/services/skylight-dome", name: "SKYLIGHT DOME" },
      { id: "s5", path: "/services/stone-art", name: "STONE ART" },
      { id: "s6", path: "/services/water-proofing", name: "WATER PROOFING" },
    ],
  },
  { id: "4", name: "Projects", path: "/projects" },
  { id: "5", name: "Blog", path: "/blog" },
  { id: "6", name: "Contact", path: "/contact-us" },
];
