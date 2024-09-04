interface Ave{

    bico: string;
    asas: number;
    crista?:boolean;
    grasnar: () => void;
}

const pato: Ave = {
    asas: 55,
    bico: "Amarelo",
    grasnar: function (){
        console.log("Quack!");
    },
};

const galinha: Ave = {
    asas: 30,
    bico: "Laranja",
    grasnar: function (){
        console.log("CóCó");
    },
    crista: true,
};