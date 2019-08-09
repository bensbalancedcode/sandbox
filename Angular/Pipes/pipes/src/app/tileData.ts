import { TileLocation } from "./tileLocation";
import { PipeService } from "./pipe.service";
import { Subscription } from "rxjs";

export class TileData {

  constructor(
    public id: number = 0,
    public location: TileLocation,
    public image: string = "",
    private pipeService: PipeService
  ) {
    this.state = this.Normal;

    this.lockingSubscription = this.pipeService.setLockingState$.subscribe(
      tileId => {
        if (this.id == tileId) {
          this.state = this.Locking; // set the state and the component will change its color
        }
      });

    this.lockedSubscription = this.pipeService.setLockedState$.subscribe(
      tileId => {
        if (this.id == tileId) {
          this.state = this.Locked;
        }
      });
  }

  public state: TileState;
  lockingSubscription: Subscription;
  lockedSubscription: Subscription;
  public validDirections: Array<Direction>;
  public matchedValidDirections: Array<Direction>;


  public readonly Locked: number = 0;
  public readonly Locking: number = 1
  public readonly Selected: number = 2;
  public readonly Normal: number = 3;

  public bubledClickEvent(): number {
    // console.log('tile data click bubbled up to tile: ' 
    //   + this.id + 'starting state: ' + this.state);
    switch (this.state) {
      case this.Normal:
        this.state = this.Selected;
        break;
      case this.Locked:
      case this.Locking:
        break;
      case this.Selected:
        this.state = this.Normal;
    }

    // console.log('post click on tile: ' 
    //   + this.id + 'ending state: ' + this.state);
    return this.state;
  }

}


