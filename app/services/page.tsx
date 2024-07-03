import React from "react";
import Image from "next/image";
import Link from "next/link";
import ServicesInfo from "./ServicesInfo";
import { GiWeightLiftingDown } from "react-icons/gi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get the Best Interior Design Services in Kolkata",
  description:
    "Expert interior design services, modular kitchens, and offices in Kolkata. Transform your space with Ashiana Interiors. Trusted and innovative solutions.",
  alternates: {
    canonical: "/services",
  },
};

function page() {
  const servicesList = [
    {
      text: "Interior Design",
      link: "/services/interior-design",
      dropdown: [
        {
          heading: "Collaborative Design",
          subtitle:
            "Partner with us to craft a home that flows perfectly with your needs and style. Explore layouts, storage solutions, and 3D visualizations to bring your vision to life.",
        },
        {
          heading: "Material Magic",
          subtitle:
            "Get expert advice from <a class = 'linkStyle' href = '/services/interior-design'>Ashiana for the best interior design services in Kolkata</a> on materials, finishes, and lighting that suit your budget, lifestyle, and desired aesthetic. Achieve a cohesive and stylish look throughout your entire home.",
        },
        {
          heading: "Project Peace of Mind",
          subtitle:
            "Let a designer manage your renovation or decoration project. They'll handle communication, ensure quality, and give you peace of mind knowing your dream home is in expert hands.",
        },
        {
          heading: "Effortless Furnishing",
          subtitle:
            "Find furniture that complements your design and maximizes functionality. Source the perfect decorative elements to personalize your space and reflect your unique style.",
        },
        {
          heading: "Finishing Touches",
          subtitle:
            "Create an inviting ambiance with a strategic lighting plan. Personalize your space with the help of Ashiana to achieve a cohesive and stunning home that reflects you.",
        },
      ],
    },
    {
      text: "Modular Kitchen",
      link: "/services/modular-kitchen",
      dropdown: [
        {
          heading: "Design and Customize:",
          subtitle:
            "We design the layout of our modular kitchen, considering factors such as storage requirements, workflow efficiency, and aesthetic preferences. We choose materials, finishes, colors, and hardware that complement our design theme and suit our lifestyle.",
        },
        {
          heading: "Select Modular Units:",
          subtitle:
            "We choose modular cabinets, drawers, shelves, and other storage solutions based on our design and functional requirements. We opt for high-quality materials that are durable and easy to maintain, considering factors like moisture resistance and longevity.",
        },
        {
          heading: "Install:",
          subtitle:
            "We hire professionals or skilled carpenters to install our modular kitchen units. We ensure we accurately install the modules, considering alignment, levelness, and stability.",
        },
        {
          heading: "Integrate Appliances and Fixtures:",
          subtitle:
            "We seamlessly integrate kitchen appliances such as ovens, microwaves, dishwashers, and refrigerators into the modular design. We plan for adequate electrical and plumbing connections to accommodate the appliances and fixtures.",
        },
        {
          heading: "Add Finishing Touches:",
          subtitle:
            "We add finishing touches such as countertops, backsplashes, lighting fixtures, and decorative elements to enhance functionality and aesthetics. We pay attention to details like handles, knobs, and hinges to ensure a cohesive look throughout the kitchen.",
        },
      ],
    },
    {
      text: "MODULAR FURNITURE",
      link: "/services/modular-furniture",
      dropdown: [
        {
          heading: "Design Your Way",
          subtitle:
            "Modular furniture lets you customize layouts for any room. Need a spacious reading nook one day and a social gathering area the next? Rearrange your modular units with ease to create the perfect space for any occasion with <a class = 'linkStyle' href = '/services/interior-design'>Ashiana - the best interior design services in Kolkata</a>. And as your style evolves, simply update your furniture with new finishes or add-on pieces.",
        },
        {
          heading: "Maximize Every Inch",
          subtitle:
            "Small spaces, rejoice! Modular furniture is a master of space optimization. Combine storage solutions with functional furniture pieces, like ottomans with hidden compartments or beds with built-in drawers. This not only keeps your belongings organized but also helps you make the most of every square foot in your home or office.",
        },
        {
          heading: "Seamless Style Integration",
          subtitle:
            "No more furniture mismatch woes! Modular furniture comes in a vast array of finishes and materials, from sleek modern to warm and inviting wood tones. Mix and match pieces to create a cohesive aesthetic that complements your existing décor. Need a pop of color or a touch of industrial chic? <a class = 'linkStyle' href = '/services/modular-furniture'>Ashiana’s Modular furniture solution</a> allows you to personalize your space and express your unique style.",
        },
        {
          heading: "Easy Assembly, Endless Possibilities",
          subtitle:
            "Forget complicated instruction manuals and frustration. Modular furniture is designed for effortless assembly and disassembly. Enjoy the satisfaction of setting up your space quickly and easily. And the best part? As your needs or preferences change, simply reconfigure your modular units to create a whole new look and feel.",
        },
        {
          heading: "Budget-Friendly Versatility",
          subtitle:
            "Modular pieces often have the advantage of being reconfigurable or expandable. This means you can start with a basic set and add on more units as your needs evolve, saving you money in the long run. Ashiana’s Modular furniture design service offers incredible versatility and long-term value, making it a smart choice for both your home and office.",
        },
      ],
    },
    {
      text: "FALSE CEILING",
      link: "/services/false-ceiling",
      dropdown: [
        {
          heading: "Design Versatility",
          subtitle:
            "Show your creativity! <a class = 'linkStyle' href = '/services/false-ceiling'>Ashiana’s false ceiling designs</a> come in various materials and finishes, allowing you to complement your existing décor or create a bold new look. Think sleek metal panels for a modern touch or classic plaster for timeless elegance.",
        },
        {
          heading: "Maximize Functionality",
          subtitle:
            "More than just aesthetics, false ceilings offer hidden advantages. Conceal electrical wiring, HVAC ducts, and plumbing for a clean, clutter-free look. Integrate recessed lighting to enhance ambiance and functionality.",
        },
        {
          heading: "Sound Control Superhero",
          subtitle:
            "Struggling with noise? False ceilings can be your soundproofing savior. Specific materials and insulation techniques can significantly reduce noise transfer, creating a quieter and more peaceful environment.",
        },
        {
          heading: "Climate Control Champion",
          subtitle:
            "False ceilings can help regulate your space's temperature. By creating a pocket of air between the original ceiling and the false ceiling, you can improve insulation and potentially save on energy costs.",
        },
        {
          heading: "Perfect for Imperfections",
          subtitle:
            "Does your existing ceiling have imperfections or cracks?  <a class = 'linkStyle' href = '/services/false-ceiling'>Ashiana’s false ceiling design services</a> provide a quick and effective solution, hiding flaws and creating a smooth, finished look for your space.",
        },
      ],
    },
    {
      text: "ELECTRICAL",
      link: "/services/electrical",
      dropdown: [
        {
          heading: "Safety First",
          subtitle:
            "Electrical work can be dangerous. Qualified electricians have the expertise to ensure safe installations, repairs, and upgrades, minimizing the risk of electrical hazards.",
        },
        {
          heading: "Code Compliance",
          subtitle:
            "Electrical codes exist for a reason! <a class = 'linkStyle' href = '/'>Ashiana’s</a> Electricians ensure your wiring and systems meet all current safety standards, giving you peace of mind.",
        },
        {
          heading: "Modernization Magic",
          subtitle:
            "Need to upgrade your outdated electrical system? <a class = 'linkStyle' href = '/services/electrical'>Ashiana’s Electrical Services in Kolkata</a> can assess your needs and recommend solutions to handle increased power demands or integrate new technologies seamlessly.",
        },
        {
          heading: "Troubleshooting Expertise",
          subtitle:
            "Facing electrical issues? Electricians have the skills to diagnose problems quickly and efficiently, getting your power back on track with minimal disruption.",
        },
        {
          heading: "Lighting Design Powerhouse",
          subtitle:
            "Lighting plays an important role in creating ambiance and functionality. <a class = 'linkStyle' href = '/services/electrical'>Ashiana’s Electrical Services in Kolkata</a> can help you design and install a lighting system that meets your needs, from task lighting to mood lighting.",
        },
      ],
    },
    {
      text: "FLOORING",
      link: "/services/flooring",
      dropdown: [
        {
          heading: "Style Showcase",
          subtitle:
            "From the warmth of hardwood to the timeless elegance of stone, flooring options are vast. Select a material and style that complements your décor and reflects your taste. Create a seamless flow throughout your space or define distinct areas with contrasting floor choices.",
        },
        {
          heading: "Durability Depends on You",
          subtitle:
            "Consider your lifestyle and needs. High-traffic areas may benefit from durable materials like tile or laminate, while cozy bedrooms can embrace plush carpets. Explore options from <a class = 'linkStyle' href = '/services/flooring'>The Best Flooring Solutions in Kolkata</a> that offer scratch and water resistance for added peace of mind.",
        },
        {
          heading: "Comfort Underfoot",
          subtitle:
            "The right flooring feels as good as it looks. Opt for materials that provide warmth, sound insulation, and comfort underfoot, creating a space that's not only stylish but also inviting and comfortable.",
        },
        {
          heading: "Maintenance Matters",
          subtitle:
            "Different flooring materials require different levels of care. Choose an option that suits your lifestyle. Hardwood may require regular refinishing, while laminate offers easy maintenance with minimal cleaning needs.",
        },
        {
          heading: "Investment for Years to Come",
          subtitle:
            "Flooring is a significant investment that can last for years. Choose high-quality materials and professional installation from <a class = 'linkStyle' href = '/'>Ashiana</a> for a beautiful, long-lasting foundation for your space.",
        },
      ],
    },
    {
      text: "PLUMBING",
      link: "/services/plumbing",
      dropdown: [
        {
          heading: "Leak Detection and Repair",
          subtitle:
            "Leaking pipes can cause significant damage. Professional plumbers from Ashiana can identify leaks quickly and efficiently, saving you money on water bills and preventing costly repairs down the line.",
        },
        {
          heading: "Fixture Installation and Upgrades",
          subtitle:
            "Need a new faucet or a sparkling new showerhead? Plumbers ensure proper installation of fixtures to prevent leaks and ensure optimal performance. They can also advise on water-saving upgrades that can benefit both your wallet and the environment.",
        },
        {
          heading: "Clog Clearing Champions",
          subtitle:
            "Clogged drains are a homeowner's nightmare. Plumbers have the tools and expertise to tackle even the toughest clogs, getting your plumbing system flowing freely again.",
        },
        {
          heading: "Maintenance Magic",
          subtitle:
            "Regular plumbing maintenance can prevent future problems. <a class = 'linkStyle' href = '/services/plumbing'>The Best PLUMBING Solutions in Kolkata</a> from <a class = 'linkStyle' href = '/'>Ashiana</a> can perform inspections, clean drains, and recommend preventative measures to keep your system functioning smoothly for years to come.",
        },
        {
          heading: "Peace of Mind with Expertise",
          subtitle:
            "Plumbing issues can be stressful. Having a qualified plumber on call gives you peace of mind knowing you have a professional to address any plumbing challenges that may arise.",
        },
      ],
    },
    {
      text: "PAINT",
      link: "/services/paint",
      dropdown: [
        {
          heading: "Instant Ambiance",
          subtitle:
            "Our experts work with you to create a whole new atmosphere with a fresh coat of paint. Light and airy colors open up a space, while bolder hues add drama and personality. We'll also guide you through exploring different finishes like matte, satin, or gloss to enhance the mood.",
        },
        {
          heading: "Architectural Artistry",
          subtitle:
            "Want to draw attention to architectural details or create an illusion of spaciousness? <a class = 'linkStyle' href = '/services/paint'>Ashiana's painting professionals</a> use contrasting colors to define trim, moldings, or accent walls. Light colors on ceilings can make rooms feel taller, while darker tones create a cozy and intimate vibe.",
        },
        {
          heading: "The Power of Camouflage",
          subtitle:
            "Imperfections or uneven walls got you down? Ashiana's paint services are your secret weapon! Strategic use of color and texture by our experts can minimize flaws and create a smooth, finished look.",
        },
        {
          heading: "Express Your Style",
          subtitle:
            "Paint is a blank canvas for your creativity. <a class = 'linkStyle' href = '/'>Ashiana</a> helps you choose colors that reflect your personality and create a space that feels uniquely you. Don't be afraid to experiment with bolder palettes or accent walls to showcase your style with our expert guidance.",
        },
        {
          heading: "Budget-Friendly Refresh",
          subtitle:
            "Compared to other design elements, paint is a relatively inexpensive way to update your space. A fresh coat from Ashiana can breathe new life into a room, offering a high return on investment for your design dollar.",
        },
      ],
    },
  ];

  return (
    <main className="w-full flex flex-col items-center">
      <div className="w-full relative overflow-hidden h-[32rem] sm:h-[21rem]">
        <Image
          className="size-full object-cover object-left-bottom"
          src="/banner/v1-2.webp"
          alt="banner imag"
          height={1980}
          width={1980}
        />
      </div>
      <div className="px-20 py-20 sm:px-5">
        <div className="w-full">
          <div className="flex gap-20 sm:flex-col sm:gap-0">
            <div className="w-full">
              <h1 className="font-tex text-[#073842] leading-[1em] text-left text-8xl sm:text-4xl sm:w-full">
                Our Services
              </h1>
              <div className="w-full bg-[#0738421f] h-[1px] my-6 sm:my-3"></div>
            </div>
            <div className="w-full flex items-start justify-end">
              <ul className="w-full grid grid-cols-2 gap-3 sm:grid-cols-1">
                {servicesList.map((service) => (
                  <li key={service.link}>
                    <Link
                      className="flex items-center gap-4 josefin-sans-400"
                      href={service.link}
                    >
                      <GiWeightLiftingDown color="#808080" />
                      {service.text.toUpperCase()}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="font-semibold text-[24px] text-[#073842] josefin-sans-400 flex-grow sm:text-[1.3rem] sm:pt-10">
            Construction Services that Go Beyond Expectations
          </p>
        </div>

        <div className="w-full py-16 space-y-20 sm:space-y-10">
          <ServicesInfo
            catName={servicesList[0].text}
            topHeading="INTERIOR DESIGN"
            imagePosition="left"
            imagesrc={"/services/INTERIORDESIGN.webp"}
            menuinfo={servicesList[0].dropdown}
          />
          <ServicesInfo
            catName={servicesList[1].text}
            topHeading="MODULAR KITCHEN"
            imagePosition="right"
            imagesrc={"/services/mk.webp"}
            menuinfo={servicesList[1].dropdown}
          />
          <ServicesInfo
            catName={servicesList[2].text}
            topHeading="MODULAR FURNITURE"
            imagePosition="left"
            imagesrc={"/services/ct.webp"}
            menuinfo={servicesList[2].dropdown}
          />
          <ServicesInfo
            catName={servicesList[3].text}
            topHeading="FALSE CEILING"
            imagePosition="right"
            imagesrc="/services/FALSECEILING.webp"
            menuinfo={servicesList[3].dropdown}
          />
          <ServicesInfo
            catName={servicesList[4].text}
            topHeading="ELECTRICAL"
            imagePosition="left"
            imagesrc="/services/ashiana-electonics-banner-webp.jpg"
            menuinfo={servicesList[4].dropdown}
          />
          <ServicesInfo
            catName={servicesList[5].text}
            topHeading="FLOORING"
            imagePosition="right"
            imagesrc="/services/FLOORING.webp"
            menuinfo={servicesList[5].dropdown}
          />
          <ServicesInfo
            catName={servicesList[6].text}
            topHeading="PLUMBING"
            imagePosition="left"
            imagesrc="/services/PLUMBING.webp"
            menuinfo={servicesList[6].dropdown}
          />
          <ServicesInfo
            catName={servicesList[7].text}
            topHeading="PAINT"
            imagePosition="right"
            imagesrc="/services/wp.webp"
            menuinfo={servicesList[7].dropdown}
            otherchildren={
              <p className="py-3 text-[1rem] text-gray-600 text-justify">
                Choose{" "}
                <Link className="linkStyle" href={"/services/paint"}>
                  Ashiana, Kolkata&apos;s best paint service,
                </Link>{" "}
                and unleash the potential of your walls!
              </p>
            }
          />
        </div>
      </div>
    </main>
  );
}

export default page;
