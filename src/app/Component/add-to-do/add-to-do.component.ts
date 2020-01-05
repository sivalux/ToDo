import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ToDoService } from 'src/app/Service/to-do.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {
  public form: FormGroup;
  phnArray: any[];
  editToDoArray: FormArray;
  flag = this.route.snapshot.queryParams['isEdit'];
  constructor(private _fb: FormBuilder, private todoservice: ToDoService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    if (this.route.snapshot.queryParams['isEdit']) {
      this.todoservice.editToDoArray$.subscribe(data => {
        this.form = this._fb.group({
          id:[data[0].id,[Validators.required, Validators.min(1)]],
         title: [data[0].title, [Validators.required]],
         description: [data[0].description, [Validators.required]],
         priority: [data[0].priority, [Validators.required]],
         startDate: [data[0]. startDate, [Validators.required]],
         dueDate: [data[0]. dueDate, [Validators.required]]
        });
      });
    }
    else{

    this.form = this._fb.group({
      title: ['', [Validators.required]],
         description: ['', [Validators.required]],
         priority: ['', [Validators.required]],
         startDate: ['', [Validators.required]],
         dueDate: ['', [Validators.required]]
    });
  }
  }

  onSubmit() {
    if (this.form.valid) {
    console.log(this.form.value);
    this.todoservice.addToDos(this.form.value).subscribe(
      res => {
        // this.toastr.success(this.form.get('stage_size').value+','+this.form.get('place_type').value+','+this.form.get('price').value+'!', 'Success!',
        // {timeOut: 2000});;
          // this.router.navigate(['/viewsound']);
      });
    }
  }

  onUpdate() {
    if (this.form.valid) {
      console.log(this.form.get('id').value);
      this.todoservice.updateToDo(this.form.value).subscribe(
        res => {
          // this.toastr.success('Sound Updated', 'Successfully Updated!',
          // {timeOut: 4000});;
          
        }
      );
      this.router.navigate(['']);
    }
  }

  
}
