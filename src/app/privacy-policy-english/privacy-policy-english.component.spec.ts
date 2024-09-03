import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyEnglishComponent } from './privacy-policy-english.component';

describe('PrivacyPolicyEnglishComponent', () => {
  let component: PrivacyPolicyEnglishComponent;
  let fixture: ComponentFixture<PrivacyPolicyEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyPolicyEnglishComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivacyPolicyEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
