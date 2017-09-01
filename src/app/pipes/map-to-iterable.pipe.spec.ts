import { MapToIterablePipe } from './map-to-iterable.pipe';

describe('MapToIterablePipe', () => {
  it('create an instance', () => {
    const pipe = new MapToIterablePipe();
    expect(pipe).toBeTruthy();
  });
  it('should return array', ()=> {
    const pipe = new MapToIterablePipe();
    const result = pipe.transform({id:1});
    console.log(result);
    expect(result).toEqual(['id']); // to be sprawdza czy to jest tym obiektem, a eqals sprawdza czy to
  })
});
