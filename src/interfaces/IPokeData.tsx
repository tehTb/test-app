export interface IPokeData{
    id: number,
    abilities: Array<{ability: NameAndUrl}>,
    base_experience: number,
    game_indices: Array<{game_index: number, version: NameAndUrl}>,
    name: string,
    weight: number,
    height: number,
    moves: Array<{move: NameAndUrl}>,
    species: Array<{move: NameAndUrl}>,
    sprites: Sprite,
    stats: Array<Stat>,
    types: Array<Type>
}

interface NameAndUrl{
    name: string,
    url: string
}

interface Sprite{
    front_default: string,
    other: {dream_world: SpriteArt, "official-artwork": SpriteArt}
}

interface SpriteArt{
    front_default: string;
}

interface Stat{
    base_stat: string,
    effort: number,
    stat: NameAndUrl
}

interface Type{
    slot: number,
    type: NameAndUrl
}