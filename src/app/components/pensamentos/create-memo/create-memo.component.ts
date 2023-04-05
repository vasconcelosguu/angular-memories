import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-memo',
  templateUrl: './create-memo.component.html',
  styleUrls: ['./create-memo.component.css']
})
export class CreateMemoComponent implements OnInit {

  ideia = {
    id: '1',
    content: 'dawdawdwadaw',
    autorid: 'Dev',
    model: 'modelo1',
  }

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    alert('penis')
  }

  cancel() {

  }

}
