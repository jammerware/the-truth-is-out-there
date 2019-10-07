import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageActionComponent } from './components/page-action/page-action.component';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
    { path: 'content', component: ContentComponent },
    { path: 'content/:id', component: ContentComponent },
    { path: 'pageAction', component: PageActionComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
