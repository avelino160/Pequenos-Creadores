import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é o Mega Kit Pequenos Criadores?",
    answer: "É um kit com 100 atividades criativas desenvolvidas para crianças desenvolverem habilidades através de projetos práticos e divertidos."
  },
  {
    question: "Qual a diferença entre o Pacote Essencial e o Pacote Premium?",
    answer: "O Pacote Essencial inclui o Mega Kit com 100 atividades. O Pacote Premium inclui tudo isso mais 5 bônus exclusivos com conteúdos extras como Origami em Família, Meus Primeiros Inventos Científicos e muito mais."
  },
  {
    question: "Como funciona a garantia?",
    answer: "Oferecemos garantia de satisfação. Se não ficar satisfeito com o conteúdo, entre em contato conosco através do email eryonworks@gmail.com."
  },
  {
    question: "As atividades são adequadas para qual faixa etária?",
    answer: "As atividades são desenvolvidas para crianças de 5 a 12 anos, com diferentes níveis de dificuldade para acompanhar o desenvolvimento de cada criança."
  },
  {
    question: "Preciso de materiais especiais para fazer as atividades?",
    answer: "A maioria das atividades utiliza materiais simples que você já tem em casa, como papel, tesoura, cola e materiais recicláveis."
  },
  {
    question: "Como acesso o conteúdo depois da compra?",
    answer: "Após a compra, todo o conteúdo fica disponível imediatamente na aba 'Principal' e 'Mais Conteúdos' do aplicativo."
  },
  {
    question: "Posso fazer as atividades mais de uma vez?",
    answer: "Sim! Você tem acesso ilimitado a todas as atividades e pode repeti-las quantas vezes quiser."
  },
  {
    question: "Como entro em contato com o suporte?",
    answer: "Você pode nos contatar através do email eryonworks@gmail.com. Respondemos em até 24 horas."
  }
];

export default function FAQ() {
  return (
    <div className="pb-20 sm:pb-24 pt-4 sm:pt-6 px-3 sm:px-4 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        <div className="space-y-2">
          <h1 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <HelpCircle className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            Central de Ajuda
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Perguntas frequentes e respostas
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-2xl border border-card-border overflow-hidden"
            >
              <AccordionTrigger 
                className="px-4 sm:px-6 py-4 hover:no-underline hover-elevate text-left"
                data-testid={`faq-question-${index}`}
              >
                <span className="font-medium text-foreground pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent 
                className="px-4 sm:px-6 pb-4 text-sm text-muted-foreground"
                data-testid={`faq-answer-${index}`}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="bg-card rounded-2xl border border-card-border p-6 space-y-3">
          <h2 className="font-bold text-foreground">Ainda precisa de ajuda?</h2>
          <p className="text-sm text-muted-foreground">
            Entre em contato conosco através do email{' '}
            <a 
              href="mailto:eryonworks@gmail.com" 
              className="text-primary hover:underline font-medium"
              data-testid="link-support-email"
            >
              eryonworks@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
