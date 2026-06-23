import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "1. Who can enroll in PROITKEYS training programs?",
    answer: "Our programs are designed for students, recent graduates, working professionals, career changers, and IT professionals looking to upgrade their skills in AI, Cloud Computing, Data Science, DevOps, Software Development, Cybersecurity, and Business Intelligence."
  },
  {
    question: "2. Are the classes live or pre-recorded?",
    answer: "All our programs are delivered through live instructor-led sessions conducted by experienced industry professionals. Recorded sessions may also be provided for revision and self-paced learning."
  },
  {
    question: "3. Do I need prior IT experience to join?",
    answer: "Not necessarily. We offer beginner, intermediate, and advanced-level programs. Our advisors can help you choose the right learning path based on your background and career goals."
  },
  {
    question: "4. Will I work on real-time projects?",
    answer: "Yes. Every program includes hands-on labs, assignments, case studies, and industry-relevant projects designed to provide practical experience and help you build a strong portfolio."
  },
  {
    question: "5. Do you provide certification assistance?",
    answer: "Yes. We provide guidance, study materials, practice tests, and mentorship for leading industry certifications including Microsoft, AWS, Databricks, Salesforce, Kubernetes, Google Cloud, and more."
  },
  {
    question: "6. Do you offer placement assistance?",
    answer: "Yes. Our career support services include resume building, LinkedIn profile optimization, mock interviews, interview preparation, job search strategies, and placement assistance."
  },
  {
    question: "7. Are the trainers industry experts?",
    answer: "Yes. Our trainers are experienced industry professionals, architects, consultants, and technical leaders who bring real-world expertise and practical insights into every training session."
  },
  {
    question: "8. Do you provide internship opportunities?",
    answer: "Selected programs include virtual internship opportunities, project-based learning experiences, and internship experience letters to strengthen your professional profile."
  },
  {
    question: "9. What makes PROITKEYS different from other training providers?",
    answer: "PROITKEYS combines live instructor-led training, real-world projects, industry mentorship, certification guidance, career coaching, and placement-focused support to help learners become job-ready and confident professionals."
  },
  {
    question: "10. Do you offer corporate training programs?",
    answer: "Yes. We provide customized corporate training solutions for organizations looking to upskill their workforce in AI, Cloud Computing, Data Engineering, DevOps, Software Development, and Data Analytics."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-[#f8fafc] text-dark relative overflow-hidden" id="faq">
      <div className="w-full px-5 sm:px-6 lg:px-10 max-w-[1440px] mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">Common Questions</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-dark/60 text-sm md:text-base mt-4">
            Everything you need to know about our live training programs, career placement support, projects, and certifications.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 shadow-sm hover:border-brand/20"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-dark transition-colors hover:text-brand"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-brand/10 text-brand' : ''}`}>
                    <i className="ri-arrow-down-s-line text-lg" />
                  </span>
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[500px] border-t border-slate-100' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 text-sm sm:text-base leading-relaxed text-dark/70 bg-slate-50/30">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
