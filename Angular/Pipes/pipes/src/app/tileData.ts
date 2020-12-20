import { TileLocation } from "./tileLocation";
import { TileType } from "./enums";

// a simple, and thus copy-able, representation 
export class TileData {
    constructor (
    
    public type: TileType,
    public image: string = "",
    public idCode: number 
    )
    {}
}