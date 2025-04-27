import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  login() {
    const emailInput = (document.getElementById('login-email') as HTMLInputElement).value;
    const passwordInput = (document.getElementById('login-password') as HTMLInputElement).value;

    if (!emailInput || !passwordInput) {
      alert('Por favor completa todos los campos.');
      return;
    }

    // Simulación de validación (puedes cambiarlo luego para que consulte un servicio)
    if (emailInput === 'test@example.com' && passwordInput === '123456') {
      alert('¡Inicio de sesión exitoso!');
      console.log('Usuario autenticado:', emailInput);
    } else {
      alert('Correo o contraseña incorrectos.');
    }
  }
}
