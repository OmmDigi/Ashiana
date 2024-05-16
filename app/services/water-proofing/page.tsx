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
    canonical: "/services/water-proofing",
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
        "What is the best waterproofing method for buildings in Kolkata?",
      answer:
        "The best waterproofing method for buildings in Kolkata typically involves a combination of techniques such as cementitious waterproofing, liquid waterproofing membranes, and polyurethane coatings. These methods provide durable protection against the city's monsoon rains and high humidity levels.",
    },
    {
      question:
        "Which waterproofing product works effectively in Kolkata's climate?",
      answer:
        "In Kolkata's humid climate, waterproofing products with high elasticity and resistance to UV rays perform best. Look for brands offering acrylic or silicone-based waterproofing coatings, as they provide long-lasting protection against water ingress and structural damage.",
    },
    {
      question: "How can I find reliable waterproofing contractors in Kolkata?",
      answer:
        "To find reliable waterproofing contractors in Kolkata, it's essential to conduct thorough research. Seek recommendations from friends, family, or online reviews. Additionally, ensure that the contractor has experience working in Kolkata's climate and uses quality waterproofing materials from reputable brands.",
    },
    {
      question:
        "What are the common areas prone to water leakage in Kolkata buildings?",
      answer:
        "Kolkata's buildings often experience water leakage in areas such as rooftops, balconies, basements, and exterior walls. These areas are particularly vulnerable during the monsoon season when heavy rainfall is common. Proper waterproofing of these surfaces is crucial to prevent water damage and structural deterioration.",
    },
    {
      question:
        "How frequently should waterproofing maintenance be conducted in Kolkata?",
      answer:
        "In Kolkata's climate, where humidity and rainfall are significant factors, regular waterproofing maintenance is essential. It's advisable to inspect and reapply waterproofing coatings every 3-5 years, depending on the condition of the building and the quality of the initial waterproofing treatment. This proactive approach helps prevent costly water-related damages in the long run.",
    },
  ];

  return (
    <EachServiceLayout
      blogheading="Best Waterproofing in Kolkata"
      blogimage="/services/wp.webp"
      faqs={faqs}
      servicesList={servicesList}
      servicename="water proofing"
      topheading="Best Waterproofing in Kolkata"
      topimage="/services/main-breacrumb-Image.webp"
    >
      <P text="In a city like Kolkata, where monsoon rains can be relentless and humidity is a constant companion, ensuring effective waterproofing is essential to protect buildings and interiors from water damage. Ashiana Interiors Kolkata has earned a stellar reputation as the go-to destination for the best waterproofing solutions, offering innovative techniques, premium materials, and expert craftsmanship to safeguard properties against water intrusion." />

      <P text="1. Cutting-Edge Techniques: At <a class = 'linkStyle' href = '/'>Ashiana Interiors</a>, we stay at the forefront of waterproofing technology, employing cutting-edge techniques to provide comprehensive protection against water damage. Whether it's sealing cracks, applying waterproof membranes, or installing drainage systems, our skilled technicians utilize the latest methods to ensure long-lasting results and peace of mind for our clients." />

      <P text="2. Premium-Quality Materials: We understand the importance of using high-quality materials for effective waterproofing. That's why Ashiana Interiors exclusively sources premium-grade waterproofing products from trusted suppliers. From waterproof coatings and sealants to waterproof membranes and adhesives, our materials are rigorously tested for durability and effectiveness, guaranteeing superior protection against moisture intrusion." />
      <P text="3. Tailored Solutions: Every property is unique, and our approach to waterproofing reflects this understanding. At Ashiana Interiors, we offer tailored solutions that are customized to meet the specific needs and challenges of each project. Whether it's a residential building, commercial complex, or industrial facility, our experienced team assesses the site thoroughly to develop a waterproofing strategy that addresses vulnerabilities and ensures maximum protection." />

      <GridImage
        images={[
          "/services/water-proof-1.webp",
          "/services/water-proof-2.webp",
        ]}
      />

      <P text="4. Expert Craftsmanship: Waterproofing is a specialized skill that requires precision and attention to detail. Ashiana Interiors boasts a team of highly skilled technicians who are experts in their field. With years of experience and extensive training, our craftsmen deliver impeccable workmanship, ensuring that every aspect of the waterproofing process is executed with the utmost care and professionalism." />
      <P text="5. Exceptional Service: At Ashiana Interiors, we prioritize customer satisfaction above all else. From the initial consultation to the completion of the project, we are committed to providing exceptional service every step of the way. Our dedicated team listens to our clients' concerns, communicates transparently throughout the process, and strives to exceed expectations with promptness, reliability, and integrity." />
      <P text="In conclusion, Ashiana Interiors Kolkata stands out as the benchmark for the best waterproofing solutions in the city. With cutting-edge techniques, premium-quality materials, tailored solutions, expert craftsmanship, and exceptional service, we offer unmatched reliability and peace of mind to property owners seeking to safeguard their investments against water damage. Trust Ashiana Interiors for all your waterproofing needs and experience the difference of superior protection." />
    </EachServiceLayout>
  );
}
