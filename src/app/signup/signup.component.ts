import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
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
      role: ['', Validators.required],
      customerName: ['', [Validators.required, this.capitalizedNameValidator]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
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
    if (this.signupForm.valid) {
      const { role, customerName, email, password, confirmPassword } = this.signupForm.value;

      if (password !== confirmPassword) {
        this.errorMessage = 'Passwords do not match!';
        return;
      }

      // Check if email already exists
      const success: boolean = this.authService.signup({ role, customerName, email, password });

      if (success === true) {
        this.router.navigate(['/login']);
      } else {
        this.errorMessage = 'User already exists with this email or role!';
      }
    }
  }
}
