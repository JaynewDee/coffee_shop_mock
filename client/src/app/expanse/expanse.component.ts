import { Component, OnInit } from '@angular/core';
import { styles } from './expanse.component.styles';
import jss from 'jss';

@Component({
  selector: 'app-expanse',
  templateUrl: './expanse.component.html',
})
export class ExpanseComponent implements OnInit {
  public classes: any;
  constructor() { }

  ngOnInit(): void {
    const expanseSheet = jss.createStyleSheet(styles).attach()
    this.classes = expanseSheet.classes;
  }

}
