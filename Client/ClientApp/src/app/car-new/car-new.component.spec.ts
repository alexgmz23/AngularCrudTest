/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { CarNewComponent } from './car-new.component';

let component: CarNewComponent;
let fixture: ComponentFixture<CarNewComponent>;

describe('car-new component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CarNewComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(CarNewComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});