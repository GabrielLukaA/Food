import { useState } from "react";
import lista from "./Lista";

let user = {
listaDeAlimentos: [],
caloriasDiarias:0,
proteinasDiarias:0,
carboidratosDiarias:0,
gordurasDiarias:0,
}
export default function index() {

  let [alimento,setAlimento] = useState({
    nome: "",
    calorias: 0,
    carboidratos: 0,
    proteinas: 0,
    gorduras: 0,
  });

  function retornaArroz(quantidade, nome) {
    lista.map((comida) => {
      if (nome == comida.nome){
        setAlimento({
          nome : comida.nome,
          calorias : comida.calorias * quantidade,
          carboidratos : comida.carboidratos * quantidade,
          proteinas : comida.proteinas * quantidade,
          gorduras : comida.gorduras * quantidade,
        }
        )
      
      }
    });
  }

  function adicionaNaLista(comida){
    console.log("Im here bitch")
   user.listaDeAlimentos.push(comida)
   console.log(user.listaDeAlimentos)
   user.caloriasDiarias+=comida.calorias
   user.proteinasDiarias+=comida.proteinas
   user.carboidratosDiarias+=comida.carboidratos
   user.gordurasDiarias+=comida.gorduras
   console.log(user)

  }

  return (
    <div className="flex flex-col">
              <div>
          <h1>Informe o alimento que comeu: </h1>
          <input type="text" name="" id="food"  />
          </div>
      <div className="flex gap-4 items-center justify-center w-screen h-6 p-10">

        <h1>Informe a quantidade em gramas:</h1>
        <input
          className="border rounded-l"
          type="number"
          onChange={(e) => {
            let inputvalue = +e.currentTarget.value;
            let name = document.getElementById('food');
         let texto = name.value;
            retornaArroz(inputvalue, texto);
          }}
        />
      </div>
      <div className="w-screen justify-center flex">
        <div className="flex flex-col items-center justify-center p-4 bg-zinc-500 shadow-xl w-max rounded-lg text-white">
          <p> KCAL: {alimento.calorias.toFixed(2)}</p>
          <p>Carboidratos: {alimento.carboidratos.toFixed(2)}</p>
          <p>Proteínas: {alimento.proteinas.toFixed(2)}</p>
          <p>Gorduras:{alimento.gorduras.toFixed(2)}</p>
        </div>
        <button onClick={()=>{
          adicionaNaLista(alimento)
        }}>Adiciona caraio</button>
      </div>
    </div>
  );
}
