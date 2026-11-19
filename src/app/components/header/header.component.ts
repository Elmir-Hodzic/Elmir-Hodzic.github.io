import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  name = 'Elmir Hodzic';
  title = 'Lead Software Engineer';
  profileImage = 'assets/profile.jpg';

  printContacts = [
    { value: 'ehodzic1993@gmail.com', link: 'mailto:ehodzic1993@gmail.com' },
    { value: '+49 176 10817447', link: 'tel:+4917610817447' },
    { value: 'München, Germany', link: 'https://maps.google.com/?q=München,81735' },
    { value: 'linkedin.com/in/elmirhodzic', link: 'https://linkedin.com/in/elmirhodzic' }
  ];
}
