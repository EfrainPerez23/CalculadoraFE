export interface Result {
  value: number;
  errors: ErrorResult[];
}


export interface ErrorResult {
  type: string;
  value: string;
}
