import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Location } from '../../models/registration-form.interface';

@Component({
    selector: 'app-location-input',
    templateUrl: './location-input.component.html',
    styleUrls: ['./location-input.component.scss']
})
export class LocationInputComponent {
    @Input() locationDataInput: Location = {
        address1: '',
        address2: '',
        postcode: '',
        city: ''
    };
    @Output() locationDataOutput = new EventEmitter();
    locationData: Location = {};
    constructor() { }

    address1(value) {
        this.locationData.address1 = value;
        this.locationDataOutput.emit(this.locationData);
        console.log(this.locationData);
    }

    address2(value) {
        this.locationData.address2 = value;
        this.locationDataOutput.emit(this.locationData);
        console.log(this.locationData);
    }

    postcode(value) {
        this.locationData.postcode = value;
        this.locationDataOutput.emit(this.locationData);
        console.log(this.locationData);
    }

    city(value) {
        this.locationData.city = value;
        this.locationDataOutput.emit(this.locationData);
        console.log(this.locationData);
    }

}
