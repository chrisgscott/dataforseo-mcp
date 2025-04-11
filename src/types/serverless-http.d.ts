declare module 'serverless-http' {
  import { Express } from 'express';
  
  function serverless(app: Express, options?: any): (event: any, context: any) => Promise<any>;
  
  export default serverless;
}
