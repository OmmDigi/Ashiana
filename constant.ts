import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { INavOptions } from "./types";
import { FaKitchenSet, FaRegLightbulb } from "react-icons/fa6";
import { GiPaintBucket, GiSofa, GiStonePile } from "react-icons/gi";
import { PiSelectionBackgroundLight } from "react-icons/pi";
import { MdPlumbing } from "react-icons/md";

export const BASE_URL = "http://localhost:3000";

export const servicesList = [
  { link: "/services/interior-design", text: "INTERIOR DESIGN" },
  { link: "/services/modular-kitchen", text: "MODULAR KITCHEN" },
  { link: "/services/modular-furniture", text: "MODULAR FURNITURE" },
  { link: "/services/false-ceiling", text: "FALSE CEILING" },
  { link: "/services/electrical", text: "ELECTRICAL" },
  { link: "/services/flooring", text: "FLOORING" },
  { link: "/services/plumbing", text: "PLUMBING" },
  { link: "/services/paint-and-wallpaper", text: "PAINT" },
];

export const nav_options: INavOptions[] = [
  { id: "1", name: "Home", path: "/" },
  { id: "2", name: "About Us", path: "/about-us" },
  {
    id: "3",
    name: "Services",
    path: "/services",
    submenu: [
      {
        id: "s1",
        path: "/services/interior-design",
        name: "INTERIOR DESIGN",
        icon: FaKitchenSet,
      },
      {
        id: "s2",
        path: "/services/modular-kitchen",
        name: "MODULAR KITCHEN",
        icon: HiMiniBuildingOffice2,
      },
      {
        id: "s3",
        path: "/services/modular-furniture",
        name: "MODULAR FURNITURE",
        icon: GiSofa,
      },
      {
        id: "s4",
        path: "/services/false-ceiling",
        name: "FALSE CEILING",
        icon: FaRegLightbulb,
      },
      {
        id: "s5",
        path: "/services/electrical",
        name: "ELECTRICAL",
        icon: GiStonePile,
      },
      {
        id: "s6",
        path: "/services/flooring",
        name: "FLOORING",
        icon: PiSelectionBackgroundLight,
      },
      {
        id: "s7",
        path: "/services/plumbing",
        name: "PLUMBING",
        icon: MdPlumbing,
      },
      {
        id: "s8",
        path: "/services/paint-and-wallpaper",
        name: "PAINT & WALLPAPER",
        icon: GiPaintBucket,
      },
    ],
  },
  { id: "4", name: "Projects", path: "/projects" },
  { id: "5", name: "Blog", path: "/blog" },
  { id: "6", name: "Contact", path: "/contact-us" },
];
