import { RESTDataSource } from 'apollo-datasource-rest';
import { SuitablePlanetsResponse } from 'modules/planets/types/suitablePlanets.type';

// eslint-disable-next-line import/no-extraneous-dependencies
import { DataSourceConfig } from 'apollo-datasource';

type SuitablePlanetsRemoteResponse = Omit<
  SuitablePlanetsResponse,
  'hasStation'
>;

export class NasaAPI extends RESTDataSource {
  constructor() {
    super();

    this.baseURL =
      'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI';

    this.initialize({} as DataSourceConfig<any>);
  }

  async getPlanets(): Promise<SuitablePlanetsRemoteResponse[]> {
    const response: string = await this.get('/', {
      table: 'exoplanets',
      format: 'json'
    });

    const startIndex = response.search(/\[/);
    const planetsString = response.slice(startIndex);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const objectData: any[] = JSON.parse(planetsString);

    const planets: SuitablePlanetsRemoteResponse[] = [];
    objectData.forEach(planet =>
      planets.push({
        name: planet.pl_name,
        mass: planet.pl_bmassj
      })
    );

    return planets;
  }
}
