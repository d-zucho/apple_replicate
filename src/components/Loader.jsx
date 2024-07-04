import { Html } from '@react-three/drei';
import '../styles/loader.styles.css';

const Loader = () => {
  return (
    <Html>
      {/* <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center rounded-full'>
        <div className='w-[10vw] h-[10vw]'>Loading...</div>
      </div> */}
      <div className='spinner'>
        <div className='spinner1'></div>
      </div>
    </Html>
  );
};

export default Loader;
