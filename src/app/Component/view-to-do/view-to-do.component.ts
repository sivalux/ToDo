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
  displayedColumns1: string[] = ['checked', 'title', 'description', 'priority', 'startDate', 'dueDate', 'edit','del'];
  displayedColumns2: string[] = ['done', 'title', 'description', 'priority', 'startDate', 'dueDate', 'edit','del'];
  todoArray: any[];
  todoArrayDone: any[];
  todoArrayUndone: any[];
  editArray: any[];
  

  constructor(private _fb: FormBuilder, private todoservice: ToDoService,  private router: Router, private route: ActivatedRoute  ) { }

  ngOnInit() {
    this.todoservice.getToDos().subscribe(res => {
      console.log(res);
      this.todoArray = res.data;
      this.todoArrayDone = this.todoArray.filter(f => f.check == 'Done');
      this.todoArrayUndone = this.todoArray.filter(f => f.check == 'Undone');
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

onCheck(data){
  const data1 = {
    id : data.id,
    title: data.title,
    description: data.description,
    priority: data.priority,
    startDate: data.startDate,
    dueDate: data.dueDate,
    check: 'Done'
  };
 
  this.todoservice.updateToDo(data1).subscribe(
    res => {
      // this.toastr.success('Sound Updated', 'Successfully Updated!',
      // {timeOut: 4000});;
      // this.router.navigate(['']);
      window.location.reload();
    }
  );
}


}
