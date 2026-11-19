import { Component } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent {
  languages = [
    {
      name: 'Bosnian, Serbian, Croatian',
      label: 'Native'
    },
    {
      name: 'English',
      label: 'C1 · Professional proficiency'
    },
    {
      name: 'German',
      label: 'B1 · Intermediate'
    }
  ];
}
