const BASE_URL = `https://swapi.co/api/`

function getStarWarShips() {
    const url = `${BASE_URL}starships/`;
    return fetch(url, {mode: 'cors'})
    .then(res => res.json());
};

export default getStarWarShips;