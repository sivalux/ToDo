// import {SelectionModel} from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToDoService } from 'src/app/Service/to-do.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-view-to-do',
  templateUrl: './view-to-do.component.html',
  styleUrls: ['./view-to-do.component.css']
})
export class ViewToDoComponent implements OnInit {
  displayedColumns: string[] = [ 'title', 'description', 'priority', 'startDate', 'dueDate', 'edit','del'];
  todoArray: any[];
  editArray: any[];

  constructor(private _fb: FormBuilder, private todoservice: ToDoService,  private router: Router, private route: ActivatedRoute  ) { }

  ngOnInit() {
    this.todoservice.getToDos().subscribe(res => {
      console.log(res);
      this.todoArray = res.data;
    });
  }

  goEdit(data) {
    this.editArray = this.todoArray.filter(f => f.id == data);
    console.log("todo",this.editArray);
    this.router.navigate(['/addtodo'], {queryParams: {  isEdit: true}});

    this.todoservice.setEditToDoArray(this.editArray);
  }
  onDelete(id){
    this.todoservice.deleteToDo(id).subscribe(
      res => {
        window.location.reload();
        // this.toastr.success(this.form.get('stage_size').value+','+this.form.get('place_type').value+','+this.form.get('price').value+'!', 'Successfully Deleted!',
        // {timeOut: 4000});;
        // this.router.navigate(['/viewsound']);
      }
    );
}



}
