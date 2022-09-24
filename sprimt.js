const users = [
{
    name:'arturo',
    password:'pass1',
    document:1,
    tipe_of_user:1,
},
{
    nombre:'maria',
    password:'pass2',
    document:2,
    tipe_of_user:2,
},
{
    nombre:'angelica',
    password:'pass3',
    document:3,
    tipe_of_user:2,
},
{
    nombre:'angela',
    password:'pass4',
    document:4,
    tipe_of_user:2,
},
];
let money = [
{
    bill:'cinco mil',
    count:Number(''),
    valor:5000,
},
{
    bill:'diez mil',
    count:Number(''),
    valor:10000,
},
{
    bill:'veinte mil',
    count:Number(''),
    valor:20000,
},
{
    bill:'cincuenta mil',
    count:Number(''),
    valor:50000,
},
{
    bill:'cien mil',
    count:Number(''),
    valor:100000,
}
];
let cajero = (start) => {
while(start){
    let docIng =Number(prompt('cual es el documento'));
    let claveIng =prompt('preguntar contraseña');
    let userFind = users.find(element=>
        element.document === docIng
    );
    if(userFind){
        if(claveIng===userFind.password){
            if(userFind.tipe_of_user===1){
                money[0].count += Number(prompt('ingresa los billetes de 5mil'));
                money[1].count += Number(prompt('ingresa los billetes de 10mil'));
                money[2].count += Number(prompt('ingresa los billetes de 20mil'));
                money[3].count += Number(prompt('ingresa los billetes de 50mil'));
                money[4].count += Number(prompt('ingresa los billetes de 100mil'));
                total0 = (money[0].count)*(money[0].valor);
                total1 = (money[1].count)*(money[1].valor);
                total2 = (money[2].count)*(money[2].valor);
                total3 = (money[3].count)*(money[3].valor);
                total4 = (money[4].count)*(money[4].valor);
                totalF = total0 + total1 + total2 + total3 + total4;
                console.log(`hay ${total0} pesos en billetes de cincomil`);
                console.log(`hay ${total1} pesos en billetes de diezcomil`);
                console.log(`hay ${total2} pesos en billetes de veintecomil`);
                console.log(`hay ${total3} pesos en billetes de cincuentamil`);
                console.log(`hay ${total4} pesos en billetes de cienmil`);
                console.log(`hay ${totalF} pesos en total`);
                console.log('has salido del administrador');
                break;
            }else{
                if((money[0].count+money[1].count+money[2].count+money[3])==0){
                    console.log('el cajero esta en mantenimiento vuelva pronto');
                    break;
                }else{
                    let moneyLeave = Number(prompt('ingresa la cantidad de dinero que deseas retirar'));
                    if(moneyLeave>totalF){
                        console.log(`el cajero solo te dará ${totalFinal} COP.`);
                        moneyLeave-(total4);
                        moneyLeave-(total3);
                        moneyLeave-(total2);
                        moneyLeave-(total1);
                        moneyLeave-(total0);
                        console.log(`El cajero le entregara ${totalF} y se usaron${dinero[4].cantidad} billetes de 100mil, se usaron${dinero[3].cantidad} billetes de 50mil, se usaron${dinero[2].cantidad} billetes de 20mil, se usaron${dinero[1].cantidad} billetes de 10mil, se usaron${dinero[0].cantidad} billetes de 5mli`);
                    }else{
                        console.log(`el cajero le puede entregara ${totalF} o menos`);
                        let cienMil = moneyLeave-total4;
                        let cincuentaMil = moneyLeave-total3;
                        let veinteMil = moneyLeave-total2;
                        let diezMil = moneyLeave-total1;
                        let cincoMil = moneyLeave-total0;
                        if(moneyLeave>cienMil){
                            
                            break;
                        }else if(moneyLeave>cincuentaMil){
                            break;
                        }else if(moneyLeave>veinteMil){                
                            break;
                        }else if(moneyLeave>diezMil){                           
                            break;
                        }else if(moneyLeave>cincoMil){                           
                            break;
                        }else{
                        }                        
                    }
                }
            }
            console.log(userFind.tipe_of_user);
            console.log(userFind);
        }else{
            alert('Ha ingresado erroneamente su contraseña intentelo de nuevo');
    }
    }else{
        console.log('el usuario no existe');
    }    
}
}
let h = 1;

for (let index = 0; index < h; index++) {

let start = Number(prompt('¿quiere iniciar el cajero?(marque (1) para si y (2) para no)'));
let startB;
if(start==1){
    startB = true;
}else{
    startB = false;
}
cajero(startB);
h += Number(prompt('si quiere continuar en el programa pulse (1) de lo contrario escriba (-1)'));
}
