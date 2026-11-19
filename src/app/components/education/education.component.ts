import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educationItems = [
    {
      degree: 'Master of Science: Computer And Information Sciences',
      institution: 'Faculty Of Electrical Engineering - Sarajevo, Bosnia And Herzegovina',
      period: 'October 2015 - September 2017',
      description: 'Master\'s Thesis: Adaptivity and personalization in E-Learning systems'
    },
    {
      degree: 'Bachelor of Science: Computer And Information Sciences',
      institution: 'Faculty Of Electrical Engineering - Sarajevo, Bosnia And Herzegovina',
      period: 'October 2012 - September 2015',
      description: 'Bachelor\'s Thesis: Dictionary based compression algorithms'
    }
  ];
}