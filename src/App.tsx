import React, { useState, useMemo } from 'react';
import { COMPETENCIES, LEVEL_DESCRIPTIONS } from './constants';
import { CentaurLevel, AssessmentResult } from './types';
import CentaurChart from './components/CentaurChart';
import ProfileModal from './components/ProfileModal';
import CentaurExplanation from './components/CentaurExplanation';
import ProfilePage from './components/ProfilePage';
import { ArrowRight, CheckCircle2, ChevronRight, RotateCcw, Sparkles, Trophy, Target, Eye, BarChart3, BookOpen } from 'lucide-react';

import LibraryModal from './components/LibraryModal';

// --- Components ---

const WelcomeScreen = ({ onStart, onOpenLibrary }: { onStart: () => void; onOpenLibrary: () => void }) => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6">
    <div className="max-w-4xl text-center space-y-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <img src="/botao-cent.gif" alt="Centauro" className="w-12 h-12 rounded-full" />
        <div className="inline-flex items-center justify-center px-3 py-2 bg-indigo-500/20 rounded-full ring-1 ring-indigo-400/50">
          <Sparkles className="w-5 h-5 text-indigo-400 mr-2" />
          <span className="text-indigo-200 font-semibold tracking-wide uppercase text-xs md:text-sm">Metodologia Time Centauro</span>
        </div>
        <img src="/original-maior.gif" alt="Logo" className="w-12 h-12 rounded-full" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-white">
        Diagnóstico Estratégico de Competências na Era da IA
      </h1>
      <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
        Mapeie seu grau de prontidão estratégica diante dos desafios cognitivos, éticos e decisórios da era da inteligência artificial.
      </p>

      <div className="grid md:grid-cols-3 gap-6 text-left mt-12">
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
          <div className="mb-4 p-3 bg-indigo-500/20 w-fit rounded-lg text-indigo-300">
            <Target size={24} />
          </div>
          <p className="text-base text-slate-300 leading-relaxed">
            Entenda seu posicionamento frente às competências críticas exigidas pela colaboração homem-máquina.
          </p>
        </div>
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
          <div className="mb-4 p-3 bg-indigo-500/20 w-fit rounded-lg text-indigo-300">
            <Eye size={24} />
          </div>
          <p className="text-base text-slate-300 leading-relaxed">
            Exercite sua autoconsciência profissional com base em parâmetros objetivos de atuação qualificada em ambientes mediados por IA.
          </p>
        </div>
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
          <div className="mb-4 p-3 bg-indigo-500/20 w-fit rounded-lg text-indigo-300">
            <BarChart3 size={24} />
          </div>
          <p className="text-base text-slate-300 leading-relaxed">
            Avalie as competências que estruturam sua atuação em ecossistemas mediados por IA.
          </p>
        </div>
      </div>

      <button
        onClick={onStart}
        className="mt-12 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25 flex items-center mx-auto"
      >
        Iniciar Avaliação <ArrowRight className="ml-2 w-5 h-5" />
      </button>

      <button
        onClick={onOpenLibrary}
        className="mt-8 text-slate-400 hover:text-indigo-300 transition-colors text-sm flex items-center gap-2 mx-auto"
      >
        <BookOpen size={16} />
        Conheça a Fundamentação Teórica (Livros)
      </button>

      <div className="mt-12 text-xs text-slate-500 font-light tracking-wider">
        MDH- Versão 1.0 - Desenvolvido por PVolker - 2025 - Todos os direitos reservados
      </div>
    </div>
  </div>
);

