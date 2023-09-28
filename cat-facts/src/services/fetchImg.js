const BASE_API_IMG = 'https://cataas.com/cat/says/'
export const fetchImg = async ({fact}) => {
    if (!fact) return
    const splitFact = fact.split(' ', 4).join(' ')
    return fetch(`${BASE_API_IMG}${splitFact}`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Error fetching image from API')
            }
            return res.blob()
        })
        .then(image => {
            const imageURL = URL.createObjectURL(image)
            return imageURL
        })
        .catch(e => {
            throw new Error(e)
        })
}