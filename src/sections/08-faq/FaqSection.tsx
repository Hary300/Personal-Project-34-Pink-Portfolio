import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { faqData } from '@/data/faqData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FaqSection = () => {
  const header = faqData.header;
  const faqs = faqData.faqs;
  return (
    <SectionWrapper sectionId='faq'>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
      <Accordion
        type='single'
        collapsible
        defaultValue='item-1'
        className='flex flex-col w-full'
      >
        {faqs.map((faq, index) => (
          <AccordionItem key={faq.value} value={faq.value}>
            <div className='grid grid-cols-[auto_1fr] gap-4 lg:gap-45.75'>
              <span className='font-semibold text-lg pt-2.5 '>
                0{index + 1}
              </span>
              <div className='min-w-0 w-full'>
                <AccordionTrigger className='gap-4 font-semibold text-lg'>
                  {faq.trigger}
                </AccordionTrigger>

                <AccordionContent>{faq.content}</AccordionContent>
              </div>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionWrapper>
  );
};

export default FaqSection;
