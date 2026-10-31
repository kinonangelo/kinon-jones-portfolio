export type Evidence = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  dark?: boolean;
  unframed?: boolean;
};

export type StoryStep = {
  reveal?: boolean;
  eyebrow?: string;
  title: string;
  text: string;
  evidence: Evidence;
  takeaway?: string;
  comparison?: { label: string; text: string }[];
};

export type Chapter = {
  id: string;
  label: string;
  title: string;
  intro: string;
  points?: { title: string; text: string }[];
  detail?: { title: string; paragraphs: string[] };
  evidence?: Evidence;
  steps?: StoryStep[];
  tone?: "dark";
};

export type CaseStudy = {
  label: string;
  title: string;
  summary: string;
  facts: { label: string; value: string }[];
  award: string;
  awardContext: string;
  hero: Evidence;
  chapters: Chapter[];
  next: { title: string; href: string };
};
