import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { RegistrationForm } from '../../models/registration-form.interface';
@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.scss']
})

export class RegistrationFormComponent implements OnInit {

    @Input() formDataInput: RegistrationForm = {};
    public myForm: FormGroup;

    constructor(private _fb: FormBuilder) {

    }

    ngOnInit() {
    }

}
