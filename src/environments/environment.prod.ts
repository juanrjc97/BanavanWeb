const BASE_UR = 'http://demo7289443.mockable.io';

const BASE_URL ='https://coco-backend-api.herokuapp.com/api';

export const environment = {
  production: true,
  
   get_rol: BASE_URL + '/rol',
   //personal
   get_personal: BASE_URL + '/personnel/get?isActive=0',
   post_personal: BASE_URL + '/personnel/hire',
   update_personal: BASE_URL + '/personnel/update',
   login: BASE_URL + 'login',
   getCookie: BASE_URL + 'sanctum/csrf-cookie',
   //Color
   get_cinta: BASE_URL + '/color/get',
   post_cinta: BASE_URL + '/color/create',
   put_cinta: BASE_URL + '/color/update',
   delete_cinta: BASE_URL + '/color/delete',
 
   get_update_semanas: BASE_UR + '/semana',
 
   //lotes
   get_lote: BASE_URL + '/lote/get',
   post_lote: BASE_URL + '/lote/create',
   put_lote: BASE_URL + '/lote/update',
   delete_lote: BASE_URL + '/lote/delete',
};
