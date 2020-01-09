import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { JwtService } from 'src/app/Service/jwt.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  constructor(private _fb: FormBuilder, private jwtservice: JwtService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.form = this._fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
    console.log(this.form.value);
    this.jwtservice.register(this.form.value).subscribe(
      res => {
        // this.toastr.success(this.form.get('stage_size').value+','+this.form.get('place_type').value+','+this.form.get('price').value+'!', 'Success!',
        // {timeOut: 2000});;
           this.router.navigate(['']);
      });
    }
  }
  Back() {

    this.router.navigate(['']);
  }
  


}
