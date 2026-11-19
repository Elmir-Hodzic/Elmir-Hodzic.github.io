import { Component, OnInit } from '@angular/core';
import { CvExportService } from './services/cv-export.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Elmir Hodzic - CV';
  currentYear = new Date().getFullYear();
  isDarkMode = false;

  constructor(private cvExport: CvExportService) {}

  ngOnInit(): void {
    if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
      this.isDarkMode = true;
      document.documentElement.classList.add('dark');
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
      document.documentElement.classList.toggle('dark', this.isDarkMode);
    }
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark', this.isDarkMode);
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  printCV(): void {
    this.runPrintExport();
  }

  downloadPdf(): void {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    this.runPrintExport();
  }

  private runPrintExport(): void {
    const wasDark = this.isDarkMode;

    document.documentElement.classList.remove('dark');
    this.cvExport.startExport();

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const cleanup = () => {
          this.cvExport.endExport();
          document.documentElement.classList.toggle('dark', wasDark);
        };

        window.addEventListener('afterprint', cleanup, { once: true });
        window.print();
      });
    });
  }
}
