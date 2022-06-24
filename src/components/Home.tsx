import React, { useContext, useState } from 'react';
import { TeamsContext } from '../helpers/context';

export const Home = () => {
  const [teamInput, setTeamInput] = useState<string>('');
  const [hasError, setHasError] = useState<string>('');
  const { teams, setTeams } = useContext(TeamsContext);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    hasError && setHasError('');
    setTeamInput(e.target.value);
  };

  const handleAddTeam = () => {
    const validate = teams.find((team) => team === teamInput);
    if (teamInput === '') {
      setTeamInput('');
      setHasError('empty');
      return;
    }
    if (validate) {
      setTeamInput('');
      setHasError('registered');
    } else {
      setTeams([...teams, teamInput]);
      setTeamInput('');
    }
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-8xl text-black pb-2 font-medium'>
        Basketball Fixture
      </h2>
      <p className='text-base text-black pb-3'>Please add your team here...</p>
      <input
        className='border border-black py-3 px-2 rounded outline-none w-4/5'
        type='text'
        placeholder='Team here...'
        name='team'
        value={teamInput}
        onChange={inputHandler}
      />
      <button
        className='rounded-full bg-slate-900 text-white w-2/4 p-3 mt-3 font-medium'
        onClick={handleAddTeam}
      >
        Save Team
      </button>
      {hasError === 'registered' && (
        <h6 className='font-bold text-red-600 pt-4'>
          This team is already registered!
        </h6>
      )}
      {hasError === 'empty' && (
        <h6 className='font-bold text-red-600 pt-4'>
          Provide a name for the team!
        </h6>
      )}
    </div>
  );
};
