export class DemonsModel {
  id: number;
  race: string;
  // lvl: number;
  name: string;
  // baseHP: number;
  // baseMP: number;
  // baseSt: number;
  // baseMa: number;
  // baseVi: number;
  // baseAg: number;
  // baseLu: number;
  // isBoss: boolean;
  // isBroker: boolean;
  // isEvolved: boolean;
  // resistances: ResistancesModel;
  // skills: SkillModel[];
}

export class MagatamaModel {
  id: number;
  name: string;
  location: string;
  skills: SkillModel[];
  resistances: ResistancesModel;
  baseSt: number;
  baseMa: number;
  baseVi: number;
  baseAg: number;
  baseLu: number;
}

export class ResistancesModel {
  phys: string;
  fire: string;
  ice: string;
  elec: string;
  force: string;
  curse: string;
  mind: string;
  nerve: string;
  expel: string;
  death: string;
}

export class SkillModel {
  id: number;
  type: string;
  name: string;
  desc: string;
  cost: string;
  target: string;
  learnedBy: DemonsModel[];
}
