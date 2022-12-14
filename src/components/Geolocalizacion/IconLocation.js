import L from 'leaflet'
//mostrar el icono elegido, entrando a la direccion donde se encuentra

export const IconLocation = L.icon({
    iconUrl: require('./logo/log.png'),
    iconRetinaUrl: require('./logo/log.png'),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [50, 50],
    className: "leaflet-venue-icon",
});

export const IconLocation1 = L.icon({
    iconUrl: require('./logo/log4.png'),
    iconRetinaUrl: require('./logo/log4.png'),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [54, 49],
    className: "leaflet-venue-icon",
});