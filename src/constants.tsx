import React from 'react';
import { CentaurLevel, Competency, LevelDescription } from './types';
import { 
  Cpu, 
  MessageSquare, 
  GitMerge, 
  BrainCircuit, 
  Database, 
  Code2, 
  Users, 
  Scale 
} from 'lucide-react';

export const LEVEL_DESCRIPTIONS: Record<CentaurLevel, LevelDescription> = {
  [CentaurLevel.Nesso]: {
    title: "Básico",
    description: "Estágio Iniciante. Caracterizado pela impulsividade e visão de curto prazo. Possui conhecimento básico e utiliza ferramentas de forma reativa.",
    keywords: ["Impulsividade", "Básico", "Reativo", "Aprendizado Inicial"],
    scoreRange: [0, 1.6],
    color: "#ef4444" // Red-500
  },
  [CentaurLevel.Folo]: {
    title: "Intermediário",
    description: "Estágio Intermediário. Representa a hospitalidade e a boa natureza, mas ainda vulnerável a imprevistos. Possui compreensão técnica sólida e começa a integrar fluxos.",
    keywords: ["Resiliência", "Técnica", "Integração", "Proatividade"],
    scoreRange: [1.61, 2.4],
    color: "#eab308" // Yellow-500
  },
  [CentaurLevel.Quiron]: {
    title: "Avançado",
    description: "Estágio Avançado. O mentor sábio e curador. Domínio completo, liderança estratégica, inovação ética e capacidade de orquestrar humanos e IA em perfeita sinergia.",
    keywords: ["Sabedoria", "Liderança", "Inovação", "Ética", "Mentoria"],
    scoreRange: [2.41, 3.0],
    color: "#10b981" // Emerald-500
  }
};

