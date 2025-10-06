import inventosCientificosImg from '@assets/ChatGPT Image 4 de out. de 2025, 09_35_24_1759563336987.png';
import baloesComMagiaImg from '@assets/ChatGPT Image 3 de out. de 2025, 20_12_45_1759516033408.png';
import desafio30DiasImg from '@assets/ChatGPT Image 4 de out. de 2025, 09_50_56_1759564269987.png';
import pequenosCriadoresImg from '@assets/ChatGPT Image 4 de out. de 2025, 10_07_43_1759565273175.png';
import modelagemMassinhaImg from '@assets/ChatGPT Image 3 de out. de 2025, 20_38_28_1759516721712.png';
import origamiFamiliaImg from '@assets/ChatGPT Image 4 de out. de 2025, 09_46_15_1759563989942.png';

export interface Activity {
  id: string;
  title: string;
  category: string;
  difficulty: string;
  time: string;
  module: 1;
  materials: string[];
  tools: string[];
  steps: string[];
  safety: string[];
  imageUrl: string;
  imageBgColor?: string;
  imageAspectRatio?: number;
  isPremium?: boolean;
}

export const activities: Activity[] = [
  {
    id: 'mega-kit-entrada',
    title: 'Mega Kit Pequenos Criadores',
    category: 'Kit Completo',
    difficulty: 'Todos os níveis',
    time: 'Acesso completo',
    module: 1,
    materials: ['Materiais diversos para 100 atividades criativas'],
    tools: ['Ferramentas básicas de artesanato'],
    steps: [
      'Bem-vindo ao Mega Kit Pequenos Criadores!',
      'Aqui você encontrará 100 atividades criativas para imprimir.',
      'Cada projeto tem passo a passo detalhado.',
      'Materiais necessários listados para cada atividade.',
      'Dicas de segurança e supervisão incluídas.',
      'Projetos do básico ao avançado.',
      'Desenvolva criatividade, coordenação motora e imaginação.',
      'Desbloqueie o acesso completo para começar!'
    ],
    safety: [
      'Supervisão adulta recomendada para todas as atividades.',
      'Siga as orientações de segurança de cada projeto.',
      'Utilize materiais adequados para cada faixa etária.'
    ],
    imageUrl: pequenosCriadoresImg,
    imageBgColor: '#22D3EE'
  },
  {
    id: 'inventos-cientificos',
    title: 'Meus Primeiros Inventos Científicos',
    category: 'Bônus Premium',
    difficulty: 'Fácil a Médio',
    time: '10 experimentos completos',
    module: 1,
    isPremium: true,
    materials: [
      'Garrafas PET, copos transparentes',
      'Limões, bicarbonato, vinagre',
      'Escova de dentes, motor vibratório',
      'Sementes, algodão, água',
      'Massa de modelar, corantes',
      'Mel, óleo, detergente, álcool',
      'Caixa de pizza, papel alumínio',
      'Barbante, balões, seringas',
      'Materiais recicláveis diversos'
    ],
    tools: [
      'Tesoura, fita adesiva',
      'Régua, caneta marcadora',
      'Copos medidores',
      'Ferramentas básicas de artesanato'
    ],
    steps: [
      '1. TORNADO NA GARRAFA: Crie um vórtice de água espetacular com 2 garrafas PET!',
      '2. PILHA DE LIMÃO: Transforme limões em uma bateria que acende LED!',
      '3. BRISTLEBOT: Construa um robô vibratório com escova de dentes!',
      '4. SEMENTE MÁGICA: Observe a germinação em tempo real!',
      '5. VULCÃO DE CAMADAS: Erupção química com bicarbonato e vinagre!',
      '6. ARCO-ÍRIS EM CAMADAS: Descubra a densidade dos líquidos coloridos!',
      '7. ESTAÇÃO METEOROLÓGICA: Construa pluviômetro, anemômetro e barômetro!',
      '8. FORNO SOLAR: Cozinhe com energia do sol usando caixa de pizza!',
      '9. TELEFONE DE COPOS: Comunique-se através de ondas sonoras!',
      '10. CORAÇÃO QUE BATE: Simule o bombeamento cardíaco com seringas!',
      '',
      'Cada experimento inclui:',
      '✓ Faixa etária recomendada (5 a 11+ anos)',
      '✓ Tempo de execução detalhado',
      '✓ Lista completa de materiais',
      '✓ Passo a passo ilustrado',
      '✓ Explicação científica completa',
      '✓ Dicas de segurança',
      '✓ Objetivos de aprendizagem'
    ],
    safety: [
      'Supervisão adulta obrigatória para todos os experimentos.',
      'Utilize apenas materiais atóxicos e seguros.',
      'Siga todas as instruções de segurança específicas de cada experimento.',
      'Realize experimentos em áreas adequadas e ventiladas.',
      'Mantenha materiais perigosos fora do alcance de crianças pequenas.',
      'Use equipamentos de proteção quando necessário.',
      'Descarte materiais corretamente após os experimentos.'
    ],
    imageUrl: inventosCientificosImg
  },
  {
    id: 'origami-familia',
    title: 'Origami em Família',
    category: 'Bônus Premium',
    difficulty: 'Básico ao Avançado',
    time: '10 projetos completos',
    module: 1,
    isPremium: true,
    materials: [
      'Papel quadrado para origami (15x15 cm ou 20x20 cm)',
      'Papel colorido ou papel de origami tradicional',
      'Papel retangular para alguns projetos',
      'Canetas ou lápis para desenhar detalhes',
      'Superfície lisa para dobrar'
    ],
    tools: [
      'Suas mãos habilidosas',
      'Régua (opcional, para marcar dobras)',
      'Unha ou objeto liso para vincar'
    ],
    steps: [
      '1. CACHORRINHO: Ideal para iniciantes! Triângulo com orelhas - 15 min',
      '2. BARQUINHO: Clássico que flutua na água - 15 min',
      '3. CORAÇÃO: Perfeito para presentes - 20 min',
      '4. CAIXINHA: Útil para guardar pequenos objetos - 20 min',
      '5. BORBOLETA: Simetria e delicadeza - 20 min',
      '6. SAPO SALTADOR: Diversão garantida! - 25 min',
      '7. TSURU (GROU): Símbolo japonês de paz - 30 min',
      '8. ESTRELA NINJA: Origami modular com 2 papéis - 30 min',
      '9. CISNE ELEGANTE: Trabalhando curvas e proporções - 35 min',
      '10. FLOR DE LÓTUS: Projeto avançado de camadas - 40 min',
      '',
      'Cada projeto inclui:',
      '✓ Faixa etária recomendada (5 a 10+ anos)',
      '✓ Passo a passo super detalhado',
      '✓ Explicação cultural e técnica',
      '✓ Dicas para aperfeiçoar',
      '✓ Objetivos de aprendizagem',
      '✓ Progressão de dificuldade'
    ],
    safety: [
      'Dobraduras não apresentam riscos significativos.',
      'Supervisão recomendada para crianças menores de 5 anos.',
      'Cuidado ao fazer vincos fortes - não force o papel.',
      'Use papel adequado para cada projeto.',
      'Mantenha área de trabalho organizada.',
      'Descarte papéis rasgados corretamente.'
    ],
    imageUrl: origamiFamiliaImg,
    imageBgColor: '#F59E0B'
  },
  {
    id: 'modelagem-massinha',
    title: 'Guia de Modelagem com Massinha',
    category: 'Bônus Premium',
    difficulty: 'Fácil a Médio',
    time: '10 projetos completos',
    module: 1,
    isPremium: true,
    materials: [
      'Massinha de várias cores',
      'Palitos de modelagem (sem ponta afiada)',
      'Cortadores plásticos (formas simples)',
      'Superfície limpa para modelar (placa de plástico)',
      'Rolo pequeno para achatar'
    ],
    tools: [
      'Guardanapos e pote com tampa',
      'Palitos de dente',
      'Olhos de plástico (opcional)',
      'Cortadores de formas'
    ],
    steps: [
      '1. ROSTO SORRIDENTE: Expressões faciais divertidas - 15-20 min',
      '2. COELHO FOFO: Animal adorável com orelhas longas - 20-30 min',
      '3. MAÇÃ FOFA: Fruta realista com brilho - 10-15 min',
      '4. CARROZINHO SIMPLES: Veículo com rodas e detalhes - 20-30 min',
      '5. BORBOLETA COLORIDA: Asas com manchas e cores - 15-25 min',
      '6. PEIXINHO ALEGRE: Criatura aquática sorridente - 10-20 min',
      '7. MINI BOLO DE ANIVERSÁRIO: Bolo decorado com velas - 25-35 min',
      '8. ARCO-ÍRIS COM NUVEM: Cenário colorido completo - 15-20 min',
      '9. DINOSSAURO: Criatura pré-histórica com espinhos - 30-45 min',
      '10. FLORES EM VASO: Arranjo floral decorativo - 20-30 min',
      '',
      'Cada projeto inclui:',
      '✓ Faixa etária recomendada (3 a 6+ anos)',
      '✓ Nível de dificuldade detalhado',
      '✓ Passo a passo ilustrado',
      '✓ Dicas de modelagem e acabamento',
      '✓ Variações criativas',
      '✓ Objetivos de aprendizagem'
    ],
    safety: [
      'Supervisione crianças menores de 5 anos para evitar ingestão.',
      'Use apenas massinhas atóxicas próprias para crianças.',
      'Não usar massinhas caseiras sem conhecimento dos ingredientes.',
      'Mantenha massinhas em potes fechados para evitar ressecamento.',
      'Limpe a mesa antes e depois de brincar.',
      'Ensine a criança a não levar a massinha à boca.',
      'Use roupas velhas ou aventais para proteger.'
    ],
    imageUrl: modelagemMassinhaImg,
    imageBgColor: '#22D3EE'
  },
  {
    id: 'baloes-magicos',
    title: 'Balões Mágicos',
    category: 'Bônus Premium',
    difficulty: 'Fácil a Médio',
    time: '10 projetos dobráveis',
    module: 1,
    isPremium: true,
    materials: [
      'Balões finos modelo 260',
      'Bomba de encher balões',
      'Caneta marcador para detalhes',
      'Balões coloridos variados'
    ],
    tools: [
      'Bomba de ar manual',
      'Adesivos decorativos (opcional)',
      'Tesoura para ajustes'
    ],
    steps: [
      '1. CACHORRINHO DE BALÃO: Animal clássico com orelhas e focinho!',
      '2. ESPADA DE CAVALEIRO: Arma de brinquedo com punho e cabo!',
      '3. FLOR COLORIDA: Pétalas perfeitas com caule verde!',
      '4. COROA DE PRINCESA/PRÍNCIPE: Acessório real com pontas douradas!',
      '5. CACHINHO DE UVA: Frutas em cacho decorativo!',
      '6. ESPADA DUPLA DE GUERREIRO: Arma com dois lados para batalhas!',
      '7. COELHINHO DE BALÃO: Animal fofo com orelhas longas!',
      '8. CORAÇÃO: Forma romântica perfeita para presentear!',
      '9. ESPIRAL MÁGICO: Forma giratória colorida e divertida!',
      '10. CACHORRO COM COLEIRA: Pet completo com acessório personalizado!',
      '',
      'Cada projeto inclui:',
      '✓ Faixa etária recomendada (6 a 10+ anos)',
      '✓ Passo a passo com dobras detalhadas',
      '✓ Dicas para firmar as torções',
      '✓ Sugestões de decoração',
      '✓ Técnicas de balões dobráveis',
      '✓ Objetivos de aprendizagem'
    ],
    safety: [
      'Use sempre bomba de ar - nunca encha com a boca.',
      'Supervisão adulta obrigatória para menores de 8 anos.',
      'Cuidado com crianças menores de 3 anos - risco de asfixia.',
      'Não deixe balões murchos ao alcance das crianças.',
      'Descarte balões estourados imediatamente.',
      'Não force as torções - pode estourar o balão.',
      'Peça ajuda de um adulto para projetos mais complexos.'
    ],
    imageUrl: baloesComMagiaImg,
    imageBgColor: '#DB2777'
  },
  {
    id: 'desafio-30-dias',
    title: 'Desafio 30 Dias Sem Telas',
    category: 'Bônus Premium',
    difficulty: 'Todos os níveis',
    time: '30 dias de atividades',
    module: 1,
    isPremium: true,
    materials: [
      'Materiais variados para cada dia',
      'Lápis, papel e materiais de arte',
      'Brinquedos e jogos de tabuleiro',
      'Materiais da natureza',
      'Ingredientes para culinária simples'
    ],
    tools: [
      'Criatividade e disposição',
      'Participação da família',
      'Diário para registrar experiências'
    ],
    steps: [
      '1. DESAFIO SEM TELA: Guarde o celular e desenhe o que mais gosta!',
      '2. PINTURA LIVRE: Crie arco-íris colorido com lápis de cor!',
      '3. CAÇA AO TESOURO: Esconda brinquedos e desenhe um mapa!',
      '4. NATUREZA VIVA: Observe plantas e insetos, desenhe o que viu!',
      '5. HORA DA LEITURA: Leia histórias e conte o que aprendeu!',
      '6. MASSINHA DIVERTIDA: Crie figuras coloridas com massinha!',
      '7. GRATIDÃO: Desenhe 3 coisas pelas quais é grato!',
      '8. CONSTRUÇÃO CRIATIVA: Monte algo com blocos e tampinhas!',
      '9. JOGO EM FAMÍLIA: Convide alguém para jogar tabuleiro!',
      '10. MÚSICA E RITMO: Invente uma canção sobre seu dia!',
      '11. AJUDA EM CASA: Arrume brinquedos e organize o quarto!',
      '12. MINI CIENTISTA: Misture água com farinha e observe!',
      '13. BRINCAR LÁ FORA: Corra, pule corda e jogue bola!',
      '14. CULINÁRIA COM ADULTO: Prepare um lanche simples!',
      '15. DESENHO DA SEMANA: Desenhe sua atividade favorita!',
      '16. FAZ DE CONTA: Seja super-herói, médico ou professor!',
      '17. PLANTINHA AMIGA: Plante semente e observe crescimento!',
      '18. PIQUENIQUE: Monte piquenique na sala ou quintal!',
      '19. RECICLAR E CRIAR: Use embalagens para construir!',
      '20. CARTINHA ESPECIAL: Escreva carta para quem ama!',
      '21. DESAFIO DO SILÊNCIO: Fique quietinho e ouça os sons!',
      '22. APRENDENDO BONDADE: Ajude alguém e sorria!',
      '23. DIA DA ÁGUA: Faça bolhas de sabão e brinque!',
      '24. HORA DA ARTE: Monte painel colorido com recortes!',
      '25. CONTANDO HISTÓRIAS: Invente história com personagens!',
      '26. PEQUENO INVENTOR: Crie algo novo com materiais de casa!',
      '27. MÚSICA DE LOUVOR: Cante sobre amor e fé!',
      '28. DIA DA AMIZADE: Visite amigo sem celular!',
      '29. NOITE DAS ESTRELAS: Conte estrelas no céu!',
      '30. GRANDE FINAL: Escreva como foi o desafio completo!',
      '',
      'Cada dia inclui:',
      '✓ Faixa etária recomendada (6 a 10 anos)',
      '✓ Atividade específica e divertida',
      '✓ Materiais simples e acessíveis',
      '✓ Projetos individuais e em família',
      '✓ Fortalece vínculos familiares',
      '✓ Objetivos de aprendizagem'
    ],
    safety: [
      'Adapte atividades à faixa etária de cada criança.',
      'Supervisão adulta conforme necessário.',
      'Respeite os limites e o ritmo de cada criança.',
      'Atividades ao ar livre exigem supervisão.',
      'Use materiais seguros e atóxicos.',
      'Incentive sem pressionar - o objetivo é diversão!',
      'Celebre cada conquista do desafio.'
    ],
    imageUrl: desafio30DiasImg,
    imageBgColor: '#10B981'
  }
];

