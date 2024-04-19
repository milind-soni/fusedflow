import clsx from 'clsx';
import React from 'react';

type Props = { selected: boolean };

const Home = ({ selected }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L4 7v10l8 5 8-5V7l-8-5z"
        className={clsx(
          'transition-all fill-[#C0BFC4] group-hover:fill-[#7540A9]',
          { 'dark:!fill-[#C8C7FF] !fill-[#ffffff]': selected },
          'dark:group-hover:fill-[#C8C7FF] dark:fill-[#353346] group-hover:fill-[#7540A9]'
        )}
      />
    </svg>
  );
};

export default Home;
