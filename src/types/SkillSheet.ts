// スキル分析シートの型定義
export type SkillSheet = {
  engineerName: string;
  jobRequirement: {
    title: string;
    description: string;
    requiredSkills: string[];
    preferredSkills: string[];
  };
  engineerEvaluation: {
    frontendSkills: {
      name: string;
      level: number;
      comment: string;
    }[];
    backendSkills: {
      name: string;
      level: number;
      comment: string;
    }[];
    devOpsSkills: {
      name: string;
      level: number;
      comment: string;
    }[];
    softSkills: {
      name: string;
      level: number;
      comment: string;
    }[];
    overallComment: string;
    matchingScore: number;
  };
};

// セクションIDの型定義
export type SectionId =
  | "achievements"
  | "concerns"
  | "skill_analysis"
  | "why_choose_us"
  | "service_details"
  | "company_support"
  | "contact_form"
  | "solution_section";