export interface BonusContent {
  id: string;
  title: string;
  category: string;
  difficulty: string;
  time: string;
  imageUrl: string;
  imageBgColor?: string;
}

export const bonusContent: BonusContent[] = [
  {
    id: 'inventos-cientificos',
    title: 'Meus Primeiros Inventos Científicos',
    category: 'Bônus Premium',
    difficulty: 'Fácil a Médio',
    time: 'Vários projetos',
    imageUrl: inventosCientificosImg,
    imageBgColor: '#8B5CF6'
  },
  {
    id: 'origami-familia',
    title: 'Origami em Família',
    category: 'Bônus Premium',
    difficulty: 'Básico ao Avançado',
    time: 'Desafio de 7 dias',
    imageUrl: origamiFamiliaImg,
    imageBgColor: '#F59E0B'
  },
  {
    id: 'modelagem-massinha',
    title: 'Guia de Modelagem com Massinha',
    category: 'Bônus Premium',
    difficulty: 'Fácil',
    time: '20 projetos',
    imageUrl: modelagemMassinhaImg,
    imageBgColor: '#22D3EE'
  },
  {
    id: 'baloes-magicos',
    title: 'Balões Mágicos',
    category: 'Bônus Premium',
    difficulty: 'Fácil',
    time: 'Jogos e desafios',
    imageUrl: baloesComMagiaImg,
    imageBgColor: '#DB2777'
  },
  {
    id: 'desafio-30-dias',
    title: 'Desafio 30 Dias Sem Telas',
    category: 'Bônus Premium',
    difficulty: 'Todos os níveis',
    time: '30 dias de atividades',
    imageUrl: desafio30DiasImg,
    imageBgColor: '#10B981'
  }
];
