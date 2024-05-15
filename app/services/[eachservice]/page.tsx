import Image from "next/image";
import React from "react";
import Navigator from "./Navigator";
import SubHeading from "@/app/blog/SubHeading";
import P from "@/app/blog/P";
import FAQ from "@/app/components/FAQ";
import Link from "next/link";
import { GrLinkNext } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { decodeUrl } from "@/utils/decodeUrl";
import { servicesList } from "@/constant";
import OpenContactPopupBtn from "@/app/components/Popup/OpenContactPopupBtn";

interface IProps {
  params: { eachservice: string };
}

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

  return (
    <section className="">
      <div className="w-full relative overflow-hidden h-[25rem] sm:h-[18rem]">
        <Image
          className="size-full object-cover object-left-bottom"
          src="https://wdtthemes.kinsta.cloud/mezan/wp-content/uploads/sites/4/2024/03/main-breacrumb-Image.jpg"
          alt="banner imag"
          height={1980}
          width={1980}
        />
        <div className="size-full bg-[#0000008e] absolute top-0 bottom-0 flex items-center px-32 sm:px-5">
          <div>
            <h2 className="text-white font-tex text-3xl tracking-wider mt-6 sm:mt-14">
              Air Condition Installation
            </h2>
            <Navigator
              className="text-white text-[0.8rem] mt-3"
              info={navigatorInfo}
            />
          </div>
        </div>
      </div>

      <div className="flex items-start px-10 py-10 sm:flex-col sm:px-5">
        <section className="w-[70%] sm:w-full">
          <Image
            alt="images"
            src="/services/services_details3.webp"
            width={1280}
            height={720}
          />
          <SubHeading
            className="text-[36px] leading-[48px] sm:text-[20px] sm:leading-[30px] sm:tracking-wider"
            text="Ut Morbi Tincidunt Augue Interdum Est Placerat In Egestas Sed"
          />
          <P text="Duis porttitor ullamcorper elit tincidunt mollis. Quisque auctor, sapien porta lacinia iaculis, purus urna facilisis risus, nec feugiat erat lacus ut nunc. Ut euismod egestas leo lobortis finibus. Ut accumsan molestie est, at condimentum libero tincidunt tincidunt. Aenean sem massa, mattis at vehicula ac, consequat vitae libero. Aenean suscipit, arcu at mollis fermentum, urna nisl tincidunt neque, eget fermentum purus ante a nunc.Curabitur pulvinar sollicitudin justo, non hendrerit nisi. Donec pulvinar a metus tincidunt tincidunt. Vestibulum pharetra et lacus id convallis." />

          <P text="Sed at ligula eu magna vestibulum accumsan et id eros. Nam orci orci, rhoncus ac fringilla vel, ullamcorper in ex. Donec eu libero rhoncus, sagittis leo ut, consectetur lectus. Mauris ultrices ullamcorper mauris, in tempus quam. Nullam placerat nulla quis enim lobortis, ac tincidunt lacus auctor. Pellentesque sit amet vehicula neque. Aenean finibus porttitor est, ac iaculis nibh placerat ac." />
          <P text="Etiam eget sollicitudin erat. Morbi in urna id lectus ultricies tempus id egestas leo. Quisque sed convallis diam, id faucibus lectus. Phasellus in tristique urna, et malesua da nisi. Nulla sit amet velit aliquam, iaculis quam ut, sollicitudin nibh. Curabitur dignissim placerat massa, id finibus nulla elementum ac. Etiam mi erat, tincidunt et diam eget, tincidunt mattis ante. Proin vulputate luctus nisl ac hendrerit. Sed sem sapien, fermentum eget magna." />

          <div className="grid grid-cols-2 gap-5 mt-10 sm:grid-cols-1">
            <Image
              alt="image 1"
              src="https://wdtthemes.kinsta.cloud/mezan/wp-content/uploads/sites/4/2024/03/blog-single-one.jpg"
              height={1200}
              width={1200}
            />
            <Image
              alt="image 1"
              src="https://wdtthemes.kinsta.cloud/mezan/wp-content/uploads/sites/4/2024/03/blog-single-two.jpg"
              height={1200}
              width={1200}
            />
          </div>

          <P text="Proin ullamcorper porttitor lobortis. Nullam condimentum neque tincidunt hendrerit fermentum. Nunc vel nibh cursus, lacinia lacus quis, convallis ex. Phasellus in suscipit eros, cursus suscipit lectus. Quisque at lectus quis neque gravida rhoncus. Maecenas ut vehicula neque, vitae fermentum lacus. Suspendisse in ornare urna. Aenean tincidunt neque et urna vehicula, sit amet ultricies sem elementum. Fusce leo nisi, placerat sed neque sit amet, auctor consequat dui." />
          <P text="Phasellus cursus vitae odio vel pretium. Morbi sed vestibulum diam, ac hendrerit est. In euismod sapien a feugiat imperdiet. Mauris risus leo, vehicula vitae semper vitae, efficitur at augue. Cras ut magna augue. Nullam diam odio, iaculis sed tincidunt sit amet, pulvinar eget sapien. Nulla non massa a massa interdum commodo." />
          <div className="mt-10">
            <FAQ
              faqs={[
                { question: "", answer: "" },
                { question: "", answer: "" },
              ]}
            />
          </div>
        </section>
        <section className="w-[30%] px-10 sm:px-0 sm:w-full sm:mt-10">
          <div className="w-full bg-[#F9F9F9] px-5 py-5 space-y-4 rounded-xl">
            {servicesList.map((service) => (
              //   <div className="w-full">
              <Link
                key={service.text}
                href={service.link}
                className="flex border-b py-3 josefin-sans-400 text-sm items-center justify-between hover:text-yellow-500 transition-all duration-300"
              >
                <span>{service.text}</span>
                <GrLinkNext />
              </Link>
              //   </div>
            ))}
          </div>
          <OpenContactPopupBtn>
            <Image
              className="mt-6"
              src="/services/getAQuoteImage.jpg"
              alt=""
              height={1200}
              width={1200}
            />
          </OpenContactPopupBtn>

          <div className="w-full bg-[#F9F9F9] flex flex-col items-center mt-6 josefin-sans-400 ">
            <div className="w-full py-5 bg-[#267ECE] px-8">
              <h2 className="text-white text-2xl font-bold ">Working Hours:</h2>
            </div>

            <div className="py-6 space-y-6">
              <div>
                <p className="font-semibold">Monday - Wednesday :</p>
                <p className="text-gray-600 font-normal">08:30AM to 09:30PM</p>
              </div>
              <div>
                <p className="font-semibold">Thursday - Friday :</p>
                <p className="text-gray-600 font-normal">10:00AM to 08:30PM</p>
              </div>
              <div>
                <p className="font-semibold">Saturday & Sunday :</p>
                <p className="text-gray-600 font-normal">08:00AM to 01:00PM</p>
              </div>
            </div>
          </div>

          <div className="w-full bg-[#F9F9F9] flex flex-col items-center mt-6 josefin-sans-400 ">
            <div className="w-full py-5 bg-[#267ECE] px-8">
              <h2 className="text-white text-2xl font-bold ">Get In Touch:</h2>
            </div>

            <Link
              href="mailto:subrata.ash@gmail.com"
              className="flex items-center gap-2 pt-10"
            >
              <MdOutlineMail />
              <span>subrata.ash@gmail.com</span>
            </Link>
            <Link
              href="tel:9831234910"
              className="flex items-center gap-2 pb-10 pt-3"
            >
              <FaSquarePhone />
              <span>9831234910</span>
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
