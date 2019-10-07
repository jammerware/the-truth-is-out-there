import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ChromeService {
    getExtensionUrl(path: string) {
        console.log(chrome.extension.getURL(path));
        return chrome.extension.getURL(path);
    }

    openExtensionUrl(path: string) {
        const baseUrl = chrome.extension.getURL('index.html');

        console.log('sup', `${baseUrl}#/${path}`);
        chrome.tabs.create({ url: `${baseUrl}#/${path}` });
    }
}
