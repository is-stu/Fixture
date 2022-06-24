export const createMatches = (teams: string[]) => {
  let matches = [];
  for (let index = 0; index < teams.length; index++) {
    for (let j = index + 1; j < teams.length; j++) {
      matches.push({
        team1: teams[index],
        team2: teams[j],
      });
    }
  }
  return matches;
};

export const matchesPerDay = (matches: any) => {
  let games = [];
  for (let index = 0; index < matches.length / 2; index++) {
    games.push([matches[index]]);

    const { team1, team2 } = matches.find(
      (match: any) =>
        match.team1 !== matches[index].team1 &&
        match.team1 !== matches[index].team2 &&
        match.team2 !== matches[index].team2 &&
        match.team2 !== matches[index].team1
    );

    games[index].push({ team1, team2 });
  }

  return games;
};
