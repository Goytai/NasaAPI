import { getMongoRepository } from 'typeorm';
import { Stations } from '../entities/stations.entity';
import { InstallStationInput } from '../input/installStation.input';
import { InstallStationResponse } from '../types/installStation.type';

export class InstallStationService {
  private stationRepository = getMongoRepository(Stations);

  async execute(planet: InstallStationInput): Promise<InstallStationResponse> {
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
