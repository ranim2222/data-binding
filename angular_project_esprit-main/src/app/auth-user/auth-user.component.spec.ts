import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthUserComponent } from './auth-user.component';

describe('AuthUserComponent', () => {
  let component: AuthUserComponent;
  let fixture: ComponentFixture<AuthUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthUserComponent],
      imports: [ReactiveFormsModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty fields', () => {
    expect(component.authForm.get('email')?.value).toBe('');
    expect(component.authForm.get('password')?.value).toBe('');
  });

  it('should validate required fields', () => {
    const email = component.authForm.get('email');
    const password = component.authForm.get('password');

    email?.setValue('');
    password?.setValue('');

    expect(email?.valid).toBeFalsy();
    expect(password?.valid).toBeFalsy();
  });

  it('should validate email format', () => {
    const email = component.authForm.get('email');
    
    email?.setValue('invalid-email');
    expect(email?.hasError('email')).toBeTruthy();

    email?.setValue('valid@email.com');
    expect(email?.hasError('email')).toBeFalsy();
  });

  it('should validate password minimum length', () => {
    const password = component.authForm.get('password');
    
    password?.setValue('12345');
    expect(password?.hasError('minlength')).toBeTruthy();

    password?.setValue('123456');
    expect(password?.hasError('minlength')).toBeFalsy();
  });
});