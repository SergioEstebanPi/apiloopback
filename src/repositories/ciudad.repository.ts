import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Ciudad, CiudadRelations} from '../models';

export class CiudadRepository extends DefaultCrudRepository<
  Ciudad,
  typeof Ciudad.prototype.id,
  CiudadRelations
> {
  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource,
  ) {
    super(Ciudad, dataSource);
  }
}
