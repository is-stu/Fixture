import React, { useMemo, useState } from 'react';
import { TeamsContext } from './helpers/context';
import { MainHome } from './pages/MainHome';

export const App = () => {
  const [teams, setTeams] = useState([]);

  const contextValue = useMemo(() => ({ teams, setTeams }), [teams]);
  return (
    // @ts-ignore
    <TeamsContext.Provider value={contextValue}>
      <div className='bg-white grid grid-cols-2 w-screen h-screen'>
        <MainHome />
      </div>
    </TeamsContext.Provider>
  );
};
