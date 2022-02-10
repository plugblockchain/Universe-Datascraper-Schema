import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export declare class Owner {
    address: string;
    transactionHash: string;
    value: number;
}
export declare class NFTToken {
    contractAddress: string;
    tokenId: string;
    tokenType: string;
    externalDomainViewUrl: string;
    metadata: any;
    firstOwner: string;
    owners: Owner[];
    metadataFetchError: string;
    sentAt: Date;
    alternativeMediaFiles: any;
}
export declare type NFTTokensDocument = NFTToken & Document;
export declare const NFTTokensSchema: SchemaFactory;
