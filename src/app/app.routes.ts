import { Routes } from '@angular/router';

// Importa tus componentes:
import { InicioComponent } from './pages/inicio/inicio.component';
import { InstalacionComponent } from './pages/instalacion/instalacion.component';
import { EstructuraProyectoComponent } from './pages/estructura-proyecto/estructura-proyecto.component';
import { CreacionComponentesComponent } from './pages/creacion-componentes/creacion-componentes.component';
import { ServiciosDependenciasComponent } from './pages/servicios-dependencias/servicios-dependencias.component';
import { RutasNavegacionComponent } from './pages/rutas-navegacion/rutas-navegacion.component';
import { FormulariosComponent } from './pages/formularios/formularios.component';
import { PipesDirectivasComponent } from './pages/pipes-directivas/pipes-directivas.component';
import { DemoInteractivaComponent } from './pages/demo-interactiva/demo-interactiva.component';
import { ConclusionesComponent } from './pages/conclusiones/conclusiones.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'instalacion', component: InstalacionComponent },
  { path: 'estructura-proyecto', component: EstructuraProyectoComponent },
  { path: 'creacion-componentes', component: CreacionComponentesComponent },
  { path: 'servicios-dependencias', component: ServiciosDependenciasComponent },
  { path: 'rutas-navegacion', component: RutasNavegacionComponent },
  { path: 'formularios', component: FormulariosComponent },
  { path: 'pipes-directivas', component: PipesDirectivasComponent },
  { path: 'demo-interactiva', component: DemoInteractivaComponent },
  { path: 'conclusiones', component: ConclusionesComponent },
  { path: '**', redirectTo: '' }
];
