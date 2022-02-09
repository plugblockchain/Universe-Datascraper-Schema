import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export declare class NFTCollection {
    contractAddress: string;
    tokenType: 'ERC721' | 'ERC1155';
    createdAtBlock: number;
    sentAt: Date;
    firstCheckAt: Date;
}
export declare type NFTCollectionDocument = NFTCollection & Document;
export declare const NFTCollectionSchema: SchemaFactory;
