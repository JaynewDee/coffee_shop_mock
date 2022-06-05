import { Component, OnInit } from '@angular/core';
import { styles } from './detail.component.styles';
import jss from 'jss';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {
  public data: any;
  public classes: any;

  constructor(private detailsService: DetailsService) { }

  ngOnInit(): void {
    const detailSheet = jss.createStyleSheet(styles).attach();
    this.classes = detailSheet.classes;
    let details = this.detailsService.getDetails();
    this.data = details;
  }
  onExpand(i:number) {
    this.data[i].show ? this.data[i].show = false : this.data[i].show = true
  }
}
