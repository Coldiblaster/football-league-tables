export interface CompetitionsProps {
  count: number;
  competitions: CompetitionProps[];
}

export interface CompetitionProps {
  id: number;
  area: {
    id: number;
    name: string;
    code: string;
    flag: string;
  };
  name: string;
  code: string;
  type: string;
  emblem: string;
  plan: string;
  currentSeason: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: string;
  };
  numberOfAvailableSeasons: 3;
  lastUpdated: string;
}

export interface CompetitionTeamsProps {
  count: number;
  teams: TeamProps[];
}

interface TeamProps {
  area: {
    id: number;
    name: string;
    code: string;
    flag: string;
  };
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  address: string;
  website: string;
  founded: number;
  clubColors: string;
  venue: string;
  runningCompetitions: [
    {
      id: number;
      name: string;
      code: string;
      type: string;
      emblem: string;
    },
  ];
  coach: {
    id: null;
    firstName: null;
    lastName: null;
    name: null;
    dateOfBirth: null;
    nationality: null;
    contract: {
      start: null;
      until: null;
    };
  };
  marketValue: null;
  squad: [];
  staff: [];
  lastUpdated: string;
}

export interface CompetitionMatchesProps {
  filters: {
    season: string;
    matchday: string;
  };
  matches: MatchesProps[];
}

interface Area {
  id: number;
  name: string;
  code: string;
  flag: string;
}

interface Competition {
  id: number;
  name: string;
  code: string;
  type: string;
  emblem: string;
}

interface Season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  stages: string[];
}

interface Team {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  coach: Coach;
  leagueRank: number;
  formation: string;
}

interface Coach {
  id: number;
  name: string;
  nationality: string;
}

interface Score {
  winner: string;
  duration: string;
  fullTime: Result;
  halfTime: Result;
}

interface Result {
  home: number;
  away: number;
}

interface Goal {
  minute: number;
  injuryTime: number | null;
  type: string;
  team: {
    id: number;
    name: string;
  };
  scorer: {
    id: number;
    name: string;
  };
  assist: {
    id: number;
    name: string;
  } | null;
  score: Result;
}

interface Penalty {
  player: {
    id: number;
    name: string;
  };
  team: {
    id: number;
    name: string;
  };
  scored: boolean;
}

interface Referee {
  id: number;
  name: string;
  type: string;
  nationality: string;
}

interface Odds {
  homeWin: number;
  draw: number;
  awayWin: number;
}

interface MatchesProps {
  area: Area;
  competition: Competition;
  season: Season;
  id: number;
  utcDate: string;
  status: string;
  minute: string;
  injuryTime: number;
  attendance: number | null;
  venue: string;
  matchday: number;
  stage: string;
  group: string | null;
  lastUpdated: string;
  homeTeam: Team;
  awayTeam: Team;
  score: Score;
  goals: Goal[];
  penalties: Penalty[];
  odds: Odds;
  referees: Referee[];
}
