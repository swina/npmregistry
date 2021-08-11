// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';
const semver = require ( 'semver' )
import got from 'got'
import { NPMPackage } from './types';

async function api_req (api_request:string ) {
  const dep = await got ( api_request ) //+ '/' + semver.minVersion(version).version )
  //console.log ( JSON.parse(dep.body).dependencies )
  return JSON.parse(dep.body).dependencies  
}


export default (options = {}): Hook => {
  return async (context: HookContext) => {
    if ( !context ) return 
    const  params  = context.params.query;
    
    //get api url configuration (./config/default.json)
    const api = context.app.get('npm_api');
    
    if ( !params ) return context;
    if ( !params.name && !params.version ) return context;
    
    //create request url query string 
    let npmRequest = `${api}${params.name}/${semver.minVersion(params.version)}` 
    
    try {
      console.log ( 'Call npm registry ...' , npmRequest ); //log to system if required
      const npr: NPMPackage = await got ( npmRequest ).json();
      context.result = npr

      //first iterative dependencies
      for ( const [name,version] of Object.entries(context.result.dependencies) ) {
        const dep = await api_req ( `${api}${name}/${semver.minVersion(version).version}` )
        context.result.dependencies[name] = {
          version: version ,
          isValid : semver.validRange(version),
          dependencies : dep ? dep : null
        }
      }
      return context ;
    } catch ( err ){
      context.error = err 
      return context
    }
  };
}
