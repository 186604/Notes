import { Component, OnInit } from '@angular/core';
import { ActionBox } from '../common/action-box/action-box.model';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-new-board',
  templateUrl: './new-board.component.html',
  styleUrls: ['./new-board.component.css']
})
export class NewBoardComponent implements OnInit {

  private _actionBoxModel: ActionBox[] = [{actionType: "action",actionComment:"First Comment"},{actionType: "Action",actionComment:"Second Comment"}];
  constructor(private notesService: NotesService) {
    //this.notesService.ActionBoxes.push()
   }

  ngOnInit() {
  }
  protected addNewActionBox(actionType: string): void{
    //this.actionBoxModel.push({actionType: "Action",actionComment:"First Comment"});
    this.notesService.addActionBox({actionType: actionType,actionComment:"First Comment"});
  }
  protected get actionBoxModel(): ActionBox[]
  {
    return this.notesService.ActionBoxes;
  }
  protected getActionBoxesForType(actionType: string): ActionBox[]
  {
    return this.notesService.ActionBoxes.filter(ac => {return ac.actionType == actionType});
  }

}
