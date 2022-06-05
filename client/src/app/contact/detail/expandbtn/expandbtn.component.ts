import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import jss from 'jss';
import { styles } from './expandbtn.component.styles';

@Component({
  selector: 'app-expandbtn',
  templateUrl: './expandbtn.component.html',
})
export class ExpandbtnComponent implements OnInit {
  constructor() { }

  public classes: any;
  @Output() expandEvent = new EventEmitter();
  

  ngOnInit(): void {
    const btnSheet = jss.createStyleSheet(styles, {link: true}).attach();
    this.classes = btnSheet.classes;
  }
}
