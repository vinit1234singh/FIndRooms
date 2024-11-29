import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowbookComponent } from './nowbook.component';

describe('NowbookComponent', () => {
  let component: NowbookComponent;
  let fixture: ComponentFixture<NowbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NowbookComponent]
    });
    fixture = TestBed.createComponent(NowbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
