import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { Error } from 'src/app/core/interfaces/error';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;

  form = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
        ),
      ],
    ],
    password: ['', Validators.required],
  });

  constructor(
    private fb: UntypedFormBuilder,
    private authService: AuthService,
    private alertService: AlertService
  ) {}

  submit(): void {
    const body = {
      data: this.form.value,
    };

    this.authService.login(body).subscribe({
      next: (response) => {
        this.alertService.notify('success', 'Logged in successfully!').subscribe(() => {
          console.log(response);
        });
      },
      error: (error: Error) => {
        if (error.expected) {
          this.alertService.notify('warning', error.message).subscribe();
        } else {
          this.alertService.notify('error', error.message).subscribe();
        }
      },
    });
  }
}
