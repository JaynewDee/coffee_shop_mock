import { Component, OnInit } from '@angular/core';
import {styles} from './title.component.styles';
import jss from 'jss';
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
})
export class TitleComponent implements OnInit {
  public imgSources = {
    tea: '../../assets/imgs/tea.svg',
    coffee: '../../assets/imgs/coffee.svg'
  }
  public classes: any
  constructor() { }

  ngOnInit(): void {
    const titleSheet = jss.createStyleSheet(styles).attach()
    this.classes = titleSheet.classes
  }

}
