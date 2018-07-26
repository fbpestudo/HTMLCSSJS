class Baixo {
	constructor(name, cordas, cor){
		this.name = name;
		this.cor = cor;
		this.nCordas = cordas;
	};

	soar(){
		console.log("dom dom dom dom!");
	}
}

var b = new Baixo("fender");
console.log(b);
