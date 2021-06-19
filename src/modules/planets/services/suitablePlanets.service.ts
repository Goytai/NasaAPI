import { getMongoRepository } from 'typeorm';

import { Stations } from '../../stations/entities/stations.entity';
import { SuitablePlanetsResponse } from '../types/suitablePlanets.type';
import { NasaAPI } from '../../../shared/rest/index';

export class SuitablePlanetsService {
  private api = new NasaAPI();

  private stationRepository = getMongoRepository(Stations);

  async execute(): Promise<SuitablePlanetsResponse[]> {
    const remoteResponse = await this.api.getPlanets();

    const suitablePlanets = remoteResponse.filter(
      planet => planet.mass && planet.mass > 10
    );

    const response: SuitablePlanetsResponse[] = [];
    for (const planet of suitablePlanets) {
      const verifyExists = await this.stationRepository.findOne({
        planetName: planet.name
      });

      response.push({ ...planet, hasStation: !!verifyExists });
    }

    return response;
  }
}
