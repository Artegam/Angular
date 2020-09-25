import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalService } from './../services/animal.service';
import { AnimalComponent } from './animal/animal.component';
import { AnimalsComponent } from './animals/animals.component';
import { UppercaseDirective } from '../shared/uppercase.directive';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import { AnimalRoutingModule } from './animal-routing.module';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [AnimalComponent, AnimalsComponent, UppercaseDirective, TruncatePipe, DetailComponent, FormComponent],
  imports: [CommonModule, HttpClientModule, AnimalRoutingModule, FormsModule, ReactiveFormsModule, MatListModule, MatIconModule],
  exports: [AnimalComponent, AnimalsComponent],
  providers: [AnimalService]
})
export class AnimalModule { }