const QuizScreen = ({
  currentStep,
  totalSteps,
  competency,
  onAnswer,
  answers
}: {
  currentStep: number;
  totalSteps: number;
  competency: typeof COMPETENCIES[0];
  onAnswer: (score: number) => void;
  answers: Record<string, number>;
}) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Progress Bar */}
      <div className="w-full bg-slate-200 h-2">
        <div
          className="bg-indigo-600 h-2 transition-all duration-500 ease-out"
          style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        />
      </div>

      <div className="flex-1 container mx-auto max-w-4xl p-6 flex flex-col justify-center">
        <div className="mb-8">
          <span className="text-sm font-semibold text-indigo-600 tracking-wider uppercase">
            Competência {currentStep + 1} de {totalSteps}
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2 flex items-center gap-3">
            <span className="p-2 bg-indigo-100 text-indigo-700 rounded-lg">
              {competency.icon}
            </span>
            {competency.title}
          </h2>
          <p className="text-lg text-slate-600 mt-3 max-w-2xl">
            {competency.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {competency.options.map((option) => (
            <button
              key={option.level}
              onClick={() => onAnswer(option.score)}
              className={`relative group p-6 rounded-2xl border-2 text-left transition-all duration-300 hover:shadow-xl
                ${answers[competency.id] === option.score
                  ? 'border-indigo-600 bg-indigo-50 ring-1 ring-indigo-600'
                  : 'border-slate-200 bg-white hover:border-indigo-300'
                }
              `}
            >
              <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
                 ${answers[competency.id] === option.score
                  ? 'border-indigo-600 bg-indigo-600 text-white'
                  : 'border-slate-300 group-hover:border-indigo-400'
                }
              `}>
                {answers[competency.id] === option.score && <CheckCircle2 size={14} />}
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">{option.text}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {option.details}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const ResultsScreen = ({ result, onReset, onDeepDive, onOpenLibrary }: { result: AssessmentResult; onReset: () => void; onDeepDive: () => void; onOpenLibrary: () => void }) => {
  const levelData = LEVEL_DESCRIPTIONS[result.overallLevel];

  return (
    <>
      <div className="min-h-screen bg-slate-50 p-6 pb-20">
        <div className="container mx-auto max-w-5xl space-y-8">

          {/* Header Card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium">
                <Trophy size={16} className="text-yellow-500" />
                Resultado da Avaliação
              </div>
              <h1 className="text-4xl font-bold text-slate-900">
                Nível <span style={{ color: levelData.color }}>{levelData.title}</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                {levelData.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {levelData.keywords.map(kw => (
                  <span key={kw} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-md font-medium">
                    #{kw}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-40 h-40 rounded-full flex items-center justify-center border-8 shadow-inner"
              style={{ borderColor: levelData.color, backgroundColor: `${levelData.color}10` }}>
              <div className="text-center">
                <span className="block text-4xl font-bold" style={{ color: levelData.color }}>
                  {result.averageScore.toFixed(1)}
                </span>
                <span className="text-xs text-slate-500 uppercase tracking-wide">Pontuação Global</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Radar Chart Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Sparkles className="text-indigo-500" size={20} />
                Mapa de Competências
              </h2>
              <CentaurChart scores={result.scores} />
            </div>

            {/* Detailed Breakdown */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Detalhamento</h2>
              <div className="flex-1 overflow-y-auto pr-2 space-y-4 max-h-[400px] custom-scrollbar">
                {COMPETENCIES.map(comp => {
                  const score = result.scores[comp.id];
                  return (
                    <div key={comp.id} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-slate-800 text-sm flex items-center gap-2">
                          {comp.icon} {comp.title}
                        </h3>
                        <span className={`text-xs font-bold px-2 py-1 rounded ${score === 3 ? 'bg-emerald-100 text-emerald-700' :
                          score === 2 ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                          {score.toFixed(0)}/3
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${score === 3 ? 'bg-emerald-500' :
                            score === 2 ? 'bg-yellow-500' :
                              'bg-red-500'
                            }`}
                          style={{ width: `${(score / 3) * 100}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Call to Action / Plan */}
          <div className="bg-gradient-to-r from-slate-900 to-indigo-900 rounded-3xl p-8 text-white text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Próximos Passos</h3>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Considerando o seu perfil <strong>{levelData.title}</strong>, clique no botão "Aprofundar Perfil" para saber mais.
            </p>
            <div className="flex justify-center gap-4">
              <button onClick={onReset} className="px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors flex items-center gap-2">
                <RotateCcw size={18} />
                Refazer Avaliação
              </button>
              <button onClick={onDeepDive} className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-500 transition-colors flex items-center gap-2">
                <ChevronRight size={18} />
                Aprofundar Perfil
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                onClick={onOpenLibrary}
                className="text-indigo-200 hover:text-white transition-colors text-sm flex items-center gap-2 mx-auto"
              >
                <BookOpen size={16} />
                Ver Bibliografia Recomendada
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

// --- Main App Logic ---

function App() {
  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [finished, setFinished] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showProfilePage, setShowProfilePage] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);

  const handleStart = () => {
    setStarted(true);
    setCurrentStep(0);
    setAnswers({});
    setFinished(false);
  };

  const handleReset = () => {
    setStarted(false);
    setCurrentStep(0);
    setAnswers({});
    setFinished(false);
    setShowExplanation(false);
    setShowProfileModal(false);
    setShowProfilePage(false);
  };

  const handleAnswer = (score: number) => {
    const currentCompetency = COMPETENCIES[currentStep];
    setAnswers(prev => ({ ...prev, [currentCompetency.id]: score }));

    if (currentStep < COMPETENCIES.length - 1) {
      // Small delay for better UX
      setTimeout(() => setCurrentStep(prev => prev + 1), 250);
    } else {
      setTimeout(() => setFinished(true), 250);
    }
  };

  const result: AssessmentResult | null = useMemo(() => {
    if (!finished) return null;

    // Explicitly cast Object.values(answers) to number[] to avoid TS errors with reduce accumulator
    const totalScore = (Object.values(answers) as number[]).reduce((a, b) => a + b, 0);
    const averageScore = totalScore / COMPETENCIES.length;

    let overallLevel = CentaurLevel.Nesso;
    if (averageScore > 2.4) overallLevel = CentaurLevel.Quiron;
    else if (averageScore > 1.6) overallLevel = CentaurLevel.Folo;

    return {
      scores: answers,
      totalScore,
      averageScore,
      overallLevel
    };
  }, [finished, answers]);

  if (!started) {
    return (
      <>
        <WelcomeScreen onStart={handleStart} onOpenLibrary={() => setShowLibrary(true)} />
        <LibraryModal isOpen={showLibrary} onClose={() => setShowLibrary(false)} />
      </>
    );
  }

  if (showExplanation) {
    return (
      <CentaurExplanation
        onClose={() => setShowExplanation(false)}
        onNext={() => {
          setShowExplanation(false);
          setShowProfilePage(true);
        }}
      />
    );
  }

  if (showProfilePage && result) {
    return (
      <ProfilePage
        level={result.overallLevel}
        onBack={() => {
          setShowProfilePage(false);
          setFinished(true);
        }}
      />
    );
  }

  if (finished && result) {
    return (
      <>
        <ResultsScreen
          result={result}
          onReset={handleReset}
          onDeepDive={() => setShowExplanation(true)}
          onOpenLibrary={() => setShowLibrary(true)}
        />
        <LibraryModal isOpen={showLibrary} onClose={() => setShowLibrary(false)} />
      </>
    );
  }

  return (
    <QuizScreen
      currentStep={currentStep}
      totalSteps={COMPETENCIES.length}
      competency={COMPETENCIES[currentStep]}
      onAnswer={handleAnswer}
      answers={answers}
    />
  );
}

export default App;