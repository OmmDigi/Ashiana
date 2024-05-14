import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineAdd } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import CollepseMenuItem from "./CollepseMenuItem";
import CollepseMenuLayout from "./CollepseMenuLayout";
import ServicesInfo from "./ServicesInfo";
import Footer from "../components/Footer/Footer";
import { GiWeightLiftingDown } from "react-icons/gi";


function page() {
  const servicesList = [
    {
      text: "Modular Kitchen",
      link: "#Modular_Kitchen",
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
      text: "Modular Office",
      link: "#Modular_Office",
      dropdown: [
        {
          heading: "Assess Needs and Requirements:",
          subtitle:
            "Start by understanding the purpose and requirements of your office space. Consider factors such as the number of employees, workflow, departments, privacy needs, and any special requirements like meeting rooms, storage areas, or collaborative spaces. This assessment will help you determine the size, layout, and features your modular office needs.",
        },
        {
          heading: "Design the Layout:",
          subtitle:
            "Once you have a clear understanding of your requirements, design a layout that maximizes space utilization and supports productivity. Modular offices allow for flexibility, so consider using prefabricated walls, partitions, and furniture that can be easily rearranged or expanded as needed. Optimize natural light, ventilation, and accessibility in your design to create a comfortable and inviting workspace.",
        },
        {
          heading: "Select Modular Components:",
          subtitle:
            "Choose modular components such as cubicles, desks, partitions, storage units, and dividers that suit your design and functional requirements. Look for customizable and interchangeable elements that can be easily reconfigured to adapt to changing needs. Consider factors like durability, aesthetics, ergonomics, and compatibility with technology when selecting components for your modular office.",
        },
        {
          heading: "Install Infrastructure:",
          subtitle:
            "Ensure that your modular office is equipped with the necessary infrastructure to support your operations. This includes electrical wiring, network connectivity, lighting, HVAC systems, and any specialized equipment or technology required for your business. Plan the placement of outlets, data ports, and other fixtures to accommodate current and future needs, keeping flexibility in mind.",
        },
        {
          heading: "Test and Adjust:",
          subtitle:
            "Once the modular components are installed, test the layout and functionality of your office space to identify any issues or areas for improvement. Gather feedback from employees and stakeholders and make adjustments as needed to optimize the workspace for productivity, comfort, and efficiency. Regularly review and update your modular office layout to adapt to changing business needs and ensure continued success.",
        },
      ],
    },
    {
      text: "Chair And Sofa",
      link: "#Chair_And_Sofa",
      dropdown: [
        {
          heading: "Measure and Plan:",
          subtitle:
            "Before you start arranging furniture, measure the dimensions of your room to understand the available space. Consider the traffic flow, focal points (like a fireplace or TV), and any architectural features. Use this information to create a rough layout plan, either on paper or digitally.",
        },
        {
          heading: "Choose the focal point:",
          subtitle:
            "Identify the focal point of the room. This could be a fireplace, a large window with a view, or a TV. Arrange your sofa and chairs to face this focal point. If the room has multiple focal points, prioritize the most frequently used one.",
        },
        {
          heading: "Arrange the sofa:",
          subtitle:
            "Start by placing the sofa against one of the room's walls, preferably facing the focal point. Make sure there's enough space around the sofa for comfortable movement. Leave at least 3 feet of space between the sofa and coffee table, if using one, for easy access.",
        },
        {
          heading: "Position the chairs:",
          subtitle:
            "Position the chairs around the sofa to create a balanced seating arrangement. You can place them opposite the sofa, at an angle, or perpendicular to it, depending on the room's layout and your preference. Ensure there's enough space between chairs for people to move comfortably.",
        },
        {
          heading: "Accessorize and finalize:",
          subtitle:
            "Once you've arranged the main pieces, add accessories such as coffee tables, side tables, rugs, and lamps to enhance the functionality and style of the seating area. Play with different configurations until you find the one that feels most inviting and cohesive.",
        },
      ],
    },
    {
      text: "Skylight Dome",
      link: "#Skylight_Dome",
      dropdown: [
        {
          heading: "Prepare the Opening:",
          subtitle:
            "Measure and mark the area on your ceiling where you want to install the skylight dome. Ensure there are no obstructions such as wiring or pipes in the area. Cut an opening in the ceiling according to the dimensions specified in the skylight dome's instructions. Use appropriate safety gear such as goggles and a dust mask.",
        },
        {
          heading: "Install the Frame:",
          subtitle:
            "Place the skylight dome's frame into the opening. Ensure it fits snugly and is level. Use shims if necessary to make adjustments. Secure the frame to the ceiling joists using screws or nails as specified in the instructions. Ensure the frame is tightly sealed to prevent leaks.",
        },
        {
          heading: "Weatherproofing:",
          subtitle:
            "Apply weatherproofing materials such as flashing around the perimeter of the frame. This will help prevent water from leaking into your home. Follow the manufacturer's instructions carefully, as the exact process may vary depending on the type of skylight dome you're installing.",
        },
        {
          heading: "Install the Dome:",
          subtitle:
            "Carefully place the dome onto the frame, making sure it fits properly and is seated securely. Use the provided fasteners to attach the dome to the frame according to the manufacturer's instructions. Double-check that everything is tightly sealed to prevent drafts and leaks.",
        },
        {
          heading: "Finishing Touches:",
          subtitle:
            "Once the dome is securely in place, inspect the installation to ensure everything is sealed properly and there are no gaps or leaks. If necessary, apply additional sealant or weatherproofing materials as needed. Finally, clean up any debris from the installation process and enjoy the natural light flooding into your space!",
        },
      ],
    },
    {
      text: "Stone Art",
      link: "#Stone_Art",
      dropdown: [
        {
          heading: "Preparation:",
          subtitle:
            "First, we need to clear the area where we want to install the stone art. We'll make sure the surface is clean, level, and free from any debris. Let's gather all the necessary materials and tools such as the stones, adhesive (like mortar or construction adhesive), trowel, level, gloves, safety glasses, and a brush for cleaning.",
        },
        {
          heading: "Layout Design:",
          subtitle:
            "Together, we'll plan the layout of our stone art. We can sketch it out on paper or lay the stones out on the ground to visualize how they will fit together. We should consider the pattern, color variations, and texture of the stones to create an appealing design.",
        },
        {
          heading: "Apply Adhesive:",
          subtitle:
            "Now, we'll start by applying a layer of adhesive to the surface where we'll be placing the stones. Using the trowel, we'll spread the adhesive evenly, ensuring full coverage. Let's work in small sections to prevent the adhesive from drying out before we place the stones.",
        },
        {
          heading: "Place Stones:",
          subtitle:
            "Together, we'll carefully place each stone onto the adhesive, following our layout design. We'll press firmly to ensure good adhesion. We'll use a level to make sure the stones are straight and even. We can adjust as needed before the adhesive sets.",
        },
        {
          heading: "Finishing Touches:",
          subtitle:
            "Once all the stones are in place and the adhesive has dried according to the manufacturer's instructions, we can fill in any gaps between the stones with additional adhesive or grout. We'll clean off any excess adhesive or grout with a damp cloth or brush. Finally, we'll allow the installation to cure completely before subjecting it to any heavy use or foot traffic.",
        },
      ],
    },
    {
      text: "Water Proofing",
      link: "#Water_Proofing",
      dropdown: [
        {
          heading: "Inspect for Weak Points:",
          subtitle:
            "We start by inspecting the exterior of the house for any weak points such as cracks in the foundation, gaps around doors and windows, or damaged roofing materials.",
        },
        {
          heading: "Seal Cracks and Gaps:",
          subtitle:
            "We use appropriate sealants like silicone or polyurethane to seal any cracks or gaps found during the inspection. This prevents water from seeping into the home through these vulnerable areas.",
        },
        {
          heading: "Improve Drainage:",
          subtitle:
            "We ensure that the home's drainage system is working effectively by cleaning gutters, installing downspout extensions to direct water away from the foundation, and grading the soil around the house to slope away from the foundation.",
        },
        {
          heading: "Waterproofing Exterior Surfaces:",
          subtitle:
            "We apply waterproof coatings or membranes to exterior surfaces such as foundation walls, basement walls, and exterior walls to create a barrier against water intrusion.",
        },
        {
          heading: "Protect Interior Spaces:",
          subtitle:
            "Finally, we take steps to protect interior spaces from water damage by installing sump pumps in basements, using waterproofing paints or sealants on interior walls, and ensuring that appliances like washing machines and water heaters are properly maintained to prevent leaks.",
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
            <div className="max-w-[662px]">
              <h2 className="font-tex text-[#073842] leading-[1em] text-left text-8xl sm:text-4xl sm:w-full">
                Our Services
              </h2>
              <div className="w-full bg-[#0738421f] h-[1px] my-6 sm:my-3"></div>
            </div>
            <div className="max-w-[662px] flex items-start justify-end">
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
            topHeading="MODULAR KITCHEN"
            imagePosition="left"
            imagesrc={"/services/mk.webp"}
            menuinfo={servicesList[0].dropdown}
          />
          <ServicesInfo
            catName={servicesList[1].text}
            topHeading="MODULAR OFFICE"
            imagePosition="right"
            imagesrc={"/services/mo.webp"}
            menuinfo={servicesList[1].dropdown}
          />
          <ServicesInfo
            catName={servicesList[2].text}
            topHeading="CHAIR AND SOFA"
            imagePosition="left"
            imagesrc="/services/ct.webp"
            menuinfo={servicesList[2].dropdown}
          />
          <ServicesInfo
            catName={servicesList[3].text}
            topHeading="SKYLIGHT DOME"
            imagePosition="right"
            imagesrc="/services/sd.webp"
            menuinfo={servicesList[3].dropdown}
          />
          <ServicesInfo
            catName={servicesList[4].text}
            topHeading="STONE ART"
            imagePosition="left"
            imagesrc="/services/sa.webp"
            menuinfo={servicesList[4].dropdown}
          />
          <ServicesInfo
            catName={servicesList[5].text}
            topHeading="WATER PROOFING"
            imagePosition="right"
            imagesrc="/services/wp.webp"
            menuinfo={servicesList[5].dropdown}
          />
        </div>
      </div>
    </main>
  );
}

export default page;
