import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUtilityPage } from './admin-utility.page';

describe('AdminUtilityPage', () => {
  let component: AdminUtilityPage;
  let fixture: ComponentFixture<AdminUtilityPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminUtilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
