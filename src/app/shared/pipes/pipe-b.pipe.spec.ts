import { PipeBPipe } from './pipe-b.pipe';

describe('PipeBPipe', () => {
  it('create an instance', () => {
    const pipe = new PipeBPipe();
    expect(pipe).toBeTruthy();
  });
});
