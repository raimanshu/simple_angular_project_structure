import { TestBed } from '@angular/core/testing';

import { InterceptorBInterceptor } from './interceptor-b.interceptor';

describe('InterceptorBInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptorBInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterceptorBInterceptor = TestBed.inject(InterceptorBInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
