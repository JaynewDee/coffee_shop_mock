import { Injectable } from '@angular/core';
import { DETAILS } from '../../data/details';
@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  getDetails() {
    return DETAILS;
  }
  
}
