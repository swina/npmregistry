import app from '../../src/app';

describe('\'npmregistry\' service', () => {
  it('registered the service', () => {
    const service = app.service('npmregistry');
    expect(service).toBeTruthy();
  });
  it ('check service return object' , async () => {
    const service:any = await app.service ( 'npmregistry' ).find ( { query : { name: 'socket.io' , version: '4.1.3'}});
    expect(service).toBeDefined();
    console.log ( service.name , service.version )
  });
  it ('no name or version submitted' , async () => {
    const service = await app.service ( 'npmregistry' ).find ( { query : { name: 'socket.io' }})
    expect(service).toBe('No package name or version submitted')
    console.log ( service )
  })
});
