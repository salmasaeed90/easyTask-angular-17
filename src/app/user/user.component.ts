import { Component, Signal, computed, Input, input, Output, EventEmitter } from '@angular/core';
import {User} from './user.model'
import { CardComponent } from '../shared/card/card.component';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //input with signal => readonly property we can`t change inside component
  // avatar= input.required<string>();//altrnative @Input()
  // name= input.required<string>();//another way
  /////////////////////////////////////////////////
  //old way
  // @Input({required:true}) userId!:string;
  // @Input({required:true}) avatar!:string;
  // @Input({required:true}) name!:string;

  @Input({required:true}) user!:User;
  //required=> must be avaliable value
  @Input({required:true}) selected!:boolean;
  @Output() select = new EventEmitter<string>();

  onSelectUser(){
    this.select.emit(this.user.id);
  }

  // imagePath = computed(()=>'../../assets/' + this.avatar())
  get imagePath(){
    return '../../assets/' + this.user.avatar;
  }
 

 
}
