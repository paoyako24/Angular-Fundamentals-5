import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  register() {
    const usernameInput = (document.getElementById('username') as HTMLInputElement).value;
    const emailInput = (document.getElementById('email') as HTMLInputElement).value;
    const passwordInput = (document.getElementById('password') as HTMLInputElement).value;

    if (!usernameInput || !emailInput || !passwordInput) {
      alert('Por favor llena todos los campos.');
      return;
    }

    console.log('Registro:', {
      username: usernameInput,
      email: emailInput,
      password: passwordInput
    });


  }
}
