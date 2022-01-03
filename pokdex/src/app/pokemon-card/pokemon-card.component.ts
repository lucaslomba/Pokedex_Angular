import { Component, Input } from '@angular/core';
import { Pokemon } from '../../_model/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  @Input() pokemonAttr: Pokemon = {
    image: '',
    number: 0,
    name: '',
    types: [
    ]
  }

  public leadingZero (str: string | Number, size: Number = 3): string{
    let s = String(str)

    while (s.length < (size || 2)) {
      s = '0' + s
    }
    return s
  }
}