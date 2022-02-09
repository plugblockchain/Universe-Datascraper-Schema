"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFTTokensSchema = exports.NFTTokens = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let NFTTokens = class NFTTokens {
};
__decorate([
    (0, mongoose_1.Prop)({ _id: true }),
    __metadata("design:type", String)
], NFTTokens.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, index: true, required: true }),
    __metadata("design:type", String)
], NFTTokens.prototype, "contractAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, index: true, required: true }),
    __metadata("design:type", String)
], NFTTokens.prototype, "tokenId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ index: true, required: true, enum: ['ERC721', 'ERC1155'] }),
    __metadata("design:type", String)
], NFTTokens.prototype, "tokenType", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NFTTokens.prototype, "externalDomainViewUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], NFTTokens.prototype, "metadata", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NFTTokens.prototype, "firstOwner", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], NFTTokens.prototype, "metadataFetchError", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], NFTTokens.prototype, "sentAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], NFTTokens.prototype, "alternativeMediaFiles", void 0);
NFTTokens = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: 'nft-tokens' })
], NFTTokens);
exports.NFTTokens = NFTTokens;
exports.NFTTokensSchema = mongoose_1.SchemaFactory.createForClass(NFTTokens);
//# sourceMappingURL=nft-tokens.schema.js.map