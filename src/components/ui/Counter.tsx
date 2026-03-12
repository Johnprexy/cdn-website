import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

interface CounterProps {
  value: string;
  className?: string;
}

export default function Counter({ value, className }: CounterProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const num = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  if (isNaN(num)) return <span ref={ref} className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      {inView ? <CountUp end={num} duration={2.5} suffix={suffix} /> : `0${suffix}`}
    </span>
  );
}
