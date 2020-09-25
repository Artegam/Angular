import { Component, OnInit } from '@angular/core';
import {Animal} from './../../shared/animal';
import { AnimalService } from './../../services/animal.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss'],
})
export class AnimalsComponent implements OnInit {

  animals: Animal[];

  ngOnInit(): void {
    this.fetchAnimals();
  }

  onDelete(animal: Animal): void {
    this.myAnimalService.delete(animal.id).subscribe(() => {
      this.myAnimalService.findAll().subscribe(() => this.fetchAnimals());
    });
  }

  private fetchAnimals() :void {
     this.myAnimalService.findAll().subscribe((animals) => (this.animals = animals));
  }

  constructor(private myAnimalService: AnimalService) { }

}
