export interface iPokemonsList {
    count: number;
    next: string;
    previous: string | null;
    results: iPokemonListElements;
}

export interface iPokemonListElement {
    name: string;
    url: string;
}

export type iPokemonListElements = Array<iPokemonListElement>;
