<h1>Gerador de GABARITO</h1>

Esse projeto tem o objetivo de transformar o RESPONSE CODE de uma página de Atividade em gabarito. E foi criado apenas com objetivo de estudo.

<i>Todas as atividades continuam sendo sendo feitas de forma genuína.</i>

<h3>a aparencia do programa é essa:</h3>

![programa_funcionando](https://user-images.githubusercontent.com/59585859/177210341-0280b908-2d93-4714-a2dd-c261644b66dc.png)


<h2> Como funcionam as atividades </h2>
Antes de entender o funcionamento desse programa é necessário entender como funcionam as atividades. O sistema de entrega de atividades visando um melhor desempenho da página envia junto das alternativas, o <b>id da alternativa correta.</b> 


<br><i>
É possível observar pelo exemplo abaixo:
</i>

![ALTERNATIVAS](https://user-images.githubusercontent.com/59585859/177210765-9ee121ef-4a96-47de-a1a7-8b0c4e6d2a89.png)

acima temos os id's das alternativas. E abaixo temos o id da alternativa correta

![correct_choice](https://user-images.githubusercontent.com/59585859/177210822-fcef7d8b-a11b-4a6d-9b1a-c8f0a921b7b6.png)



Poderiamos fazer a comparação de questão por questão, mas esse processo seria muito cansativo e demorado. <br> Então a ferramenta faz exatamente esse processo. 

Pega todas as alternativas corretas e faz a comparação com os id's das alternativas.

<h3>Utilização</h3>
Para utilizar você precisa:

1. copiar o codigo resposta da página da atividade
2. colar no campo de texto
3. Apertar o Botão( Gerar Gabarito )


<h3>Como conseguir o Response Code</h3>

Entre na atividade que você deseja gerar o gabarito, encontre ela na área de <b>Tarefa de Casa</b>

![Página_inicial](https://user-images.githubusercontent.com/59585859/177210595-bf779007-a9cd-4986-9802-1815b7510a0c.png)


Após entrar na atividade:

1. abra as ferramentas de desenvolvedor na área de rede.
2. Recarregue a página(f5)
3. Ache a primeira requisição(lá no topo)
4. Clique com o botão direito
5. Aperte copiar >> Aperte Copiar Resposta

![copiar_codigoFonte](https://user-images.githubusercontent.com/59585859/177212289-81c052c4-eaed-455e-968f-46fa1360e976.png)



<i>agora já é possível a utilização da ferramenta :) </i> 
