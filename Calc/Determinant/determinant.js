export class Determinant {
    constructor(selector) {
        this.$root = document.querySelector(selector);
        this.$table = this.$root.querySelector('table');
        this.$cells = Array.from(this.$table.querySelectorAll('tr'))
        .map($row => Array.from($row.querySelectorAll('input')));
        this.sBtn = this.$root.querySelector('.symbol button');
        this.nextStep = this.$root.querySelector('.nextstep p');
        
        this.sBtn.addEventListener('click', this.calculating.bind(this));
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                this.$cells[i][j].addEventListener('focus', ()=>this.$cells[i][j].value='');
            }
        }
    }
    
    calculating () {
        // a00·a11·a22 + a01·a12·a20 + a02·a10·a21 - a02·a11·a20 - a00·a12·a21 - a01·a10·a22
        this.result = this.$cells[0][0].value*this.$cells[1][1].value*this.$cells[2][2].value+
        this.$cells[0][1].value*this.$cells[1][2].value*this.$cells[2][0].value+
        this.$cells[0][2].value*this.$cells[1][0].value*this.$cells[2][1].value-
        this.$cells[0][2].value*this.$cells[1][1].value*this.$cells[2][0].value-
        this.$cells[0][0].value*this.$cells[1][2].value*this.$cells[2][1].value-
        this.$cells[0][1].value*this.$cells[1][0].value*this.$cells[2][2].value;
        this.toScreen();
    }

    toScreen () {
        this.nextStep.innerText = `${this.$cells[0][0].value}*${this.$cells[1][1].value}*${this.$cells[2][2].value} + ${this.$cells[0][1].value}*${this.$cells[1][2].value}*${this.$cells[2][0].value} + ${this.$cells[0][2].value}*${this.$cells[1][0].value}*${this.$cells[2][1].value} - ${this.$cells[0][2].value}*${this.$cells[1][1].value}*${this.$cells[2][0].value} - ${this.$cells[0][0].value}*${this.$cells[1][2].value}*${this.$cells[2][1].value} - ${this.$cells[0][1].value}*${this.$cells[1][0].value}*${this.$cells[2][2].value} = ${this.result}`;
    }

} 