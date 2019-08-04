import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
 
@Injectable()
export class PipeService {
 
  // Observable string sources
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();
  private tileClickSource = new Subject<string>();
  private countdownReachedSource = new Subject<string>();

  // Observable string streams
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();
  tileClicked$ = this.tileClickSource.asObservable();
  countdownReached$ = this.countdownReachedSource.asObservable();
 
  // Service message commands
  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }
  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
  }

  tileClickedCommand(tile: string){
    this.tileClickSource.next(tile);
  }
  countdownReachedCommand(tile: string){
    this.countdownReachedSource.next(tile);
  }
}