import { Component, OnInit,Input } from '@angular/core';
import {ActionBox} from './action-box.model';

@Component({
  selector: 'app-action-box',
  templateUrl: './action-box.component.html',
  styleUrls: ['./action-box.component.css']
})
export class ActionBoxComponent implements OnInit {
  @Input() actionBoxModel: ActionBox;

  public showEdit: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  protected makeEditable():void{
    this.showEdit=!this.showEdit;
  }

}
