"use client";

import type { ReactNode, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type Project = {
  id?: string;
  project_name?: string;
  project_detail?: string;
  project_image?: React.ReactNode | string;
};

type Skill = {
  // id?: string;
  skill_name?: string;
  skill_detail?: string;
  skill_icon?: React.ReactNode | string;
  skill_proficiency: number;
};


export type Card = {
  id: number;
  name: string;
  detail: string;
  content: ReactNode;
};

export type SkillInfoProps = {
  skillInfo: Skill[];
  activeIndex: number;
};

type ProjectInfoProps = {
  projectInfo: Project[];
  activeIndex: number;
};



export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;
