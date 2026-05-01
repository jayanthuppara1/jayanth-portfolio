import Hero from '@/components/Hero';
import RecruiterQuickView from '@/components/RecruiterQuickView';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <>
      <Hero />
      <RecruiterQuickView />
      <About />
      <Experience />
      <Projects />
    </>
  );
}
