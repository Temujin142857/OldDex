export class Pokemon{
    constructor(species=null, moves=[], evs=[], ivs=[], ability=null, item=null){
        this.species = species
        this.moves = moves
        this.evs = evs
        this.ivs = ivs
        this.ability = ability
        this.item = item
    }
}

export function createPokemonFromSnapshot(snapshot){
    //check if the species is already loaded into memory
    //if not load it into memory
    return null;
}