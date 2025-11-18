import React from 'react';
import { X, BookOpen } from 'lucide-react';
import { CentaurLevel } from '../types';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  level: CentaurLevel;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, level }) => {
  if (!isOpen) return null;

  const getContent = () => {
    switch (level) {
      case CentaurLevel.Nesso:
        return {
          title: 'Perfil Básico (Nesso)',
          content: `
            <div class="prose prose-slate max-w-none">
              <p class="text-lg font-semibold text-indigo-900 mb-4">Estágio Iniciante - Características do Nível Básico</p>
              
              <p>O nível Básico representa o início da jornada de integração com IA. Profissionais neste estágio estão desenvolvendo familiaridade com ferramentas digitais e começando a entender o potencial da inteligência artificial.</p>
              
              <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Características Principais</h3>
              <ul class="space-y-2">
                <li><strong>Conhecimento Básico:</strong> Compreensão inicial de conceitos de IA e ferramentas digitais</li>
                <li><strong>Uso Reativo:</strong> Utilização de tecnologia conforme demanda imediata</li>
                <li><strong>Aprendizado Contínuo:</strong> Fase de descoberta e experimentação</li>
                <li><strong>Visão de Curto Prazo:</strong> Foco em resolver problemas imediatos</li>
              </ul>
              
              <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Competências em Desenvolvimento</h3>
              <ul class="space-y-2">
                <li>Uso básico de ferramentas de IA (ChatGPT, Gemini)</li>
                <li>Formulação de perguntas simples</li>
                <li>Compreensão inicial de fluxos de trabalho</li>
                <li>Consciência básica sobre ética em IA</li>
              </ul>
              
              <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Próximos Passos para Evolução</h3>
              <ul class="space-y-2">
                <li>Pratique o uso diário de ferramentas de IA</li>
                <li>Aprenda técnicas de engenharia de prompts</li>
                <li>Explore automações simples</li>
                <li>Desenvolva pensamento crítico sobre resultados da IA</li>
                <li>Busque cursos e materiais sobre IA aplicada</li>
              </ul>
            </div>
          `
        };
      case CentaurLevel.Folo:
        return {
          title: 'Perfil Intermediário (Fólo)',
          content: `
            <div class="prose prose-slate max-w-none">
              <p class="text-lg font-semibold text-yellow-900 mb-4">Estágio Intermediário - Características do Nível Intermediário</p>
              
              <p>O nível Intermediário representa um profissional que já integrou IA em seus fluxos de trabalho e começa a criar soluções mais sofisticadas. Há compreensão técnica sólida e capacidade de adaptação.</p>
              
              <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Características Principais</h3>
              <ul class="space-y-2">
                <li><strong>Integração Eficaz:</strong> Combina múltiplas ferramentas para criar workflows</li>
                <li><strong>Proatividade:</strong> Busca ativamente novas soluções e tecnologias</li>
                <li><strong>Pensamento Crítico:</strong> Avalia e valida resultados da IA</li>
                <li><strong>Resiliência:</strong> Adapta-se a mudanças e imprevistos</li>
              </ul>
              
              <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Competências Consolidadas</h3>
              <ul class="space-y-2">
                <li>Engenharia de prompts com contexto e refinamento</li>
                <li>Criação de automações e fluxos de trabalho</li>
                <li>Uso de RAG (Retrieval-Augmented Generation)</li>
                <li>Análise de dados com apoio de IA</li>
                <li>Colaboração efetiva entre humanos e IA</li>
              </ul>
              
              <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Próximos Passos para Evolução</h3>
              <ul class="space-y-2">
                <li>Desenvolva sistemas de agentes de IA</li>
                <li>Aprenda programação para personalizar soluções</li>
                <li>Lidere iniciativas de IA em sua organização</li>
                <li>Aprofunde conhecimento em ética e governança de IA</li>
                <li>Mentore profissionais do nível básico</li>
              </ul>
            </div>
          `
        };
      case CentaurLevel.Quiron:
        return {
          title: 'Perfil Avançado (Quíron)',
          content: `
            <div class="prose prose-slate max-w-none">
              <p class="text-lg font-semibold text-emerald-900 mb-4">Estágio Avançado - Características do Nível Avançado</p>
              
              <p>O nível Avançado representa o ápice do desenvolvimento profissional na era da IA. Profissionais neste estágio são líderes, mentores e inovadores que dominam completamente a orquestração entre humanos e máquinas.</p>
              
              <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Características Principais</h3>
              <ul class="space-y-2">
                <li><strong>Sabedoria e Mentoria:</strong> Guia e inspira outros profissionais</li>
                <li><strong>Liderança Estratégica:</strong> Define direção organizacional em IA</li>
                <li><strong>Inovação Contínua:</strong> Cria soluções pioneiras e disruptivas</li>
                <li><strong>Ética como Pilar:</strong> Garante uso responsável e justo da IA</li>
              </ul>
              
              <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Domínio Completo das Competências</h3>
              <ul class="space-y-2">
                <li>Criação de soluções digitais inovadoras e estratégicas</li>
                <li>Engenharia avançada de prompts para insights estratégicos</li>
                <li>Orquestração de sistemas complexos de agentes de IA</li>
                <li>Desenvolvimento de modelos customizados e pipelines em tempo real</li>
                <li>Arquitetura de dados e Big Data</li>
                <li>Programação em múltiplas linguagens e paradigmas</li>
                <li>Liderança em colaboração multimodal</li>
                <li>Definição de frameworks éticos organizacionais</li>
              </ul>
              
              <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Impacto e Contribuição</h3>
              <ul class="space-y-2">
                <li>Lidere transformação digital em organizações</li>
                <li>Contribua com pesquisa e desenvolvimento em IA</li>
                <li>Estabeleça padrões éticos e melhores práticas</li>
                <li>Forme a próxima geração de profissionais</li>
                <li>Influencie políticas públicas e regulamentação de IA</li>
              </ul>
              
              <div class="bg-emerald-50 border-l-4 border-emerald-500 p-4 mt-6">
                <p class="text-emerald-900 font-semibold">Parabéns por alcançar o nível Avançado!</p>
                <p class="text-emerald-800 mt-2">Você está no ápice da integração humano-IA. Continue aprimorando suas competências e compartilhando seu conhecimento.</p>
              </div>
            </div>
          `
        };
    }
  };

  const { title, content } = getContent();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-slate-600" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-200 bg-slate-50">
          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-500 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
