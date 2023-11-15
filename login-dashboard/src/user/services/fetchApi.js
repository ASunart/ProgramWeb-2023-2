const BASE_API = "https://rickandmortyapi.com/api/character"

export async function fetchApi() {
    return fetch(BASE_API)
        .then(res => {
            if (!res.ok) {
                throw new Error('Error fetching data from API')
            }
            return res.json()
        })
        .then(data  => {
            console.log(data);
            const mapedResults = data.results.map(({id, name, status, species, gender, origin, location, image}) => ({
                id,
                name,
                status,
                species,
                gender,
                origin: origin.name,
                location: location.name,
                image
            }))
            return mapedResults
        })
        .catch((e) => {
            throw new Error(e)
        })
}