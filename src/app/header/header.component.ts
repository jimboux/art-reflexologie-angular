import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showSubMenu = false;
  menuburger = false



  reverseburgervalue(){
 this.menuburger = !this.menuburger
  }
  
  showMenu(){
    this.showSubMenu = !this.showSubMenu;
    console.log(this.showSubMenu)
  }
}
