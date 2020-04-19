import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  styleConfigChange: EventEmitter<number> = new EventEmitter();
  constructor() { }

  getStyleData(){
    return this.styleConfigChange;
  }

  setStyleData(style){
    this.styleConfigChange.emit(style)
  }
}
