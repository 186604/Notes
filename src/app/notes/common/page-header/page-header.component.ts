import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../notes.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  constructor(private notesService: NotesService) { }

  ngOnInit() {
  }
  protected saveRetro(): void
  {
    console.log(this.notesService.ActionBoxes);
  }
}
