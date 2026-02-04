import BottonComp from './BottonComp';
import Greetings from './Greetings';
import Navbar from './Navbar';
import Projects from './Projects';
import Certificates from './Certificates';
import Contact from './Contact';

function Landing() {
  return (
    <div className='min-h-screen flex flex-col px-1'>
      <Navbar />
      <main className='flex-grow'>
        <Greetings />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <BottonComp />
    </div>
  )
}

export default Landing