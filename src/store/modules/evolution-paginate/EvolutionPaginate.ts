export interface EvolutionPaginate {
  count: number;
  next: string;
  previous: string;

  results: {
    url: string;
  }[];
}
