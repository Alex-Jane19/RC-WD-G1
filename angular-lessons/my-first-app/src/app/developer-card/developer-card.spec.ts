import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeveloperCard } from './developer-card';

describe('DeveloperCard', () => {
  let component: DeveloperCard;
  let fixture: ComponentFixture<DeveloperCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloperCard],
    }).compileComponents();

    fixture = TestBed.createComponent(DeveloperCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
