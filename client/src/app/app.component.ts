import { Component, OnInit } from '@angular/core';
import jss from 'jss';

import {styles} from './app.component.styles';

// interface styleType {
//   readonly classes: Object,
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {

  public title: string = "the Leaf & Bean"
  public classes: any

  ngOnInit(): void {
    const styleSheet = jss.createStyleSheet(styles).attach()
      this.classes = styleSheet.classes
  }

}
