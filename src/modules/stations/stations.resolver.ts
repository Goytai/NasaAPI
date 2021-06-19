import { Arg, Mutation } from 'type-graphql';

import { InstallStationResponse } from './types/installStation.type';
import { InstallStationInput } from './input/installStation.input';
import { InstallStationService } from './services/installStation.service';

export class PlanetsResolver {
  private installStationService = new InstallStationService();

  @Mutation(() => InstallStationResponse)
  async installStation(
    @Arg('planet')
    planet: InstallStationInput
  ): Promise<InstallStationResponse> {
    return this.installStationService.execute(planet);
  }
}
