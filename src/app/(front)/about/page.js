import ModernAbout from "@/components/about/ModernAbout";
import OurValues from "@/components/about/OurValues";
import WhatWeOffer from "@/components/about/WhatWeOffer";

export default function AboutPage() {
  return (
    <div className="bg-[#faf9f6] min-h-screen">
      <ModernAbout />
      <OurValues />
      <WhatWeOffer />
      {/* Ready for your instructions */}
    </div>
  );
}
