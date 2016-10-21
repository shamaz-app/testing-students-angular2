/**
 * Created by Анастасия on 06.09.2016.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';


const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
