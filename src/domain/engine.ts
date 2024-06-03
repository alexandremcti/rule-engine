export type Rule = Record<
  string,
  {
    conditions: Condition[];
    effect: Effect;
  }
>;

export type RuleError = { message: string };

export type Condition = [string, Operator, string];

export enum Operator {
  CONTAINS = 'contains',
  EQUALS = 'equals',
  GREATER_THAN = 'greaterThan',
  GREATER_THAN_OR_EQUALS = 'greatherThanOrEquals',
  LESS_THAN = 'lessThan',
  LESS_THAN_OR_EQUALS = 'lessThanOrEquals',
}

export type Effect = {
  action: Action;
  property?: string;
  value?: number;
  error?: { message: string };
};

enum Action {
  ADD = 'add',
  DECREMENT = 'decrement',
  INCREMENT = 'increment',
  OMIT = 'omit',
  OMIT_WITH_SILENT_ERROR = 'ommit_with_silent_error',
  REPLACE = 'replaece',
}
