import { Arg, Mutation, Query } from 'type-graphql';

import { InstallStationResponse } from './types/installStation.type';
import { InstallStationInput } from './input/installStation.input';
import { InstallStationService } from './services/installStation.service';
import { StationsResponse } from './types/station.type';
import { StationsService } from './services/stations.service';

export class PlanetsResolver {
  private stationsService = new StationsService();

  private installStationService = new InstallStationService();

  @Query(() => [StationsResponse])
  async stations(): Promise<StationsResponse[]> {
    return this.stationsService.execute();
  }

  @Mutation(() => InstallStationResponse)
  async installStation(
    @Arg('planet')
    planet: InstallStationInput
  ): Promise<InstallStationResponse> {
    return this.installStationService.execute(planet);
  }
}
