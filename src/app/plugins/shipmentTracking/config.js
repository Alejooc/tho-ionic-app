
module.exports.config={
    servers:{
        servientrega:{
            state:true,
            server:"https://mobile.servientrega.com/",
            router:{
                shipmentTracking:"Services/ShipmentTracking/api/ControlRastreovalidaciones" // info de toda la guia con estados
            }
        },
        envia:{
            state:false,
            server:"https://portal.envia.co/",
            router:{
                shipmentTracking:"ServicioRestConsultaEstados/Service1Consulta.svc/ConsultaEstadoGuia/" // info de toda la guia con estados
            }
        }
    },
    version:1.0
}
