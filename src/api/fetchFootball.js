const fetchFootball = async () => {
  const response = await fetch('https://v3.football.api-sports.io/players/topscorers?league=39&season=2021', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': '540d5598436ca2182111ef4873e9574b',
    },
  });
  const result = await response.json();
  const resData = [];
  result.response.forEach((res) => {
    resData.push({
      id: res.player.id,
      name: res.player.name,
      team: res.statistics[0].team.name,
      totalShots: res.statistics[0].shots.total,
      shotsOnTarget: res.statistics[0].shots.on,
      goalsScored: res.statistics[0].goals.total,
      appearances: res.statistics[0].games.lineups,
      minutesPlayed: res.statistics[0].games.minutes,
      rating: res.statistics[0].games.rating,
      photo: res.player.photo,

    });
  });
  return resData;
};

export default fetchFootball;
