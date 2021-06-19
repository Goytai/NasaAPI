import { Query } from 'type-graphql';
import SuitablePlanetsServices from './services/suitablePlanetsServices';

import PlanetsResponse from './types/planets.type';

class PlanetsResolver {
  private suitablePlanetsServices = new SuitablePlanetsServices();

  @Query(() => [PlanetsResponse])
  async suitablePlanets(): Promise<PlanetsResponse[]> {
    const response = await this.suitablePlanetsServices.execute();

    return response;
  }
}

export default PlanetsResolver;
