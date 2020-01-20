import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { RouterModule } from "@angular/router";
import { CourseListComponent } from "./components/course-list/course-list.component";

@NgModule({
  declarations: [HeaderComponent, CourseListComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, CourseListComponent]
})
export class SharedModule {}
