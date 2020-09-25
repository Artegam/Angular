import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'formation';


  constructor(private translateService: TranslateService) { }

  setLang(lang: string): void {
    this.translateService.use(lang);
  }

}