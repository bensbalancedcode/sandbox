import { TileLocation } from "./tileLocation";
import { PipeService } from "./pipe.service";
import { Subscription } from "rxjs";
import { TileType, TileState, FlowDirection } from "./enums";
import { TileData } from "./tileData";
import { FlowDirectionService } from "./flowDirection.service";

export class TileSpot {
  public state: TileState;
  lockingSubscription: Subscription;
  lockedSubscription: Subscription;
  public validDirections: Array<FlowDirection>;
  public matchedValidDirections: Array<FlowDirection>;

  constructor(
    public id: number = 0,
    public location: TileLocation,
    public tileData: TileData,
    private pipeService: PipeService,
    private flowDirectionService: FlowDirectionService
  ) {
    this.state = TileState.Normal;

    this.lockingSubscription = this.pipeService.setLockingState$.subscribe(
      tileId => {
        if (this.id == tileId) {
          this.state = TileState.Locking; // set the state and the component will change its color
        }
      });

    this.lockedSubscription = this.pipeService.setLockedState$.subscribe(
      tileId => {
        if (this.id == tileId) {
          this.state = TileState.Locked;
        }
      });
  }


  public GetValidFlowDirections(): Array<FlowDirection> {
    return this.flowDirectionService.GetValidFlowDirections(this.tileData.type);
  }

  public bubledClickEvent(): TileState {
    // console.log('tile data click bubbled up to tile: ' 
    //   + this.id + 'starting state: ' + this.state);
    switch (this.state) {
      case TileState.Normal:
        this.state = TileState.Selected;
        break;
      case TileState.Locked:
      case TileState.Locking:
        break;
      case TileState.Selected:
        this.state = TileState.Normal;
    }

    // console.log('post click on tile: ' 
    //   + this.id + 'ending state: ' + this.state);
    return this.state;
  }

}


