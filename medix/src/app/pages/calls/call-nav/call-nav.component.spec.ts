/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CallNavComponent } from './call-nav.component';

describe('CallNavComponent', () => {
  let component: CallNavComponent;
  let fixture: ComponentFixture<CallNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
