import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export declare class NFTCollection {
    contractAddress: string;
    tokenType: string;
    createdAtBlock: number;
    firstProcessedBlock: number;
    lastProcessedBlock: number;
    sentAt: Date;
    isProcessing: boolean;
}
export declare type NFTCollectionDocument = NFTCollection & Document;
export declare const NFTCollectionSchema: SchemaFactory;
