import { Component, OnInit } from '@angular/core';
import { ChromeService } from 'src/app/services/chrome.service';

@Component({
    selector: 'app-page-action',
    templateUrl: './page-action.component.html',
    styleUrls: ['./page-action.component.scss']
})
export class PageActionComponent implements OnInit {
    constructor(private chromeService: ChromeService) { }

    ngOnInit() {
    }

    viewAnalysis() {
        this.chromeService.getExtensionUrl("content/123");
    }
}
