import {IoIosArrowDropleftCircle} from 'react-icons/io'

function SamplePrevArrow({onClick}: any) {
  return ( <div onClick={onClick} className='absolute top-1/2 left-2 bg-white rounded-full z-10'><IoIosArrowDropleftCircle className='text-2xl'/></div> );
}

export default SamplePrevArrow;