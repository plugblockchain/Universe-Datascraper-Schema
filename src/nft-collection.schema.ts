import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SupportedTokenTypes } from './types';

@Schema({ timestamps: true, collection: 'nft-collections' })
export class NFTCollection {
  @Prop({ required: true, trim: true, index: true, unique: true })
  public contractAddress: string;

  @Prop({ required: true, trim: true, index: true, enum: SupportedTokenTypes })
  public tokenType: string;

  @Prop({ required: true })
  public createdAtBlock: number;

  @Prop({ trim: true })
  public sentAt: Date;

  @Prop({ trim: true })
  public firstCheckAt: Date;
}

export type NFTCollectionDocument = NFTCollection & Document;

export const NFTCollectionSchema: SchemaFactory =
  SchemaFactory.createForClass(NFTCollection);
