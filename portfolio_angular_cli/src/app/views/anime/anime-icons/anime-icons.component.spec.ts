import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeIconsComponent } from './anime-icons.component';

describe('AnimeIconsComponent', () => {
  let component: AnimeIconsComponent;
  let fixture: ComponentFixture<AnimeIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
