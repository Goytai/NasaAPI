import { RESTDataSource } from 'apollo-datasource-rest';
import PlanetsResponse from 'modules/planets/types/planets.type';

// eslint-disable-next-line import/no-extraneous-dependencies
import { DataSourceConfig } from 'apollo-datasource';

class NasaAPI extends RESTDataSource {
  constructor() {
    super();

    this.baseURL =
      'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI';

    this.initialize({} as DataSourceConfig<any>);
  }

  async getPlanets(): Promise<PlanetsResponse[]> {
    const response: string = await this.get('/', {
      table: 'exoplanets',
      format: 'json'
    });

    const startIndex = response.search(/\[/);
    const planetsString = response.slice(startIndex);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const objectData: any[] = JSON.parse(planetsString);

    const planets: PlanetsResponse[] = [];
    objectData.forEach(planet =>
      planets.push({
        name: planet.pl_name,
        mass: planet.pl_bmassj,
        hasStation: false
      })
    );

    return planets;
  }
}

export default NasaAPI;
