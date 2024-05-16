import Image from "next/image";
import React from "react";
import Navigator from "../Navigator";
import SubHeading from "@/app/blog/SubHeading";
import P from "@/app/blog/P";
import FAQ from "@/app/components/FAQ";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { decodeUrl } from "@/utils/decodeUrl";
import { servicesList } from "@/constant";
import OpenContactPopupBtn from "@/app/components/Popup/OpenContactPopupBtn";
import { IoMdArrowDown } from "react-icons/io";
import EachServiceLayout from "../EachServiceLayout";
import GridImage from "../GridImage";
import { Metadata } from "next";

interface IProps {
  params: { eachservice: string };
}

export const metadata: Metadata = {
  title: "Best Interior Designer in Kolkata | Ashiana Interiors",
  description:
    "Elevate your space with Ashiana Interiors, Kolkata's best interior designer. Discover home interior design, office interior design, modular kitchen & more.",
  alternates: {
    canonical: "/services/modular-kitchen",
  },
};

export default function page({ params }: IProps) {
  const servicename = params.eachservice;
  const navigatorInfo = [
    { link: "/", text: "home" },
    { link: "/services", text: "services" },
  ];

  if (servicename) {
    navigatorInfo.push({
      link: `/services/${servicename}`,
      text: decodeUrl(servicename),
    });
  }

  const faqs = [
    {
      question:
        "What exactly is a modular kitchen, and how does it differ from a traditional kitchen?",
      answer:
        "A modular kitchen is a modern, pre-designed kitchen layout that consists of standardized units or modules. These modules, such as cabinets, drawers, shelves, and countertops, are manufactured off-site and assembled on-site. Unlike traditional kitchens, modular kitchens offer greater flexibility, customization options, and efficient space utilization.",
    },
    {
      question:
        "What are the key benefits of choosing a modular kitchen design for my home?",
      answer: `
      
      Modular kitchens offer several advantages, including: <br /><br />
      <ul class = "space-y-2 list-decimal pl-3">
       <li>Efficient space utilization: Modular designs maximize available space, making them ideal for small or irregularly shaped kitchens.</li>
       <li>Customization: Clients can choose from a wide range of designs, finishes, and accessories to create a kitchen that reflects their personal style and functional needs.</li>
       <li>Easy installation: As modular kitchens are pre-fabricated, installation is quicker and less disruptive compared to traditional kitchen renovations.</li>
       <li>Durability and functionality: Modular kitchen components are made from high-quality materials, ensuring durability and ease of maintenance.</li>
       <li>Future-proofing: Modular kitchens can be easily modified or expanded in the future to accommodate changing needs or preferences.</li>
      </ul>
      `,
    },
    {
      question:
        "How does Ashiana Interiors ensure that their modular kitchens are both aesthetically pleasing and functional?",
      answer:
        "At Ashiana Interiors, we prioritize a holistic approach to design, focusing on both form and function. Our team of experienced designers collaborates closely with clients to understand their requirements, lifestyle, and aesthetic preferences. We meticulously plan every aspect of the kitchen layout, ensuring seamless integration of appliances, storage solutions, and ergonomic features. The result is a modular kitchen that not only looks stunning but also enhances efficiency and convenience in daily use.",
    },
    {
      question:
        "Are modular kitchens suitable for all types of homes and budgets?",
      answer:
        "Yes, modular kitchens can be customized to suit a wide range of home sizes, layouts, and budgets. At Ashiana Interiors, we offer flexible design options to accommodate diverse needs and preferences. Whether you live in a compact apartment or a spacious villa, our modular kitchen solutions can be tailored to maximize space utilization and functionality while adhering to your budget constraints.",
    },
    {
      question:
        "What sets Ashiana Interiors apart from other modular kitchen brands?",
      answer:
        "Ashiana Interiors distinguishes itself through a combination of innovation, craftsmanship, and a customer-centric approach. Our designs blend contemporary style with practicality, catering to the unique requirements of each client. We prioritize quality and sustainability, using eco-friendly materials and practices wherever possible. From initial consultation to final installation, our dedicated team ensures a seamless and rewarding experience for every client, making us the preferred choice for discerning homeowners seeking excellence in modular kitchen design.",
    },
  ];

  return (
    <EachServiceLayout
      blogheading="Best Modular Kitchen Designer in Kolkata"
      blogimage="/services/moduler-kitchen-blog-banner.webp"
      faqs={faqs}
      servicesList={servicesList}
      servicename="modular kitchen"
      topheading="Best Modular Kitchen Designer in Kolkata"
      topimage="https://wdtthemes.kinsta.cloud/mezan/wp-content/uploads/sites/4/2024/03/main-breacrumb-Image.jpg"
    >
      <P text="In the bustling city of Kolkata, where tradition meets modernity, the concept of modular kitchens has been steadily gaining popularity. As urban lifestyles evolve, so do the demands for convenience, functionality, and aesthetics in our living spaces. This evolution has spurred the emergence of innovative interior design solutions, and at the forefront stands Ashiana Interiors, a brand synonymous with excellence in modular kitchen design." />

      <P text="<a class = 'linkStyle' href = '/'>Ashiana Interiors</a> understands the unique needs of Kolkata's urban dwellers. Their designs seamlessly blend contemporary style with practicality, catering to the diverse tastes and preferences of their clientele. From compact apartments to spacious homes, they offer tailored solutions that optimize space utilization without compromising on elegance." />
      <P text="One of the key features of Ashiana Interiors' modular kitchens is their meticulous attention to detail. Each element is thoughtfully curated to enhance both form and function. State-of-the-art appliances, sleek storage solutions, and ergonomic layouts are seamlessly integrated to create a harmonious culinary haven." />

      <GridImage images={["/services/moduler-kitchen1.webp", "/services/moduler-kitchen2.webp"]}/>

      <P text="In Kolkata, where culinary traditions run deep, Ashiana Interiors pays homage to local culture while embracing global design trends. Their kitchens effortlessly fuse traditional elements such as intricate woodwork and ornate finishes with modern conveniences like soft-close cabinets and intelligent lighting systems." />
      <P text="Moreover, sustainability is at the core of Ashiana Interiors' ethos. They prioritize eco-friendly materials and practices, ensuring that their designs are not only aesthetically pleasing but also environmentally responsible. By choosing Ashiana Interiors, clients can rest assured that their dream kitchen is not only beautiful but also contributes to a greener future." />
      <P text="Collaboration is key at Ashiana Interiors. Their team of experienced designers works closely with clients, understanding their needs, preferences, and lifestyle to create bespoke solutions that exceed expectations. Whether it's a sleek, minimalist design or a lavish, opulent space, Ashiana Interiors brings visions to life with impeccable craftsmanship and attention to detail." />
      <P text="Furthermore, Ashiana Interiors' commitment to quality extends beyond design to installation and after-sales service. Their skilled craftsmen ensure that every component is flawlessly installed, while their responsive customer support team is always on hand to address any queries or concerns." />
      <P text="In conclusion, Ashiana Interiors sets the standard for modular kitchen design in Kolkata. With their innovative approach, attention to detail, and commitment to customer satisfaction, they continue to elevate the culinary experience for homeowners across the city. For those seeking a perfect blend of style, functionality, and sustainability in their kitchen, Ashiana Interiors is the ultimate destination." />
    </EachServiceLayout>
  );
}
