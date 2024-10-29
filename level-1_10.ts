import Coffee, { Type } from "./classes/Coffee";
import Tea, { Flavor } from "./classes/Tea";

const cappuccino = new Coffee('Lecker Cappuccino', 3.50, Type.Cappuccino);
const latte = new Coffee('Andre Latte Lecker', 2.50, Type.Latte);
const espresso = new Coffee('Espressissimo', 2.00, Type.Espresso);
const americano = new Coffee('Americanochen', 1.50, Type.Americano);

console.log(cappuccino, latte, espresso, americano);

const greenTea = new Tea('Nature Tea', 1.50, Flavor.Green);
const blackTea = new Tea('Dark Tea', 1.50, Flavor.Black);
const chaiTea = new Tea('Chai Tea', 1.50, Flavor.Chai);
const peppermintTea = new Tea('Fresh Tea', 1.50, Flavor.Peppermint);

console.log(greenTea, blackTea, chaiTea, peppermintTea);
