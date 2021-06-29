// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const BASE_URL = 'https://coco-backend-api.herokuapp.com/api';
//const BASE_URL = 'http://demo7289443.mockable.io';

export const environment = {
  production: false,
  //base_url: BASE_URL,
 // get_rol: BASE_URL + '/rol',

  //personal
  get_personal: BASE_URL + '/personnel/get?isActive=0',
  post_personal: BASE_URL + '/personnel/hire',
  update_personal: BASE_URL + '/personnel/update',

  //Color
  get_cinta: BASE_URL + '/color/get',
  post_cinta: BASE_URL + '/color/create',
  put_cinta: BASE_URL + '/color/update',
  delete_cinta: BASE_URL + '/color/delete',

  get_update_semanas: BASE_URL + '/semana',

  //lotes
  get_lote: BASE_URL + '/lote/get',
  post_lote: BASE_URL + '/lote/create',
  put_lote: BASE_URL + '/lote/update',
  delete_lote: BASE_URL + '/lote/delete',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
