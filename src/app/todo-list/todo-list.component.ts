import { Component } from '@angular/core';
import { Todolist } from '../models/todolist';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  newTodolistTitle: string = "";
  newTodolistDate: Date = new Date();

  todolists: Todolist[] = []

  ngOnInit(): void {
    let savedTodolists = localStorage.getItem("todolists")

    this.todolists = savedTodolists ? JSON.parse(savedTodolists) : []
  }

  addTodolist(){
    if(this.newTodolistTitle.trim().length && this.newTodolistDate){
      let newTodolist: Todolist = {
        id: Date.now(),
        title: this.newTodolistTitle,
        date: this.newTodolistDate
      }

      this.todolists.push(newTodolist)

      this.newTodolistTitle = "";
      this.newTodolistDate = new Date();

      localStorage.setItem("todolists", JSON.stringify(this.todolists))
    }
  }

  deleteTodolist(index: number){
    this.todolists.splice(index, 1)
    localStorage.setItem("todolists", JSON.stringify(this.todolists))
  }
}
