import { ReactNode, forwardRef } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, id, className = '' }, ref) => {
    return (
      <section ref={ref} id={id} className={`py-20 md:py-32 px-4 md:px-8 lg:px-16 ${className}`}>
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;

