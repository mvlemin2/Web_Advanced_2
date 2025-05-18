// function laadAfbeelding(url, callback) {
//     const img = new Image();
//     img.onload = function() {
//         console.log('Afbeelding is geladen!');
//         callback(null, img);
//     };
//     img.onerror = function(error) {
//         console.log('Er ging iets mis bij het laden van de afbeelding');
//         callback(error, null);
//     };
//     img.src = url;
// }

// function toonAfbeelding(error, img) {
//     if (error) {
//         console.error('Kon afbeelding niet laden:', error);
//         return;
//     }
    
//     document.body.appendChild(img);
//     console.log(`Afbeelding getoond: ${img.width}x${img.height}px`);
// }

// // Zo gebruik je het
// laadAfbeelding('https://picsum.photos/200/300', toonAfbeelding);

// function laadAfbeelding(url) {
//     return new Promise((resolve, reject) => {
//         const img = new Image();
//         img.onload = () => {
//             console.log('Afbeelding is geladen!');
//             resolve(img);
//         };
//         img.onerror = (error) => {
//             console.log('Er ging iets mis bij het laden van de afbeelding');
//             reject(error);
//         };
//         img.src = url;
//     });
// }

// // Zo gebruik je het
// laadAfbeelding('afbeelding1.jpg')
//     .then(img1 => {
//         document.body.appendChild(img1);
//         return laadAfbeelding('afbeelding2.jpg');
//     })
//     .then(img2 => {
//         document.body.appendChild(img2);
//         return laadAfbeelding('afbeelding3.jpg');
//     })
//     .then(img3 => {
//         document.body.appendChild(img3);
//         console.log('Alle afbeeldingen zijn geladen!');
//     })
//     .catch(error => {
//         console.error('Er ging iets mis:', error);
//     });


async function laadAlleAfbeeldingen() {
    try {
        const img1 = await laadAfbeelding('afbeelding1.jpg');
        document.body.appendChild(img1);

        const img2 = await laadAfbeelding('afbeelding2.jpg');
        document.body.appendChild(img2);

        const img3 = await laadAfbeelding('afbeelding3.jpg');
        document.body.appendChild(img3);

        console.log('Alle afbeeldingen zijn geladen!');
    } catch (error) {
        console.error('Er ging iets mis:', error);
    }
}

// Functie aanroepen
laadAlleAfbeeldingen();