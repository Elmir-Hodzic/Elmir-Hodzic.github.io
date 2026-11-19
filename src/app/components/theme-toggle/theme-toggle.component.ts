import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent {
  @Input() isDarkMode: boolean = false;
  @Output() toggleTheme = new EventEmitter<void>();

  onToggle() {
    this.toggleTheme.emit();
  }
}