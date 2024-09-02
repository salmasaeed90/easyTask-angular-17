import { TasksService } from './tasks.service';
import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './new-task/new-task.model';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
  @Input({required:true}) name!:string;
  idAddingTask:boolean= false;

  constructor(private _TasksService:TasksService){}

  get selectedUserTasks(){
    return this._TasksService.getUserTasks(this.userId);
  }


  onStartAddTask(){

    this.idAddingTask = true;
  
  }
  
  onCloseAddTask(){
    this.idAddingTask = false
  }
 
 
}
