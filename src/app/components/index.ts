import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Ng2PaginationModule } from 'ng2-pagination';

// Components 

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { NameInputComponent } from './name-input/name-input.component';
import { LocationInputComponent } from './location-input/location-input.component';
import { OpeningInputComponent } from './opening-input/opening-input.component';
import { OpeningInputListComponent } from './opening-input-list/opening-input-list.component';
import { ContactInputComponent } from './contact-input/contact-input.component';




export const COMPONENTS = [
    NameInputComponent,
    RegistrationFormComponent,
    LocationInputComponent,
    OpeningInputComponent,
    OpeningInputListComponent,
    ContactInputComponent
];


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        RouterModule,
        Ng2PaginationModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})

export class ComponentsModule { }
