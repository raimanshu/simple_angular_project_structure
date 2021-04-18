import { DashboardModule } from './blueprint-3/views/dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './blueprint-3/shared/components/layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './blueprint-3/shared/components/layouts/blank-layout/blank-layout.component';
import { AdminLayoutSidebarLargeComponent } from './blueprint-3/shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component';
import { AuthGaurd } from './blueprint-3/shared/services/auth.gaurd';

// BLUEPRINT #2
// const routes: Routes = [
//   {
//     path: RoutePath.Empty,
//     component: LayoutComponent,
//     children: [
//       {
//         path: RoutePath.Empty,
//         loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule)
//       },
//       {
//         path: RoutePath.auth, canActivate: [GuestGuard],
//         loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
//       },
//       {
//         path: RoutePath.about,
//         loadChildren: () => import('./pages/aboutpage/aboutpage.module').then(m => m.AboutpageModule)
//       },
//       {
//         path: RoutePath.work,
//         loadChildren: () => import('./pages/how-it-work/how-it-work.module').then(m => m.HowItWorkModule)
//       },
//       {
//         path: RoutePath.subscription,
//         loadChildren: () => import('./pages/subscription/subscription.module').then(m => m.SubscriptionModule)
//       },
//       {
//         path: RoutePath.contact,
//         loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
//       },
//       {
//         path: RoutePath.RFQ,
//         loadChildren: () => import('./pages/rfqs/rfqs.module').then(m => m.RfqsModule)
//       },
//       {
//         path: RoutePath.dashboard, canActivate: [AuthGuard],
//         loadChildren: () => import('./pages/inner-dashboard/inner-dashboard.module').then(m => m.InnerDashboardModule)
//       },
//       {
//         path: RoutePath.form,
//         loadChildren: () => import('./pages/aircraft/aircraft.module').then(m => m.AircraftModule)
//       },
//       {
//         path: RoutePath.listed,
//         loadChildren: () => import('./pages/listed-seller/listed-seller.module').then(m => m.ListedSellerModule)
//       }
//     ]
//   },
 

// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

// BLUEPRINT #3
// const adminRoutes: Routes = [
//   {
//     path: 'dashboard',
//     loadChildren: () => import('./blueprint-3/views/dashboard/dashboard.module').then(m => m.DashboardModule)
//   },
//   {
//     path: 'uikits',
//     loadChildren: () => import('./blueprint-3/views/ui-kits/ui-kits.module').then(m => m.UiKitsModule)
//   },
//   {
//     path: 'forms',
//     loadChildren: () => import('./blueprint-3/views/forms/forms.module').then(m => m.AppFormsModule)
//   },
//   {
//     path: 'invoice',
//     loadChildren: () => import('./blueprint-3/views/invoice/invoice.module').then(m => m.InvoiceModule)
//   },
//   {
//     path: 'inbox',
//     loadChildren: () => import('./blueprint-3/views/inbox/inbox.module').then(m => m.InboxModule)
//   },
//   {
//     path: 'calendar',
//     loadChildren: () => import('./blueprint-3/views/calendar/calendar.module').then(m => m.CalendarAppModule)
//   },
//   {
//     path: 'chat',
//     loadChildren: () => import('./blueprint-3/views/chat/chat.module').then(m => m.ChatModule)
//   },
//   {
//     path: 'contacts',
//     loadChildren: () => import('./blueprint-3/views/contacts/contacts.module').then(m => m.ContactsModule)
//   },
//   {
//     path: 'tables',
//     loadChildren: () => import('./blueprint-3/views/data-tables/data-tables.module').then(m => m.DataTablesModule)
//   },
//   {
//     path: 'pages',
//     loadChildren: () => import('./blueprint-3/views/pages/pages.module').then(m => m.PagesModule)
//   },
//   {
//       path: 'icons',
//       loadChildren: () => import('./blueprint-3/views/icons/icons.module').then(m => m.IconsModule)
//   }
// ];

// const routes: Routes = [
// {
//   path: '',
//   redirectTo: 'dashboard/v1',
//   pathMatch: 'full'
// },
// {
//   path: '',
//   component: AuthLayoutComponent,
//   children: [
//     {
//       path: 'sessions',
//       loadChildren: () => import('./blueprint-3/views/sessions/sessions.module').then(m => m.SessionsModule)
//     }
//   ]
// },
// {
//   path: '',
//   component: BlankLayoutComponent,
//   children: [
//     {
//       path: 'others',
//       loadChildren: () => import('./blueprint-3/views/others/others.module').then(m => m.OthersModule)
//     }
//   ]
// },
// {
//   path: '',
//   component: AdminLayoutSidebarLargeComponent,
//   canActivate: [AuthGaurd],
//   children: adminRoutes
// },
// {
//   path: '**',
//   redirectTo: 'others/404'
// }
// ];

// @NgModule({
// imports: [RouterModule.forRoot(routes, { useHash: true })],
// exports: [RouterModule]
// })


const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./views/module-1/module-1.module').then(m => m.Module1Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
