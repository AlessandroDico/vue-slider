//CREARE UN CAROSELLO DI IMMAGINI
//LE IMMAGINI DOVRANNO SCORRERE ALL CLICK SULLE FRECCIE SIA AVANTI CHE INDIETRO
//BONUS 1 : IMPOSTARE L'AUTOPLAY (IMMAGINI CAMBIANO DOPO TOT TEMPO)
//BONUS 2 : IMPOSTARE IL CLICK SUI "PALLINI" CHE  CAMBIANO L'IMAGINE CORRENTE SULL' IMMAGINE CORRISPONDENTE AL PALLINO CLICCATO


var app = new Vue ({
    el: '#root',
    data: {
        titolo: 'Paesaggi dal mondo',
        allSrc: [
            'img/first.jpg',
            'img/second.jpg',
            'img/third.jpg',
            'img/fourth.jpg',
        ],
        index: 0,

    },
    methods: {
        switchImgForward () {
            if (this.index < this.allSrc.length - 1) {
                this.index ++ ;
            } else {
                this.index = 0;
            }
        },

        switchImgBackwards () {
            if (this.index > 0) {
                this.index -- ;
            } else {
                this.index = this.allSrc.length - 1;
            }
        }
    }




});
