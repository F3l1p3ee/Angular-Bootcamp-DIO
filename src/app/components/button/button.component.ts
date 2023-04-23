import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  buttonText: string[] = ["Acessar", "Felipe", "Testando"]
  @Input() label: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
