import { Query } from 'type-graphql';

import { SuitablePlanetsService } from './services/suitablePlanets.service';
import { SuitablePlanetsResponse } from './types/suitablePlanets.type';

export class PlanetsResolver {
  private suitablePlanetsServices = new SuitablePlanetsService();

  @Query(() => [SuitablePlanetsResponse])
  async suitablePlanets(): Promise<SuitablePlanetsResponse[]> {
    const response = await this.suitablePlanetsServices.execute();

    return response;
  }
}
