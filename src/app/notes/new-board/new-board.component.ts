import { Component, OnInit } from '@angular/core';
import { ActionBox } from '../common/action-box/action-box.model';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-new-board',
  templateUrl: './new-board.component.html',
  styleUrls: ['./new-board.component.css']
})
export class NewBoardComponent implements OnInit {

  private _actionBoxModel: ActionBox[] = [{actionType: "Action",actionComment:"First Comment"},{actionType: "Action",actionComment:"Second Comment"}];
  constructor(private notesService: NotesService) {
    //this.notesService.ActionBoxes.push()
   }

  ngOnInit() {
  }
  protected addNewActionBox(): void{
    //this.actionBoxModel.push({actionType: "Action",actionComment:"First Comment"});
    this.notesService.addActionBox({actionType: "Action",actionComment:"First Comment"});
  }
  protected get actionBoxModel(): ActionBox[]
  {
    return this.notesService.ActionBoxes;
  }

}
