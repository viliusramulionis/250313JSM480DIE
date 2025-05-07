class Televizorius {
    garsas = 50;
    kanalas = 1;

    constructor(gamintojas) {
        this.gamintojas = gamintojas;
    }

    setGarsas(padidinti = false) {
        if(this.garsas === 0 || this.garsas === 100)
            return this;

        if(padidinti) {
            this.garsas++;
        } else {
            this.garsas--;
        }

        return this;
    }

    setKanalas(kanalas, padidinti = true) {
        if(kanalas) {
            if(kanalas > 50 || kanalas < 1) {
                this.kanalas = 1;
            } else {
                this.kanalas = kanalas;
            }
        } else {
            if(padidinti) {
                if(this.kanalas === 50 ) {
                    this.kanalas = 1;
                } else {
                    this.kanalas++;
                }
            } else {
                if(this.kanalas > 1) {
                    this.kanalas--;
                }
            }
        }
    }

    setFactorySettings() {
        this.garsas = 50;
        this.kanalas = 1;
    } 

    getCurrentStatus() {
        return `Televizorius "${this.gamintojas}" šiuo metu rodo ${this.kanalas} kanalą. Garso lygis ${this.garsas}.`;
    }
}

// Kiekvienas modulis gali turėti VIENĄ pagal nutylėjimą priskirtą eksportuojamą reikšmę
export default Televizorius;