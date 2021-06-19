import { Service } from 'typedi';
import { MongoRepository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';

import { Stations } from '../entities/stations.entity';
import { InstallStationInput } from '../input/installStation.input';
import { InstallStationResponse } from '../types/installStation.type';

@Service()
export class InstallStationService {
  constructor(
    @InjectRepository(Stations)
    private readonly stationRepository: MongoRepository<Stations>
  ) {}

  public async execute(
    planet: InstallStationInput
  ): Promise<InstallStationResponse> {
    const checkStationExist = await this.stationRepository.findOne({
      planetName: planet.name
    });

    if (checkStationExist) {
      return checkStationExist;
    }

    const newStation = this.stationRepository.create({
      planetName: planet.name
    });

    const saveStation = await this.stationRepository.save(newStation);

    return saveStation;
  }
}
