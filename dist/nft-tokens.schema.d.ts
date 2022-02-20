import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export declare class Owner {
    address: string;
    transactionHash: string;
    value: number;
}
export declare class AlternativeMediaFile {
    url: string;
    type: string;
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
    processingSentAt: Date;
    sentAt: Date;
    sentForMediaAt: Date;
    alternativeMediaFiles: AlternativeMediaFile[];
    needToRefresh: boolean;
}
export declare type NFTTokensDocument = NFTToken & Document;
export declare const NFTTokensSchema: SchemaFactory;
