import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { MaterialModule } from '@angular/material';
import { ToolbarModule } from './toolbar.module';

export function main() {
   describe('Toolbar component', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [MaterialModule, ToolbarModule]
      });
    });

    it('should contain Praveen Kumar Pendyala',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let toolbarDOMEl = fixture.debugElement.children[0].nativeElement;
            expect(
                toolbarDOMEl.querySelectorAll('md-toolbar-row')[0].textContent
            ).toContain('Praveen Kumar Pendyala');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<pkp-toolbar></pkp-toolbar>'
})
class TestComponent {}
