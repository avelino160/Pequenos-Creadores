export interface Desafio30DiasAtividade {
  id: string;
  day: number;
  title: string;
  age: string;
  time: string;
  difficulty: 'Fácil' | 'Médio';
  materials: string[];
  steps: string[];
  tips: string[];
  learningObjectives: string[];
}

export const desafio30DiasAtividades: Desafio30DiasAtividade[] = [
  {
    id: 'dia-01-desafio-sem-tela',
    day: 1,
    title: 'Desafio Sem Tela!',
    age: '6-10 anos',
    time: '30 min',
    difficulty: 'Fácil',
    materials: ['Papel', 'Lápis de cor ou giz de cera'],
    steps: [
      'GUARDAR OS DISPOSITIVOS: Este é o primeiro e mais importante passo! Com a ajuda de um adulto (papai, mamãe ou responsável), pegue seu celular, tablet ou videogame e GUARDE em um local seguro e combinado. Pode ser uma gaveta, armário ou caixa especial. Este será o "tempo livre de telas" - você vai descobrir que há muitas coisas legais para fazer!',
      'PREPARAR O MATERIAL: Pegue uma folha de papel em branco (pode ser sulfite, papel de caderno ou cartolina). Separe seus lápis de cor, giz de cera ou canetinhas coloridas. Organize tudo numa mesa ou superfície confortável onde você possa desenhar com calma.',
      'MOMENTO DE REFLEXÃO: Sente-se confortavelmente e PENSE: "O que eu mais gosto de fazer quando NÃO estou usando celular, tablet ou TV?" Pode ser brincar com amigos, jogar bola, ler livros, desenhar, brincar com bonecos, fazer artesanato, ou qualquer outra coisa! Não apresse - pense bem em algo que realmente te deixa feliz.',
      'DESENHAR A ATIVIDADE: Agora DESENHE essa atividade favorita no papel! Use muitas CORES diferentes. Por exemplo: se você gosta de jogar bola, desenhe você jogando num campo verde com o sol amarelo e céu azul. Se gosta de ler, desenhe você sentado num sofá colorido com um livro nas mãos. Capriche nos detalhes!',
      'IDENTIFICAR SEU TRABALHO: No canto superior ou inferior do papel, escreva seu NOME completo e a DATA de hoje (Dia 1 - seguido pela data do dia). Isso marcará o início da sua jornada de 30 dias sem telas!',
      'COMPARTILHAR COM A FAMÍLIA: Leve seu desenho para mostrar para mamãe, papai, irmãos ou outras pessoas da casa. EXPLIQUE para eles o que você desenhou e por que gosta tanto dessa atividade. Converse sobre o desafio que está começando. Eles vão ficar orgulhosos de você! Depois, guarde o desenho num lugar especial - você vai compará-lo com outros desenhos no final do desafio.'
    ],
    tips: [
      'Seja criativo - não existe desenho certo ou errado!',
      'Use cores alegres e vibrantes.',
      'Guarde o desenho para comparar no final do desafio.'
    ],
    learningObjectives: [
      'Iniciar desconexão digital',
      'Expressar preferências através de arte',
      'Desenvolver autoconhecimento',
      'Valorizar atividades sem tela'
    ]
  },
  {
    id: 'dia-02-pintura-livre',
    day: 2,
    title: 'Pintura Livre',
    age: '6-10 anos',
    time: '30 min',
    difficulty: 'Fácil',
    materials: ['Lápis de cor', 'Papel branco'],
    steps: [
      'Pegue uma folha de papel em branco.',
      'Desenhe um arco-íris bem colorido.',
      'Use todas as cores que você tiver.',
      'Pinte com capricho, sem sair das linhas.',
      'Coloque seu nome no canto da folha.',
      'Pendure seu arco-íris no quarto!'
    ],
    tips: [
      'Lembre-se das cores do arco-íris: vermelho, laranja, amarelo, verde, azul, anil, violeta.',
      'Faça as cores bem vibrantes.',
      'Desenhe nuvens nas pontas do arco-íris.'
    ],
    learningObjectives: [
      'Aprender sobre cores e sequências',
      'Desenvolver coordenação motora',
      'Praticar concentração',
      'Estimular criatividade artística'
    ]
  },
  {
    id: 'dia-03-caca-tesouro',
    day: 3,
    title: 'Caça ao Tesouro',
    age: '6-10 anos',
    time: '45 min',
    difficulty: 'Médio',
    materials: ['5 brinquedos pequenos', 'Papel', 'Lápis'],
    steps: [
      'ESCOLHER OS TESOUROS: Procure pela casa e escolha 5 brinquedos PEQUENOS que serão os tesouros. Podem ser carrinhos, bonequinhos, blocos de montar, pedrinhas coloridas, moedas de brinquedo, etc. Escolha objetos que não sejam valiosos demais (nada que possa quebrar ou se perder) e que caibam na sua mão.',
      'ESCONDER COM SEGURANÇA: Agora é hora de esconder! Escolha 5 lugares DIFERENTES e SEGUROS da casa. Lugares BONS: atrás de almofadas, dentro de gavetas abertas, debaixo de um tapete, atrás de uma porta, dentro de uma caixa. Lugares que NÃO DEVE usar: lugares altos, dentro de eletrodomésticos, lugares molhados, ou onde tenha coisas frágeis. Memorize bem onde escondeu cada tesouro!',
      'DESENHAR O MAPA: Pegue uma folha de papel grande e desenhe um MAPA SIMPLES da sua casa. Não precisa ser perfeito! Desenhe os cômodos principais como retângulos: sala, cozinha, quarto, banheiro. Marque móveis importantes como sofá, mesa, cama. Use cores diferentes para cada cômodo.',
      'MARCAR OS TESOUROS: Nos lugares onde você escondeu os tesouros, desenhe um grande X vermelho ou uma estrela. Ao lado de cada X, você pode fazer um desenho pequeno do que está escondido ali. Por exemplo: se escondeu um carrinho atrás do sofá, desenhe um X atrás do sofá e um carrinho pequeno ao lado.',
      'INICIAR A CAÇA: Chame alguém da família - papai, mamãe, irmão, vovó - e entregue o mapa! Explique: "Eu escondi 5 tesouros pela casa. Use este mapa para encontrá-los!" Acompanhe a pessoa e dê dicas se ela estiver com dificuldade: "Está quente!" (perto) ou "Está frio!" (longe). Comemore quando ela encontrar cada tesouro!',
      'TROCAR OS PAPÉIS: Agora é SUA VEZ de ser o caçador de tesouros! Pegue os mesmos 5 objetos e peça para a outra pessoa escondê-los e fazer um mapa para você. Ou, se preferir, ela pode fazer pistas escritas em vez de mapa: "O primeiro tesouro está onde a família assiste TV" (atrás do sofá). Divirta-se procurando! Quem encontrou mais rápido? Vocês podem marcar o tempo e fazer uma competição amigável!'
    ],
    tips: [
      'Não esconda em lugares perigosos ou muito altos.',
      'Faça pistas fáceis ou difíceis conforme a idade.',
      'Divirtam-se juntos!'
    ],
    learningObjectives: [
      'Desenvolver pensamento espacial',
      'Praticar criação de mapas',
      'Estimular interação familiar',
      'Aprender sobre localização'
    ]
  },
  {
    id: 'dia-04-natureza-viva',
    day: 4,
    title: 'Natureza Viva',
    age: '6-10 anos',
    time: '30 min',
    difficulty: 'Fácil',
    materials: ['Papel', 'Lápis ou canetinhas'],
    steps: [
      'Saia para o quintal, varanda ou janela.',
      'Observe com atenção as plantas ao redor.',
      'Procure por insetos, flores ou folhas interessantes.',
      'Desenhe o que você viu.',
      'Escreva o nome da planta ou inseto (peça ajuda se precisar).',
      'Conte para alguém sobre suas descobertas!'
    ],
    tips: [
      'Não toque em insetos desconhecidos.',
      'Observe sem arrancar plantas.',
      'Use lupa se tiver uma para ver melhor.'
    ],
    learningObjectives: [
      'Aprender sobre natureza e biodiversidade',
      'Desenvolver observação científica',
      'Estimular curiosidade',
      'Conectar-se com o ambiente'
    ]
  },
  {
    id: 'dia-05-hora-leitura',
    day: 5,
    title: 'Hora da Leitura',
    age: '6-10 anos',
    time: '30 min',
    difficulty: 'Fácil',
    materials: ['Livro de histórias infantis'],
    steps: [
      'Escolha uma história infantil ou peça ajuda.',
      'Leia ou peça para um adulto ler para você.',
      'Preste atenção aos personagens e à história.',
      'Depois da leitura, pense sobre o que aprendeu.',
      'Conte para alguém qual foi a parte favorita.',
      'Desenhe o personagem principal se quiser!'
    ],
    tips: [
      'Escolha um lugar confortável para ler.',
      'Faça vozes diferentes para os personagens.',
      'Releia trechos que não entendeu.'
    ],
    learningObjectives: [
      'Desenvolver hábito de leitura',
      'Ampliar vocabulário',
      'Estimular imaginação',
      'Fortalecer vínculos através da leitura compartilhada'
    ]
  },
  {
    id: 'dia-06-massinha-divertida',
    day: 6,
    title: 'Massinha Divertida',
    age: '6-10 anos',
    time: '30 min',
    difficulty: 'Fácil',
    materials: ['Massinha de modelar de várias cores'],
    steps: [
      'Pegue a massinha e amasse bem.',
      'Crie figuras divertidas: animais, flores, comida.',
      'Use várias cores para deixar mais bonito.',
      'Misture cores para fazer novas cores.',
      'Mostre suas criações para a família.',
      'Guarde a massinha nos potes depois.'
    ],
    tips: [
      'Massinha ressecada? Adicione uma gotinha de água.',
      'Misture cores primárias para fazer secundárias.',
      'Não coma a massinha!'
    ],
    learningObjectives: [
      'Desenvolver coordenação motora fina',
      'Aprender sobre cores e misturas',
      'Estimular criatividade tridimensional',
      'Praticar organização (guardar depois)'
    ]
  },
  {
    id: 'dia-07-gratidao',
    day: 7,
    title: 'Gratidão',
    age: '6-10 anos',
    time: '20 min',
    difficulty: 'Fácil',
    materials: ['Papel', 'Lápis ou canetinhas'],
    steps: [
      'Pense em 3 coisas pelas quais você é grato hoje.',
      'Podem ser pessoas, coisas, momentos felizes.',
      'Escreva ou desenhe cada uma delas.',
      'Agradeça a Deus pelas bênçãos.',
      'Compartilhe com alguém da família.',
      'Guarde para ler quando estiver triste.'
    ],
    tips: [
      'Não precisa ser algo grande - pequenas coisas contam!',
      'Pense em família, saúde, amigos, brinquedos.',
      'Pratique gratidão todos os dias.'
    ],
    learningObjectives: [
      'Desenvolver gratidão e positividade',
      'Reconhecer bênçãos diárias',
      'Fortalecer fé e espiritualidade',
      'Praticar expressão de sentimentos'
    ]
  },
  {
    id: 'dia-08-construcao-criativa',
    day: 8,
    title: 'Construção Criativa',
    age: '6-10 anos',
    time: '40 min',
    difficulty: 'Médio',
    materials: ['Blocos, tampinhas, papelão ou outros materiais'],
    steps: [
      'Reúna blocos, tampinhas, caixas ou papelão.',
      'Imagine o que você quer construir.',
      'Monte sua invenção: pode ser torre, carro, castelo.',
      'Seja criativo - não existe jeito certo!',
      'Dê um nome para sua criação.',
      'Tire foto mental ou desenhe para lembrar!'
    ],
    tips: [
      'Teste diferentes combinações.',
      'Se cair, tente de novo - faz parte!',
      'Crie uma história sobre sua invenção.'
    ],
    learningObjectives: [
      'Desenvolver pensamento espacial',
      'Praticar resolução de problemas',
      'Estimular engenharia básica',
      'Aprender com tentativa e erro'
    ]
  },
  {
    id: 'dia-09-jogo-familia',
    day: 9,
    title: 'Jogo em Família',
    age: '6-10 anos',
    time: '45 min',
    difficulty: 'Fácil',
    materials: ['Jogo de tabuleiro ou cartas'],
    steps: [
      'Escolha um jogo de tabuleiro da casa.',
      'Convide pelo menos uma pessoa da família.',
      'Expliquem as regras juntos.',
      'Joguem com diversão - sem celular!',
      'Parabenize quem ganhar.',
      'Proponha jogar de novo outro dia!'
    ],
    tips: [
      'O importante é se divertir, não só ganhar.',
      'Seja um bom perdedor e um vencedor humilde.',
      'Ajude quem não entendeu as regras.'
    ],
    learningObjectives: [
      'Fortalecer vínculos familiares',
      'Desenvolver respeito às regras',
      'Praticar espírito esportivo',
      'Estimular raciocínio lógico'
    ]
  },
  {
    id: 'dia-10-musica-ritmo',
    day: 10,
    title: 'Música e Ritmo',
    age: '6-10 anos',
    time: '30 min',
    difficulty: 'Fácil',
    materials: ['Palmas e voz'],
    steps: [
      'Bata palmas criando um ritmo.',
      'Invente uma canção sobre o seu dia.',
      'Pode ser curta e simples!',
      'Cante com alegria.',
      'Dance acompanhando a música.',
      'Ensine sua canção para alguém!'
    ],
    tips: [
      'Não se preocupe se desafinar - o importante é se divertir!',
      'Use objetos para fazer sons diferentes.',
      'Grave mentalmente sua música.'
    ],
    learningObjectives: [
      'Desenvolver expressão musical',
      'Estimular criatividade rítmica',
      'Praticar coordenação motora',
      'Fortalecer autoconfiança'
    ]
  },
  {
    id: 'dia-11-ajuda-casa',
    day: 11,
    title: 'Ajuda em Casa',
    age: '6-10 anos',
    time: '30 min',
    difficulty: 'Fácil',
    materials: ['Disposição para ajudar'],
    steps: [
      'Olhe ao redor e veja o que precisa arrumar.',
      'Guarde seus brinquedos nos lugares certos.',
      'Arrume sua cama.',
      'Organize seu quarto com capricho.',
      'Faça tudo com amor e boa vontade.',
      'Sinta-se bem por ter ajudado!'
    ],
    tips: [
      'Coloque música para ficar mais divertido.',
      'Faça um brinquedo de cada vez.',
      'Peça ajuda se algo for muito pesado.'
    ],
    learningObjectives: [
      'Desenvolver responsabilidade',
      'Aprender organização',
      'Praticar autonomia',
      'Valorizar contribuição familiar'
    ]
  },
  {
    id: 'dia-12-mini-cientista',
    day: 12,
    title: 'Mini Cientista',
    age: '6-10 anos',
    time: '20 min',
    difficulty: 'Médio',
    materials: ['Água', 'Farinha', 'Tigela'],
    steps: [
      'Peça ajuda de um adulto.',
      'Coloque farinha em uma tigela.',
      'Adicione água aos poucos.',
      'Misture e observe o que acontece.',
      'Veja como a textura muda.',
      'Explique o resultado que observou!'
    ],
    tips: [
      'Comece com pouca água.',
      'Observe as mudanças de textura.',
      'Limpe tudo depois do experimento.'
    ],
    learningObjectives: [
      'Desenvolver curiosidade científica',
      'Aprender sobre misturas',
      'Praticar observação',
      'Estimular pensamento experimental'
    ]
  },
  {
    id: 'dia-13-brincar-fora',
    day: 13,
    title: 'Brincar Lá Fora',
    age: '6-10 anos',
    time: '45 min',
    difficulty: 'Fácil',
    materials: ['Corda, bola ou giz (opcional)'],
    steps: [
      'Vista roupas confortáveis.',
      'Vá para o quintal, parque ou área livre.',
      'Corra, pule corda, jogue bola.',
      'Brinque de amarelinha se tiver giz.',
      'Sinta o vento e o sol (com protetor!).',
      'Aproveite a natureza e o ar livre!'
    ],
    tips: [
      'Use protetor solar.',
      'Beba água antes e depois.',
      'Convide amigos ou família para brincar junto.'
    ],
    learningObjectives: [
      'Desenvolver saúde física',
      'Estimular atividade ao ar livre',
      'Praticar coordenação motora',
      'Conectar-se com a natureza'
    ]
  },
  {
    id: 'dia-14-culinaria-adulto',
    day: 14,
    title: 'Culinária com Adulto',
    age: '6-10 anos',
    time: '30-45 min',
    difficulty: 'Médio',
    materials: ['Ingredientes para lanche simples'],
    steps: [
      'Peça a um adulto para cozinhar junto.',
      'Escolham uma receita simples (sanduíche, vitamina, salada de frutas).',
      'Separem os ingredientes.',
      'Preparem juntos passo a passo.',
      'Contem quantos ingredientes usaram.',
      'Saboreiem o que fizeram!'
    ],
    tips: [
      'Sempre peça ajuda com facas e fogão.',
      'Lave as mãos antes de começar.',
      'Divirta-se aprendendo!'
    ],
    learningObjectives: [
      'Desenvolver habilidades culinárias básicas',
      'Aprender sobre alimentação saudável',
      'Praticar matemática (contar, medir)',
      'Fortalecer laços familiares'
    ]
  },
  {
    id: 'dia-15-desenho-semana',
    day: 15,
    title: 'Desenho da Semana',
    age: '6-10 anos',
    time: '30 min',
    difficulty: 'Fácil',
    materials: ['Papel', 'Lápis de cor'],
    steps: [
      'Pense em qual atividade foi sua favorita até agora.',
      'Pegue papel e lápis de cor.',
      'Desenhe essa atividade com detalhes.',
      'Use cores bonitas e vibrantes.',
      'Mostre para alguém da família.',
      'Explique por que essa foi sua favorita!'
    ],
    tips: [
      'Desenhe você fazendo a atividade.',
      'Adicione cor ao fundo.',
      'Guarde para o álbum do desafio.'
    ],
    learningObjectives: [
      'Desenvolver reflexão e autoavaliação',
      'Praticar expressão artística',
      'Estimular memória',
      'Valorizar experiências positivas'
    ]
  },
  {
    id: 'dia-16-faz-de-conta',
    day: 16,
    title: 'Faz de Conta',
    age: '6-10 anos',
    time: '40 min',
    difficulty: 'Fácil',
    materials: ['Imaginação', 'Fantasias ou adereços (opcional)'],
    steps: [
      'Escolha um personagem: super-herói, médico, professor, bombeiro.',
      'Vista-se ou use adereços se tiver.',
      'Crie uma pequena história sobre esse personagem.',
      'Represente a história.',
      'Convide alguém para participar.',
      'Divirta-se sendo outra pessoa!'
    ],
    tips: [
      'Use roupas velhas como fantasia.',
      'Crie cenários com objetos da casa.',
      'Grave a história na memória para contar depois.'
    ],
    learningObjectives: [
      'Desenvolver imaginação e criatividade',
      'Aprender sobre diferentes profissões',
      'Praticar expressão dramática',
      'Estimular empatia'
    ]
  },
  {
    id: 'dia-17-plantinha-amiga',
    day: 17,
    title: 'Plantinha Amiga',
    age: '6-10 anos',
    time: '20 min + observação diária',
    difficulty: 'Fácil',
    materials: ['Copo com terra', 'Semente de feijão'],
    steps: [
      'Peça ajuda para conseguir terra e uma semente.',
      'Coloque terra em um copo transparente.',
      'Plante a semente não muito fundo.',
      'Regue com cuidado.',
      'Coloque em local com luz.',
      'Observe o crescimento todos os dias!'
    ],
    tips: [
      'Não encharque - apenas mantenha úmido.',
      'Anote ou desenhe o crescimento.',
      'Tenha paciência - pode levar dias para brotar.'
    ],
    learningObjectives: [
      'Aprender sobre ciclo de vida das plantas',
      'Desenvolver responsabilidade e cuidado',
      'Praticar observação científica',
      'Estimular paciência'
    ]
  },
  {
    id: 'dia-18-piquenique',
    day: 18,
    title: 'Piquenique',
    age: '6-10 anos',
    time: '45 min',
    difficulty: 'Fácil',
    materials: ['Toalha', 'Lanches', 'Brinquedos'],
    steps: [
      'Escolha um local: sala, quintal ou varanda.',
      'Estenda uma toalha no chão.',
      'Prepare lanches simples com ajuda.',
      'Leve frutas e água.',
      'Leve alguns brinquedos.',
      'Aproveite o piquenique em família!'
    ],
    tips: [
      'Convide todos da família.',
      'Faça sanduíches divertidos.',
      'Brinque de adivinhação durante o piquenique.'
    ],
    learningObjectives: [
      'Fortalecer vínculos familiares',
      'Aprender sobre alimentação em grupo',
      'Praticar organização de eventos',
      'Criar memórias felizes'
    ]
  },
  {
    id: 'dia-19-reciclar-criar',
    day: 19,
    title: 'Reciclar e Criar',
    age: '6-10 anos',
    time: '40 min',
    difficulty: 'Médio',
    materials: ['Embalagens vazias', 'Cola', 'Tesoura', 'Decoração'],
    steps: [
      'Separe embalagens limpas: caixas, garrafas, rolos.',
      'Pense no que você quer construir.',
      'Cole e monte sua criação.',
      'Decore com papel, canetinha ou adesivos.',
      'Dê um nome para sua obra!',
      'Explique como fizeram para alguém.'
    ],
    tips: [
      'Peça ajuda para cortar.',
      'Lave bem as embalagens antes.',
      'Seja criativo - use sua imaginação!'
    ],
    learningObjectives: [
      'Aprender sobre reciclagem e sustentabilidade',
      'Desenvolver criatividade com reaproveitamento',
      'Praticar construção e engenharia',
      'Valorizar recursos'
    ]
  },
  {
    id: 'dia-20-cartinha-especial',
    day: 20,
    title: 'Cartinha Especial',
    age: '6-10 anos',
    time: '30 min',
    difficulty: 'Fácil',
    materials: ['Papel', 'Lápis ou caneta', 'Envelope (opcional)'],
    steps: [
      'Pense em alguém que você ama muito.',
      'Pegue um papel bonito.',
      'Escreva uma carta para essa pessoa.',
      'Fale coisas boas e carinhosas.',
      'Desenhe corações ou flores.',
      'Entregue a carta pessoalmente!'
    ],
    tips: [
      'Escreva com letra caprichada.',
      'Seja sincero e carinhoso.',
      'Dobre a carta de forma especial.'
    ],
    learningObjectives: [
      'Desenvolver expressão escrita',
      'Praticar demonstração de afeto',
      'Fortalecer relacionamentos',
      'Estimular gratidão'
    ]
  },
  {
    id: 'dia-21-desafio-silencio',
    day: 21,
    title: 'Desafio do Silêncio',
    age: '6-10 anos',
    time: '10 min',
    difficulty: 'Médio',
    materials: ['Apenas você e silêncio'],
    steps: [
      'Encontre um lugar confortável e seguro.',
      'Sente-se ou deite-se.',
      'Fique 5 minutos em silêncio total.',
      'Feche os olhos e ouça os sons ao redor.',
      'Preste atenção: pássaros, vento, vozes distantes.',
      'Depois, conte o que ouviu para alguém!'
    ],
    tips: [
      'Tente não se mexer muito.',
      'É difícil no começo - é normal!',
      'Pratique respirar devagar.'
    ],
    learningObjectives: [
      'Desenvolver concentração',
      'Praticar mindfulness básico',
      'Estimular percepção auditiva',
      'Aprender sobre quietude'
    ]
  },
  {
    id: 'dia-22-aprendendo-bondade',
    day: 22,
    title: 'Aprendendo Bondade',
    age: '6-10 anos',
    time: '20 min',
    difficulty: 'Fácil',
    materials: ['Atitude positiva'],
    steps: [
      'Pense em como pode ajudar alguém hoje.',
      'Ofereça ajuda a um familiar.',
      'Dê um sorriso genuíno.',
      'Diga palavras gentis.',
      'Faça algo legal sem pedir nada em troca.',
      'Anote como você se sentiu depois!'
    ],
    tips: [
      'Pequenos gestos fazem grande diferença.',
      'Seja sincero na sua bondade.',
      'Observe como a pessoa ficou feliz.'
    ],
    learningObjectives: [
      'Desenvolver empatia e compaixão',
      'Praticar altruísmo',
      'Aprender sobre gentileza',
      'Fortalecer valores morais'
    ]
  },
  {
    id: 'dia-23-dia-agua',
    day: 23,
    title: 'Dia da Água',
    age: '6-10 anos',
    time: '30 min',
    difficulty: 'Fácil',
    materials: ['Água', 'Sabão', 'Canudo (opcional)'],
    steps: [
      'Com ajuda, misture água e sabão.',
      'Faça bolhas de sabão.',
      'Brinque com cuidado.',
      'Observe as cores nas bolhas.',
      'Converse sobre a importância da água.',
      'Economize água durante o dia!'
    ],
    tips: [
      'Brinque em local que possa molhar.',
      'Não desperdice água.',
      'Conte quantas bolhas consegue fazer.'
    ],
    learningObjectives: [
      'Aprender sobre importância da água',
      'Desenvolver consciência ambiental',
      'Praticar física (tensão superficial)',
      'Estimular diversão simples'
    ]
  },
  {
    id: 'dia-24-hora-arte',
    day: 24,
    title: 'Hora da Arte',
    age: '6-10 anos',
    time: '40 min',
    difficulty: 'Médio',
    materials: ['Revistas velhas', 'Tesoura', 'Cola', 'Papel'],
    steps: [
      'Pegue revistas velhas (com permissão).',
      'Recorte figuras coloridas que você gosta.',
      'Cole as figuras em um papel grande.',
      'Monte um painel bem colorido.',
      'Crie uma história com as figuras!',
      'Mostre sua arte para todos.'
    ],
    tips: [
      'Peça ajuda para recortar.',
      'Organize antes de colar.',
      'Seja criativo nas combinações!'
    ],
    learningObjectives: [
      'Desenvolver colagem e composição',
      'Praticar narrativa visual',
      'Estimular criatividade artística',
      'Aprender sobre reciclagem criativa'
    ]
  },
  {
    id: 'dia-25-contando-historias',
    day: 25,
    title: 'Contando Histórias',
    age: '6-10 anos',
    time: '30 min',
    difficulty: 'Fácil',
    materials: ['Imaginação'],
    steps: [
      'Invente uma história do zero.',
      'Crie personagens engraçados.',
      'Pense em um problema e uma solução.',
      'Conte a história para alguém.',
      'Use vozes diferentes para cada personagem.',
      'Desenhe a história se quiser!'
    ],
    tips: [
      'Comece com "Era uma vez..."',
      'Não precisa ser longa.',
      'Deixe a imaginação fluir!'
    ],
    learningObjectives: [
      'Desenvolver narrativa e estrutura de história',
      'Praticar expressão oral',
      'Estimular imaginação',
      'Fortalecer confiança para falar'
    ]
  },
  {
    id: 'dia-26-pequeno-inventor',
    day: 26,
    title: 'Pequeno Inventor',
    age: '6-10 anos',
    time: '45 min',
    difficulty: 'Médio',
    materials: ['Materiais diversos de casa'],
    steps: [
      'Olhe ao redor e veja o que tem disponível.',
      'Pense em algo novo para inventar.',
      'Use criatividade para criar sua invenção.',
      'Monte e teste se funciona.',
      'Explique para a família como funciona.',
      'Dê um nome científico para sua invenção!'
    ],
    tips: [
      'Não precisa ser perfeito.',
      'Teste e melhore sua invenção.',
      'Desenhe um projeto antes de montar.'
    ],
    learningObjectives: [
      'Desenvolver pensamento inventivo',
      'Praticar resolução de problemas',
      'Estimular engenharia criativa',
      'Aprender sobre processo de criação'
    ]
  },
  {
    id: 'dia-27-musica-louvor',
    day: 27,
    title: 'Música de Louvor',
    age: '6-10 anos',
    time: '20 min',
    difficulty: 'Fácil',
    materials: ['Voz e coração'],
    steps: [
      'Escolha uma música sobre amor e fé.',
      'Cante com alegria no coração.',
      'Agradeça a Deus pela sua vida.',
      'Agradeça pela família e saúde.',
      'Cante para alguém especial.',
      'Sinta a paz ao louvar!'
    ],
    tips: [
      'Não se preocupe com a voz.',
      'Cante do coração.',
      'Convide a família para cantar junto.'
    ],
    learningObjectives: [
      'Fortalecer fé e espiritualidade',
      'Desenvolver expressão musical',
      'Praticar gratidão',
      'Cultivar paz interior'
    ]
  },
  {
    id: 'dia-28-dia-amizade',
    day: 28,
    title: 'Dia da Amizade',
    age: '6-10 anos',
    time: '45 min',
    difficulty: 'Fácil',
    materials: ['Telefone (para ligar) ou visita'],
    steps: [
      'Pense em um amigo especial.',
      'Telefone ou visite esse amigo (sem usar celular por diversão).',
      'Conversem sobre coisas legais.',
      'Brinquem juntos se possível.',
      'Depois, desenhe você e seu amigo juntos!',
      'Agradeça pela amizade.'
    ],
    tips: [
      'Peça ajuda aos pais para organizar.',
      'Seja gentil e educado.',
      'Aproveite o tempo juntos!'
    ],
    learningObjectives: [
      'Fortalecer amizades',
      'Desenvolver habilidades sociais',
      'Praticar comunicação sem telas',
      'Valorizar relacionamentos'
    ]
  },
  {
    id: 'dia-29-noite-estrelas',
    day: 29,
    title: 'Noite das Estrelas',
    age: '6-10 anos',
    time: '30 min',
    difficulty: 'Fácil',
    materials: ['Céu estrelado'],
    steps: [
      'À noite, vá para fora com um adulto.',
      'Olhe para o céu.',
      'Conte quantas estrelas consegue ver.',
      'Procure a lua e observe sua forma.',
      'Faça um desejo positivo!',
      'Agradeça pela beleza da criação.'
    ],
    tips: [
      'Escolha noite sem muitas nuvens.',
      'Desligue luzes próximas para ver melhor.',
      'Leve um cobertor para deitar e observar.'
    ],
    learningObjectives: [
      'Aprender sobre astronomia básica',
      'Desenvolver apreciação da natureza',
      'Estimular curiosidade científica',
      'Cultivar admiração pelo universo'
    ]
  },
  {
    id: 'dia-30-grande-final',
    day: 30,
    title: 'Grande Final!',
    age: '6-10 anos',
    time: '45 min',
    difficulty: 'Fácil',
    materials: ['Papel', 'Caneta', 'Todos os desenhos do desafio'],
    steps: [
      'Parabéns por completar 30 dias!',
      'Pegue papel e caneta.',
      'Escreva como foi passar 30 dias com menos celular.',
      'O que você aprendeu? Do que mais gostou?',
      'Reúna todos os desenhos e trabalhos que fez.',
      'Guarde tudo como lembrança deste desafio especial!',
      'Celebre com a família!'
    ],
    tips: [
      'Seja sincero sobre o que sentiu.',
      'Conte as atividades favoritas.',
      'Decida se vai continuar com menos telas!'
    ],
    learningObjectives: [
      'Desenvolver reflexão e autoavaliação',
      'Reconhecer crescimento pessoal',
      'Valorizar conquistas',
      'Celebrar persistência e dedicação'
    ]
  }
];
