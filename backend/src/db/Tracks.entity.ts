//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Tracks')
export class TracksEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer', { nullable: true })
  artist: number;

  @Column('text', { nullable: true })
  title: string;

  @Column('text', { nullable: true })
  genre: string;

  @Column('date', { nullable: true })
  releaseDate: Date;
}