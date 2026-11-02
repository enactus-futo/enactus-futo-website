import ESW from "../assets/Achievements/ESW.jpg";
import ACT_AWARD from "../assets/Achievements/ACTAward.jpeg";
import SEW from "../assets/Achievements/SEW.jpeg";
import juliusB from "../assets/Achievements/juliusB.jpg";
import Nationals2025 from "../assets/Achievements/Nationals2025.jpeg";

import SEO from "../component/SEO";
import Hero from "../component/Hero";

const achievements = [
  {
    img: ESW,
    year: "2026",
    title: "Winners - ENACTUS Early Stage National Competition",
    category: "NATIONAL COMPETITION",
    description:
      "EcoFuel transforms agricultural and forestry waste into clean cooking fuel and organic soil products, earning Enactus FUTO first place in the 2026 Enactus Nigeria Nationals Early Stage Competition",
  },
  {
    img: juliusB,
    year: "2026",
    title: "Winners - Julius Berger Innovation Challenge",
    category: "NATIONAL COMPETITION",
    description:
      "Enactus FUTO achieved national recognition at the Julius Berger Innovation Challenge with its ALTAR structural inspection robot.",
    imageAlt: "Enactus FUTO Julius Berger Innovation Challenge",
  },
  {
    img: Nationals2025,
    year: "2025",
    title: "2nd RunnerUp - Enactus Nigeria National Competition",
    category: "NATIONAL COMPETITION",
    description:
      "Enactus FUTO took its entrepreneurial ideas to the national stage, presenting innovative solutions alongside teams from across Nigeria.",
    imageAlt: "Enactus FUTO at the 2025 national competition",
  },
  {
    img: ACT_AWARD,
    year: "2024",
    title: "2nd RunnerUp - Action with Africa Challenge",
    category: "INTERNATIONAL COMPETITION",
    description:
      "FUTO's ECOFUEL project placed fourth in the Action with Africa Challenge, earning €2,000 in recognition of its work.",
    imageAlt: "Enactus FUTO Action with Africa Challenge recognition",
  },
  {
    img: SEW,
    year: "2024",
    title: "Winners - Schneider Electric Battery Innovation Challenge",
    category: "NATIONAL COMPETITION",
    description:
      "Enactus FUTO won the Nigerian competition with MAX Battery, an innovation focused on improving battery lifespan and reliability.",
    imageAlt: "Enactus FUTO Schneider Electric Battery Innovation Challenge",
  },
];

export default function Achievement() {
  return (
    <>
      <SEO
        title="Our Achievements | Enactus FUTO"
        description="Explore Enactus FUTO's achievements, competition victories, awards, and milestones in student innovation, entrepreneurship, and social impact."
        url="https://enactusfuto.org/achievements"
      />

      <main className="overflow-hidden bg-white">
        {/* HERO */}
        <section
          className="relative w-full overflow-hidden"
          style={{ height: "100dvh" }}
        >
          <Hero
            tag="Our Achievements"
            headline="Celebrating Progress,"
            highlight="Inspiring Impact"
            subtext="From national competition victories to innovative solutions, explore the milestones that reflect our team's commitment to entrepreneurship, innovation, and meaningful change."
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          />
        </section>

        {/* INTRODUCTION */}
        <section className="px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <h1 className="text-3xl font-bold tracking-tight text-[#1B1464] sm:text-4xl lg:text-5xl">
              Our Achievements
              <span className="mt-2 block text-[#F5A623]">
                A Journey of Impact and Innovation
              </span>
            </h1>

            <div className="my-6 h-1 w-16 rounded-full bg-[#F5A623]" />

            <p className="max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
              At Enactus FUTO, every achievement reflects the creativity,
              dedication, and entrepreneurial spirit of our team. From
              developing innovative solutions to earning recognition on national
              and international stages, we continue to turn ideas into
              meaningful impact. Explore the milestones that celebrate our
              commitment to entrepreneurship, teamwork, and a better future.
            </p>
          </div>
        </section>

        {/* ACHIEVEMENT TIMELINE */}
        <section
          className="bg-[#FFFAE9] px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
          aria-labelledby="achievement-timeline-heading"
        >
          <div className="mx-auto max-w-6xl">
            {/* SECTION HEADING */}
            <div className="mb-16 text-center sm:mb-20">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#B78000]">
                Our Milestones
              </span>

              <h2
                id="achievement-timeline-heading"
                className="mt-3 text-3xl font-bold text-[#1B1464] sm:text-4xl lg:text-5xl"
              >
                A History of Achievement
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                Every milestone tells a story of ideas, determination,
                collaboration, and progress.
              </p>
            </div>

            {/* TIMELINE */}
            <div className="relative">
              {/* VERTICAL TIMELINE LINE */}
              <div
                className="absolute bottom-4 left-[11px] top-4 w-[3px] rounded-full bg-[#F5A623] md:left-1/2 md:-translate-x-1/2"
                aria-hidden="true"
              />

              <div className="space-y-16 sm:space-y-20 lg:space-y-24">
                {achievements.map((item, index) => {
                  const imageOnLeft = index % 2 === 0;

                  return (
                    <article
                      key={`${item.year}-${item.title}`}
                      className="relative grid grid-cols-1 gap-6 pl-9 md:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] md:gap-0 md:pl-0"
                    >
                      {/* TIMELINE DOT */}
                      <span
                        className="absolute left-[3px] top-7 z-10 h-5 w-5 rounded-full border-4 border-[#FFFAE9] bg-[#F5A623] shadow-sm md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
                        aria-hidden="true"
                      />

                      {/* ACHIEVEMENT IMAGE */}
                      <div
                        className={`min-w-0 ${
                          imageOnLeft
                            ? "md:col-start-1 md:row-start-1"
                            : "md:col-start-3 md:row-start-1"
                        }`}
                      >
                        <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                          <img
                            src={item.img}
                            alt={item.imageAlt}
                            loading="lazy"
                            className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          />

                          <div className="absolute left-4 top-4">
                            <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold tracking-wide text-[#1B1464] shadow-sm backdrop-blur-sm">
                              {item.year}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* MILESTONE MARKER COLUMN */}
                      <div className="hidden md:col-start-2 md:row-start-1 md:block" />

                      {/* ACHIEVEMENT DESCRIPTION */}
                      <div
                        className={`flex min-w-0 flex-col justify-center py-2 md:py-8 ${
                          imageOnLeft
                            ? "md:col-start-3 md:row-start-1 md:pl-8 lg:pl-12"
                            : "md:col-start-1 md:row-start-1 md:pr-8 lg:pr-12 md:text-right"
                        }`}
                      >
                        <span
                          className={`mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#A16C00] ${
                            !imageOnLeft ? "md:self-end" : "md:self-start"
                          }`}
                        >
                          {item.category}
                        </span>

                        <h3 className="text-2xl font-bold leading-tight text-[#1B1464] sm:text-3xl">
                          {item.title}
                        </h3>

                        <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
                          {item.description}
                        </p>

                        <div
                          className={`mt-5 h-1 w-12 rounded-full bg-[#F5A623] ${
                            !imageOnLeft ? "md:ml-auto" : ""
                          }`}
                        />
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
