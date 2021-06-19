import { getMongoRepository } from 'typeorm';
import { Stations } from '../entities/stations.entity';
import { StationsResponse } from '../types/station.type';

export class StationsService {
  private stationRepository = getMongoRepository(Stations);

  async execute(): Promise<StationsResponse[]> {
    const allStations = await this.stationRepository.find({});

    return allStations;
  }
}
