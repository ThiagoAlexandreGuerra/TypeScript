
type TuplaNomeValor = [string, number];
const tupla1: TuplaNomeValor = ["Fulano", 1234];
const tupla2: TuplaNomeValor = ["Fulano", 1234];
const tupla3: TuplaNomeValor = [32123, "Beltrano"];


const tuplas: TuplaNomeValor[] = [];
tuplas.push(tupla1);
tuplas.push(["Patricia", {x:45, y:23}]);
console.log(tupla1[0, tupla1[1]]);
console.log(tupla1[1][1]);