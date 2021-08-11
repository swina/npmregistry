import { Application } from '../declarations';
import npmregistry from './npmregistry/npmregistry.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application) {
  app.configure(npmregistry);
}
