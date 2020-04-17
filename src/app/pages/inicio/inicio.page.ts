import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  components: IComponent[] = []

  constructor() { }

  ngOnInit() {
    this.components = [
      { 
        icon: 'american-football', 
        name: 'Action Sheet',
        redirectTo: '/action-sheet'
      },
      { 
        icon: 'flash-outline',
        name: 'Alert',
        redirectTo: '/alert' 
      },
      { 
        icon: 'beaker',
        name: 'Avatar',
        redirectTo: '/avatar' 
      },
      { 
        icon: 'radio-button-on',
        name: 'Botones y router',
        redirectTo: '/botones' 
      },
    ]
  }

}

interface IComponent {
  icon: string;
  name: string;
  redirectTo: string;
}
