import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Encomienda} from './encomienda.model';
import {Cliente} from './cliente.model';

@model()
export class Servicio extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  origen: string;

  @property({
    type: 'string',
    required: true,
  })
  destino: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  hora: string;

  @property({
    type: 'string',
    required: true,
  })
  encomienda: string;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;

  @belongsTo(() => Encomienda, {name: 'encomiendafk'})
  encomiendaId: string;

  @belongsTo(() => Cliente, {name: 'origenfk'})
  origenId: string;

  @belongsTo(() => Cliente, {name: 'destinofk'})
  destinoId: string;

  constructor(data?: Partial<Servicio>) {
    super(data);
  }
}

export interface ServicioRelations {
  // describe navigational properties here
}

export type ServicioWithRelations = Servicio & ServicioRelations;
