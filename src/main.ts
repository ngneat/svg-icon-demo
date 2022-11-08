import { bootstrapApplication } from '@angular/platform-browser';
import { copyIcon } from '@app/svg/copy';
import { provideSvgIcons } from '@ngneat/svg-icon';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [provideSvgIcons([copyIcon])],
});
