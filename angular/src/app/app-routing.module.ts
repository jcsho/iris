import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ScriptComponent } from './script/script.component';
import { ConceptComponent } from './concept/concept.component';
import { StoryboardComponent } from './storyboard/storyboard.component';

const appRoutes : Routes = [
    { path: '', component: HomeComponent },
    { path: 'script', component: ScriptComponent },
    { path: 'concept', component: ConceptComponent },
    { path: 'storyboard', component: StoryboardComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
