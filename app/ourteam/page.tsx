import Image from "next/image";

const team = [
  {
    name: "Alex Ros",
    role: "Founder & CEO",
    image: "/images/reviews/faisal.jpg",
  },
  {
    name: "Alen Raz",
    role: "Co-Founder & COO",
    image: "/images/reviews/faisal.jpg",
  },
  {
    name: "Hussey Mike",
    role: "Full Stack Engineer",
    image: "/images/reviews/faisal.jpg",
  },
  {
    name: "Sara Jon",
    role: "Full Stack Developer & SEO Specialist",
    image: "/images/team/zohaib.jpg",
  },
  {
    name: "Musab Ali",
    role: "Video Editor",
    image: "/images/team/musab.jpg",
  },
];

export default function OurTeamPage() {
  return (
    <section className="w-full py-20 px-4">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          A passionate team of creators, developers, and strategists working
          together to build impactful digital solutions.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {team.map((member, index) => (
          <div
            key={index}
            className="relative rounded-3xl bg-white dark:bg-zinc-800 shadow-lg transition hover:-translate-y-1"
          >
            {/* Image */}
            <div className="relative h-64 rounded-t-3xl  overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>

            {/* OVERLAPPING WHITE BOX */}
            <div className="relative z-10 -mt-4 bg-white dark:bg-zinc-900 rounded-t-3xl p-2 text-center">
              <h1 className="text-lg font-bold">{member.name}</h1>
              <h2 className="text-sm text-gray-500">{member.role}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
