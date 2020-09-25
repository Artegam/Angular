import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Animal } from 'src/app/shared/animal';
import { AnimalService } from 'src/app/services/animal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  animalForm: FormGroup;
  private routeSubscription: Subscription;

  constructor(
    private animalService: AnimalService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.routeSubscription = this.activatedRoute.params.subscribe((params) => {
      const id = +params.id;
      if(id) {
        this.animalService.get(id).subscribe((animal) => {
          this.initForm(animal);
        });
      }else {
        this.initForm();
      }      
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  onSubmit(): void {
    //this.alreadySave = true;
    if (this.animalForm.valid) {
      const animal = this.animalForm.value;
      console.log(animal);
      if (animal.id) {
        this.animalService.update(animal).subscribe(() => {
          this.router.navigate(['/', 'animals', animal.id]);
          console.log('modif ok');
        });
      } else {
        this.animalService.save(animal).subscribe((animal: Animal) => {
          console.log('sauvegarde ok');
          this.router.navigate(['/', 'animals', animal.id]);
        });
      }
    }
  }

  private initForm(
    animal: Animal = {
      id: null,
      name: "noname",
      genre: "unknow",
      birthday: 0,
      img: "",
      veterinaire: "unknown",
      commentaire: "no comment..."
    }
  ): void {
    this.animalForm = new FormGroup({
      id: new FormControl(animal.id),
      name: new FormControl(animal.name, [Validators.required, Validators.minLength(4)]),
      genre: new FormControl(animal.genre, [Validators.required]),
      birthday: new FormControl(animal.birthday, [Validators.required]),
      img: new FormControl(animal.img, [Validators.required]),
      veterinaire: new FormControl(animal.veterinaire, [Validators.required]),
      commentaire: new FormControl(animal.commentaire, [Validators.required])
    });
  }

}
