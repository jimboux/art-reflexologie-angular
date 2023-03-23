import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showSubMenu = false;
  
  showMenu(){
    this.showSubMenu = !this.showSubMenu;
    console.log(this.showSubMenu)
  }
}
