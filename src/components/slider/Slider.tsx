"use client";

const items = [
  {
    img: "/logo/onlyfans.svg",
    title: "Onlyfans",
  },
  {
    img: "/logo/fansmetric.svg",
    title: "FansMetric",
  },
  {
    img: "/logo/textexpander-logo.png",
    title: "TextExpander",
  },
  {
    img: "/logo/wise.png",
    title: "Wise",
  },
  {
    img: "/logo/paypal-logo.png",
    title: "Paypal",
  },
];

const Slider = () => {
  return (
    <div className="overflow-hidden bg-[#111] py-4 rounded-full h-32 flex items-center">
      <div className="animate-marquee flex whitespace-nowrap">
        {items.concat(items).map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center space-y-1 text-white mx-8 w-60"
          >
            <img src={item.img} alt="slider images" className="w-40  h-10 grayscale" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
