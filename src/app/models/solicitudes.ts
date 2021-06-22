export interface solicitud {
    id: number,
    tipoSolicitud: number,
    lote: number,
    trabajadores: number,
    mensaje : string,
    is_accepted: boolean,
}