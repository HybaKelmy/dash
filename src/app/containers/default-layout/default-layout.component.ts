import {Component} from '@angular/core';
import { navItems } from '../../_nav';

import {ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
  
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  @ViewChild('myModal') public myModal: ModalDirective;
  @ViewChild('largeModal') public largeModal: ModalDirective;
  @ViewChild('smallModal') public smallModal: ModalDirective;
  @ViewChild('primaryModal') public primaryModal: ModalDirective;
  @ViewChild('successModal') public successModal: ModalDirective;
  @ViewChild('warningModal') public warningModal: ModalDirective;
  @ViewChild('dangerModal') public dangerModal: ModalDirective;
  @ViewChild('infoModal') public infoModal: ModalDirective;
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}






