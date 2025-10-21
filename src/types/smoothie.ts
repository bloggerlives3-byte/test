export type MacroProfile = {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

export type SmoothieInput = {
  name: string;
  ingredientIds: string[];
  boosterIds: string[];
};

export type SmoothieRecord = SmoothieInput & {
  id: string;
  macros: MacroProfile;
  createdAt: string;
};
