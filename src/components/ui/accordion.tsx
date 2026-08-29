import * as React from 'react';
import { Accordion as AccordionPrimitive } from 'radix-ui';

import { cn } from '@/lib/utils';
import { FaPlus, FaMinus } from 'react-icons/fa6';

function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot='accordion'
      className={cn('flex w-full flex-col', className)}
      {...props}
    />
  );
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn('not-last:border-b', className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className='flex '>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          'relative group/accordion-trigger flex w-full items-center justify-between rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none  focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring disabled:pointer-events-none disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:size-4 cursor-pointer hover:underline',
          className
        )}
        {...props}
      >
        <div className='flex-1 min-w-0 max-w-75 sm:max-w-150 w-full '>
          {children}
        </div>

        <span className='absolute right-0 top-1/2 -translate-y-1/2 size-10 bg-primary-300 group-aria-expanded/accordion-trigger:bg-neutral-300  rounded-full aspect-square shrink-0 flex justify-center items-center'>
          <FaPlus
            data-slot='accordion-trigger-icon'
            className='pointer-events-none text-neutral-300 shrink-0 group-aria-expanded/accordion-trigger:hidden'
          />
          <FaMinus
            data-slot='accordion-trigger-icon'
            className='pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline'
          />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className='overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up'
      {...props}
    >
      <div
        className={cn(
          'h-[--radix-accordion-content-height] pt-0 pb-2.5 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4 max-w-71.5 md:max-w-170 lg:max-w-135 xl:max-w-190.25',
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
