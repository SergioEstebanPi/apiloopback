import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Pais, PaisRelations} from '../models';

export class PaisRepository extends DefaultCrudRepository<
  Pais,
  typeof Pais.prototype.id,
  PaisRelations
> {
  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource,
  ) {
    super(Pais, dataSource);
  }
}
