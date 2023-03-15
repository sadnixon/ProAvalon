import { Engine } from '../engine';

describe('Game Engine', () => {
  it('Engine a is 1!', () => {
    const engine = new Engine();

    expect(engine.a).toEqual(2);
  });
});
