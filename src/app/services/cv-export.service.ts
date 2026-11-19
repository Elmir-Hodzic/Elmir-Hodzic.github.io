import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvExportService {
  private exportingSubject = new BehaviorSubject<boolean>(false);
  readonly exporting$ = this.exportingSubject.asObservable();

  get isExporting(): boolean {
    return this.exportingSubject.value;
  }

  startExport(): void {
    this.exportingSubject.next(true);
  }

  endExport(): void {
    this.exportingSubject.next(false);
  }
}
