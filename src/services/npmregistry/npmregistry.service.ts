// Initializes the `npmregistry` service on path `/npmregistry`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Npmregistry } from './npmregistry.class';
import hooks from './npmregistry.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'npmregistry': Npmregistry & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/npmregistry', new Npmregistry(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('npmregistry');

  service.hooks(hooks);
}
