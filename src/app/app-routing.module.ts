import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FriendsComponent } from './friends/friends.component';
import { LoginComponent } from './login/login.component';
import { MemoriesComponent } from './memories/memories.component';
import { AuthGuard } from './_guards/auth.guard';


const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'friends', component: FriendsComponent, canActivate: [AuthGuard]  },
  { path: 'memories', component: MemoriesComponent, canActivate: [AuthGuard]  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
