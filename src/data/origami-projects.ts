export interface OrigamiProject {
  id: string;
  title: string;
  age: string;
  time: string;
  difficulty: 'Muito fácil' | 'Fácil' | 'Média' | 'Difícil';
  materials: string[];
  steps: string[];
  explanation: string;
  tips: string[];
  learningObjectives: string[];
}

export const origamiProjects: OrigamiProject[] = [
  {
    id: 'tsuru-grou',
    title: 'Tsuru (Grou da Sorte)',
    age: '8+ anos',
    time: '30 min',
    difficulty: 'Média',
    materials: [
      '1 folha quadrada de papel colorido (15x15 cm ou 20x20 cm)',
      'Superfície lisa para dobrar',
      'Opcional: papel de origami tradicional'
    ],
    steps: [
      'PREPARAR O PAPEL: Comece com o papel quadrado com o lado colorido virado para BAIXO (branco para cima). Dobre o quadrado ao meio na diagonal, juntando um canto com o canto oposto, formando um triângulo perfeito. Marque bem a dobra passando a unha ou régua. Abra o papel.',
      'SEGUNDA DIAGONAL: Agora dobre ao meio na OUTRA diagonal, juntando os outros dois cantos. Marque bem e abra novamente. Você terá um "X" marcado no papel.',
      'DOBRAS PERPENDICULARES: Vire o papel (lado colorido para cima agora). Dobre ao meio formando um retângulo, juntando a borda superior com a inferior. Marque e abra. Dobre ao meio no outro sentido (esquerda com direita). Marque e abra. Agora tem um "+" marcado.',
      'FORMAR BASE QUADRADA: Com todas as dobras marcadas, segure o papel pelas dobras do "+" e empurre suavemente para dentro. Os quatro cantos se juntarão no centro, colapsando em um quadrado menor com quatro abas. Achate bem. Esta é a "base quadrada" fundamental.',
      'DOBRA PIPA (Lado 1): Posicione a base quadrada com a abertura (pontas soltas) virada para BAIXO. Pegue a aba lateral direita e dobre até a linha central vertical. Repita com a aba esquerda. Ficará formato de pipa/losango alongado.',
      'MARCAR DOBRA DO TOPO: Pegue a ponta superior (triangular) e dobre para baixo, até tocar a linha horizontal onde as abas laterais se encontram. Marque bem esta dobra e depois DESDOBRE (volta para cima). Esta marca é importante para o próximo passo.',
      'DOBRA PÉTALA (Lado 1): Este é o passo mais técnico! Levante APENAS a camada superior da ponta inferior, puxando para CIMA. Ao mesmo tempo, use as dobras laterais como guia, permitindo que as laterais se dobrem para dentro naturalmente. Achate tudo formando uma pétala alongada e fina. Use a marca de dobra do passo anterior como guia.',
      'REPETIR DO OUTRO LADO: Vire o papel completamente. Repita os passos 5, 6 e 7 do outro lado: dobre laterais ao centro (pipa), marque o topo dobrando e desdobrando, depois faça a dobra pétala puxando a ponta inferior para cima.',
      'DOBRAS FINAIS DAS ABAS: Agora você tem uma forma de losango fino com abas. Dobre a aba lateral direita até a linha central. Dobre a esquerda também. Vire o papel e repita do outro lado. Todas as 4 abas devem estar dobradas ao centro.',
      'FORMAR PESCOÇO E CAUDA: Você verá duas pontas compridas saindo pela parte inferior. Estas serão o pescoço e a cauda. Pegue uma ponta e faça uma "dobra interna reversa": abra levemente a ponta, inverta a dobra central e empurre para dentro e para cima formando um ângulo de aproximadamente 45-60 graus. Repita com a outra ponta (cauda fica mais reta).',
      'FORMAR A CABEÇA: Na ponta do pescoço que você acabou de formar, faça outra dobra interna reversa menor: abra a ponta, inverta a dobra e empurre para baixo/para frente. Isso forma a cabeça do tsuru, que fica levemente inclinada para baixo.',
      'ABRIR AS ASAS: Segure o pescoço e a cauda com uma mão. Com a outra mão, puxe delicadamente as asas para os lados, abrindo-as. Não force muito para não rasgar.',
      'FINALIZAR: Faça pequenos ajustes finais. Você pode fazer uma leve curvatura nas pontas das asas para dar movimento. Ajuste o ângulo do pescoço e da cauda. Seu Tsuru tradicional está completo - símbolo de paz e esperança!'
    ],
    explanation: 'O Tsuru é o símbolo japonês de paz, esperança e longevidade, sendo a dobradura mais tradicional do origami. Segundo a lenda japonesa, quem dobrar mil tsurus (senbazuru) terá um desejo realizado. Esta peça ensina dobras fundamentais do origami como a base quadrada e a dobra pétala, que são usadas em muitos outros projetos.',
    tips: [
      'Faça as dobras com precisão - cantos devem se encontrar perfeitamente.',
      'Use papel fino para facilitar as dobras múltiplas.',
      'Marque bem cada dobra passando a unha ou régua.',
      'Se errar, comece de novo - o papel muito marcado não fica bonito.',
      'Pratique primeiro com papel comum antes de usar papel especial.'
    ],
    learningObjectives: [
      'Desenvolver precisão e paciência através de dobras complexas',
      'Aprender sobre cultura japonesa e simbolismo do origami',
      'Dominar dobras fundamentais: base quadrada e dobra pétala',
      'Trabalhar simetria e proporções geométricas',
      'Desenvolver coordenação motora fina'
    ]
  },
  {
    id: 'barquinho-papel',
    title: 'Barquinho de Papel',
    age: '6+ anos',
    time: '15 min',
    difficulty: 'Fácil',
    materials: [
      '1 folha retangular de papel (A4 ou papel de caderno)',
      'Superfície plana para dobrar'
    ],
    steps: [
      'POSICIONAR O PAPEL: Pegue uma folha retangular (A4 ou papel de caderno) e coloque na posição VERTICAL (retrato), com o lado mais longo na vertical.',
      'DOBRA HORIZONTAL: Dobre a folha ao meio no sentido da LARGURA (horizontalmente), juntando a borda superior com a inferior. A dobra deve ficar no TOPO. Marque bem. Mantenha dobrado.',
      'FORMAR TRIÂNGULO NO TOPO: Com a dobra para cima, pegue o canto superior DIREITO e dobre em diagonal até o CENTRO da borda da dobra (não até a borda do papel, mas até o centro). Repita com o canto superior ESQUERDO. Os dois cantos devem se encontrar no centro formando um TRIÂNGULO perfeito no topo.',
      'PRIMEIRA TIRA PARA CIMA: Você verá uma tira retangular horizontal sobrando embaixo do triângulo. Pegue APENAS a camada da frente desta tira e dobre para CIMA, cobrindo completamente a base do triângulo. Marque bem a dobra.',
      'SEGUNDA TIRA PARA CIMA: Vire todo o papel de cabeça para baixo (180 graus). Agora a outra tira retangular está aparecendo. Dobre esta tira para cima também, cobrindo a base do triângulo deste lado. Marque bem. Agora parece um chapéu triangular.',
      'ABRIR EM LOSANGO: Abra o papel por BAIXO (pela base), colocando suas mãos dentro como se fosse colocar o chapéu na cabeça. Junte as pontas opostas, transformando o triângulo em um LOSANGO/DIAMANTE achatado. Achate bem.',
      'FORMAR QUADRADO: Pegue a ponta INFERIOR do losango (a soltas, não a da dobra) e dobre para CIMA até encontrar a ponta SUPERIOR. Marque bem. Agora você tem um triângulo novamente.',
      'REPETIR DO OUTRO LADO: Vire o papel (180 graus). Dobre a ponta inferior para cima até encontrar a superior deste lado também. Agora você tem um triângulo menor e mais espesso.',
      'ABRIR EM LOSANGO NOVAMENTE: Assim como no passo 6, abra o papel por baixo, colocando as mãos dentro. Junte as pontas opostas formando um LOSANGO achatado novamente.',
      'PUXAR AS PONTAS: Agora vem a mágica! Segure firmemente as duas pontas superiores do losango (uma em cada mão). Puxe delicadamente para os LADOS, abrindo o barco. As dobras anteriores farão o papel se transformar em formato de barco!',
      'ABRIR O FUNDO: Abra bem a parte de baixo do barco (o fundo) pressionando suavemente de dentro para fora. Isso dará estabilidade ao barco.',
      'FINALIZAR: Ajuste as "velas" (as pontas que ficaram em pé nas laterais) para ficarem simétricas. Seu barquinho de papel está pronto para navegar! Coloque em uma bacia com água para testar (use papel mais grosso se for colocar na água).'
    ],
    explanation: 'O barquinho de papel demonstra como a geometria das dobras pode criar formas tridimensionais funcionais. A dobradura transforma uma superfície plana em uma estrutura com volume que pode até flutuar na água por algum tempo. Este projeto ensina conceitos de geometria espacial de forma lúdica e prática.',
    tips: [
      'Use papel mais grosso se quiser colocar o barco na água.',
      'Impermeabilize com cera de vela para o barco durar mais na água.',
      'Faça dobras firmes e bem alinhadas.',
      'Para barcos maiores, use folhas maiores (A3, jornal).',
      'Decore o barco com canetinhas antes de montar.'
    ],
    learningObjectives: [
      'Compreender transformação de 2D para 3D',
      'Aprender sobre flutuação e equilíbrio',
      'Desenvolver sequenciamento e memória de passos',
      'Praticar dobras básicas do origami',
      'Estimular brincadeiras criativas'
    ]
  },
  {
    id: 'sapo-saltador',
    title: 'Sapo Saltador',
    age: '7+ anos',
    time: '25 min',
    difficulty: 'Média',
    materials: [
      'Papel retangular firme (10x15 cm ou metade de A4)',
      'Superfície lisa para testar os pulos'
    ],
    steps: [
      'Coloque o retângulo na posição horizontal.',
      'Dobre o canto superior direito até a borda esquerda, formando triângulo. Desdobre.',
      'Repita com o canto superior esquerdo até a borda direita. Desdobre.',
      'Você terá um "X" marcado. Dobre horizontalmente onde o X se encontra e desdobre.',
      'Empurre as laterais para dentro, colapsando o topo em um triângulo achatado.',
      'Dobre as pontas do triângulo para cima, formando as patas dianteiras.',
      'Dobre as laterais da parte retangular inferior até o centro.',
      'Dobre a borda inferior para cima até encontrar a base do triângulo.',
      'Dobre esta mesma borda ao meio para baixo, criando uma dobra "acordeão".',
      'Esta dobra final é a "mola" do sapo.',
      'Vire o sapo. Desenhe olhos se desejar.',
      'Para fazer pular: pressione a parte traseira e solte rapidamente!'
    ],
    explanation: 'O sapo saltador demonstra princípios de física como energia potencial elástica e tensão. Ao pressionar a aba traseira dobrada em "acordeão", você armazena energia potencial que é liberada rapidamente, convertendo-se em energia cinética que faz o sapo saltar. É um exemplo perfeito de como estruturas podem criar movimento.',
    tips: [
      'Quanto mais firme o papel, melhor o pulo.',
      'Ajuste a força da dobra final para controlar a altura do pulo.',
      'Faça uma competição de sapos saltadores!',
      'Marque bem a dobra "acordeão" para criar boa mola.',
      'Teste em superfície lisa para melhores resultados.'
    ],
    learningObjectives: [
      'Compreender energia potencial e cinética',
      'Aprender sobre tensão e liberação de energia',
      'Desenvolver precisão em dobras múltiplas',
      'Explorar causa e efeito através do pulo',
      'Estimular experimentação com diferentes papéis'
    ]
  },
  {
    id: 'flor-lotus',
    title: 'Flor de Lótus',
    age: '9+ anos',
    time: '40 min',
    difficulty: 'Média',
    materials: [
      'Papel quadrado colorido - rosa, branco ou amarelo (20x20 cm)',
      'Papel de origami de dupla face (ideal)',
      'Paciência para múltiplas dobras!'
    ],
    steps: [
      'Comece com o papel colorido virado para cima.',
      'Dobre os quatro cantos até o centro do quadrado, formando um quadrado menor.',
      'Vire o papel.',
      'Dobre os quatro cantos novamente até o centro.',
      'Vire o papel mais uma vez.',
      'Dobre os quatro cantos até o centro pela terceira vez.',
      'Vire o papel uma última vez.',
      'Agora vem a parte delicada: dobre cada ponta para fora delicadamente, começando pelos cantos.',
      'Você verá pequenas "pétalas" começarem a se formar.',
      'Continue desdobrando as camadas de dentro para fora.',
      'Desdobre a camada seguinte, puxando delicadamente para formar mais pétalas.',
      'Por último, desdobre a terceira camada de pétalas.',
      'Ajuste delicadamente cada pétala para dar forma realista à flor.',
      'Sua flor de lótus está desabrochando!'
    ],
    explanation: 'A flor de lótus representa pureza e renascimento em várias culturas asiáticas. Este projeto demonstra camadas concêntricas criadas por dobras sucessivas que, quando desdobradas em sequência, simulam o desabrochar natural de uma flor. É uma bela representação de simetria radial e padrões naturais.',
    tips: [
      'Seja muito delicado ao desdobrar as pétalas.',
      'Use papel fino para facilitar as múltiplas dobras.',
      'Marque bem cada dobra antes de virar o papel.',
      'Coloque um peso pequeno no centro antes de abrir as pétalas.',
      'Experimente papéis coloridos diferentes para efeitos variados.'
    ],
    learningObjectives: [
      'Compreender simetria radial e padrões concêntricos',
      'Desenvolver delicadeza e controle motor fino',
      'Aprender sobre simbolismo cultural das flores',
      'Praticar paciência com projetos mais longos',
      'Trabalhar transformação reversa (dobrar e desdobrar)'
    ]
  },
  {
    id: 'borboleta',
    title: 'Borboleta de Origami',
    age: '7+ anos',
    time: '20 min',
    difficulty: 'Fácil',
    materials: [
      'Papel quadrado colorido (15x15 cm)',
      'Cores vivas funcionam melhor',
      'Opcional: canetinha para detalhes'
    ],
    steps: [
      'Dobre o quadrado ao meio na diagonal formando um triângulo. Desdobre.',
      'Dobre ao meio na outra diagonal. Desdobre.',
      'Vire o papel e dobre ao meio formando um retângulo. Desdobre.',
      'Dobre ao meio no outro sentido formando outro retângulo.',
      'Com as dobras marcadas, colapsar o papel em um triângulo duplo (base triangular).',
      'Com a abertura virada para baixo, dobre a ponta superior até a ponta do triângulo.',
      'Vire o papel e dobre a ponta que sobrou para trás, deixando uma pequena ponta aparecer.',
      'Esta ponta será a cabeça da borboleta.',
      'Dobre o papel ao meio verticalmente.',
      'Segure pela "cabeça" e abra as asas delicadamente.',
      'Faça pequenas dobras nas pontas das asas para dar forma.',
      'Ajuste as asas para ficarem simétricas.',
      'Opcional: desenhe antenas ou padrões nas asas.'
    ],
    explanation: 'A borboleta demonstra simetria bilateral perfeita, um conceito fundamental na natureza. As dobras criam quatro camadas que se tornam as asas, enquanto a ponta central vira a cabeça. Este projeto ensina como dobras simples podem criar formas complexas e reconhecíveis através da simetria.',
    tips: [
      'Use papel de dupla cor para efeito mais bonito nas asas.',
      'Ajuste o ângulo das asas para dar movimento.',
      'Faça várias borboletas e crie um móbile.',
      'Experimente tamanhos diferentes de papel.',
      'Decore com glitter ou canetinha antes de dobrar.'
    ],
    learningObjectives: [
      'Compreender simetria bilateral',
      'Aprender sobre anatomia básica de insetos',
      'Desenvolver habilidade com base triangular',
      'Trabalhar proporção entre corpo e asas',
      'Estimular observação da natureza'
    ]
  },
  {
    id: 'estrela-ninja',
    title: 'Estrela Ninja (Shuriken)',
    age: '10+ anos',
    time: '30 min',
    difficulty: 'Média',
    materials: [
      '2 folhas quadradas de papel (15x15 cm)',
      'Preferencialmente de cores contrastantes',
      'Papel firme funciona melhor'
    ],
    steps: [
      'PEÇA 1: Dobre um quadrado ao meio formando um retângulo.',
      'Dobre novamente ao meio para marcar o centro. Desdobre este último.',
      'Dobre as bordas superiores e inferiores até a linha central.',
      'Dobre o canto superior esquerdo em diagonal para baixo.',
      'Dobre o canto inferior direito em diagonal para cima.',
      'Você terá uma forma de "Z". Esta é a primeira peça.',
      'PEÇA 2: Repita os passos 1-2 com o segundo papel.',
      'Dobre as bordas até o centro (igual ao passo 3).',
      'Agora faça o OPOSTO: dobre canto superior DIREITO para baixo.',
      'Dobre canto inferior ESQUERDO para cima.',
      'Você terá um "Z" invertido (espelhado).',
      'MONTAGEM: Coloque uma peça sobre a outra em cruz (90 graus).',
      'Encaixe as pontas de uma peça nos bolsos da outra.',
      'Continue encaixando todas as quatro pontas.',
      'Sua estrela ninja de 4 pontas está completa!'
    ],
    explanation: 'A estrela ninja ensina o conceito de origami modular, onde duas ou mais peças dobradas separadamente se encaixam sem cola para formar uma estrutura maior. Este princípio de encaixe é usado em arquitetura e design. A dobradura demonstra como padrões espelhados podem se unir perfeitamente.',
    tips: [
      'Use cores diferentes para efeito visual impressionante.',
      'Marque bem as dobras para facilitar o encaixe.',
      'As peças devem ser EXATAMENTE espelhadas uma da outra.',
      'Pressione bem os encaixes para a estrela ficar firme.',
      'Não use cola - o desafio é encaixar perfeitamente!'
    ],
    learningObjectives: [
      'Compreender origami modular e encaixes',
      'Aprender sobre reflexão e espelhamento',
      'Desenvolver raciocínio espacial 3D',
      'Praticar precisão em múltiplas peças',
      'Trabalhar coordenação entre peças separadas'
    ]
  },
  {
    id: 'cisne-elegante',
    title: 'Cisne Elegante',
    age: '9+ anos',
    time: '35 min',
    difficulty: 'Média',
    materials: [
      'Papel quadrado branco (20x20 cm)',
      'Papel de origami ou papel sulfite',
      'Caneta preta para o olho'
    ],
    steps: [
      'Dobre o quadrado ao meio na diagonal formando triângulo.',
      'Dobre as duas bordas laterais até a linha central, formando uma "pipa".',
      'Vire o papel e repita: dobre as bordas até o centro.',
      'Dobre ao meio no sentido do comprimento (ponta a ponta).',
      'A parte mais fina será o pescoço. Faça uma dobra interna reversa puxando para cima.',
      'Ajuste o ângulo do pescoço para aproximadamente 45 graus.',
      'Na ponta do pescoço, faça outra dobra interna reversa menor para formar a cabeça.',
      'A cabeça deve ficar levemente inclinada para baixo.',
      'Abra delicadamente a parte mais larga para formar o corpo e as asas.',
      'Puxe as camadas internas para dar volume ao corpo.',
      'Ajuste as asas para ficarem levemente elevadas.',
      'Modele a cauda puxando a ponta traseira.',
      'Desenhe um pequeno olho com caneta preta.',
      'Seu cisne elegante está completo!'
    ],
    explanation: 'O cisne trabalha com proporções de alongamento e curvas no papel. A dobra interna reversa usada no pescoço é uma técnica avançada que permite criar formas curvas a partir de dobras retas. Esta peça ensina como manipular proporções para criar formas elegantes e naturais.',
    tips: [
      'O pescoço deve ser fino - dobre bem as bordas no início.',
      'Seja delicado ao fazer a dobra interna reversa.',
      'Ajuste o ângulo do pescoço para dar personalidade ao cisne.',
      'Abra bem o corpo para estabilidade.',
      'Use papel branco puro para cisne clássico.'
    ],
    learningObjectives: [
      'Dominar a dobra interna reversa',
      'Compreender proporções e alongamento',
      'Aprender a criar curvas com dobras retas',
      'Desenvolver senso de equilíbrio e estabilidade',
      'Trabalhar detalhamento e acabamento'
    ]
  },
  {
    id: 'caixinha',
    title: 'Caixinha de Origami',
    age: '6+ anos',
    time: '20 min',
    difficulty: 'Fácil',
    materials: [
      'Papel quadrado firme (15x15 cm ou maior)',
      'Papel decorado ou colorido',
      'Opcional: segundo quadrado maior para fazer tampa'
    ],
    steps: [
      'Dobre o quadrado ao meio formando um triângulo. Desdobre.',
      'Dobre ao meio na outra diagonal. Desdobre.',
      'Vire o papel. Dobre ao meio formando retângulo. Desdobre.',
      'Dobre ao meio no outro sentido. Desdobre.',
      'Você terá linhas marcadas formando um "asterisco".',
      'Dobre os quatro cantos até o centro do quadrado.',
      'Dobre a borda superior até o centro. Desdobre.',
      'Dobre a borda inferior até o centro. Desdobre.',
      'Desdobre dois cantos opostos (deixe dois dobrados).',
      'Dobre as bordas laterais até o centro.',
      'Levante as paredes laterais para cima, usando as dobras como guia.',
      'Os cantos dobrados formarão as outras duas paredes.',
      'Dobre as pontas para dentro da caixa, formando o fundo.',
      'Ajuste as paredes para ficarem retas e uniformes.',
      'Para tampa: use papel 0,5cm maior e repita o processo.'
    ],
    explanation: 'A caixinha ensina construção de recipientes tridimensionais usando apenas dobras, sem cortes ou cola. Demonstra como a geometria plana pode criar volume e funcionalidade. É um projeto prático que pode ser usado para guardar pequenos objetos, mostrando a utilidade do origami no dia a dia.',
    tips: [
      'Use papel firme ou cartolina fina para caixa durável.',
      'Marque bem todas as dobras para paredes retas.',
      'Faça caixas de tamanhos diferentes para organização.',
      'Decore o papel antes de dobrar.',
      'Para tampa perfeita, use papel 3-5mm maior.'
    ],
    learningObjectives: [
      'Compreender construção 3D sem cola ou cortes',
      'Aprender sobre volume e recipientes',
      'Desenvolver precisão em dobras funcionais',
      'Trabalhar medidas e proporções para tampa',
      'Criar objetos úteis com origami'
    ]
  },
  {
    id: 'cachorrinho',
    title: 'Cachorrinho de Origami',
    age: '5+ anos',
    time: '15 min',
    difficulty: 'Muito fácil',
    materials: [
      'Papel quadrado colorido (15x15 cm)',
      'Caneta ou lápis para desenhar o rosto',
      'Cores como marrom, preto ou bege funcionam bem'
    ],
    steps: [
      'Dobre o quadrado ao meio na diagonal, formando um triângulo.',
      'Posicione o triângulo com a ponta para baixo.',
      'A ponta superior será o topo da cabeça.',
      'Dobre os dois cantos superiores para baixo e para os lados.',
      'Estas serão as orelhinhas do cachorro.',
      'Ajuste o ângulo das orelhas - podem ser caídas ou em pé.',
      'Dobre a ponta inferior um pouquinho para cima.',
      'Esta será a boca/focinho do cachorro.',
      'Vire o papel.',
      'Desenhe dois olhos, nariz e boca.',
      'Adicione detalhes como manchas ou língua se quiser.',
      'Seu cachorrinho está pronto!'
    ],
    explanation: 'O cachorrinho é ideal para crianças pequenas pois usa apenas dobras simples e básicas. Introduz o conceito de transformar formas geométricas (triângulo) em figuras reconhecíveis (animal). É uma porta de entrada perfeita para o mundo do origami, mostrando que com poucas dobras já é possível criar algo divertido.',
    tips: [
      'Deixe as crianças escolherem a cor do papel.',
      'Ajuste as orelhas para dar personalidade diferente.',
      'Faça vários cachorros com expressões diferentes.',
      'Use como marcador de página.',
      'Cole em palito para fazer fantoche.'
    ],
    learningObjectives: [
      'Introduzir conceitos básicos de origami',
      'Desenvolver reconhecimento de formas',
      'Estimular criatividade na decoração',
      'Praticar coordenação motora básica',
      'Ganhar confiança com dobras simples'
    ]
  },
  {
    id: 'coracao',
    title: 'Coração de Origami',
    age: '6+ anos',
    time: '20 min',
    difficulty: 'Fácil',
    materials: [
      'Papel quadrado vermelho ou rosa (15x15 cm)',
      'Papel de origami de dupla face fica bonito',
      'Opcional: caneta para escrever mensagem atrás'
    ],
    steps: [
      'Dobre o quadrado ao meio formando um triângulo. Desdobre.',
      'Dobre ao meio na outra diagonal. Desdobre.',
      'Vire o papel. Dobre ao meio formando retângulo. Deixe dobrado.',
      'Com o retângulo horizontal, dobre os cantos superiores até o centro da borda inferior.',
      'Você terá uma forma de casa/envelope.',
      'Vire o papel.',
      'Dobre a ponta inferior até cerca de 1/3 da altura.',
      'Dobre os cantos laterais para dentro, arredondando as laterais do coração.',
      'Dobre os picos superiores para baixo, arredondando o topo.',
      'Vire o papel.',
      'Ajuste os cantos para formar o formato de coração perfeito.',
      'Você pode abrir uma "aba" no centro se quiser fazer um cartão.',
      'Escreva uma mensagem se desejar!'
    ],
    explanation: 'O coração combina simetria com estética, mostrando como dobras planejadas podem criar formas reconhecíveis e emocionalmente significativas. É um projeto que ensina o equilíbrio entre precisão geométrica e suavidade nas curvas, ideal para presentes e demonstrações de afeto.',
    tips: [
      'Use papel de dupla face para interior diferente.',
      'Ajuste as dobras dos cantos para coração mais arredondado.',
      'Faça corações de vários tamanhos.',
      'Use como decoração, cartão ou marcador.',
      'Escreva mensagem antes de dobrar para surpresa.'
    ],
    learningObjectives: [
      'Trabalhar simetria e estética',
      'Aprender a suavizar formas geométricas',
      'Desenvolver precisão com propósito emocional',
      'Criar presentes significativos',
      'Combinar arte com expressão de sentimentos'
    ]
  }
];
