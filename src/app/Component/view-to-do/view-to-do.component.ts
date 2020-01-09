import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToDoService } from 'src/app/Service/to-do.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';





@Component({
  selector: 'app-view-to-do',
  templateUrl: './view-to-do.component.html',
  styleUrls: ['./view-to-do.component.css']
})
export class ViewToDoComponent implements OnInit {
  displayedColumns1: string[] = ['checked', 'title', 'description', 'priority', 'startDate', 'dueDate', 'edit', 'del'];
  displayedColumns2: string[] = ['done', 'title', 'description', 'priority', 'startDate', 'dueDate', 'edit', 'del'];
  todoArray: any[];
  todoArrayDone: any[];
  todoArrayUndone: any[];
  editArray: any[];


  constructor(private _fb: FormBuilder, private todoservice: ToDoService, private router: Router, private route: ActivatedRoute, public dialog: MatDialog) { }

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
    console.log("todo", this.editArray);
    this.router.navigate(['/addtodo'], { queryParams: { isEdit: true } });

    this.todoservice.setEditToDoArray(this.editArray);
  }
  goCreate() {

    this.router.navigate(['/addtodo']);

    // this.todoservice.setEditToDoArray(this.editArray);
  }
  //   onDelete(id){

  // }

  // onCheck(data) {

  // }
  openDialog(id): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '350px',
      data: "Do you confirm the deletion of this data?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        // DO SOMETHING
        this.todoservice.deleteToDo(id).subscribe(
          res => {
            window.location.reload();
            this.router.navigate(['/viewtodo']);
          }
        );
      }
      else{
        
      }
    });


    
       
  
}
onDone(data): void {
  const dialogRef1 = this.dialog.open(DialogBoxComponent, {
    width: '350px',
    data: "Are you sure you completed?"
  });
  dialogRef1.afterClosed().subscribe(result => {
    if (result) {
      console.log('Yes clicked');
      // DO SOMETHING
      const data1 = {
        id: data.id,
        title: data.title,
        description: data.description,
        priority: data.priority,
        startDate: data.startDate,
        dueDate: data.dueDate,
        check: 'Done'
      };

      this.todoservice.updateToDo(data1).subscribe(
        res => {
          window.location.reload();
        }
        );
      }
  });




}
}





