import { Injectable } from '@angular/core';
import 'chrome';

@Injectable({ providedIn: 'root' })
export class ChromeService {
    getExtensionUrl(path: string) {
        console.log(chrome.extension.getURL(path));
        return chrome.extension.getURL(path);
    }
}
