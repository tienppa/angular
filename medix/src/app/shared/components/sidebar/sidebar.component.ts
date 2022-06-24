import { Component, OnInit } from '@angular/core';
import { menu } from './menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  menu = menu;

  constructor() {
    // const searchBtn = document.querySelector('.btnSearch');
    // searchBtn?.addEventListener('click', function (e) {
    //   if (window.innerWidth < 576) {
    //     e.preventDefault();
    //   } else {
    //     alert('click');
    //   }
    // });
  }

  ngOnInit() {}
}
