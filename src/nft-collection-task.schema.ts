import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MessageStatus } from './types';


@Schema({ timestamps: true, collection: 'nft-collection-tasks' })
export class NFTCollectionTask {
  @Prop({ index: true, require: true })
  public messageId: string;

  @Prop({ trim: true, index: true, required: true })
  public contractAddress: string;

  @Prop({ index: true, required: true })
  public startBlock: number;

  @Prop({ index: true, required: true })
  public endBlock: number;

  @Prop({ trim: true, index: true, required: true })
  public tokenType: 'ERC721' | 'ERC1155';

  @Prop({
    index: true,
    required: true,
  })
  public status: MessageStatus;
}

export type NFTCollectionTaskDocument = NFTCollectionTask & Document;

export const NFTCollectionTaskSchema: SchemaFactory =
  SchemaFactory.createForClass(NFTCollectionTask);
