import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Output() downloadPdf = new EventEmitter<void>();

  contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'ehodzic1993@gmail.com',
      link: 'mailto:ehodzic1993@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      label: 'Phone',
      value: '+49 176 10817447',
      link: 'tel:+4917610817447'
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Munich, Germany',
      link: 'https://maps.google.com/?q=München,81735'
    },
    {
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/elmirhodzic',
      link: 'https://linkedin.com/in/elmirhodzic'
    }
  ];

  onDownloadPdf(): void {
    this.downloadPdf.emit();
  }
}
