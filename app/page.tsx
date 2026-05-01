import Hero from '@/components/Hero';
import RecruiterQuickView from '@/components/RecruiterQuickView';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import AskJayChatbot from '@/components/AskJayChatbot';

export default function Home() {
  return (
    <>
      <Hero />
      <RecruiterQuickView />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Resume />
      <Projects />
      <AskJayChatbot />
    </>
  );
}
