import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';
  hidePassword: boolean = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required] // ✅ Role must match signup role
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please fill all fields correctly';
      return;
    }

    const { email, password, role } = this.loginForm.value;

    this.authService.login(email, password, role).subscribe({
  next: (user) => {
    if (user.role === 'Admin') {
      this.router.navigate(['admin/home']);
    } else if (user.role === 'SuperUser') {
      this.router.navigate(['super-user/superhome']);
    } else {
      this.router.navigate(['/user-home']);
    }
  },
  error: (err) => {
    this.errorMessage = 'Login failed: ' + err.message;
  }
});
  }
}
