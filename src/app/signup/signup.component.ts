import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  errorMessage: string = '';
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      customerName: ['', [Validators.required, this.capitalizedNameValidator]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required]   // ✅ Added role
    });
  }

  // ✅ Custom Validator for capitalized name
  capitalizedNameValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value && !/^[A-Z]/.test(value)) {
      return { capitalized: true };
    }
    return null;
  }

  get f() {
    return this.signupForm.controls;
  }

 onSubmit() {
  if (this.signupForm.invalid) {
    this.errorMessage = 'Please fill in all required fields correctly';
    return;
  }

  const { role, customerName, email, password, confirmPassword } = this.signupForm.value;

  if (password !== confirmPassword) {
    this.errorMessage = 'Passwords do not match!';
    return;
  }

  const userData = { role, customerName, email, password };

  this.authService.signup(userData).subscribe({
    next: () => {
      alert('Signup successful');
      this.router.navigate(['/login']); // ✅ After signup go to login
    },
    error: () => {
      this.errorMessage = 'Signup failed: User may already exist with this email or role';
    }
  });
}
}