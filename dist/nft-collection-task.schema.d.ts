import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export declare enum MessageStatus {
    sent = "sent",
    processing = "processing",
    done = "done",
    error = "error",
    split = "split"
}
export declare class NFTCollectionTask {
    messageId: string;
    contractAddress: string;
    startBlock: number;
    endBlock: number;
    tokenType: 'ERC721' | 'ERC1155';
    status: MessageStatus;
}
export declare type NFTCollectionTaskDocument = NFTCollectionTask & Document;
export declare const NFTCollectionTaskSchema: SchemaFactory;
