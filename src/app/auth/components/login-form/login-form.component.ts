import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  loginForm: FormGroup<{ username: FormControl<null>; password: FormControl<null>; }>;

  hasUnitNumber = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) { this.createForm() }

  private createForm() {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  onSubmit(data) {
    alert('submit');
    console.log(data);

    this.authService.login(data.username, data.password).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/admin']);
    });

  }
}
