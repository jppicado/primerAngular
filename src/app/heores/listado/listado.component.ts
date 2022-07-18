import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes: string[] = ['Spider-Man', 'Ironman', 'Hulk', 'Thor', 'Capitán América', 'Black Widow'];

  heroeBorrado : string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
