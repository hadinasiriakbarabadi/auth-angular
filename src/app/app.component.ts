import { Component } from '@angular/core';
import { AsgardeoAuthService } from "@asgardeo/auth-angular";

@Component({
  selector: 'app-root',
  template: `
    <div>
      <ng-container *ngIf="(auth.state$ | async)?.isAuthenticated; else unauthenticatedView">
        <ul>
          <li>{{ (auth.state$ | async)?.username }}</li>
        </ul>
        <button button (click)="auth.signOut()">Logout</button>
      </ng-container>
      <ng-template #unauthenticatedView>
        <button (click)="auth.signIn()">Login</button>
      </ng-template>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public auth: AsgardeoAuthService) { }
}