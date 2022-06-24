import React, { useContext } from 'react';
import { Card } from '../components/Card';
import { Home } from '../components/Home';
import { TeamsContext } from '../helpers/context';

export const MainHome = () => {
  const { teams } = useContext(TeamsContext);
  return (
    <>
      <Home />
      <div className='flex flex-col justify-center items-center'>
        <h3 className='font-bold text-black text-3xl'>TEAMS</h3>
        {teams.length > 0 &&
          teams.map((team, index) => (
            <Card key={index} team={team} number={index} />
          ))}
      </div>
    </>
  );
};
