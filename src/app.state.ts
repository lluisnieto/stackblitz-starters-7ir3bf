import { NamedAPIResource, NamedAPIResourceList, Pokemon } from 'pokenode-ts';

export interface State {
    namedResourcesList: NamedAPIResourceList
    selectedPokemon?: Pokemon
}

export const initialAppState: State = {
    namedResourcesList: {
        count: 0,
        next: '',
        previous: '',
        results: []
    }
};

