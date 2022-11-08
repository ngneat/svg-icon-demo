import { Component } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
