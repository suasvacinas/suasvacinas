import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SuasVacinasAppComponent } from './app.component';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../test-config/mocks-ionic';

describe('SuasVacinasAppComponent Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SuasVacinasAppComponent],
      imports: [
        IonicModule.forRoot(SuasVacinasAppComponent)
      ],
      providers: [
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: Platform, useClass: PlatformMock }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuasVacinasAppComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof SuasVacinasAppComponent).toBe(true);
  });

  it('should have two pages', () => {
    expect(component.pages.length).toBe(3);
  });

});
