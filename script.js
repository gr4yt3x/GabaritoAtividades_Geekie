function main(){
    var correct_id;
    var correct_word = 'correct_choice_id:';
    var text = document.getElementById("texto").value.replace(/"/g, '');
  
    //removendo os 3 primeiros id's do response code
    text = text.replace(/id/, '');
    text = text.replace(/id/, '');
    text = text.replace(/id/, '');
    
    //removendo os "item_id" e "version_id" 
    text = text.replace(/item_id/g, '');
    text = text.replace(/version_id/g, '');
  
    var certas = [];
  
    while(text.includes("correct_choice_id:")){
      correct_id = text.match(new RegExp(correct_word + '\\s(\\w+)'))['1'];
      text = text.replace(/correct_choice_id:/, '');
      certas.push(correct_id);
    }
  
  
    // criar um array com todas as alternativas
    var id;
    var id_nome = 'id:';
  
    var alternativas = [];
  
    while(text.includes("id:")){
      id = text.match(new RegExp(id_nome + '\\s(\\w+)'))['1'];
      text = text.replace(/id:/, '');
      alternativas.push(id);
    }
    //retirando os primeiros 4 caracteres(id's desnecessários)
    alternativas = alternativas.slice(6);
  
    //retirando os ultimos 16 caracteres(id's desnecessários)
    alternativas = alternativas.slice(0, -14);
  
  
  
    var numeroQuest = Object.keys(certas).length;
    var gabarito = [];
  
    contador = 0;
  
  
    for(var i = 0; i < numeroQuest; i++){
      
      if(certas[i] == alternativas[0 + contador]){
        gabarito.push("a")
      }
      if(certas[i] == alternativas[1 + contador]){
        gabarito.push("b")
      }
      if(certas[i] == alternativas[2 + contador]){
        gabarito.push("c")
      }
      if(certas[i] == alternativas[3 + contador]){
        gabarito.push("d")
      }
      if(certas[i] == alternativas[4 + contador]){
        gabarito.push("e")
      }
      contador += 5;
    }
    
    //limpando o codigo fonte da tela
    document.getElementById("texto").value = "";
  
    //limpando o gabarito da tela(pra não ir acumulando na tela)
    document.getElementById("gabarito").innerHTML = "";
  
  
    //mostrar o gabarito(com o numero da questão antes da alternativa) 
    for(var i = 0; i < gabarito.length; i++){
      var quest_atual = document.createElement("li")
      quest_atual.innerHTML = (i+1) + ': ' + gabarito[i]
      document.getElementById("gabarito").appendChild(quest_atual);
  }
    
  }
