export interface BaloesProjeto {
  id: string;
  title: string;
  age: string;
  time: string;
  difficulty: 'Fácil' | 'Médio';
  materials: string[];
  steps: string[];
  tips: string[];
  learningObjectives: string[];
}

export const baloesProjetos: BaloesProjeto[] = [
  {
    id: 'cachorrinho-balao',
    title: 'Cachorrinho de Balão',
    age: '6+ anos',
    time: '10-15 min',
    difficulty: 'Fácil',
    materials: [
      '1 balão fino (modelo 260)',
      'Bomba de encher balões',
      'Caneta marcador (opcional)'
    ],
    steps: [
      'ENCHER O BALÃO: Use a bomba para encher o balão modelo 260 (fino e longo), mas PARE antes de encher completamente. Deixe aproximadamente 10 cm da ponta do balão SEM AR (vazio). Isso é muito importante - se encher demais, o balão vai estourar quando você fizer as torções. Dê um nó firme na ponta onde você encheu.',
      'FOCINHO E ORELHAS: Começando pela ponta com o nó (que será a cabeça), meça cerca de 7-8 cm e faça uma TORÇÃO (gire 2-3 vezes). Depois meça mais 5 cm e faça outra torção. Meça mais 5 cm e faça a terceira torção. Agora você tem 3 bolhas: uma de 7-8 cm (focinho) e duas de 5 cm cada (orelhas). Pegue as duas bolhas de 5 cm e DOBRE juntas, torcendo na base - estas são as orelhas! O focinho fica na ponta.',
      'PESCOÇO: A partir da última torção que você fez, meça cerca de 7 cm do balão e faça uma nova torção. Esta seção de 7 cm será o pescoço do cachorrinho, conectando a cabeça ao corpo.',
      'PATAS DIANTEIRAS: Após o pescoço, meça 10 cm e torça. Meça mais 10 cm e torça novamente. Você criou duas bolhas de 10 cm cada. Pegue estas duas bolhas e DOBRE elas juntas, torcendo na base (como fez com as orelhas). Estas são as PATAS DIANTEIRAS do cachorrinho!',
      'CORPO: Após as patas dianteiras, meça aproximadamente 12-15 cm (o corpo) e faça uma torção. Esta seção é o corpo/barriga do cachorro - pode ser um pouco maior que as patas.',
      'PATAS TRASEIRAS: Agora meça 10 cm e torça. Meça mais 10 cm e torça. Pegue estas duas bolhas de 10 cm e DOBRE juntas, torcendo na base. Estas são as PATAS TRASEIRAS! Elas devem ser do mesmo tamanho das dianteiras.',
      'RABINHO: O que sobrou na ponta do balão (aquele pedaço que você deixou sem ar) será o rabinho do cachorro! Se quiser, pode deixar reto ou fazer uma pequena curvinha. O rabinho deve ficar apontando para cima.',
      'DETALHES FINAIS: Seu cachorrinho está pronto! Se quiser, use caneta marcador permanente (preta) para desenhar dois olhinhos no focinho e um narizinho. Você também pode desenhar manchinhas no corpo. Ajuste todas as partes para o cachorrinho ficar em pé equilibrado!'
    ],
    tips: [
      'Sempre deixe um pouco de ar sobrando para evitar que estoure.',
      'Desenhe olhinhos e nariz com caneta permanente.',
      'Faça torções firmes para que não desfaça.'
    ],
    learningObjectives: [
      'Desenvolver coordenação motora e força nas mãos',
      'Aprender sequência de passos',
      'Praticar simetria ao criar as patas',
      'Estimular criatividade e diversão'
    ]
  },
  {
    id: 'espada-cavaleiro',
    title: 'Espada de Cavaleiro',
    age: '6+ anos',
    time: '5-10 min',
    difficulty: 'Fácil',
    materials: [
      '1 balão 260',
      'Bomba de encher balões',
      'Marcador prateado (opcional)'
    ],
    steps: [
      'Encha o balão quase todo, deixando apenas 5 cm sem ar.',
      'Faça uma dobra de 10 cm na ponta para formar o punho.',
      'Cruze duas dobras pequenas para formar o cabo (guarda).',
      'Torça bem para fixar o cabo.',
      'A parte longa restante será a lâmina da espada.',
      'Segure pelo punho e está pronta para brincar!',
      'Pinte o cabo com marcador prateado se quiser.'
    ],
    tips: [
      'Faça o punho proporcional à mão da criança.',
      'Use balões de cores metálicas para parecer espada de verdade.',
      'Crie várias para batalhas de espadachins!'
    ],
    learningObjectives: [
      'Desenvolver criatividade com brincadeiras',
      'Aprender sobre formas e proporções',
      'Praticar movimentos de torção',
      'Estimular imaginação e faz de conta'
    ]
  },
  {
    id: 'flor-colorida',
    title: 'Flor Colorida',
    age: '7+ anos',
    time: '15-20 min',
    difficulty: 'Médio',
    materials: [
      '2 balões 260 (um verde e outro colorido)',
      'Bomba de encher balões'
    ],
    steps: [
      'ENCHER E FAZER PÉTALAS: Encha o balão colorido (rosa, vermelho, amarelo ou roxo) deixando apenas 5 cm sem ar. Dê um nó. Agora você vai criar as pétalas: meça aproximadamente 12 cm e torça. Meça mais 12 cm e torça. Continue fazendo isso até ter 5 bolhas/seções de tamanhos IGUAIS (cada uma com cerca de 12 cm). É importante que todas as pétalas tenham o mesmo tamanho!',
      'FORMAR CÍRCULO DE PÉTALAS: Pegue as duas pontas do balão (onde está o nó e a ponta final) e UNA elas, fazendo uma torção firme para conectar. Agora você tem um círculo com 5 bolhas ao redor.',
      'CRIAR CENTRO DA FLOR: Este é o passo mais importante! Pegue TODAS as 5 torções que você fez (os pontos onde as bolhas se conectam) e junte todas no CENTRO do círculo. Torça todas juntas firmemente (2-3 voltas). Agora as 5 bolhas se espalharão formando pétalas! Ajuste cada pétala para ficarem distribuídas uniformemente em volta do centro. Sua flor tem 5 pétalas!',
      'PREPARAR O CAULE: Pegue o balão VERDE e encha quase todo, deixando apenas 3-4 cm sem ar. Dê um nó. Este será o caule da sua flor.',
      'FAZER A FOLHA: Na METADE do balão verde (meio do caule), meça cerca de 8 cm e faça uma bolha (torção de um lado e torção do outro). Pegue esta bolha de 8 cm e DOBRE ao meio, torcendo na base. Isso cria uma folhinha que sai do meio do caule!',
      'FIXAR A FOLHA: Torça bem a base da folha (onde ela se conecta ao caule) para garantir que não vai desfazer. A folha deve ficar perpendicular ao caule (saindo para o lado).',
      'UNIR CAULE À FLOR: Pegue a ponta superior do caule verde (a ponta com o nó) e EMPURRE através do centro da flor (onde todas as pétalas se encontram). Passe o caule até que o nó fique bem no centro da flor. Se necessário, torça o caule junto com o centro das pétalas para fixar bem.',
      'FINALIZAR: Ajuste todas as pétalas para ficarem simétricas e bonitas. Ajuste a folha para ficar na posição certa. Sua flor colorida está pronta! Faça várias em cores diferentes para criar um buquê lindo!'
    ],
    tips: [
      'Combine cores para um buquê lindo!',
      'Pétalas do mesmo tamanho ficam mais bonitas.',
      'Faça várias flores para presentear.'
    ],
    learningObjectives: [
      'Aprender sobre simetria e padrões',
      'Desenvolver planejamento de cores',
      'Praticar coordenação bilateral',
      'Estimular criatividade floral'
    ]
  },
  {
    id: 'coroa-real',
    title: 'Coroa de Princesa ou Príncipe',
    age: '7+ anos',
    time: '10-15 min',
    difficulty: 'Médio',
    materials: [
      '1 ou 2 balões 260 dourados ou coloridos',
      'Bomba de encher balões',
      'Adesivos decorativos (opcional)'
    ],
    steps: [
      'Encha o balão e meça ao redor da cabeça da criança.',
      'Una as pontas formando um círculo do tamanho certo.',
      'Torça para fechar o círculo.',
      'Faça 3 a 5 dobras pequenas apontando para cima (pontas da coroa).',
      'Distribua as pontas igualmente ao redor.',
      'Ajuste o tamanho conforme necessário.',
      'Adicione adesivos como "pedras preciosas".'
    ],
    tips: [
      'Use balões dourados ou prateados para efeito real.',
      'Decore com glitter ou adesivos brilhantes.',
      'Ajuste bem ao tamanho da cabeça.'
    ],
    learningObjectives: [
      'Aprender sobre medidas e proporções',
      'Desenvolver senso estético',
      'Praticar ajustes e adaptações',
      'Estimular brincadeiras de faz de conta'
    ]
  },
  {
    id: 'cachinho-uva',
    title: 'Cachinho de Uva',
    age: '6+ anos',
    time: '10-15 min',
    difficulty: 'Fácil',
    materials: [
      '5 a 7 balões pequenos roxos',
      '1 balão verde para o galho',
      'Bomba de encher balões'
    ],
    steps: [
      'Encha cada balão roxo do mesmo tamanho (pequeno).',
      'Amarre todos os balões roxos juntos no nó.',
      'Agrupe-os em forma de cacho.',
      'Encha um balão verde fino.',
      'Amarre o verde no topo do cacho como galho.',
      'Ajuste a posição das "uvas" para formato realista.',
      'Pendure como decoração!'
    ],
    tips: [
      'Faça todos do mesmo tamanho para ficar uniforme.',
      'Use como decoração de festa ou teto.',
      'Combine com outras frutas de balões.'
    ],
    learningObjectives: [
      'Aprender sobre frutas e alimentação',
      'Desenvolver senso de agrupamento',
      'Praticar uniformidade e padrões',
      'Estimular decoração criativa'
    ]
  },
  {
    id: 'espada-dupla',
    title: 'Espada Dupla de Guerreiro',
    age: '8+ anos',
    time: '15-20 min',
    difficulty: 'Médio',
    materials: [
      '2 balões 260',
      'Bomba de encher balões'
    ],
    steps: [
      'Faça duas espadas normais seguindo o projeto da espada de cavaleiro.',
      'Posicione as duas espadas de forma paralela.',
      'Cruze os cabos das duas espadas.',
      'Torça os cabos juntos firmemente.',
      'Ajuste para que fiquem simétricas.',
      'Segure no meio - é uma espada dupla!',
      'Perfeita para brincadeiras em dupla.'
    ],
    tips: [
      'Use cores diferentes para cada lado.',
      'Torça bem para não soltar durante a brincadeira.',
      'Ótima para brincadeiras com amigos.'
    ],
    learningObjectives: [
      'Desenvolver trabalho em equipe',
      'Aprender sobre simetria e equilíbrio',
      'Praticar planejamento de construção',
      'Estimular brincadeiras cooperativas'
    ]
  },
  {
    id: 'coelhinho-balao',
    title: 'Coelhinho de Balão',
    age: '6+ anos',
    time: '10-15 min',
    difficulty: 'Fácil',
    materials: [
      '1 balão branco 260',
      'Bomba de encher balões',
      'Caneta marcador'
    ],
    steps: [
      'Encha o balão deixando 12 cm sem ar.',
      'Faça uma pequena bolinha para o nariz.',
      'Dobre duas partes iguais e longas para as orelhas.',
      'Torça para fixar as orelhas.',
      'Modele o corpo com uma seção maior.',
      'Faça o rabinho com o que sobrou (bolinha pequena).',
      'Desenhe o rostinho com caneta.'
    ],
    tips: [
      'Orelhas longas ficam mais fofas.',
      'Desenhe olhinhos e bigodes.',
      'Faça coelhos coloridos também!'
    ],
    learningObjectives: [
      'Aprender sobre animais domésticos',
      'Desenvolver proporções corporais',
      'Praticar caracterização',
      'Estimular amor aos animais'
    ]
  },
  {
    id: 'coracao',
    title: 'Coração',
    age: '6+ anos',
    time: '5-10 min',
    difficulty: 'Fácil',
    materials: [
      '1 balão vermelho ou rosa 260',
      'Bomba de encher balões'
    ],
    steps: [
      'Encha o balão deixando 15 cm sem ar.',
      'Faça um arco grande com o balão.',
      'Una as duas pontas.',
      'Dobre o centro para baixo formando a ponta do coração.',
      'Ajuste os lados para formar o coração perfeito.',
      'Presenteie alguém especial!'
    ],
    tips: [
      'Use vermelho ou rosa para mais romantismo.',
      'Ajuste bem as curvas para formato perfeito.',
      'Ótimo para Dia das Mães ou dos Namorados!'
    ],
    learningObjectives: [
      'Aprender sobre formas e amor',
      'Desenvolver expressão de sentimentos',
      'Praticar curvas e formas orgânicas',
      'Estimular generosidade'
    ]
  },
  {
    id: 'espiral-magico',
    title: 'Espiral Mágico',
    age: '6+ anos',
    time: '5-10 min',
    difficulty: 'Fácil',
    materials: [
      '1 balão colorido 260',
      'Bomba de encher balões'
    ],
    steps: [
      'Encha o balão completamente.',
      'Segure as duas pontas.',
      'Gire o corpo do balão em forma de espiral.',
      'Continue girando até criar várias voltas.',
      'Solte e observe a forma espiral se formar.',
      'Use várias cores para efeito arco-íris!'
    ],
    tips: [
      'Gire sempre na mesma direção.',
      'Use cores vibrantes para efeito visual.',
      'Combine várias espirais juntas.'
    ],
    learningObjectives: [
      'Aprender sobre formas geométricas',
      'Desenvolver movimento rotacional',
      'Praticar padrões visuais',
      'Estimular percepção espacial'
    ]
  },
  {
    id: 'cachorro-coleira',
    title: 'Cachorro com Coleira',
    age: '8+ anos',
    time: '15-20 min',
    difficulty: 'Médio',
    materials: [
      '2 balões 260 (cores diferentes)',
      'Bomba de encher balões',
      'Caneta marcador'
    ],
    steps: [
      'Monte o cachorrinho básico com o primeiro balão.',
      'Com o segundo balão, faça um círculo para a coleira.',
      'Passe a coleira pelo pescoço do cachorrinho.',
      'Ajuste o tamanho da coleira.',
      'Deixe uma parte longa como guia.',
      'Escreva o nome do bichinho na coleira com caneta!',
      'Agora você tem um pet completo!'
    ],
    tips: [
      'Use cores contrastantes para destacar a coleira.',
      'Personalize com o nome favorito.',
      'Crie vários cachorrinhos com personalidades diferentes.'
    ],
    learningObjectives: [
      'Aprender sobre cuidados com animais',
      'Desenvolver combinação de elementos',
      'Praticar personalização',
      'Estimular responsabilidade com pets'
    ]
  }
];
