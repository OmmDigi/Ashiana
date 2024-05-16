import React from "react";
import P from "@/app/blog/P";
import { decodeUrl } from "@/utils/decodeUrl";
import { servicesList } from "@/constant";
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
    canonical: "/services/chair-and-sofa",
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
    // <EachServiceLayout
    //   blogheading="The Best Modular Office Designer in Kolkata"
    //   blogimage="/services/chair-and-sofa-blog-banner.webp"
    //   faqs={faqs}
    //   servicesList={servicesList}
    //   servicename="chair and sofa"
    //   topheading="The Best Modular Office Designer in Kolkata"
    //   topimage="https://wdtthemes.kinsta.cloud/mezan/wp-content/uploads/sites/4/2024/03/main-breacrumb-Image.jpg"
    // >
    //   <P text="Transforming a mundane office space into a dynamic and efficient workspace is an art, and Ashiana Interiors in Kolkata has mastered it impeccably. With their innovative designs, impeccable craftsmanship, and commitment to excellence, Ashiana Interiors stands out as the premier choice for modular office design in Kolkata." />

    //   <P text="1. Innovative Designs: At Ashiana Interiors, every project begins with a blank canvas and a vision to create a workspace that not only meets the functional requirements but also inspires creativity and productivity. Their team of talented designers brings forth innovative concepts tailored to the specific needs and preferences of each client. Whether it's a sleek, modern aesthetic or a more traditional ambiance, Ashiana Interiors excels in delivering designs that exceed expectations."/>

    //   <P text="2. Customization: Recognizing that every office space is unique, Ashiana Interiors offers a high level of customization to ensure that the design perfectly aligns with the client's vision and brand identity. From layout planning to selecting furniture and accessories, every aspect is meticulously curated to create a cohesive and harmonious environment that fosters collaboration and efficiency." />
    //   <P text="3. Quality Craftsmanship: Quality is paramount at Ashiana Interiors. They source materials from trusted suppliers and employ skilled craftsmen who pay attention to every detail, ensuring that the final product is not only visually stunning but also built to last. From premium-grade furniture to precision-engineered modular fixtures, every element is crafted with precision and care."/>

    //   <GridImage images={["/services/chair-and-sofa-1.webp", "/services/chair-and-sofa-2.webp"]}/>

    //   <P text="4. Functional Efficiency: In today's fast-paced business world, functionality is key. Ashiana Interiors specializes in optimizing space utilization and workflow efficiency. Their designs prioritize ergonomics and practicality, creating workspaces that are conducive to productivity and well-being. From intelligent storage solutions to ergonomic furniture layouts, every aspect is thoughtfully designed to enhance the overall user experience." />
    //   <P text="5. Client-Centric Approach: <a class = 'linkStyle' href = '/'>Ashiana Interiors</a> believes in forging long-term relationships with its clients based on trust, transparency, and reliability. They collaborate closely with clients throughout the design and implementation process, ensuring that their needs are met at every stage. From initial concept development to final installation, Ashiana Interiors strives to exceed client expectations and deliver exceptional results." />
    //   <P text="In conclusion, Ashiana Interiors stands out as the best modular office designer in Kolkata, offering innovative designs, customization, quality craftsmanship, functional efficiency, and a client-centric approach. Whether you're looking to revamp your existing office space or create a brand new one from scratch, Ashiana Interiors is your trusted partner in bringing your vision to life. Elevate your workspace with Ashiana Interiors and experience the difference firsthand." />
    // </EachServiceLayout>
    <div className="size-full flexCenter">
      <h2 className="text-center text-3xl">Coming Soon</h2>
    </div>
  );
}
