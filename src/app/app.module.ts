import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { StudentListComponent } from "./components/student-list/student-list.component";

const routes: Routes = [
    {path: '', component: StudentListComponent},
   

]

@NgModule ({

    imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
    
],

declarations: [
    AppComponent,
    StudentListComponent,

],

providers: [

],

bootstrap: [
    AppComponent

]

})

export class AppModule {}