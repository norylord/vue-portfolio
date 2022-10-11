import FetchService from './FetchService';

class RequestService {
    RickAndMortyRandCharacter(randId) {

        let url = `https://rickandmortyapi.com/api/character/${randId}`
        return FetchService.getData(url)
    }

    RaiderIOCharacter() {
        let url = new URL(`https://raider.io/api/v1/characters/profile`)
        const params = {
            name: 'Лобера',
            region: 'eu',
            realm: 'borean-tundra'
        }
        url.search = new URLSearchParams(params)
        return FetchService.getData(url);
    }
}

export default new RequestService();