const fetchFootball = async () => {
  const response = await fetch('https://v3.football.api-sports.io/leagues', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': '540d5598436ca2182111ef4873e9574b',
    },
  });
  const result = await response.json();
  console.log(result.response);
  return result.response;
};

export default fetchFootball;
