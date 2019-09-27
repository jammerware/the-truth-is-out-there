import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageActionComponent } from './page-action/page-action.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
    { path: 'content', component: ContentComponent },
    { path: 'pageAction', component: PageActionComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
