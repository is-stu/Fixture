import { createContext } from 'react';

export const TeamsContext = createContext({
  teams: [],
  setTeams: (e: any) => {},
});
