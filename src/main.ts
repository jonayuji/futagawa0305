import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AngularFireModule } from "@angular/fire/compat"; //[Wip]angular/fireのインポート
import { AngularFireAuthModule } from "@angular/fire/compat/auth"; //[Wip]fire/authentication認証のインポート

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
