import { Component, OnInit } from '@angular/core';
import { styles } from './section.component.styles';
import jss from 'jss';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
})
export class SectionComponent implements OnInit {
  public classes: any;
  constructor() { }

  ngOnInit(): void {
    const sectionSheet = jss.createStyleSheet(styles).attach();
    this.classes = sectionSheet.classes;
  }

}
