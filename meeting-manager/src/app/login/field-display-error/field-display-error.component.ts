import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-field-display-error',
  templateUrl: './field-display-error.component.html',
  styleUrls: ['./field-display-error.component.css']
})
export class FieldDisplayErrorComponent implements OnInit {

  @Input() errorMsg: string;
  @Input() displayError: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
