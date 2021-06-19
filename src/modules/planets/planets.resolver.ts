import { Query } from 'type-graphql';
import { Service } from 'typedi';

import { SuitablePlanetsService } from './services/suitablePlanets.service';
import { SuitablePlanetsResponse } from './types/suitablePlanets.type';

@Service()
export class PlanetsResolver {
  constructor(
    private readonly suitablePlanetsServices: SuitablePlanetsService
  ) {}

  @Query(() => [SuitablePlanetsResponse])
  public async suitablePlanets(): Promise<SuitablePlanetsResponse[]> {
    const response = await this.suitablePlanetsServices.execute();

    return response;
  }
}
