import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsHappeningComponent } from './what-is-happening.component';

describe('WhatIsHappeningComponent', () => {
  let component: WhatIsHappeningComponent;
  let fixture: ComponentFixture<WhatIsHappeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsHappeningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsHappeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
