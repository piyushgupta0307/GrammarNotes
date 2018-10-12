import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarNoteComponent } from './grammar-note.component';

describe('GrammarNoteComponent', () => {
  let component: GrammarNoteComponent;
  let fixture: ComponentFixture<GrammarNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrammarNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammarNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
