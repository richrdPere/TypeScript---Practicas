
// DESTRUCTURING

// interface AudioPlayer {
//     audioVolume: number;
//     songDuraction: number;
//     song: string;
//     details: Details;
// }

// interface Details {
//     author: string;
//     year: number;
// }

// const audioPlayer: AudioPlayer = {
//     audioVolume: 90,
//     songDuraction: 36,
//     song: "Mess",
//     details: {
//         author: 'Ed Sheeran',
//         year: 2015
//     }
// }

// const { song, songDuraction:duration, audioVolume, details:{author, year}  } = audioPlayer;
// //const { author, year} = details;

// console.log({song, duration, audioVolume, author, year})



// DESTRUCTURING - ARRAY

const [ , , trunks = 'Not found']: string[] = ['Goku', 'Vegeta', 'Trunks'] // borra Trunks
//const trunks = dbz[3] || 'No hay personaje';

console.log('Personaje 3: ', trunks);



export {
    
}