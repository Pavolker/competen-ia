import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { CentaurLevel } from '../types';

interface ProfilePageProps {
  level: CentaurLevel;
  onBack: () => void;
}

export default function ProfilePage({ level, onBack }: ProfilePageProps) {
  const getContentByLevel = () => {
    switch (level) {
      case CentaurLevel.Nesso:
        return {
          title: 'SÍNTESE ESSENCIAL DO ESTÁGIO DE DESENVOLVIMENTO NESSO',
          subtitle: 'Estágio Iniciante',
          mainImage: '/centauro/NESSO.html/Imagens/Pasted Graphic 4.png',
          description: 'A etapa de desenvolvimento Nesso do "Time Centauro" representa o estágio inicial de competências essenciais para o profissional moderno que trabalha em sinergia com ferramentas inteligentes. Este estágio é inspirado no centauro Nesso da mitologia grega, conhecido por suas ações impulsivas e sua falta de visão a longo prazo, refletindo um período de aprendizado básico e compreensão inicial. Nessa etapa, o foco está na aquisição de conhecimentos fundamentais, habilidades básicas e atitudes iniciais que pavimentam o caminho para o desenvolvimento contínuo e o crescimento profissional.',
          tableImage: '/centauro/NESSO.html/Imagens/Pasted Graphic 1.png',
          conclusions: 'Na etapa de desenvolvimento Nesso, os profissionais estão dando seus primeiros passos no domínio dessas competências essenciais. Este estágio é crucial para estabelecer uma base sólida sobre a qual se pode construir habilidades e conhecimentos mais avançados, promovendo um crescimento contínuo e o desenvolvimento de capacidades que permitem aos profissionais se tornarem líderes eficazes na era digital.',
          competencies: [
            { name: '1. Sinergia Digital', knowledge: 'Familiaridade Básica com Ferramentas Digitais', skills: 'Uso Básico de Ferramentas Digitais', attitudes: 'Curiosidade e Abertura para Tecnologia' },
            { name: '2. Estrategista de Pergunta', knowledge: 'Entendimento básico dos princípios fundamentais de formulação de perguntas', skills: 'Formular perguntas simples e diretas', attitudes: 'Curiosidade e disposição para aprender' },
            { name: '3. Orquestração Algorítmica', knowledge: 'Compreensão Inicial de Algoritmos', skills: 'Desenvolvimento de Algoritmos Simples', attitudes: 'Proatividade e Experimentação' },
            { name: '4. Interpretação Assistida por IA', knowledge: 'Conceitos Básicos de IA', skills: 'Uso de Ferramentas de IA para Tarefas Simples', attitudes: 'Confiança Inicial na Tecnologia' },
            { name: '5. Navegação de Dados', knowledge: 'Noções Básicas de Fontes de Dados', skills: 'Exploração e Filtragem de Dados Simples', attitudes: 'Paciência e Diligência' },
            { name: '6. Programação Híbrida', knowledge: 'Fundamentos de Programação', skills: 'Codificação Básica', attitudes: 'Flexibilidade e Disposição para Aprender' },
            { name: '7. Colaboração Multimodal', knowledge: 'Princípios Básicos de Trabalho em Equipe', skills: 'Participação Eficaz em Pequenos Grupos', attitudes: 'Cooperação e Abertura para Diferentes Perspectivas' },
            { name: '8. Gestão Ética de IA', knowledge: 'Princípios Éticos Fundamentais', skills: 'Aplicação Básica de Princípios Éticos', attitudes: 'Responsabilidade Social e Interesse' }
          ]
        };
      case CentaurLevel.Folo:
        return {
          title: 'SÍNTESE ESSENCIAL DO ESTÁGIO DE DESENVOLVIMENTO FÓLO',
          subtitle: 'Estágio Intermediário',
          mainImage: '/centauro/Imagens/Pasted Graphic 6.png',
          description: 'A etapa de desenvolvimento Fólo do "Time Centauro" representa o estágio intermediário das competências essenciais para o profissional moderno que trabalha em sinergia com ferramentas inteligentes. Este estágio é inspirado no centauro Fólo da mitologia grega, conhecido por sua hospitalidade, sabedoria e boa natureza, embora também enfrentasse desafios inesperados. A etapa Fólo é caracterizada por uma compreensão mais profunda e aplicação prática das competências, refletindo um avanço significativo em relação ao estágio inicial (Nesso).',
          tableImage: '/centauro/Imagens/Pasted Graphic 2.png',
          conclusions: 'Este estágio é fundamental para a progressão do profissional, fornecendo uma base sólida para o avanço ao estágio mais desenvolvido (Quíron), onde o domínio completo das competências e a liderança na implementação estratégica são alcançados.',
          competencies: [
            { name: '1. Sinergia Digital', knowledge: 'Compreensão Avançada de Ferramentas Digitais', skills: 'Integração Eficaz de Ferramentas Digitais', attitudes: 'Proatividade e Inovação' },
            { name: '2. Estrategista da Pergunta', knowledge: 'Entendimento aprofundado dos princípios de formulação de perguntas', skills: 'Formular perguntas mais elaboradas e contextualizadas', attitudes: 'Curiosidade investigativa refinada' },
            { name: '3. Orquestração Algorítmica', knowledge: 'Conhecimento Avançado de Algoritmos', skills: 'Otimização e Implementação de Algoritmos', attitudes: 'Persistência e Solução de Problemas' },
            { name: '4. Interpretação Assistida por IA', knowledge: 'Conhecimento Avançado de IA', skills: 'Análise e Interpretação Avançada com IA', attitudes: 'Confiança e Discernimento Crítico' },
            { name: '5. Navegação de Dados', knowledge: 'Conhecimento de Fontes de Dados Complexas', skills: 'Análise e Visualização de Dados Detalhada', attitudes: 'Meticulosidade e Resiliência' },
            { name: '6. Programação Híbrida', knowledge: 'Conhecimento de Múltiplas Linguagens', skills: 'Desenvolvimento de Soluções Complexas', attitudes: 'Adaptabilidade e Aprendizado Contínuo' },
            { name: '7. Colaboração Multimodal', knowledge: 'Compreensão das Dinâmicas de Equipe Avançadas', skills: 'Coordenação e Facilitação Eficaz', attitudes: 'Cooperação e Inclusão' },
            { name: '8. Gestão Ética de IA', knowledge: 'Conhecimento de Padrões e Legislações de IA', skills: 'Desenvolvimento e Implementação de Políticas Éticas', attitudes: 'Compromisso com a Justiça e a Equidade' }
          ]
        };
      case CentaurLevel.Quiron:
        return {
          title: 'SÍNTESE ESSENCIAL DO ESTÁGIO DE DESENVOLVIMENTO QUÍRON',
          subtitle: 'Estágio Avançado',
          mainImage: '/centauro/Imagens/Pasted Graphic 7.png',
          description: 'A etapa de desenvolvimento Quíron do "Time Centauro" representa o estágio avançado das competências essenciais para o profissional moderno que trabalha em sinergia com ferramentas inteligentes. Inspirado no centauro Quíron da mitologia grega, conhecido por sua sabedoria, justiça e habilidades excepcionais, este estágio reflete o ápice do desenvolvimento profissional. Os indivíduos nesse nível possuem um domínio completo das competências necessárias, são líderes em suas áreas e promovem a inovação contínua.',
          tableImage: '/centauro/Imagens/Pasted Graphic 3.png',
          conclusions: 'Este estágio é o ápice do desenvolvimento profissional, onde os indivíduos não só possuem um domínio completo das competências, mas também inspiram e lideram outros, promovendo uma cultura de excelência e inovação contínua. Os profissionais no estágio Quíron são os líderes que guiam suas organizações em direção ao sucesso sustentável na era digital.',
          competencies: [
            { name: '1. Sinergia Digital', knowledge: 'Domínio das Tecnologias Digitais', skills: 'Criação de Soluções Inovadoras', attitudes: 'Liderança em Inovação Tecnológica' },
            { name: '2. Estrategista da Pergunta', knowledge: 'Domínio completo dos princípios e técnicas de formulação de perguntas', skills: 'Formular perguntas altamente complexas e estratégicas', attitudes: 'Curiosidade insaciável e compromisso com inovação' },
            { name: '3. Orquestração Algorítmica', knowledge: 'Mastery de Algoritmos e Suas Aplicações', skills: 'Implementação de Algoritmos Complexos', attitudes: 'Persistência e Inovação Algorítmica' },
            { name: '4. Interpretação Assistida por IA', knowledge: 'Proficiência em IA e Suas Aplicações', skills: 'Análise Profunda e Estratégica com IA', attitudes: 'Confiança e Avaliação Crítica Avançada' },
            { name: '5. Navegação de Dados', knowledge: 'Expertise em Fontes e Métodos de Big Data', skills: 'Análise e Visualização Sofisticadas', attitudes: 'Meticulosidade e Visão Estratégica' },
            { name: '6. Programação Híbrida', knowledge: 'Profundo Conhecimento de Múltiplas Linguagens', skills: 'Desenvolvimento de Soluções Escaláveis', attitudes: 'Inovação Contínua e Adaptabilidade' },
            { name: '7. Colaboração Multimodal', knowledge: 'Profundo Entendimento de Dinâmicas de Equipe', skills: 'Coordenação e Facilitação de Equipes Diversas', attitudes: 'Cooperação e Liderança Inclusiva' },
            { name: '8. Gestão Ética de IA', knowledge: 'Domínio das Políticas e Princípios Éticos de IA', skills: 'Implementação de Práticas Éticas Inovadoras', attitudes: 'Liderança em Responsabilidade Social e Equidade' }
          ]
        };
      default:
        return null;
    }
  };

  const content = getContentByLevel();
  if (!content) return null;

  const colors = {
    [CentaurLevel.Nesso]: { bg: 'from-red-900/20 to-orange-900/20', border: 'border-red-400/30', text: 'text-red-300' },
    [CentaurLevel.Folo]: { bg: 'from-amber-900/20 to-yellow-900/20', border: 'border-amber-400/30', text: 'text-amber-300' },
    [CentaurLevel.Quiron]: { bg: 'from-emerald-900/20 to-teal-900/20', border: 'border-emerald-400/30', text: 'text-emerald-300' }
  };

  const colorScheme = colors[level];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white p-6 flex flex-col">
      {/* Header Navigation */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 rounded-lg transition-all duration-200 hover:scale-105"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Retornar</span>
        </button>
        <div className="text-center flex-1">
          <p className={`text-sm font-semibold uppercase tracking-wide ${colorScheme.text}`}>
            {content.subtitle}
          </p>
        </div>
        <div className="w-20"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto max-w-5xl mx-auto w-full space-y-8">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-white mb-8">{content.title}</h1>

        {/* Main Image */}
        <div className={`bg-gradient-to-r ${colorScheme.bg} backdrop-blur-md p-6 rounded-2xl border ${colorScheme.border}`}>
          <img
            src={content.mainImage}
            alt="Desenvolvimento"
            className="w-full h-auto rounded-lg object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* Description */}
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
          <p className="text-slate-200 leading-relaxed font-light text-justify">
            {content.description}
          </p>
        </div>

        {/* Competencies */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-6">As 8 Competências do Time Centauro</h2>
          <div className="grid gap-4">
            {content.competencies.map((comp, idx) => (
              <div key={idx} className={`bg-gradient-to-r ${colorScheme.bg} backdrop-blur-md p-6 rounded-xl border ${colorScheme.border} hover:border-white/30 transition-all`}>
                <h3 className={`font-bold text-lg mb-3 ${colorScheme.text}`}>{comp.name}</h3>
                <div className="space-y-2 text-sm text-slate-200">
                  <p><span className="font-semibold">Conhecimento:</span> {comp.knowledge}</p>
                  <p><span className="font-semibold">Habilidades:</span> {comp.skills}</p>
                  <p><span className="font-semibold">Atitudes:</span> {comp.attitudes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Table Image */}
        <div className={`bg-gradient-to-r ${colorScheme.bg} backdrop-blur-md p-6 rounded-2xl border ${colorScheme.border}`}>
          <h3 className="text-xl font-bold text-white mb-4">Tabela de Desenvolvimento</h3>
          <img
            src={content.tableImage}
            alt="Tabela"
            className="w-full h-auto rounded-lg object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* Conclusions */}
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
          <p className="text-slate-200 leading-relaxed font-light text-justify italic">
            {content.conclusions}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-start mt-12 pt-8 border-t border-white/10">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
        >
          <ArrowLeft size={18} />
          Retornar
        </button>
      </div>
    </div>
  );
}
