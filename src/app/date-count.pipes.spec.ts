import { DateCount.Pipes } from './date-count.pipes';

describe('DateCount.Pipes', () => {
  it('should create an instance', () => {
     const pipe = new DateCountPipe();
    expect(new DateCount.Pipes()).toBeTruthy();
  });
});
