import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabstateService {

  public states: { [s: string]: any } = {};

    setState(tab: string, enabled: boolean) {
        this.states[tab] = enabled;
    }
  constructor() { }
}
