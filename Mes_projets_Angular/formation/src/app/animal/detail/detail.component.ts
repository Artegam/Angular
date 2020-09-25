import { Component, OnInit, OnDestroy } from '@angular/core';
import { Animal } from 'src/app/shared/animal';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from './../../services/animal.service'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit, OnDestroy {
  animal: Animal;
  private routeSubscription: Subscription;

  constructor(
    private animalService: AnimalService,
    private activatedRoute: ActivatedRoute,
    private routeur: Router
  ) { }

  ngOnInit(): void {
    this.routeSubscription = this.activatedRoute.params.subscribe((params) => {
      const id = +params.id;
      this.animalService.get(id).subscribe((animal) => (this.animal = animal));
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  onDelete(animal: Animal): void {
    this.animalService
      .delete(animal.id)
      .subscribe(() => this.routeur.navigate(['/']));
  }

  onUpdate(animal: Animal): void {
    this.animalService
      .update(animal)
      .subscribe(() => this.routeur.navigate(['/']));
  }

}
