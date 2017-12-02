import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorPipeComponent } from './author-pipe.component';

describe('AuthorPipeComponent', () => {
  let component: AuthorPipeComponent;
  let fixture: ComponentFixture<AuthorPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
