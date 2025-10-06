export interface ScientificInvention {
  id: string;
  title: string;
  age: string;
  time: string;
  difficulty: 'Fácil' | 'Média' | 'Difícil';
  materials: string[];
  steps: string[];
  explanation: string;
  safetyTips: string[];
  learningObjectives: string[];
}

export const scientificInventions: ScientificInvention[] = [
  {
    id: 'tornado-garrafa',
    title: 'Tornado na Garrafa — Vórtice de Água',
    age: '5+ anos',
    time: '15–30 min',
    difficulty: 'Fácil',
    materials: [
      '2 garrafas PET vazias e limpas',
      'Fita adesiva resistente ou fita isolante',
      'Água',
      'Corante alimentício (opcional)',
      'Purpurina (opcional)'
    ],
    steps: [
      'PREPARAÇÃO DA ÁGUA: Pegue uma das garrafas PET e encha com água limpa até cerca de 3/4 da capacidade total (aproximadamente 400ml para garrafas de 500ml). Deixe espaço para o ar circular.',
      'COLORIR A ÁGUA (Opcional): Adicione 3-5 gotas de corante alimentício vermelho, azul ou verde na água. Mexa delicadamente com um palito para misturar bem. Isso ajudará a visualizar melhor o movimento do tornado.',
      'ADICIONAR PURPURINA (Opcional): Coloque uma pequena pitada (cerca de 1/4 de colher de chá) de purpurina na água colorida. A purpurina girará junto com o vórtice, tornando o efeito visual ainda mais impressionante.',
      'PREPARAR AS TAMPAS: Pegue as duas tampas das garrafas. Com fita adesiva resistente ou fita isolante, una as tampas uma contra a outra, base com base, formando uma peça única. Certifique-se de que estejam bem firmes e alinhadas. Cole várias camadas de fita para garantir que não vazará.',
      'MONTAR O SISTEMA: Rosqueie a garrafa com água em uma das tampas coladas. Depois, rosqueie a garrafa vazia na outra tampa. Aperte bem para não ter vazamentos. Teste segurando pelas tampas para ver se está firme.',
      'POSICIONAR: Vire todo o sistema de cabeça para baixo, colocando a garrafa cheia em cima e a vazia embaixo. Segure pelas tampas coladas para manter tudo junto.',
      'CRIAR O TORNADO: Com as mãos, faça movimentos circulares rápidos e firmes com o conjunto de garrafas, girando sempre na mesma direção (sentido horário ou anti-horário). Faça isso por 3-5 segundos.',
      'OBSERVAR O VÓRTICE: Pare de girar e observe! A água começará a descer em formato de tornado/redemoinho, criando um túnel de ar visível no centro. A purpurina e o corante ajudarão a ver o movimento espiral da água. O processo leva cerca de 30-60 segundos para toda a água descer.'
    ],
    explanation: 'A água forma um vórtice (redemoinho) pela conservação do momento angular. Quando você gira as garrafas, a água começa a girar e, ao descer, cria um túnel de ar no centro. A diferença de pressão entre o topo e o fundo da garrafa, combinada com a rotação, forma o tornado visível.',
    safetyTips: [
      'Use garrafas de plástico, nunca de vidro.',
      'Certifique-se de que as tampas estejam bem coladas para evitar vazamentos.',
      'Realize a atividade sobre uma superfície que possa ser molhada.',
      'Supervisão adulta recomendada para crianças menores.'
    ],
    learningObjectives: [
      'Compreender o conceito de vórtice e momento angular',
      'Observar fenômenos naturais em escala reduzida',
      'Aprender sobre pressão atmosférica e movimento de fluidos'
    ]
  },
  {
    id: 'pilha-limao',
    title: 'Pilha de Limão — Bateria de Frutas',
    age: '8+ anos',
    time: '30 min',
    difficulty: 'Média',
    materials: [
      '3-4 limões frescos e suculentos',
      'Moedas de cobre (pode usar moedas de 5 centavos antigas)',
      'Pregos galvanizados (revestidos com zinco) ou clipes de papel galvanizados',
      'Fios com garras jacaré ou fios de cobre',
      '1 LED de baixa voltagem ou relógio digital pequeno'
    ],
    steps: [
      'PREPARAR OS LIMÕES: Pegue cada limão e aperte-o levemente com as mãos, rolando sobre uma mesa ou superfície dura. Isso rompe as membranas internas e libera mais suco, aumentando a condutividade. Faça isso por 10-15 segundos em cada limão.',
      'FAZER OS CORTES: Com ajuda de um adulto, faça dois pequenos cortes paralelos em cada limão, com cerca de 2 cm de distância entre eles. Os cortes devem ter aproximadamente 1,5 cm de profundidade - o suficiente para inserir a moeda e o prego.',
      'INSERIR OS ELETRODOS: Insira uma moeda de cobre em um dos cortes de cada limão, deixando uma parte da moeda para fora (para conectar o fio). No outro corte do mesmo limão, insira um prego galvanizado. Importante: a moeda e o prego não podem se tocar dentro do limão!',
      'VERIFICAR OS ELETRODOS: Confirme que cada limão tem um eletrodo de cobre (moeda) e um de zinco (prego), e que eles estão firmemente inseridos, mas sem se tocar. Se tocarem, não haverá diferença de potencial.',
      'CONECTAR EM SÉRIE: Use fios com garras jacaré para conectar os limões. Ligue o PREGO de um limão à MOEDA do próximo limão. Repita até conectar todos os limões em uma cadeia. Isso soma as voltagens de cada limão.',
      'PREPARAR OS TERMINAIS: No PRIMEIRO limão da cadeia, deixe um fio conectado apenas à MOEDA (será o polo positivo). No ÚLTIMO limão, deixe um fio conectado apenas ao PREGO (será o polo negativo). Agora você tem dois fios livres.',
      'CONECTAR O LED: Pegue o LED e observe que ele tem duas perninhas de tamanhos diferentes. A perninha mais longa é o positivo (+) e a mais curta é o negativo (-). Conecte o fio da primeira moeda (positivo) na perna longa do LED, e o fio do último prego (negativo) na perna curta.',
      'TESTAR E OBSERVAR: O LED deve acender com uma luz fraca mas visível! Se não acender, inverta os fios do LED (troque de perna). Se ainda assim não funcionar, verifique todas as conexões e certifique-se de que os eletrodos não estão se tocando dentro dos limões. Você criou uma bateria viva!'
    ],
    explanation: 'A reação química entre o ácido cítrico do limão, o cobre (moeda) e o zinco (prego galvanizado) gera corrente elétrica. O ácido age como eletrólito, permitindo que os elétrons fluam do zinco para o cobre, criando uma diferença de potencial (voltagem). Cada limão produz cerca de 0,9 volts, e conectando vários em série, somamos as voltagens.',
    safetyTips: [
      'Não ingira o suco dos limões usados no experimento.',
      'Lave as mãos após manusear moedas e pregos.',
      'Supervisão adulta obrigatória ao usar ferramentas pontiagudas.',
      'Use LEDs de baixa voltagem para evitar danos.'
    ],
    learningObjectives: [
      'Entender como funciona uma bateria química',
      'Aprender sobre circuitos elétricos e polaridade',
      'Compreender reações de oxidação e redução',
      'Descobrir fontes alternativas de energia'
    ]
  },
  {
    id: 'bristlebot',
    title: 'Bristlebot — Robô Vibratório',
    age: '8+ anos',
    time: '45 min',
    difficulty: 'Média',
    materials: [
      '1 escova de dentes velha',
      '1 motor vibratório pequeno (pode ser retirado de celular velho)',
      '1 pilha de botão (CR2032) ou 2 pilhas AAA com suporte',
      'Fita adesiva dupla face ou cola quente',
      'Fios finos',
      'Tesoura'
    ],
    steps: [
      'PREPARAR A BASE: Com ajuda de um adulto, use uma tesoura para cortar a cabeça da escova de dentes velha. Corte logo abaixo das cerdas, mantendo toda a parte com as cerdas intacta (cerca de 3-4 cm). Descarte o cabo.',
      'VERIFICAR A BASE: Coloque a base da escova sobre uma mesa com as cerdas apontando para baixo. A base deve estar relativamente plana. Se necessário, corte pequenos ajustes nas laterais para equilibrar melhor.',
      'FIXAR O MOTOR: Pegue o motor vibratório (daqueles pequenos que vibram celulares) e posicione-o no TOPO da cabeça da escova, bem no centro. Use cola quente ou fita dupla face para fixá-lo firmemente. Aguarde a cola secar completamente (1-2 minutos).',
      'PREPARAR A CONEXÃO ELÉTRICA: O motor tem dois fios (geralmente vermelho e preto ou ambos da mesma cor). Pegue a pilha de botão (CR2032). Você precisará conectar um fio em cada lado da pilha.',
      'CONECTAR OS FIOS: Conecte um fio do motor na parte de cima da pilha (lado positivo +, geralmente com símbolo) e o outro fio na parte de baixo (lado negativo -). Use fita adesiva pequena para segurar cada fio no lugar da pilha.',
      'FIXAR A PILHA: Com fita adesiva ou cola quente, fixe a pilha (já com os fios conectados) também no topo da escova, ao lado do motor. Certifique-se de que o peso esteja distribuído de forma equilibrada.',
      'TESTAR O EQUILÍBRIO: Antes de ligar, coloque o robô numa superfície lisa. Ele deve ficar de pé sobre as cerdas. Se tombar para um lado, reposicione o motor ou a pilha até equilibrar.',
      'LIGAR E OBSERVAR: Certifique-se de que os fios estejam bem conectados à pilha. O motor começará a vibrar automaticamente. Coloque seu bristlebot em uma mesa lisa e observe! Ele se moverá de forma imprevisível - girando, andando para frente, para os lados. A vibração faz as cerdas "andarem" pela superfície!'
    ],
    explanation: 'A vibração do motor cria movimento irregular nas cerdas da escova. Quando o motor gira com um peso desbalanceado, ele vibra rapidamente. Essa vibração é transferida para as cerdas, que empurram contra a superfície em diferentes direções, fazendo o robô se mover. O movimento parece ter vida própria porque a vibração não é uniforme.',
    safetyTips: [
      'Supervisão adulta obrigatória ao usar cola quente.',
      'Cuidado ao desmontar eletrônicos velhos.',
      'Não deixe pilhas ao alcance de crianças pequenas.',
      'Verifique se não há fios expostos que possam causar curto-circuito.'
    ],
    learningObjectives: [
      'Compreender como vibração se converte em movimento',
      'Aprender sobre motores e circuitos simples',
      'Desenvolver habilidades de montagem e engenharia básica',
      'Introdução à robótica de forma lúdica'
    ]
  },
  {
    id: 'semente-magica',
    title: 'Semente Mágica — Estação de Germinação',
    age: '6+ anos',
    time: 'Vários dias (observação)',
    difficulty: 'Fácil',
    materials: [
      'Algodão ou papel toalha',
      'Potes ou copos transparentes (plástico ou vidro)',
      'Sementes de feijão, lentilha ou alpiste',
      'Água',
      'Etiquetas e caneta (para anotar datas)'
    ],
    steps: [
      'PREPARAR O ALGODÃO: Molhe um punhado de algodão ou papel toalha em água limpa. Esprema bem para tirar o excesso - o algodão deve ficar úmido, mas não pingando. Coloque esta camada de algodão úmido no fundo do pote transparente, formando uma base de cerca de 2 cm de altura.',
      'POSICIONAR AS SEMENTES: Escolha 2-3 sementes de feijão, lentilha ou alpiste (feijão germina mais rápido e é mais fácil de observar). Posicione cada semente ENCOSTADA na parede transparente do pote, em cima do algodão. Isso permitirá ver a raiz crescendo!',
      'COBRIR AS SEMENTES: Pegue outro pedaço de algodão úmido (não encharcado) e cubra levemente as sementes, pressionando suavemente para que fiquem no lugar. As sementes devem estar visíveis através do pote, mas protegidas pelo algodão.',
      'ESCOLHER O LOCAL: Coloque o pote perto de uma janela onde receba luz INDIRETA (luz natural, mas não sol direto). A temperatura ideal é entre 20-25°C. Evite lugares muito frios ou muito quentes.',
      'CUIDADO DIÁRIO: Todos os dias, pela manhã, borrife um pouco de água no algodão (use um borrifador ou suas mãos molhadas). O algodão deve estar sempre úmido ao toque, mas nunca encharcado. Se houver água acumulada no fundo, despeje o excesso.',
      'OBSERVAR E REGISTRAR: Diariamente, observe as mudanças. DIA 1-2: A semente incha. DIA 3-4: Aparece a raizinha branca (ela cresce para baixo). DIA 5-6: O caule verde aparece (cresce para cima). DIA 7-10: As primeiras folhinhas se abrem. Desenhe ou anote o que vê cada dia!',
      'TRANSPLANTAR (Opcional): Após 7-10 dias, quando a muda tiver 5-10 cm e folhas verdes, você pode transplantá-la para um vasinho com terra. Faça um buraco pequeno na terra, coloque a muda com cuidado (sem machucar a raiz) e cubra. Regue levemente e continue cuidando!'
    ],
    explanation: 'A semente contém um embrião de planta e nutrientes armazenados. Para germinar, ela precisa de três elementos essenciais: água (para ativar enzimas), oxigênio (para respiração celular) e temperatura adequada. A água amolece a casca da semente, permitindo que o embrião cresça. Primeiro surge a raiz (que busca água e nutrientes), depois o caule e as primeiras folhas (que buscam luz para fotossíntese).',
    safetyTips: [
      'Use sementes orgânicas e não tratadas quimicamente.',
      'Não deixe água acumulada (risco de mofo).',
      'Lave as mãos após manusear sementes e terra.',
      'Supervisão para garantir que crianças não ingiram sementes.'
    ],
    learningObjectives: [
      'Compreender o ciclo de vida das plantas',
      'Observar germinação em tempo real',
      'Aprender sobre necessidades básicas dos seres vivos',
      'Desenvolver paciência e responsabilidade no cuidado diário'
    ]
  },
  {
    id: 'vulcao-camadas',
    title: 'Vulcão de Camadas — Reação e Pressão',
    age: '7+ anos',
    time: '30 min',
    difficulty: 'Fácil',
    materials: [
      '1 garrafa pequena de plástico (200-300ml)',
      '3 colheres de sopa de bicarbonato de sódio',
      '100ml de vinagre branco',
      'Corante alimentício vermelho ou laranja',
      'Massa de modelar ou argila',
      'Detergente líquido (opcional, para mais espuma)',
      'Bandeja ou recipiente grande para conter a bagunça'
    ],
    steps: [
      'Coloque a garrafa no centro da bandeja.',
      'Modele a massa de modelar ao redor da garrafa, formando um vulcão (deixe a boca da garrafa livre).',
      'Adicione o bicarbonato de sódio dentro da garrafa.',
      'Adicione algumas gotas de corante vermelho ou laranja.',
      'Adicione uma colher de detergente para criar mais espuma (opcional).',
      'No momento da "erupção", despeje o vinagre rapidamente na garrafa.',
      'Observe a "lava" espumosa sair pela boca do vulcão!',
      'Repita o experimento variando as quantidades para diferentes intensidades de erupção.'
    ],
    explanation: 'A reação química entre o vinagre (ácido acético) e o bicarbonato de sódio (base) produz gás carbônico (CO2), água e acetato de sódio. O gás CO2 cria pressão dentro da garrafa e força a mistura espumosa para fora, simulando uma erupção vulcânica. O detergente ajuda a criar espuma, tornando a "lava" mais visível e dramática.',
    safetyTips: [
      'Realize o experimento em área externa ou proteja bem a superfície.',
      'Não ingira os materiais.',
      'Evite contato do vinagre com os olhos.',
      'Supervisão adulta recomendada.',
      'Use roupas velhas ou avental.'
    ],
    learningObjectives: [
      'Compreender reações químicas ácido-base',
      'Observar produção de gases e pressão',
      'Simular fenômenos geológicos naturais',
      'Aprender sobre vulcões e erupções de forma lúdica'
    ]
  },
  {
    id: 'arco-iris-camadas',
    title: 'Arco-íris em Camadas — Densidade de Líquidos',
    age: '9+ anos',
    time: '40 min',
    difficulty: 'Média',
    materials: [
      '1 copo ou jarra transparente alta',
      'Mel',
      'Detergente líquido (colorido ou adicione corante)',
      'Água colorida com corante',
      'Óleo vegetal',
      'Álcool isopropílico 70% (colorido)',
      'Corantes alimentícios de cores diferentes',
      'Colher de cabo longo ou seringa'
    ],
    steps: [
      'Organize os líquidos do mais denso ao menos denso: mel, detergente, água, óleo, álcool.',
      'Despeje o mel no fundo do copo (primeira camada).',
      'Com muito cuidado, despeje o detergente pela lateral do copo ou use uma colher para guiar o líquido.',
      'Continue adicionando água colorida lentamente pela lateral.',
      'Adicione o óleo vegetal da mesma forma cuidadosa.',
      'Por último, adicione o álcool colorido, também pela lateral do copo.',
      'Observe as cinco camadas distintas formando um arco-íris líquido!',
      'Experimente adicionar objetos pequenos (uva passa, clipe, rolha) e observe em qual camada eles param.'
    ],
    explanation: 'Cada líquido tem uma densidade diferente (massa por unidade de volume). Líquidos mais densos afundam, enquanto os menos densos flutuam. O mel é o mais denso e fica no fundo; o álcool é o menos denso e fica no topo. Quando despejados cuidadosamente, os líquidos não se misturam porque têm densidades e, em alguns casos, polaridades diferentes. Isso cria camadas visíveis e coloridas.',
    safetyTips: [
      'Não ingerir nenhum dos líquidos após o experimento.',
      'Use álcool em ambiente ventilado.',
      'Supervisão adulta obrigatória.',
      'Lave as mãos após o experimento.',
      'Descarte adequadamente os líquidos após a atividade.'
    ],
    learningObjectives: [
      'Compreender o conceito de densidade',
      'Aprender sobre propriedades físicas dos líquidos',
      'Observar estratificação de fluidos',
      'Desenvolver habilidades de precisão e cuidado ao manusear líquidos'
    ]
  },
  {
    id: 'estacao-meteorologica',
    title: 'Estação Meteorológica DIY',
    age: '10+ anos',
    time: '1h',
    difficulty: 'Média',
    materials: [
      'Garrafa PET de 2L (para pluviômetro)',
      'Régua',
      'Canudo plástico',
      'Balão de festa',
      'Cartolina ou papel cartão',
      'Tesoura, cola e fita adesiva',
      'Pote de vidro (para barômetro)',
      'Palitos de churrasco ou madeira',
      'Copos plásticos pequenos (para anemômetro)'
    ],
    steps: [
      'PLUVIÔMETRO: Corte a parte superior da garrafa PET. Inverta e encaixe como funil na parte inferior.',
      'Cole uma régua na lateral externa da garrafa para medir a chuva.',
      'ANEMÔMETRO: Corte 4 copos plásticos ao meio. Cole-os em cruz nos palitos formando uma hélice.',
      'Fixe no centro com um prego e uma base, permitindo rotação livre.',
      'BARÔMETRO: Estique o balão sobre a boca do pote de vidro e prenda com elástico.',
      'Cole um canudo no centro do balão. A ponta do canudo indica mudanças de pressão.',
      'Cole uma escala de cartolina atrás do canudo.',
      'Posicione os instrumentos: pluviômetro ao ar livre, barômetro em local protegido.'
    ],
    explanation: 'Cada instrumento mede um aspecto do clima: PLUVIÔMETRO mede a quantidade de chuva acumulada (mm). ANEMÔMETRO mede a velocidade do vento observando quantas rotações a hélice faz. BARÔMETRO mede a pressão atmosférica - quando a pressão aumenta, empurra o balão para dentro e o canudo sobe; quando diminui, o balão expande e o canudo desce. Mudanças de pressão indicam mudanças no tempo.',
    safetyTips: [
      'Cuidado ao cortar garrafas e copos.',
      'Supervisão adulta para uso de tesoura e materiais pontiagudos.',
      'Fixe bem o anemômetro para evitar que voe com vento forte.',
      'Não deixe o pluviômetro em local onde possa cair e quebrar.'
    ],
    learningObjectives: [
      'Compreender como funcionam instrumentos meteorológicos',
      'Aprender a medir chuva, vento e pressão atmosférica',
      'Desenvolver habilidades de observação e registro de dados',
      'Entender a relação entre pressão atmosférica e clima'
    ]
  },
  {
    id: 'forno-solar',
    title: 'Forno Solar com Caixa de Pizza',
    age: '9+ anos',
    time: '1h+ (inclui tempo de cozimento)',
    difficulty: 'Média',
    materials: [
      '1 caixa de pizza limpa e seca',
      'Papel alumínio',
      'Plástico filme ou papel celofane transparente',
      'Fita adesiva ou cola',
      'Tesoura ou estilete',
      'Papelão extra (opcional, para melhor isolamento)',
      'Papel jornal',
      'Marshmallows, chocolate ou queijo (para testar)'
    ],
    steps: [
      'Desenhe um quadrado na tampa da caixa, deixando 3-4 cm de margem.',
      'Corte três lados do quadrado, deixando um lado como dobradiça.',
      'Forre a parte interna da aba móvel com papel alumínio (lado brilhante para fora).',
      'Forre o fundo interno da caixa também com papel alumínio.',
      'Cubra a abertura criada na tampa com plástico filme, colando bem nas bordas.',
      'Forre o fundo da caixa com folhas de jornal para isolamento.',
      'Coloque o alimento em um prato escuro dentro da caixa.',
      'Feche a caixa e posicione ao sol. Ajuste a aba de alumínio para refletir luz para dentro.',
      'Deixe por 30-60 minutos em dia ensolarado. Observe o alimento derreter/cozinhar!'
    ],
    explanation: 'O forno solar funciona pelo efeito estufa. A luz solar atravessa o plástico transparente e é refletida pelo papel alumínio, concentrando-se dentro da caixa. O alumínio reflete e direciona os raios solares para o alimento. O plástico permite a entrada de luz, mas retém o calor (radiação infravermelha) dentro da caixa. O papel jornal isola, evitando que o calor escape pelo fundo. Isso pode aquecer a caixa a 70-90°C.',
    safetyTips: [
      'Cuidado ao abrir o forno - o interior estará quente!',
      'Use luvas ou pano ao retirar alimentos.',
      'Supervisão adulta obrigatória.',
      'Não olhe diretamente para o reflexo do alumínio ao sol.',
      'Realize em dia ensolarado, nunca com risco de chuva.'
    ],
    learningObjectives: [
      'Compreender energia solar e efeito estufa',
      'Aprender sobre reflexão e absorção de luz',
      'Entender conceitos de isolamento térmico',
      'Descobrir fontes de energia renovável e sustentável'
    ]
  },
  {
    id: 'telefone-copos',
    title: 'Telefone de Copos e Barbante',
    age: '6+ anos',
    time: '20 min',
    difficulty: 'Fácil',
    materials: [
      '2 copos descartáveis (papel ou plástico)',
      'Barbante ou linha de costura resistente (3-10 metros)',
      'Palito de dente ou clipe de papel',
      'Prego ou tesoura pontiaguda (para fazer furos)'
    ],
    steps: [
      'Faça um pequeno furo no fundo de cada copo (peça ajuda de um adulto).',
      'Passe uma ponta do barbante pelo furo de um copo, de fora para dentro.',
      'Amarre a ponta do barbante a um palito de dente ou clipe dentro do copo (para não escapar).',
      'Repita o processo no segundo copo com a outra ponta do barbante.',
      'Estique bem o barbante entre os dois copos.',
      'Uma pessoa fala no copo enquanto a outra escuta no outro copo.',
      'Mantenha o barbante sempre esticado para o som viajar melhor.',
      'Experimente diferentes comprimentos de barbante e materiais!'
    ],
    explanation: 'As ondas sonoras são vibrações que viajam pelo ar. Quando você fala no copo, sua voz faz o ar dentro do copo vibrar. Essas vibrações são transferidas para o fundo do copo e, em seguida, para o barbante tensionado. O barbante vibra e transmite essas ondas de som mecanicamente até o outro copo. No segundo copo, as vibrações do barbante fazem o ar vibrar novamente, recriando o som original que a outra pessoa pode ouvir.',
    safetyTips: [
      'Supervisão adulta ao fazer furos nos copos.',
      'Use barbante longo em espaço seguro (sem risco de tropeçar).',
      'Não estique o barbante perto do rosto de outras pessoas.',
      'Cuidado para não furar os dedos ao fazer os furos.'
    ],
    learningObjectives: [
      'Compreender como o som viaja através de materiais',
      'Aprender sobre ondas sonoras e vibração',
      'Entender transmissão mecânica de som',
      'Descobrir princípios básicos de telecomunicações'
    ]
  },
  {
    id: 'coracao-bate',
    title: 'Coração que Bate — Modelo com Seringas',
    age: '11+ anos',
    time: '1h',
    difficulty: 'Média',
    materials: [
      '2 seringas grandes (20-60ml) sem agulha',
      'Tubos plásticos transparentes (diâmetro compatível com as seringas)',
      'Água colorida com corante vermelho',
      '1 balão de festa',
      'Fita adesiva ou abraçadeiras',
      'Tesoura',
      'Base de apoio (papelão ou madeira)'
    ],
    steps: [
      'Corte dois pedaços de tubo plástico (cerca de 15-20 cm cada).',
      'Conecte um tubo à saída de cada seringa, fixando bem com fita ou abraçadeiras.',
      'Encha o sistema com água colorida vermelha (sem ar no interior).',
      'Corte o balão e estique a borracha sobre a abertura de uma das seringas como uma membrana.',
      'Fixe bem o balão com elástico ou fita.',
      'Monte as seringas em uma base, simulando a posição do coração.',
      'Pressione o êmbolo de uma seringa e observe a água se mover para a outra.',
      'Pressione alternadamente para simular o bombeamento de sangue.',
      'Observe como a pressão move o líquido, imitando o coração bombeando sangue.'
    ],
    explanation: 'O modelo simula o funcionamento do coração como uma bomba. Quando você pressiona o êmbolo de uma seringa, cria pressão positiva que empurra a água através do tubo para a outra seringa. O balão atua como uma válvula flexível, permitindo movimento em uma direção. O coração real funciona de forma similar: contrai os ventrículos (pressão), bombeando sangue pelas artérias. As válvulas cardíacas garantem que o sangue flua na direção correta.',
    safetyTips: [
      'Use seringas sem agulhas e descartadas adequadamente.',
      'Supervisão adulta obrigatória.',
      'Cuidado ao cortar tubos e balões.',
      'Não use seringas médicas usadas - utilize seringas novas de uso geral.',
      'Limpe bem a área após o experimento.'
    ],
    learningObjectives: [
      'Compreender como o coração bombeia sangue',
      'Aprender sobre pressão hidráulica',
      'Entender o sistema circulatório de forma visual',
      'Desenvolver noções de anatomia e fisiologia básica'
    ]
  }
];
