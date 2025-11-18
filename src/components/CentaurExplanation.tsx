import React from 'react';
import { ArrowLeft, ChevronRight, BookOpen } from 'lucide-react';

interface CentaurExplanationProps {
  onClose: () => void;
  onNext: () => void;
}

export default function CentaurExplanation({ onClose, onNext }: CentaurExplanationProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white p-6 flex flex-col">
      {/* Header Navigation */}
      <div className="flex items-center justify-between mb-12">
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 rounded-lg transition-all duration-200 hover:scale-105"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Voltar</span>
        </button>
        <div className="flex items-center gap-3">
          <BookOpen size={24} className="text-indigo-400" />
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">
            Os Centauros
          </h1>
        </div>
        <div className="w-20"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto max-w-5xl mx-auto w-full space-y-8">
        {/* Intro Section */}
        <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-md p-8 rounded-2xl border border-indigo-400/20 hover:border-indigo-400/40 transition-all">
          <p className="text-lg text-indigo-100 leading-relaxed font-light">
            Para entendermos o desenvolvimento do <span className="font-semibold text-indigo-300">"Time Centauro"</span>, que diz respeito à relação entre a pessoa e a <span className="font-semibold text-indigo-300">"ferramenta inteligente" de IA</span>, traçamos uma analogia com a mitologia grega e adotamos três nomes significativos de centauros para descrever os diferentes níveis do "Time Centauro": <span className="font-bold text-indigo-200">Nesso, Fólo e Quíron</span>. Cada um desses centauros representa um estágio distinto de desenvolvimento das competências necessárias para o trabalho com IA, inspirados nas características e histórias na mitologia grega.
          </p>
        </div>

        {/* Mythology Foundation */}
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <div className="w-1 h-6 bg-gradient-to-b from-indigo-400 to-purple-400 rounded"></div>
            Raízes Mitológicas
          </h2>
          <p className="text-slate-200 leading-relaxed font-light">
            A escolha dos nomes Nesso, Fólo e Quíron para os estágios de desenvolvimento é profundamente enraizada nas características e histórias de cada centauro na mitologia. Nesso, com sua impulsividade e falta de visão a longo prazo, representa o estágio inicial, onde o conhecimento e as habilidades são limitados. Fólo, com sua hospitalidade e boa natureza, mas ainda sujeito a desafios imprevistos, simboliza o nível intermediário, onde há um entendimento mais profundo, mas ainda há espaço para crescimento. Finalmente, Quíron, o sábio e justo mentor dos heróis, personifica o estágio avançado, onde o domínio do conhecimento e a capacidade de liderar e inspirar são plenamente realizados.
          </p>
        </div>

        {/* Progression Narrative */}
        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-md p-8 rounded-2xl border border-purple-400/20">
          <p className="text-slate-100 leading-relaxed font-light">
            Essas denominações não só prestam homenagem às figuras mitológicas, mas também fornecem uma <span className="font-semibold text-purple-300">narrativa clara e motivadora</span> para o desenvolvimento das competências, incentivando os profissionais a progredirem de Nesso a Fólo e, eventualmente, alcançarem o nível de Quíron em sua jornada de crescimento e aprimoramento.
          </p>
        </div>

        {/* Three Stages */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Nesso Card */}
          <div className="bg-gradient-to-br from-red-900/40 to-orange-900/40 backdrop-blur-md p-6 rounded-2xl border border-red-400/30 hover:border-red-400/60 transition-all hover:shadow-lg hover:shadow-red-500/20 group">
            <div className="mb-4 inline-block p-3 bg-red-500/20 rounded-lg group-hover:bg-red-500/30 transition-all">
              <span className="text-3xl">🏹</span>
            </div>
            <h3 className="text-xl font-bold text-red-200 mb-3">Nesso</h3>
            <p className="text-sm font-semibold text-red-300 mb-3 uppercase tracking-wide">Estágio Iniciante</p>
            <p className="text-sm text-slate-200 leading-relaxed font-light">
              Nesso denomina o Estágio Iniciante do "Time Centauro". Nesso é um dos centauros mais conhecidos da mitologia grega, é frequentemente lembrado por suas ações impulsivas. O estágio Nesso representa o início do desenvolvimento das competências do "Time Centauro". Assim como Nesso, que agia impulsivamente e sem um entendimento completo das consequências de suas ações, os iniciantes possuem um conhecimento básico e ainda estão aprendendo a aplicar os conceitos fundamentais de IA.
            </p>
          </div>

          {/* Fólo Card */}
          <div className="bg-gradient-to-br from-amber-900/40 to-yellow-900/40 backdrop-blur-md p-6 rounded-2xl border border-amber-400/30 hover:border-amber-400/60 transition-all hover:shadow-lg hover:shadow-amber-500/20 group">
            <div className="mb-4 inline-block p-3 bg-amber-500/20 rounded-lg group-hover:bg-amber-500/30 transition-all">
              <span className="text-3xl">🍷</span>
            </div>
            <h3 className="text-xl font-bold text-amber-200 mb-3">Fólo</h3>
            <p className="text-sm font-semibold text-amber-300 mb-3 uppercase tracking-wide">Estágio Intermediário</p>
            <p className="text-sm text-slate-200 leading-relaxed font-light">
              Fólo denomina o Estágio Intermediário do desenvolvimento do "Time Centauro". Fólo era conhecido por sua hospitalidade e sabedoria, embora não tão destacado quanto Quíron. Este estágio representa um nível intermediário de competência, onde os indivíduos têm um entendimento mais profundo e são capazes de aplicar a IA de forma mais eficaz, mas ainda podem enfrentar desafios inesperados que exigem maior experiência e sabedoria.
            </p>
          </div>

          {/* Quíron Card */}
          <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-md p-6 rounded-2xl border border-emerald-400/30 hover:border-emerald-400/60 transition-all hover:shadow-lg hover:shadow-emerald-500/20 group">
            <div className="mb-4 inline-block p-3 bg-emerald-500/20 rounded-lg group-hover:bg-emerald-500/30 transition-all">
              <span className="text-3xl">⚕️</span>
            </div>
            <h3 className="text-xl font-bold text-emerald-200 mb-3">Quíron</h3>
            <p className="text-sm font-semibold text-emerald-300 mb-3 uppercase tracking-wide">Estágio Avançado</p>
            <p className="text-sm text-slate-200 leading-relaxed font-light">
              Quíron denomina o Estágio Avançado do "Time Centauro". Quíron é o mais reverenciado dos centauros na mitologia grega, conhecido por sua sabedoria, justiça e habilidades em várias artes e ciências, incluindo a medicina. Quíron representa o estágio mais avançado de desenvolvimento de competências, onde o profissional não só domina o conhecimento e as habilidades necessárias, mas também lidera e inspira outros, promovendo uma cultura de excelência e inovação contínua.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex justify-end mt-12 pt-8 border-t border-white/10">
        <button
          onClick={onNext}
          className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-indigo-500/50"
        >
          Explorar Competências <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
