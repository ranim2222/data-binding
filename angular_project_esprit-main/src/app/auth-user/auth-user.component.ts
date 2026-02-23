import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.css']
})
export class AuthUserComponent implements OnInit {
  authForm!: FormGroup;
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  showPassword = false;
  showConfirmPassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.authForm = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.pattern('^[0-9+\\s-]{10,}$')]],
      password: ['', [
        Validators.required, 
        Validators.minLength(6),
        Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$')
      ]],
      confirmPassword: ['', [Validators.required]],
      acceptTerms: [false, [Validators.requiredTrue]],
      newsletter: [false]
    }, { validators: this.passwordMatchValidator });
  }

  // Validateur personnalisé pour vérifier que les mots de passe correspondent
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    
    if (password?.value !== confirmPassword?.value) {
      confirmPassword?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    
    return null;
  }

  // Getters
  get nom() { return this.authForm.get('nom'); }
  get prenom() { return this.authForm.get('prenom'); }
  get email() { return this.authForm.get('email'); }
  get telephone() { return this.authForm.get('telephone'); }
  get password() { return this.authForm.get('password'); }
  get confirmPassword() { return this.authForm.get('confirmPassword'); }
  get acceptTerms() { return this.authForm.get('acceptTerms'); }
  get newsletter() { return this.authForm.get('newsletter'); }

  // Calcul de la force du mot de passe
  getPasswordStrength(): number {
    const password = this.password?.value || '';
    let strength = 0;
    
    if (password.length >= 6) strength += 25;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    
    return Math.min(strength, 100);
  }

  getPasswordStrengthText(): string {
    const strength = this.getPasswordStrength();
    if (strength < 50) return 'Faible';
    if (strength < 75) return 'Moyen';
    if (strength < 100) return 'Bon';
    return 'Excellent';
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    console.log('Formulaire soumis', this.authForm.value);
    
    if (this.authForm.invalid) {
      this.markFormGroupTouched(this.authForm);
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const userData = this.authForm.value;
    console.log('Inscription avec:', userData);
    
    // Simulation d'appel API
    setTimeout(() => {
      // Succès
      this.successMessage = 'Compte créé avec succès ! Redirection...';
      
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/home']);
      }, 1500);
    }, 2000);
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // Navigation
  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }

  // Connexions sociales
  loginWithGoogle(): void {
    console.log('Inscription avec Google');
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/home']);
    }, 1500);
  }

  loginWithFacebook(): void {
    console.log('Inscription avec Facebook');
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/home']);
    }, 1500);
  }

  loginWithGithub(): void {
    console.log('Inscription avec GitHub');
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/home']);
    }, 1500);
  }
}