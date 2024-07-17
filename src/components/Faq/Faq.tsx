import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

function Faq() {
  return (
    <MaxWidthWrapper className="mt-10 flex flex-col items-center justify-center text-center">
      <div className="w-[80%]">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg text-zinc-600 flex-row justify-center rounded-md shadow-md decoration-transparent">
              How much does it cost to have an app developed by appleute?
            </AccordionTrigger>
            <AccordionContent>
              The cost of app development depends on several factors such as
              project requirements, scope and complexity. What we can say is
              that it is almost impossible to find an app development agency
              that offers better value for money. This is because a large part
              of our Teams in Bangalore, India, works. appleute has the Best
              designers and developers while maintaining a fair cost structure.
              The development of a Minimal Viable Product (MVP) for an app
              project usually starts at around 10,000€. Most app development
              projects we have done so far are in the 5-digit range. In an
              initial meeting, a project manager will want to know the scope of
              the app development project, based on which you will receive a
              quote. If you would like to learn more about app development
              costs, read here more.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg text-zinc-600 flex-row justify-center rounded-md shadow-md decoration-transparent">
              Why should I choose appleute over any other app development
              agency?
            </AccordionTrigger>
            <AccordionContent>
              On average appleute 28-50 % cheaper than any other German app
              development agency. The reasons for this are the lower cost of
              living and base salaries in India, where most of our designers and
              developers are based.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg text-zinc-600 flex-row justify-center rounded-md shadow-md decoration-transparent">
              What is the pricing model for app development projects?
            </AccordionTrigger>
            <AccordionContent>
              By default, appleute offers a fixed cost pricing model or a
              milestone pricing model for each app development project. This is
              also what most of our clients prefer so that they can plan their
              budget reasonably. We are open to discuss other ways of funding
              your app development project, e.g. Tech for Equity.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg text-zinc-600 flex-row justify-center rounded-md shadow-md decoration-transparent">
              I have got an idea for an app? What are the next steps?
            </AccordionTrigger>
            <AccordionContent>
              Your ideas can only be heard if you give a voice to them. Contact
              us. Ideally, call us at 09732/30 24 984 and one of the team will
              be happy to discuss Your idea for an app. If you prefer to write,
              use this form and we will respond within one business day. We
              offer a free and non-binding initial consultation an - we will
              simply be happy to help you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg text-zinc-600 flex-row justify-center rounded-md shadow-md decoration-transparent">
              How long does it take to develop an app?{" "}
            </AccordionTrigger>
            <AccordionContent>
              The duration of an app development project from start to finish
              varies depending on several factors such as project requirements,
              scope and complexity. As a rule of thumb we can say that a project
              at €15000 (+VAT) normally takes around 10-12 weeks.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-lg text-zinc-600 flex-row justify-center rounded-md shadow-md decoration-transparent">
              Is there a way we can accelerate the app development process?
            </AccordionTrigger>
            <AccordionContent>
              Will a single dish cooked by many cooks be prepared faster than
              the same dish cooked by one cook? This analogy can be applied
              quite well to projects of the App development transfer. This means
              that in some cases of app development, assigning more designers
              and developers can speed up the overall app development process,
              while in other app projects this effect is mitigated. We ask all
              clients to communicate from the beginning about deadline
              requirements associated with your app project. This is to avoid a
              situation where we compromise on quality to meet a deadline.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-lg text-zinc-600 flex-row justify-center rounded-md shadow-md decoration-transparent">
              Is it safe to share my data with appleute? Are there
              Non-Disclosure-Agreements (NDA) in place?
            </AccordionTrigger>
            <AccordionContent>
              Of course, data security and confidentiality are of utmost
              importance to you and us. All our employees sign a confidentiality
              agreement with each new project. NDA. In this way, we ensure that
              your data is only ever viewed by a limited group of people and
              that none of your competitors gets their hands on your
              intellectual property. Also, we use data encryption techniques to
              protect against any sort of data leakage. We strictly follow the
              most rigorous IT security standards to be able to run even
              security-sensitive app development projects. Note that we only
              ever consider completed app projects to be Reference publish on
              our website if the customer gives his consent.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </MaxWidthWrapper>
  );
}

export default Faq;
