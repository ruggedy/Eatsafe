import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Name } from '../../models/registration-form.interface';
@Component({
    selector: 'app-name-input',
    templateUrl: './name-input.component.html',
    styleUrls: ['./name-input.component.scss']
})
export class NameInputComponent {

    @Input() nameDataInput: Name = { name: '' };
    nameData: Name = { name : ''};
    @Output() nameDataOutput = new EventEmitter();

    constructor() { }

    outputData(value) {
        this.nameData.name = value;
        this.nameDataOutput.emit(this.nameData);
    }

}
