import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  loginForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
  });

  hasUnitNumber = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  onSubmit(data) {
    alert('submit');
    console.log(data);

    this.authService.login(data.username, data.password).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/admin']);
    });

  }
}
