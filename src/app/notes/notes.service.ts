import { Injectable } from '@angular/core';
import {Notes} from './notes.model';
import{ActionBox} from './common/action-box/action-box.model';

@Injectable()
export class NotesService {
  private notes: Notes;

  constructor() {
    if (!this.notes)
    {
      this.notes = new Notes();
    }
   }
  
  public get Notes(): Notes
  {
    return this.notes;
  }
  public addActionBox(value: ActionBox)
  {
    this.notes.addActionBox(value);
  }
  public get ActionBoxes(): ActionBox[]
  {
    return this.notes.ActionBoxs;
  }
}
