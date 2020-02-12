import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  chatOpen:boolean
  constructor() { }

  ngOnInit() {
    this.chatOpen = false;
    document.querySelector('#abrir-chat').addEventListener('click', (event) => {
      this.chatOpen = !this.chatOpen;
      if(this.chatOpen === true) {
        document.getElementById('ventana').style.display='flex'
        document.getElementById('ventana').classList.add('slideInUp')
      }
      else{

        document.getElementById('ventana').style.display = 'none';
      }
    })
  }

}
