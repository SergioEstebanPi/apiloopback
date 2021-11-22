import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Servicio, ServicioRelations, Encomienda, Cliente} from '../models';
import {EncomiendaRepository} from './encomienda.repository';
import {ClienteRepository} from './cliente.repository';

export class ServicioRepository extends DefaultCrudRepository<
  Servicio,
  typeof Servicio.prototype.id,
  ServicioRelations
> {

  public readonly encomiendafk: BelongsToAccessor<Encomienda, typeof Servicio.prototype.id>;

  public readonly origenfk: BelongsToAccessor<Cliente, typeof Servicio.prototype.id>;

  public readonly destinofk: BelongsToAccessor<Cliente, typeof Servicio.prototype.id>;

  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource, @repository.getter('EncomiendaRepository') protected encomiendaRepositoryGetter: Getter<EncomiendaRepository>, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>,
  ) {
    super(Servicio, dataSource);
    this.destinofk = this.createBelongsToAccessorFor('destinofk', clienteRepositoryGetter,);
    this.registerInclusionResolver('destinofk', this.destinofk.inclusionResolver);
    this.origenfk = this.createBelongsToAccessorFor('origenfk', clienteRepositoryGetter,);
    this.registerInclusionResolver('origenfk', this.origenfk.inclusionResolver);
    this.encomiendafk = this.createBelongsToAccessorFor('encomiendafk', encomiendaRepositoryGetter,);
    this.registerInclusionResolver('encomiendafk', this.encomiendafk.inclusionResolver);
  }
}
