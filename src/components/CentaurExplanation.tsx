import React from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';

interface CentaurExplanationProps {
  onClose: () => void;
  onNext: () => void;
}

export default function CentaurExplanation({ onClose, onNext }: CentaurExplanationProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Voltar</span>
        </button>
        <h1 className="text-2xl font-bold text-center flex-1">Nesso, Fólo e Quíron</h1>
        <div className="w-20"></div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto max-w-4xl mx-auto space-y-6 text-slate-300 leading-relaxed">
        <p className="text-base text-slate-200">
          Para entendermos o desenvolvimento do "Time Centauro", que diz respeito à relação entre a pessoa e a "ferramenta inteligente" de IA, traçamos uma analogia com a mitologia grega e adotamos três nomes significativos de centauros para descrever os diferentes níveis do "Time Centauro": Nesso, Fólo e Quíron. Cada um desses centauros representa um estágio distinto de desenvolvimento das competências necessárias para o trabalho com IA, inspirados nas características e histórias na mitologia grega.
        </p>

        <p className="text-base text-slate-200">
          A escolha dos nomes Nesso, Fólo e Quíron para os estágios de desenvolvimento é profundamente enraizada nas características e histórias de cada centauro na mitologia. Nesso, com sua impulsividade e falta de visão a longo prazo, representa o estágio inicial, onde o conhecimento e as habilidades são limitados. Fólo, com sua hospitalidade e boa natureza, mas ainda sujeito a desafios imprevistos, simboliza o nível intermediário, onde há um entendimento mais profundo, mas ainda há espaço para crescimento. Finalmente, Quíron, o sábio e justo mentor dos heróis, personifica o estágio avançado, onde o domínio do conhecimento e a capacidade de liderar e inspirar são plenamente realizados.
        </p>

        <p className="text-base text-slate-200">
          Essas denominações não só prestam homenagem às figuras mitológicas, mas também fornecem uma narrativa clara e motivadora para o desenvolvimento das competências, incentivando os profissionais a progredirem de Nesso a Fólo e, eventualmente, alcançarem o nível de Quíron em sua jornada de crescimento e aprimoramento.
        </p>

        <p className="text-base text-slate-200">
          Nesso denomina o Estágio Iniciante do "Time Centauro". Nesso é um dos centauros mais conhecidos da mitologia grega, é frequentemente lembrado por suas ações impulsivas. O estágio Nesso representa o início do desenvolvimento das competências do "Time Centauro". Assim como Nesso, que agia impulsivamente e sem um entendimento completo das consequências de suas ações, os iniciantes possuem um conhecimento básico e ainda estão aprendendo a aplicar os conceitos fundamentais de IA.
        </p>

        <p className="text-base text-slate-200">
          Fólo denomina o Estágio Intermediário do desenvolvimento do "Time Centauro". Fólo era conhecido por sua hospitalidade e sabedoria, embora não tão destacado quanto Quíron. Este estágio representa um nível intermediário de competência, onde os indivíduos têm um entendimento mais profundo e são capazes de aplicar a IA de forma mais eficaz, mas ainda podem enfrentar desafios inesperados que exigem maior experiência e sabedoria.
        </p>

        <p className="text-base text-slate-200">
          Quíron denomina o Estágio Avançado do "Time Centauro". Quíron é o mais reverenciado dos centauros na mitologia grega, conhecido por sua sabedoria, justiça e habilidades em várias artes e ciências, incluindo a medicina. Quíron representa o estágio mais avançado de desenvolvimento de competências, onde o profissional não só domina o conhecimento e as habilidades necessárias, mas também lidera e inspira outros, promovendo uma cultura de excelência e inovação contínua.
        </p>
      </div>

      {/* Footer Button */}
      <div className="flex justify-end mt-8 pt-6 border-t border-white/20">
        <button
          onClick={onNext}
          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
        >
          Próximo <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
