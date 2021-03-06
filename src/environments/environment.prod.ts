const BASE_UR = 'http://demo7289443.mockable.io';

const BASE_URL ='https://coco-backend-api.herokuapp.com/api';

export const environment = {
  production: true,

  get_rol: BASE_URL + '/rol',
  // personal
  get_personal: BASE_URL + '/personnel/get?isActive=0',
  post_personal: BASE_URL + '/personnel/hire',
  update_personal: BASE_URL + '/personnel/update',
  login: BASE_URL + '/authentication/login',
  getCookie: BASE_URL + 'sanctum/csrf-cookie',
  // Color
  get_cinta: BASE_URL + '/color/get',
  post_cinta: BASE_URL + '/color/create',
  put_cinta: BASE_URL + '/color/update',
  delete_cinta: BASE_URL + '/color/delete',

  get_semanas: BASE_URL + '/semana/get',
  post_semanas: BASE_URL + '/semana/pivot',

  // lotes
  get_lote: BASE_URL + '/lote/get',
  post_lote: BASE_URL + '/lote/create',
  put_lote: BASE_URL + '/lote/update',
  delete_lote: BASE_URL + '/lote/delete',

  // motivos
  get_motivo: BASE_URL + '/perdidaMotivo/get',
  put_motivo: BASE_URL + '/perdidaMotivo/update',
  post_motivo: BASE_URL + '/perdidaMotivo/create',
  delete_motivo: BASE_URL + '/perdidaMotivo/delete',

  // solicitud
  get_solicitud: BASE_URL + '/solicitud/get',
  update_solicitud: BASE_URL + '/solicitud/respond',
  get_tipoSolicitud: BASE_URL + '/tipoSolicitud/get',
  //Backup
  post_backup: BASE_URL + '/backup/backup',

  // Inventario de enfunde
  get_inventario_enfunde: BASE_URL + '/reporte/enfunde',
  get_inventario_lote: BASE_URL + '/reporte/acumuladoXlote',
  get_inventerio_semana: BASE_URL + '/reporte/acumuladoXsemana',

  // Reporte Enfundado x semana
  get_reporte_enfundado_semana: BASE_URL + '/reporte/enfundeXsemana',
  // Reporte Racimo x semana
  get_reporte_racimo_semana: BASE_URL + '/reporte/cosechaXsemana',
};
