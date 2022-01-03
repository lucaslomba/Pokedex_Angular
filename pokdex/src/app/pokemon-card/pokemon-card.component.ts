import { Component, Input } from '@angular/core';
import { Pokemon, getPokemonImage, getPokemonNumber } from '../../_model/Pokemon';

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

  public getPokemonImage = getPokemonImage;
  public getPokemonNumber = getPokemonNumber;
}