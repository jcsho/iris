import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  ngOnInit() {
    this.myStyle = {
      'position': 'absolute',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 40,
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'star'
        },
        line_linked: {
          enable: false
        },
        move: {
          speed: 1,
          outmode: "out"
        },
        size: {
          value: 5
        },
        opacity: {
          anim: {
            enable: true,
            speed: 1
          }
        }
      },
      interactivity: {
        events: {
          onhover: {
            enable: false
          },
          onclick: {
            enable: false
          }
        }
      }
    };
  }
}
