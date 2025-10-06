export interface ModelagemProjeto {
  id: string;
  title: string;
  age: string;
  time: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  materials: string[];
  steps: string[];
  tips: string[];
  learningObjectives: string[];
}

export const modelagemProjetos: ModelagemProjeto[] = [
  {
    id: 'rosto-sorridente',
    title: 'Rosto Sorridente',
    age: '3+ anos',
    time: '15-20 min',
    difficulty: 'Fácil',
    materials: [
      'Massinha cor de pele, branco, preto, vermelho',
      'Palito de modelagem'
    ],
    steps: [
      'BASE DO ROSTO: Pegue uma porção de massinha cor de pele (ou bege/amarelo claro) do tamanho de uma bola de gude grande. Role entre as palmas das mãos fazendo movimentos circulares até formar uma bola perfeitamente redonda. Depois, achate suavemente a bola entre as palmas formando um disco de aproximadamente 1 cm de espessura.',
      'FAZER OS OLHOS: Pegue massinha branca e faça duas bolinhas pequenas (tamanho de ervilha). Achate levemente cada uma. Posicione os dois olhos no rosto, deixando um pequeno espaço entre eles. Agora pegue massinha preta, faça duas bolinhas minúsculas e coloque no centro de cada olho branco para fazer as pupilas. Pressione delicadamente.',
      'MODELAR O NARIZ: Com massinha cor de pele (mesma cor do rosto), faça uma bolinha bem pequena (menor que uma ervilha). Cole no centro do rosto, entre os olhos e um pouco abaixo. Você pode deixar redondo ou achatar levemente para fazer um nariz mais discreto.',
      'CRIAR A BOCA SORRIDENTE: Pegue massinha vermelha e role entre os dedos formando um rolinho fino de aproximadamente 3-4 cm de comprimento. Curve este rolinho em formato de "U" ou meia-lua (sorriso). Cole abaixo do nariz. Para um sorriso maior, curve mais as pontas para cima!',
      'ADICIONAR ORELHAS: Faça duas bolinhas pequenas cor de pele e cole uma de cada lado do rosto, na altura dos olhos. Com o dedo, achate levemente cada orelha contra o rosto. Use um palito de modelagem para fazer um pequeno furinho no centro de cada orelha (canal auditivo).',
      'SOBRANCELHAS E DETALHES: Use o palito de modelagem para fazer duas linhas curvas acima dos olhos (sobrancelhas). Você pode fazer linhas leves ou mais marcadas. Se quiser, adicione sardas fazendo pontinhos leves com o palito, ou faça cabelo com rolinhos finos de massinha marrom. Alise suavemente todo o rosto com os dedos para dar acabamento!'
    ],
    tips: [
      'Use um palito para desenhar linhas finas (sardas, cabelo).',
      'Para olhos brilhantes, deixe uma pontinha branca.',
      'Transforme em rosto de animal trocando orelhas e nariz.'
    ],
    learningObjectives: [
      'Desenvolver coordenação motora fina',
      'Aprender sobre expressões faciais',
      'Praticar modelagem de formas básicas',
      'Estimular criatividade'
    ]
  },
  {
    id: 'coelho-fofo',
    title: 'Coelho Fofo',
    age: '4+ anos',
    time: '20-30 min',
    difficulty: 'Médio',
    materials: [
      'Massinha branca e rosa',
      'Palito de modelagem',
      'Cortador de círculo (opcional)'
    ],
    steps: [
      'CORPO E CABEÇA: Pegue massinha branca e divida em duas porções - uma maior (tamanho de bola de ping-pong) e uma menor (tamanho de bola de gude). Com a porção maior, role formando uma bola e depois alongue levemente fazendo um formato OVAL (corpo do coelho). Com a porção menor, faça uma bola REDONDA (cabeça). Cole a cabeça em cima da parte mais fina do corpo oval.',
      'ORELHAS LONGAS: Pegue massinha branca e divida em duas porções iguais pequenas. Role cada uma formando um rolinho fino de cerca de 5-6 cm. Achate levemente cada rolinho com os dedos para fazer orelhas mais planas. Cole as duas orelhas no TOPO da cabeça, lado a lado. Para orelhas dobradas, curve suavemente as pontas. Pegue massinha rosa, faça dois rolinhos bem fininhos e cole dentro de cada orelha (parte interna rosa).',
      'FAZER O ROSTO: Para os OLHOS, faça duas bolinhas pretas minúsculas e cole na cabeça. Para o NARIZ, faça um triângulo pequeno rosa ou uma bolinha rosa pequena e cole abaixo dos olhos. Para os BIGODES, use o palito de modelagem e faça 3 linhas finas de cada lado do nariz (risquinhos leves na massinha). Você pode também fazer bigodes com rolinhos finérrimos de massinha preta.',
      'PATINHAS: Pegue massinha branca, divida em 4 porções pequenas iguais. Para as patas TRASEIRAS (2): faça bolinhas e achate formando ovais maiores, cole embaixo do corpo na parte de trás. Para as patas DIANTEIRAS (2): faça rolinhos pequenos e cole na frente do corpo. Use o palito para marcar 3 dedinhos em cada pata fazendo risquinhos.',
      'BARRIGA E RABINHO: Pegue massinha rosa, faça um círculo achatado (como uma moeda) e cole na barriga do coelho (frente do corpo). Para o RABO, faça uma bolinha branca fofinha e cole atrás do corpo, na parte de cima. Você pode fazer o rabo parecer mais fofo pressionando levemente com o palito fazendo vários risquinhos (textura de pelo).',
      'TEXTURA DE PELO: Use o palito de modelagem para criar textura de pelo em todo o coelho. Faça risquinhos leves por todo o corpo, orelhas e cabeça - sempre na mesma direção para parecer pelo natural. Não pressione muito forte, apenas toque levemente a superfície. Pronto! Seu coelhinho fofo está completo!'
    ],
    tips: [
      'Para orelhas mais firmes faça rolinhos mais compactos.',
      'Faça coelhinho colorido (azul, amarelo) para brincar com cores.'
    ],
    learningObjectives: [
      'Aprender sobre proporções corporais',
      'Desenvolver paciência e atenção aos detalhes',
      'Praticar criação de texturas',
      'Estimular imaginação'
    ]
  },
  {
    id: 'maca-fofa',
    title: 'Maçã Fofa',
    age: '3+ anos',
    time: '10-15 min',
    difficulty: 'Fácil',
    materials: [
      'Massinha vermelha, verde e marrom'
    ],
    steps: [
      'Modele uma bola vermelha e achate ligeiramente dando forma arredondada.',
      'Faça uma pequena cavidade no topo para colocar o pedúnculo.',
      'Modele um rolinho marrom fino para o cabinho.',
      'Modele uma pequena folha verde e cole ao lado do cabinho.',
      'Alise a superfície para dar brilho com os dedos.',
      'Decore com um pontinho branco para brilho.'
    ],
    tips: [
      'Faça metade da maçã com tom mais claro para efeito de brilho.',
      'Faça um cacho de uvas usando bolinhas pequenas.'
    ],
    learningObjectives: [
      'Aprender sobre frutas e alimentação saudável',
      'Desenvolver habilidade de modelagem de formas simples',
      'Praticar mistura de cores',
      'Estimular criatividade com variações'
    ]
  },
  {
    id: 'carrozinho-simples',
    title: 'Carrozinho Simples',
    age: '5+ anos',
    time: '20-30 min',
    difficulty: 'Médio',
    materials: [
      'Massinha de várias cores',
      'Palitos de modelagem',
      'Cortadores redondos para rodas'
    ],
    steps: [
      'Modele um bloco retangular para a carroceria.',
      'Faça quatro rolinhos achatados para as rodas e cole.',
      'Modele janelas com bolinhas achatadas de outra cor.',
      'Adicione detalhes: luzes com bolinhas pequenas.',
      'Use palitos para marcar linhas do para-choque e detalhes.',
      'Aperfeiçoe circulando onde as rodas entram.'
    ],
    tips: [
      'As rodas ficam mais firmes se você apertar bem e usar uma base plana.',
      'Crie um caminhão alongando a carroceria.'
    ],
    learningObjectives: [
      'Compreender formas geométricas básicas',
      'Desenvolver habilidades de construção tridimensional',
      'Aprender sobre veículos e transporte',
      'Estimular criatividade com modificações'
    ]
  },
  {
    id: 'borboleta-colorida',
    title: 'Borboleta Colorida',
    age: '4+ anos',
    time: '15-25 min',
    difficulty: 'Fácil',
    materials: [
      'Massinha colorida variada',
      'Palito de modelagem',
      'Cortadores de coração (opcional)'
    ],
    steps: [
      'Faça um corpo alongado, em forma de salsicha, para a borboleta.',
      'Modele duas asas grandes a partir de discos achatados.',
      'Cole as asas no corpo e aplique manchas coloridas.',
      'Modele antenas finas com dois rolinhos pequenos.',
      'Decore com pontos e corações pequenos.',
      'Aperfeiçoe as bordas das asas para dar movimento.'
    ],
    tips: [
      'Use várias cores para estimular o reconhecimento de cores.',
      'Transforme em mariposa com cores mais escuras.'
    ],
    learningObjectives: [
      'Aprender sobre simetria',
      'Desenvolver reconhecimento de cores',
      'Compreender a natureza e insetos',
      'Estimular criatividade artística'
    ]
  },
  {
    id: 'peixinho-alegre',
    title: 'Peixinho Alegre',
    age: '3+ anos',
    time: '10-20 min',
    difficulty: 'Fácil',
    materials: [
      'Massinha azul, laranja, branco',
      'Palito de modelagem'
    ],
    steps: [
      'Modele uma gota grande para o corpo do peixe.',
      'Faça uma cauda em forma de leque e cole atrás.',
      'Modele nadadeiras laterais e cole.',
      'Adicione um olho grande e uma boca sorridente.',
      'Decore com listras ou bolinhas coloridas.',
      'Finalizar alisando as junções.'
    ],
    tips: [
      'Para nadadeiras finas, faça rolamentos e achate com o dedo.',
      'Crie um aquário com várias espécies pequenas.'
    ],
    learningObjectives: [
      'Aprender sobre animais aquáticos',
      'Desenvolver coordenação motora',
      'Praticar formas orgânicas',
      'Estimular criação de cenários'
    ]
  },
  {
    id: 'mini-bolo',
    title: 'Mini Bolo de Aniversário',
    age: '6+ anos',
    time: '25-35 min',
    difficulty: 'Médio',
    materials: [
      'Massinha em cores pastel',
      'Palitos de modelagem',
      'Cortadores redondos'
    ],
    steps: [
      'Modele duas camadas redondas (maior e menor) e empilhe.',
      'Alise os lados e crie bordinhas com uma cor contrastante.',
      'Modele velinhas finas com rolinhos coloridos e coloque no topo.',
      'Faça pequenas flores ou corações para decorar as laterais.',
      'Adicione "chantilly" com pequenos rolinhos brancos.',
      'Finalize com um pequeno laço na base.'
    ],
    tips: [
      'Use palitos para detalhes delicados e deixe as velas finas para aparência realista.',
      'Transforme em cupcake fazendo apenas uma camada e uma cobertura.'
    ],
    learningObjectives: [
      'Aprender sobre celebrações e tradições',
      'Desenvolver atenção aos detalhes',
      'Praticar empilhamento e equilíbrio',
      'Estimular criatividade decorativa'
    ]
  },
  {
    id: 'arco-iris-nuvem',
    title: 'Arco-íris com Nuvem',
    age: '4+ anos',
    time: '15-20 min',
    difficulty: 'Fácil',
    materials: [
      'Massinha em cores do arco-íris e branca'
    ],
    steps: [
      'Faça rolinhos finos em cada cor do arco-íris.',
      'Una as cores lado a lado formando um arco.',
      'Modele duas nuvens brancas fazendo bolinhas e juntando-as.',
      'Cole as extremidades do arco nas nuvens.',
      'Alise e ajuste o formato para ficar simétrico.',
      'Decore as nuvens com pequenas texturas.'
    ],
    tips: [
      'Faça rolinhos com tamanhos iguais para um arco uniforme.',
      'Crie um cenário com sol e gotas de chuva.'
    ],
    learningObjectives: [
      'Aprender sobre o arco-íris e cores',
      'Desenvolver senso de ordem e sequência',
      'Praticar simetria',
      'Estimular criação de cenários naturais'
    ]
  },
  {
    id: 'dinossauro',
    title: 'Dinossauro',
    age: '5+ anos',
    time: '30-45 min',
    difficulty: 'Difícil',
    materials: [
      'Massinha verde e marrom',
      'Palito de modelagem',
      'Molde para espinhos (opcional)'
    ],
    steps: [
      'CORPO E CABEÇA: Pegue uma boa quantidade de massinha verde (tamanho de uma bola de tênis). Divida em duas partes: 2/3 para o corpo e 1/3 para a cabeça. Com a parte maior, role e molde um formato ALONGADO tipo "salsicha grossa" (corpo). Uma ponta deve ser mais grossa (traseira) e a outra um pouco mais fina (pescoço). Com a parte menor, faça uma bola e depois molde em formato de cabeça - pode ser arredondada ou mais alongada dependendo do tipo de dinossauro.',
      'MODELAR AS PATAS: Pegue massinha verde e divida em 4 porções IGUAIS (tamanho de bola de gude cada). Role cada porção formando um cilindro grosso e curto (como uma "coluna"). Cada pata deve ter cerca de 3-4 cm de altura e ser grossa o suficiente para suportar o corpo. Cole as 4 patas embaixo do corpo, distribuindo bem: 2 na frente e 2 atrás. Pressione firmemente para fixar. Use o palito para marcar 3 dedos/garras em cada pata.',
      'FAZER A CAUDA: Pegue massinha verde, role formando um rolinho longo e grosso de cerca de 10-12 cm. Uma ponta deve ser mais grossa (onde cola no corpo) e a outra mais fina (ponta da cauda). Cole a parte grossa na traseira do corpo. Para dar textura de dinossauro, use o palito fazendo depressões leves (como escamas) ao longo de toda a cauda.',
      'CRIAR ESPINHOS NAS COSTAS: Esta é a parte que torna seu dinossauro impressionante! Pegue massinha verde ou marrom e faça vários triângulos pequenos (formato de dente de serra). Você precisará de 6-10 espinhos. Começando pelo pescoço, cole os espinhos em FILA ao longo das costas até o início da cauda. Pressione a base de cada espinho no corpo. Os espinhos podem variar de tamanho - maiores no meio das costas, menores perto do pescoço e cauda.',
      'DETALHES DA CABEÇA: Cole a cabeça no pescoço (parte mais fina do corpo). Para os OLHOS, faça duas bolinhas brancas pequenas e cole na cabeça, adicione pontinhos pretos no centro. Para a BOCA, use o palito fazendo um corte horizontal na frente da cabeça. Para DENTES, faça minúsculos triangulinhos brancos e coloque ao longo da boca. Você também pode fazer narinas com dois furinhos pequenos usando o palito.',
      'TEXTURIZAR E FINALIZAR: Use o palito de modelagem para criar textura de pele de dinossauro em todo o corpo. Faça pequenas depressões, linhas ou pontos por toda a superfície (simulando escamas). Pressione levemente para não deformar. Verifique se todas as patas estão firmes e ajuste o equilíbrio para o dinossauro ficar em pé. Pronto! Seu dinossauro está vivo!'
    ],
    tips: [
      'Trabalhe em etapas, deixando cada parte firme antes de colar.',
      'Crie diferentes espécies trocando a forma do pescoço e espinhos.'
    ],
    learningObjectives: [
      'Aprender sobre dinossauros e pré-história',
      'Desenvolver habilidades de escultura complexa',
      'Praticar proporções corporais',
      'Estimular interesse científico'
    ]
  },
  {
    id: 'flores-vaso',
    title: 'Flores em Vaso',
    age: '4+ anos',
    time: '20-30 min',
    difficulty: 'Médio',
    materials: [
      'Massinha colorida variada',
      'Massinha marrom/verde para vaso e caule'
    ],
    steps: [
      'Modele um vaso simples (cilíndrico ou em forma de tigela).',
      'Faça hastes verdes finas e cole no vaso.',
      'Modele flores com pequenas pétalas coloridas e cole nas hastes.',
      'Adicione folhas e detalhes no vaso.',
      'Organize várias flores com tamanhos diferentes.',
      'Finalize com pequenos pontos no centro das flores.'
    ],
    tips: [
      'Para pétalas iguais use mini discos achatados e junte em círculo.',
      'Faça um buquê com fita feita de massinha.'
    ],
    learningObjectives: [
      'Aprender sobre plantas e natureza',
      'Desenvolver senso estético e composição',
      'Praticar criação de elementos repetitivos',
      'Estimular apreciação da beleza natural'
    ]
  }
];
