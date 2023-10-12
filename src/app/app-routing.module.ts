import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    loadChildren: () => import('./vistas/main/menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'lista-viajes',
    loadChildren: () => import('./vistas/main/viajero/lista-viajes/lista-viajes.module').then( m => m.ListaViajesPageModule)
  },
  {
    path: 'detalle-viajes',
    loadChildren: () => import('./vistas/main/viajero/detalle-viajes/detalle-viajes.module').then( m => m.DetalleViajesPageModule)
  },
  {
    path: 'crear-viaje',
    loadChildren: () => import('./vistas/main/conductor/crear-viaje/crear-viaje.module').then( m => m.CrearViajePageModule)
  },
  {
    path: 'selccionar-vehiculo',
    loadChildren: () => import('./vistas/main/conductor/selccionar-vehiculo/selccionar-vehiculo.module').then( m => m.SelccionarVehiculoPageModule)
  },
  {
    path: 'registrar-vehiculo',
    loadChildren: () => import('./vistas/main/conductor/registrar-vehiculo/registrar-vehiculo.module').then( m => m.RegistrarVehiculoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
