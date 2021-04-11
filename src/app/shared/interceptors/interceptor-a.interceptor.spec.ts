import { TestBed } from '@angular/core/testing';

import { InterceptorAInterceptor } from './interceptor-a.interceptor';

describe('InterceptorAInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptorAInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterceptorAInterceptor = TestBed.inject(InterceptorAInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
