import PageFAQs from "./PageFAQs";
import { homeFaqs } from "./page-faqs";

export default function FAQSection() {
  return (
    <PageFAQs
      faqs={homeFaqs}
      title="Common questions"
      intro="Answers about painting quotes, preparation, services, and timelines in Noida."
      id="faqs"
      className="bg-[#f4f2ee]"
    />
  );
}
