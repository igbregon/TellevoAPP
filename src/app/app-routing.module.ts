import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard'

const volverInicioSesion = () => redirectUnauthorizedTo(['/inicio-sesion']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio-sesion',
    pathMatch: 'full'
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./vistas/login/inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./vistas/login/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./vistas/login/recuperar-contrasena/recuperar-contrasena.module').then( m => m.RecuperarContrasenaPageModule)
  },
  {
    path: 'menu-principal/:correo',
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: volverInicioSesion },
    loadChildren: () => import('./vistas/main/menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'lista-viajes',
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: volverInicioSesion },
    loadChildren: () => import('./vistas/main/viajero/lista-viajes/lista-viajes.module').then( m => m.ListaViajesPageModule)
  },
  {
    path: 'detalle-viajes/:patente',
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: volverInicioSesion },
    loadChildren: () => import('./vistas/main/viajero/detalle-viajes/detalle-viajes.module').then( m => m.DetalleViajesPageModule)
  },
  {
    path: 'crear-viaje',
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: volverInicioSesion },
    loadChildren: () => import('./vistas/main/conductor/crear-viaje/crear-viaje.module').then( m => m.CrearViajePageModule)
  },
  {
    path: 'selccionar-vehiculo',
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: volverInicioSesion },
    loadChildren: () => import('./vistas/main/conductor/selccionar-vehiculo/selccionar-vehiculo.module').then( m => m.SelccionarVehiculoPageModule)
  },
  {
    path: 'registrar-vehiculo',
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: volverInicioSesion },
    loadChildren: () => import('./vistas/main/conductor/registrar-vehiculo/registrar-vehiculo.module').then( m => m.RegistrarVehiculoPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./modals/info/info.module').then( m => m.InfoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
