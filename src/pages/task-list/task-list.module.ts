import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskListPage } from './task-list';

@NgModule({
  declarations: [
    TaskListPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskListPage),
    TranslateModule.forChild()
  ],
})
export class TaskListPageModule {}
