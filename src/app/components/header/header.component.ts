import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private router = inject(Router);

  goToHome() {
    this.router.navigate(['']);
  }
}
