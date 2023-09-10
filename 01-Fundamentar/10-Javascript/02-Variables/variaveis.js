 //var
 var weather = "hot";
 //weather = "cold";
 console.log("Weather:", weather);

 //let
 let good = "yes";
 good = "no";
 console.log("Good:", good);

 //const
 const team = "spfc";
 // team = "santos";
 console.log(team);

 // fracamente tipada
 let clima = true; //boolean
 clima = "Quente"; //String

 console.log("Var type:", typeof clima);

 //scope

 //var é global e local (hoisting )
 console.log("> existe x antes do bloco?", x);
 {
   var x = 0;
 }
 console.log("> existe x depois do bloco?", x);

 // const e let são locais e só funcionam no escopo onde foram criadas

 let y = 1;
 //console.log("> existe y antes do bloco?", y);
 {
   //console.log("> existe y antes da declaracao?", y);
   let y = 0;
   console.log("> existe y depois da declaracao?", y);
 }
 console.log("> Existe y depois do bloco?", y);