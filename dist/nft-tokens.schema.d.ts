import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export declare class NFTTokens {
    readonly _id: string;
    contractAddress: string;
    tokenId: string;
    tokenType: string;
    externalDomainViewUrl: string;
    metadata: any;
    firstOwner: string;
    metadataFetchError: string;
    sentAt: Date;
    alternativeMediaFiles: any;
}
export declare type NFTTokensDocument = NFTTokens & Document;
export declare const NFTTokensSchema: SchemaFactory;
