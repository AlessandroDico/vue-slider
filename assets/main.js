//CREARE UN CAROSELLO DI IMMAGINI
//LE IMMAGINI DOVRANNO SCORRERE ALL CLICK SULLE FRECCIE SIA AVANTI CHE INDIETRO
//BONUS 1 : IMPOSTARE L'AUTOPLAY (IMMAGINI CAMBIANO DOPO TOT TEMPO)
//BONUS 2 : IMPOSTARE IL CLICK SUI "PALLINI" CHE  CAMBIANO L'IMAGINE CORRENTE SULL' IMMAGINE CORRISPONDENTE AL PALLINO CLICCATO


var app = new Vue ({
    el: '#root',
    data: {
        titolo: 'Paesaggi dal mondo',
        // array con le immagini
        allSrc: [
            'img/first.jpg',
            'img/second.jpg',
            'img/third.jpg',
            'img/fourth.jpg',
        ],
        // indice dell'array per partire con la prima immagine in pagina
        index: 0,
        timer: null,
    },

    mounted () {
        this.imgRotation();
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
        },

        imgRotation () {
            this.timer = setInterval(this.next, 3000);
        },

        next () {
            if (this.index < this.allSrc.length - 1) {
                this.index ++ ;
            } else {
                this.index = 0;
            }
        },
        stopRotation() {
            clearInterval(this.timer);
        }

    }




});
