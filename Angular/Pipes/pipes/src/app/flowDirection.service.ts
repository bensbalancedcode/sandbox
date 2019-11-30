import { Injectable } from '@angular/core';
import { TileType, FlowDirection } from './enums';

@Injectable()
export class FlowDirectionService {

    public GetValidFlowDirections(tileDriection: TileType): Array<FlowDirection> {
        let directions = new Array<FlowDirection>();

        switch (tileDriection) {
            case TileType.NorthToEast:
                directions.push(FlowDirection.North);
                directions.push(FlowDirection.East);
                break;
            case TileType.NorthToSouth:
                directions.push(FlowDirection.North);
                directions.push(FlowDirection.South);
                break;
            case TileType.NorthToWest:
                directions.push(FlowDirection.North);
                directions.push(FlowDirection.WEST);
                break;
            case TileType.SouthToEast:
                directions.push(FlowDirection.South);
                directions.push(FlowDirection.East);
                break;
            case TileType.SouthToWest:
                directions.push(FlowDirection.South);
                directions.push(FlowDirection.WEST);
                break;
            case TileType.WestToEast:
                    directions.push(FlowDirection.WEST);
                    directions.push(FlowDirection.East);
        }
        return directions;
    }
}