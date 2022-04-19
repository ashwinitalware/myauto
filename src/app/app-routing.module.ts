import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then(m => m.SigninPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then(m => m.PasswordPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'epass',
    loadChildren: () => import('./epass/epass.module').then(m => m.EpassPageModule)
  },
  {
    path: 'bookauto',
    loadChildren: () => import('./bookauto/bookauto.module').then(m => m.BookautoPageModule)
  },
  {
    path: 'request',
    loadChildren: () => import('./request/request.module').then(m => m.RequestPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'option',
    loadChildren: () => import('./option/option.module').then(m => m.OptionPageModule)
  },
  {
    path: 'promocode',
    loadChildren: () => import('./promocode/promocode.module').then(m => m.PromocodePageModule)
  },
  {
    path: 'confirm',
    loadChildren: () => import('./confirm/confirm.module').then(m => m.ConfirmPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then(m => m.ForgotPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./verify/verify.module').then(m => m.VerifyPageModule)
  },
  {
    path: 'scan',
    loadChildren: () => import('./scan/scan.module').then(m => m.ScanPageModule)
  },
  {
    path: 'pickup',
    loadChildren: () => import('./pickup/pickup.module').then(m => m.PickupPageModule)
  },
  {
    path: 'destination',
    loadChildren: () => import('./destination/destination.module').then(m => m.DestinationPageModule)
  },
  {
    path: 'subscription',
    loadChildren: () => import('./subscription/subscription.module').then(m => m.SubscriptionPageModule)
  },
  {
    path: 'ridesummery',
    loadChildren: () => import('./ridesummery/ridesummery.module').then(m => m.RidesummeryPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then(m => m.HistoryPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then(m => m.TermsPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./privacy/privacy.module').then(m => m.PrivacyPageModule)
  },
  {
    path: 'nominees',
    loadChildren: () => import('./nominees/nominees.module').then(m => m.NomineesPageModule)
  },
  {
    path: 'editpage',
    loadChildren: () => import('./editpage/editpage.module').then(m => m.EditpagePageModule)
  },
  {
    path: 'customerfeedback',
    loadChildren: () => import('./customerfeedback/customerfeedback.module').then(m => m.CustomerfeedbackPageModule)
  },
  {
    path: 'sub',
    loadChildren: () => import('./sub/sub.module').then( m => m.SubPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
