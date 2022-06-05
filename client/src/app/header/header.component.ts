import { Component, OnInit } from '@angular/core';
import { styles } from './header.component.styles';
import jss from 'jss';
interface Sheet {
  readonly classes: Object
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  
  public classes: any;

  ngOnInit(): void {
    const headerSheet = jss.createStyleSheet(styles).attach()
    this.classes = headerSheet.classes
  }
}
