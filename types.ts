import React from 'react';

export enum CentaurLevel {
  Nesso = 'Nesso',
  Folo = 'Fólo',
  Quiron = 'Quíron',
}

export interface LevelDescription {
  title: CentaurLevel;
  description: string;
  keywords: string[];
  scoreRange: [number, number]; // e.g., [1, 1.9]
  color: string;
}

export interface CompetencyOption {
  level: CentaurLevel;
  score: number;
  text: string;
  details: string;
}

export interface Competency {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  options: CompetencyOption[];
}

export interface AssessmentResult {
  scores: Record<string, number>; // competencyId -> score
  totalScore: number;
  averageScore: number;
  overallLevel: CentaurLevel;
}