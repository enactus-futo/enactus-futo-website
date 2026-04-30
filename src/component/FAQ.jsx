import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Who can join Enactus FUTO?",
    answer:
      "Any student currently enrolled at Federal University of Technology Owerri can join. We welcome students from all majors and backgrounds.",
  },
  {
    id: 2,
    question: "Do I need business experience?",
    answer:
      "Not at all! We provide training and mentorship. What matters most is your passion for creating positive change.",
  },
  {
    id: 3,
    question: "What time commitment is required?",
    answer:
      "We typically meet once a week, with additional time for project work. The commitment varies based on your role and current projects.",
  },
  {
    id: 4,
    question: "How can my organization partner with Enactus FUTO?",
    answer:
      "We're always looking for partnerships! Send us a message using the form above, and we'll discuss collaboration opportunities.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="py-12 px-2 sm:px-6 lg:px-8 bg-white rounded-2xl">
      <div className="max-w-2xl mx-auto">

        {/* Title */}
        <h2 className="text-[#1e1b4b] text-3xl sm:text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map(({ id, question, answer }) => (
            <div
              key={id}
              className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200"
            >
              {/* Question row */}
              <button
                onClick={() => toggle(id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-[#1e1b4b] font-semibold text-base sm:text-lg pr-4">
                  {question}
                </span>
                <ChevronDown
                  size={22}
                  className={`text-[#1e1b4b] shrink-0 transition-transform duration-300 ${
                    openId === id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openId === id ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-gray-500 text-sm sm:text-base leading-relaxed">
                  {answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;