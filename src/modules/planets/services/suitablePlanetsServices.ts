import NasaAPI from '../../../shared/rest/index';
import PlanetsResponse from '../types/planets.type';

class SuitablePlanetsServices {
  private api = new NasaAPI();

  async execute(): Promise<PlanetsResponse[]> {
    const remoteResponse = await this.api.getPlanets();

    const suitablePlanets = remoteResponse.filter(
      planet => planet.mass && planet.mass > 10
    );

    return suitablePlanets;
  }
}

export default SuitablePlanetsServices;
