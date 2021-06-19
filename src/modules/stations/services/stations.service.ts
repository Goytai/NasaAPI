import { Service } from 'typedi';
import { MongoRepository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';

import { Stations } from '../entities/stations.entity';
import { StationsResponse } from '../types/station.type';

@Service()
export class StationsService {
  constructor(
    @InjectRepository(Stations)
    private readonly stationRepository: MongoRepository<Stations>
  ) {}

  public async execute(): Promise<StationsResponse[]> {
    const allStations = await this.stationRepository.find({});

    return allStations;
  }
}
