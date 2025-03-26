"use client";

import Image from "next/image";

const services = [
  {
    img: "/assets/landscape.avif",
    title: "Account Management",
    description:
      "We have a team of experts available 24/7 with years of experience and knowledge of the industry.",
    css: "h-[550px] w-[400px]",
  },
  {
    img: "/assets/landscape.avif",
    title: "Growth Strategies",
    description:
      "We market and grow OnlyFans accounts since day one through personalized strategies in every platform, also growing the fanbase and popularity of the model in every way possible.",
    css: "h-[400px] w-[350px]",
  },
  {
    img: "/assets/landscape.avif",
    title: "Tailored Marketing",
    description:
      "We assist you in the process of creation the right content on social media platforms to maximize your revenue.",
    css: "h-[550px] w-[400px]",
  },
];

const Services = () => {
  return (
    <section className="w-full md:px-6 lg:px-10 pb-20" id="services">
      <div className="flex flex-col">
        {/* <h2 className="w-full text-center text-white text-5xl pb-10">
          <span className="text-[#00AEEF]">S</span>ERVICES
        </h2> */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-center ">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center text-white space-y-4 max-w-sm mx-auto "
            >
              <div className={`w-full overflow-hidden rounded-2xl shadow-lg ${service.css}`}>
                <Image
                  src={service.img}
                  alt={service.title}
                  width={400}
                  height={400}
                  className="object-contain w-full"
                />
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
