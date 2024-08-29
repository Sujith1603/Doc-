import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsericonComponent } from './usericon.component';

describe('UsericonComponent', () => {
  let component: UsericonComponent;
  let fixture: ComponentFixture<UsericonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsericonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsericonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
