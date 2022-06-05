import { Component, OnInit } from '@angular/core';
import { styles } from './contact.component.styles';
import jss from 'jss';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {

  public classes: any;

  constructor() { }

  ngOnInit(): void {
    const contactSheet = jss.createStyleSheet(styles).attach();
    this.classes = contactSheet.classes;
  }


}
