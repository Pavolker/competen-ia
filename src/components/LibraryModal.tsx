import React from 'react';
import { X, ExternalLink, BookOpen } from 'lucide-react';

interface Book {
    id: string;
    title: string;
    cover: string;
    link: string;
    summary: string;
}

const BOOKS: Book[] = [
    {
        id: 'platao',
        title: 'Platão: O Algoritmo da Pergunta',
        cover: '/livro-platao.png',
        link: 'https://sites.google.com/mdh-hability.com/platao-algoritmo/in%C3%ADcio',
        summary: 'Um mergulho profundo na obra de Platão e na lógica das perguntas que permeiam sua filosofia. Descubra o "algoritmo da pergunta" e como ele conduz o processo dialético e a busca pela verdade.'
    },
    {
        id: 'estrategia',
        title: 'A Estratégia da Pergunta',
        cover: '/livro-estrategia.png',
        link: 'https://sites.google.com/mdh-hability.com/estrategiapergunta/in%C3%ADcio',
        summary: 'Um framework para aquisição de conhecimento baseado no método socrático. Aprenda a formular perguntas estratégicas para impulsionar a inovação, a gestão do conhecimento e a adaptação contínua.'
    },
    {
        id: 'sistema',
        title: 'Sistema Humano de Interrogação',
        cover: '/livro-sistema.png',
        link: 'https://sites.google.com/mdh-hability.com/shim/in%C3%ADcio',
        summary: 'Explore as perguntas fundamentais que surgem em momentos de crise e definem a condição humana. Uma análise abrangente sobre como a busca por respostas impacta nosso crescimento e desenvolvimento.'
    },
    {
        id: 'prompt',
        title: 'A Filosofia do Prompt',
        cover: '/livro-prompt.png',
        link: 'https://sites.google.com/mdh-hability.com/promptfilosofia/in%C3%ADcio',
        summary: 'A arte de formular perguntas eficazes para a Era da IA. Entenda como a "Filosofia do Prompt" e o conceito de "Time Centauro" podem potencializar a sinergia entre a inteligência humana e artificial.'
    }
];

interface LibraryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LibraryModal({ isOpen, onClose }: LibraryModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] flex flex-col overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-indigo-100 rounded-lg">
                            <BookOpen className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900">Biblioteca do Centauro</h2>
                            <p className="text-sm text-slate-500">Fundamentação teórica e obras de referência</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-8 bg-slate-50">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {BOOKS.map((book) => (
                            <div key={book.id} className="group flex flex-col bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-200 transition-all duration-300 overflow-hidden">
                                {/* Cover Image Container */}
                                <div className="relative aspect-[2/3] overflow-hidden bg-slate-100">
                                    <img
                                        src={book.cover}
                                        alt={`Capa do livro ${book.title}`}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <a
                                            href={book.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full py-3 bg-white text-slate-900 font-bold rounded-lg text-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2"
                                        >
                                            Ver Detalhes <ExternalLink size={16} />
                                        </a>
                                    </div>
                                </div>

                                {/* Book Info */}
                                <div className="p-5 flex flex-col flex-1">
                                    <h3 className="font-bold text-lg text-slate-900 leading-tight mb-3 group-hover:text-indigo-600 transition-colors">
                                        {book.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed flex-1">
                                        {book.summary}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-slate-100 bg-white flex justify-between items-center">
                    <p className="text-sm text-slate-500 italic">
                        Obras de Paulo Volker e colaboradores.
                    </p>
                    <button
                        onClick={onClose}
                        className="px-6 py-2.5 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-colors"
                    >
                        Fechar Biblioteca
                    </button>
                </div>
            </div>
        </div>
    );
}
