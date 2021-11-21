import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Encomienda, EncomiendaRelations} from '../models';

export class EncomiendaRepository extends DefaultCrudRepository<
  Encomienda,
  typeof Encomienda.prototype.id,
  EncomiendaRelations
> {
  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource,
  ) {
    super(Encomienda, dataSource);
  }
}
