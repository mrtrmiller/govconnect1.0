export type VocabularyItem = {
  term: string;
  definition: string;
};

export type Question = {
  prompt: string;
  feedback: string;
};

export type Lesson = {
  readTime: number;
  title: string;
  learningTarget: string;
  category: string;
  date: string;
  summary: string[];
  vocabulary: VocabularyItem[];
  questions: Question[];
};