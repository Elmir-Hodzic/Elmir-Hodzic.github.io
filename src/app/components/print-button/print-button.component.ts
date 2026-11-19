import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-print-button',
  templateUrl: './print-button.component.html',
  styleUrls: ['./print-button.component.scss']
})
export class PrintButtonComponent {
  @Output() printCV = new EventEmitter<void>();

  onPrint() {
    this.printCV.emit();
  }
}