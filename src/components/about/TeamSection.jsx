import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";

export default function TeamSection() {
  const team = [
    {
      name: "Ahmed Raza",
      role: "Founder & Chief Architect",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Sarah Kabir",
      role: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Zayn Malik",
      role: "Chief Technology Officer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Naila Jahan",
      role: "Director of Listings",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Driven by Passion" subtitle="The Minds Behind" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {team.map((member, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[3/4] bg-zinc-100 overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <h4 className="text-xl font-bold text-zinc-950 uppercase tracking-tighter mb-1">
                {member.name}
              </h4>
              <p className="text-xs font-medium text-zinc-400 uppercase tracking-widest leading-none">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