export const COMPETENCIES: Competency[] = [
  {
    id: "sinergia_digital",
    title: "Sinergia Digital",
    description: "Capacidade de utilizar ferramentas digitais de forma integrada, maximizando eficiência e produtividade.",
    icon: <Cpu size={24} />,
    options: [
      {
        level: CentaurLevel.Nesso,
        score: 1,
        text: "Uso Básico",
        details: "Uso softwares comuns (Office, E-mail) para tarefas diárias. Tenho curiosidade, mas uso a tecnologia de forma isolada."
      },
      {
        level: CentaurLevel.Folo,
        score: 2,
        text: "Integração Eficaz",
        details: "Integro múltiplas ferramentas (Zapier, Make) para automatizar fluxos. Sou proativo na busca de novas tecnologias."
      },
      {
        level: CentaurLevel.Quiron,
        score: 3,
        text: "Domínio e Inovação",
        details: "Crio soluções digitais inovadoras e estratégicas. Lidero a adoção de novas tecnologias na organização."
      }
    ]
  },
  {
    id: "estrategista_pergunta",
    title: "Estrategista da Pergunta",
    description: "Habilidade de Engenharia de Prompts e formulação de questões estratégicas para extrair o melhor da IA.",
    icon: <MessageSquare size={24} />,
    options: [
      {
        level: CentaurLevel.Nesso,
        score: 1,
        text: "Perguntas Simples",
        details: "Faço perguntas diretas e simples à IA. Tenho dificuldade em obter respostas complexas ou refinadas."
      },
      {
        level: CentaurLevel.Folo,
        score: 2,
        text: "Contexto e Refinamento",
        details: "Estruturo prompts com contexto e iterajo para refinar as respostas. Uso técnicas de investigação."
      },
      {
        level: CentaurLevel.Quiron,
        score: 3,
        text: "Engenharia Avançada",
        details: "Formulo prompts complexos que desafiam o status quo. Uso a IA para gerar insights estratégicos e inovadores."
      }
    ]
  },
  {
    id: "orquestracao_algoritmica",
    title: "Orquestração Algorítmica",
    description: "Capacidade de desenhar fluxos, usar Agentes de IA e coordenar processos automatizados.",
    icon: <GitMerge size={24} />,
    options: [
      {
        level: CentaurLevel.Nesso,
        score: 1,
        text: "Compreensão Inicial",
        details: "Entendo a lógica básica de algoritmos, mas não crio automações complexas."
      },
      {
        level: CentaurLevel.Folo,
        score: 2,
        text: "Otimização de Fluxos",
        details: "Desenvolvo e ajusto algoritmos para resolver problemas específicos. Crio fluxos de trabalho automatizados."
      },
      {
        level: CentaurLevel.Quiron,
        score: 3,
        text: "Sistemas de Agentes",
        details: "Crio sistemas onde IAs trabalham juntas (Agentes). Orquestro soluções complexas sem intervenção humana constante."
      }
    ]
  },
  {
    id: "interpretacao_ia",
    title: "Interpretação Assistida por IA",
    description: "Uso de IA para analisar dados, gerar insights e apoiar a tomada de decisão crítica.",
    icon: <BrainCircuit size={24} />,
    options: [
      {
        level: CentaurLevel.Nesso,
        score: 1,
        text: "Análise Básica",
        details: "Uso IA para tarefas simples de resumo ou classificação. Confio na tecnologia mas com análise superficial."
      },
      {
        level: CentaurLevel.Folo,
        score: 2,
        text: "Análise Aprofundada",
        details: "Uso IA para análises complexas e cenários. Tenho discernimento crítico para validar os resultados da máquina."
      },
      {
        level: CentaurLevel.Quiron,
        score: 3,
        text: "Estratégia Preditiva",
        details: "Desenvolvo modelos customizados e pipelines de análise em tempo real. A IA informa decisões estratégicas de alto nível."
      }
    ]
  },
  {
    id: "navegacao_dados",
    title: "Navegação de Dados (RAG)",
    description: "Capacidade de mineração, curadoria e conexão de LLMs com bases de dados próprias (RAG).",
    icon: <Database size={24} />,
    options: [
      {
        level: CentaurLevel.Nesso,
        score: 1,
        text: "Exploração Simples",
        details: "Trabalho com planilhas simples e fontes de dados básicas. Faço limpeza manual de dados."
      },
      {
        level: CentaurLevel.Folo,
        score: 2,
        text: "Mineração e Conexão",
        details: "Analiso grandes volumes, uso RAG para conectar documentos à IA. Busco precisão e qualidade nos dados."
      },
      {
        level: CentaurLevel.Quiron,
        score: 3,
        text: "Big Data & Pipelines",
        details: "Domino arquitetura de dados complexos e pipelines automatizados. Visão estratégica do patrimônio de dados."
      }
    ]
  },
  {
    id: "programacao_hibrida",
    title: "Programação Híbrida",
    description: "Combinar codificação tradicional com geração de código por IA para criar soluções flexíveis.",
    icon: <Code2 size={24} />,
    options: [
      {
        level: CentaurLevel.Nesso,
        score: 1,
        text: "Scripts Básicos",
        details: "Escrevo pequenos scripts ou uso IA para gerar trechos simples de código. Aprendizado inicial."
      },
      {
        level: CentaurLevel.Folo,
        score: 2,
        text: "Desenvolvimento Assistido",
        details: "Combino linguagens e uso co-pilotos de IA para acelerar o desenvolvimento. Adapto-me a novas stacks rapidamente."
      },
      {
        level: CentaurLevel.Quiron,
        score: 3,
        text: "Arquitetura Escalável",
        details: "Crio soluções complexas e escaláveis. Lidero a inovação técnica combinando múltiplos paradigmas e IA."
      }
    ]
  },
  {
    id: "colaboracao_multimodal",
    title: "Colaboração Multimodal",
    description: "Trabalhar com texto, imagem, áudio e vídeo de forma integrada entre humanos e máquinas.",
    icon: <Users size={24} />,
    options: [
      {
        level: CentaurLevel.Nesso,
        score: 1,
        text: "Colaboração Básica",
        details: "Uso ferramentas de colaboração padrão. Interajo com IA principalmente via texto."
      },
      {
        level: CentaurLevel.Folo,
        score: 2,
        text: "Integração de Mídias",
        details: "Coordeno equipes e integro IA geradora de imagem/vídeo. Facilito a colaboração humano-máquina."
      },
      {
        level: CentaurLevel.Quiron,
        score: 3,
        text: "Sinergia Total",
        details: "Lidero iniciativas multimodais complexas. Crio ambientes onde a distinção entre humano e IA é fluida e produtiva."
      }
    ]
  },
  {
    id: "gestao_etica",
    title: "Gestão Ética de IA",
    description: "Responsabilidade, combate a viés, privacidade e aplicação justa da tecnologia.",
    icon: <Scale size={24} />,
    options: [
      {
        level: CentaurLevel.Nesso,
        score: 1,
        text: "Consciência Básica",
        details: "Entendo conceitos básicos de privacidade (GDPR) e tento seguir regras estabelecidas."
      },
      {
        level: CentaurLevel.Folo,
        score: 2,
        text: "Auditoria e Mitigação",
        details: "Identifico e corrijo vieses ativamente. Promovo uma cultura de responsabilidade no meu time."
      },
      {
        level: CentaurLevel.Quiron,
        score: 3,
        text: "Liderança Ética",
        details: "Defino frameworks éticos para a organização. Influencio políticas e garanto equidade e justiça na IA."
      }
    ]
  }
];