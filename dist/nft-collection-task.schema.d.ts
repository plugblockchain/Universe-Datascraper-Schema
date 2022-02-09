import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export declare enum MessageStatus {
    sent = "sent",
    processing = "processing",
    done = "done",
    error = "error",
    splitted = "splitted"
}
export declare class NFTCollectionTask {
    messageId: string;
    contractAddress: string;
    tokenType: 'ERC721' | 'ERC1155';
    startBlock: number;
    endBlock: number;
    status: MessageStatus;
}
export declare type NFTCollectionTaskDocument = NFTCollectionTask & Document;
export declare const NFTCollectionTaskSchema: SchemaFactory;
