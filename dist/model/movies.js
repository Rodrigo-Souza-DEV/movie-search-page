"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movies = void 0;
const data = [
    {
        type: 'Action',
        image: 'velozes_furiosos.jpg',
        name: '+ Velozes + Furiosos',
        duration: '1h 45min',
    },
    {
        type: 'Action',
        image: '13_distrito.jpg',
        name: '13º Distrito',
        duration: '1h 29min',
    },
    {
        type: 'Action',
        image: '2_coelhos.jpg',
        name: '2 Coelhos',
        duration: '1h 40min',
    },
    {
        type: 'Action',
        image: '12_segundos.jpg',
        name: '12 Segundos',
        duration: '1h 35min',
    },
    {
        type: 'Action',
        image: 'a_divisao.jpg',
        name: 'A divisão',
        duration: '2h 14min',
    },
    {
        type: 'Drama',
        image: '12_anos_de_escravidao.jpg',
        name: '12 anos de escravidão',
        duration: '2h 11min',
    },
    {
        type: 'Drama',
        image: '3_pedidos.jpg',
        name: '3 Pedidos',
        duration: '1h 27min',
    },
    {
        type: 'Drama',
        image: '45_do_segundo_tempo.jpg',
        name: '45 do Segundo Tempo',
        duration: '1h 50min',
    },
    {
        type: 'Drama',
        image: 'correndo.jpg',
        name: 'Correndo Por Um Sonho',
        duration: '1h 50min',
    },
    {
        type: 'Comedy',
        image: 'a_boa_esposa.jpg',
        name: 'A Boa Esposa',
        duration: '1h 50min',
    },
    {
        type: 'Comedy',
        image: 'a_candidata_honesta.jpg',
        name: 'A Candidata Honesta',
        duration: '1h 42min',
    },
    {
        type: 'Comedy',
        image: 'a_candidata_perfeita.jpg',
        name: 'A Candidata Perfeita',
        duration: '1h 45min',
    },
    {
        type: 'Comedy',
        image: 'aceito.jpg',
        name: 'Aceito',
        duration: '20min',
    },
    {
        type: 'Romance',
        image: 'alerta_de_spoiler.jpg',
        name: 'Alerta de Spoiler',
        duration: '1h 51min',
    },
    {
        type: 'Romance',
        image: 'o_mineiro.jpg',
        name: 'Algie, O Mineiro (1912)',
        duration: '13min',
    },
    {
        type: 'Horror',
        image: 'espelho.jpg',
        name: 'A Maldição do Espelho',
        duration: '1h 21min',
    }
];
exports.Movies = {
    getAll: () => {
        return data;
    },
    getFromtype: (type) => {
        return data.filter(item => item.type === type);
    },
    getFromName: (name) => {
        return data.filter(item => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
    },
    /*
    getFromName: (name: string): typeMovies[] => {
        return data.filter(item =>
            item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
        );
    }
    */
};
