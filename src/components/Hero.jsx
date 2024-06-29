import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {
  useGSAP(() => {
    gsap.to('#hero-title', { opacity: 1, delay: 1.5, duration: 1.5 });
  }, []);

  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <p id='hero-title' className='hero-title'>
          iPhone 15Pro
        </p>
      </div>
    </section>
  );
};

export default Hero;
