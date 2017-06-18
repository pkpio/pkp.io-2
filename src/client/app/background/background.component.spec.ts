import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BackgroundModule } from './background.module';

export function main() {
    describe('Background component', () => {
        let backgroundDOMEl: HTMLElement;
        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [TestComponent],
                imports: [MaterialModule, FlexLayoutModule, BrowserAnimationsModule, 
                    BackgroundModule]
            }).compileComponents();
        }));
        
        beforeEach(() => {
            backgroundDOMEl = TestBed.createComponent(TestComponent)
                .debugElement.children[0].nativeElement;
        });

        it('should contain Tabs', () => {
            expect(
                backgroundDOMEl.querySelector('md-tab-group')
                //backgroundDOMEl.querySelectorAll('#md-tab-label-0-0')[0].textContent
            )
            .toBeDefined();
            //.toContain('WORK');
        });
    });
}

@Component({
  selector: 'test-cmp',
  template: '<pkp-background></pkp-background>'
})
class TestComponent {}
