import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './components/client/client.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ViewerComponent } from './viewer/viewer.component';
import {ClientFeedbackService} from './services/client-feedback.service';
import { ClientActionsComponent } from './components/client-actions/client-actions.component';



@NgModule({
    declarations: [
        ClientComponent,
        FeedbackComponent,
        ViewerComponent,
        ClientActionsComponent
    ],
    exports: [
        ViewerComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [ClientFeedbackService]
})
export class ViewerModule { }
