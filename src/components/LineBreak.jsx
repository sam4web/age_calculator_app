import { arrowIcon } from '../assets';

const LineBreak = () => {
  return (
    <div className='relative my-14'>
      <hr className='border border-grey-light rounded-full' />
      <button className='absolute top-1/2 -translate-y-1/2 right-1/2 md:right-0 translate-x-1/2 md:translate-x-0 '>
        <img
          src={arrowIcon}
          alt='arrow-icon'
          className='bg-purple w-16 md:w-20 p-3 md:p-4 rounded-full'
        />
      </button>
    </div>
  );
};

export default LineBreak;
