/* eslint-disable camelcase */
export interface solicitud {
    id: number,
    tipoSolicitud: number,
    lote_id: number,
    personal_requerido: string,
    mensaje : string,
    is_accepted: boolean,
    is_answered: boolean,
}
