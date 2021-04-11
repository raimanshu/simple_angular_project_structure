import { PipeAPipe } from './pipe-a.pipe';

describe('PipeAPipe', () => {
  it('create an instance', () => {
    const pipe = new PipeAPipe();
    expect(pipe).toBeTruthy();
  });
});
