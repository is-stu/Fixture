import React from 'react';

type CardProps = {
  number: number;
  team: string;
};

export const Card = ({ team, number }: CardProps) => {
  return (
    <div className='box-border w-2/4 h-fit border-4 border-black rounded-full m-3 p-2 flex items-center'>
      <span className='font-bold'>{number + 1}.</span>
      <h5 className='font-bold text-center'>{team}</h5>
    </div>
  );
};
