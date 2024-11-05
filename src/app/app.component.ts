import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //data bindings string interpolation. when data binding we can make dynamic html page by string interpolation using in html page
  //syntax string interpolation is {{}};
  //first declare a variable in ts file then in html page just inside string interpolation just pass the variable
  //in derectives like when use array list inside list use *ngfor= let variname of store name from typescript then inside list tag pass the varibale name inside the string interpolation
  //we can also use interpolation calling by method
  pro="new project";
  title = 'myproject number 1';
  getangular(){

    return this.title
  }
  base=["course 1", "course2", "course 3", "course 4","course 5"];
  saiful=["Rakib","Sakib","saiful"];
imgs ="https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg?semt=ais_hybrid" }