import app from '../../src/app';

describe('\'npmregistry\' service', () => {
  it('registered the service', () => {
    const service = app.service('npmregistry');
    expect(service).toBeTruthy();
  });
});
