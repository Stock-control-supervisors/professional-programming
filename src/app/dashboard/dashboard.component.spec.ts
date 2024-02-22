import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxListModule, IgxAvatarModule, IgcFormsModule, IgxChipsModule, IgxCheckboxModule } from 'igniteui-angular';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxListModule, IgxAvatarModule, IgcFormsModule, IgxChipsModule, IgxCheckboxModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
