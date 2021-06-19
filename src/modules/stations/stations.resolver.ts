import { Arg, Mutation, Query } from 'type-graphql';
import { Service } from 'typedi';

import { InstallStationResponse } from './types/installStation.type';
import { InstallStationInput } from './input/installStation.input';
import { InstallStationService } from './services/installStation.service';
import { StationsResponse } from './types/station.type';
import { StationsService } from './services/stations.service';

@Service()
export class PlanetsResolver {
  constructor(
    private readonly installStationService: InstallStationService,
    private readonly stationsService: StationsService
  ) {}

  @Query(() => [StationsResponse])
  public async stations(): Promise<StationsResponse[]> {
    return this.stationsService.execute();
  }

  @Mutation(() => InstallStationResponse)
  public async installStation(
    @Arg('planet')
    planet: InstallStationInput
  ): Promise<InstallStationResponse> {
    return this.installStationService.execute(planet);
  }
}
