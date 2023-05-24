import {IoIosArrowDroprightCircle} from 'react-icons/io'

function SampleNextArrow({onClick}: any) {
  return ( <div onClick={onClick} className='absolute top-1/2 right-2 bg-white rounded-full'><IoIosArrowDroprightCircle className='text-2xl'/></div> );
}

export default SampleNextArrow;