import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ChromeService {

    constructor() { }

    getExtensionUrl(path: string) {
        console.log(chrome.extension.getURL(path));
        return chrome.extension.getURL(path);
    }
}
