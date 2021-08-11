import app from '../../src/app';

describe('\'package\' service', () => {
  it('registered the service', () => {
    const service = app.service('package');
    expect(service).toBeTruthy();
  });
});
