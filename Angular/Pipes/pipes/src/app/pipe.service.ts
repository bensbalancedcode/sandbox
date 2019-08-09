import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
 
@Injectable()
export class PipeService {
 
  // Observable string sources
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  private tileClickSource = new Subject<string>();
  // 
  private setLockedStateSource = new Subject<number>();
  private setLockingStateSource = new Subject<number>();

  // Observable string streams
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  tileClicked$ = this.tileClickSource.asObservable();
  setLockedState$ = this.setLockedStateSource.asObservable();
  setLockingState$ = this.setLockingStateSource.asObservable();
 
  // Service message commands
  // Called to initiate message propagation
  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }

  // Called to initiate message propagation
  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
  }

  tileClickedCommand(tileId: string){
    this.tileClickSource.next(tileId);
  }

  setLockedStateCommand(tileId: number){
    this.setLockedStateSource.next(tileId);
  }

  setLockingStateCommand(tileId: number){
    this.setLockingStateSource.next(tileId);
  }
}