import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { JwtService } from 'src/app/Service/jwt.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  constructor(private _fb: FormBuilder, private jwtservice: JwtService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.form = this._fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      // this.router.navigate(['/viewtodo']);
    console.log(this.form.value);
    this.jwtservice.onLogin(this.form.value)
    
    }
  }


  goRegister() {

    this.router.navigate(['/register']);

  }



}