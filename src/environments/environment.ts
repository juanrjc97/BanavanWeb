// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//const BASE_URL = 'https://coco-backend-api.herokuapp.com/';
const BASE_URL = 'http://demo7289443.mockable.io';

export const environment = {
  production: false,
  base_url: BASE_URL,
  get_rol: BASE_URL + '/rol',
  get_post_personal: BASE_URL + '/personal',
  update_personal: BASE_URL + '/personal/id',
  get_post_cinta: BASE_URL + '/cinta',
  put_delete_cinta: BASE_URL + '/cinta/id',
  get_update_semanas: BASE_URL + '/semana',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
