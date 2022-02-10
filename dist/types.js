"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportedTokenTypes = exports.MessageStatus = void 0;
var MessageStatus;
(function (MessageStatus) {
    MessageStatus["sent"] = "sent";
    MessageStatus["processing"] = "processing";
    MessageStatus["done"] = "done";
    MessageStatus["error"] = "error";
    MessageStatus["split"] = "split";
})(MessageStatus = exports.MessageStatus || (exports.MessageStatus = {}));
var SupportedTokenTypes;
(function (SupportedTokenTypes) {
    SupportedTokenTypes["ERC721"] = "ERC721";
    SupportedTokenTypes["ERC1155"] = "ERC1155";
    SupportedTokenTypes["CryptoPunks"] = "CryptoPunks";
})(SupportedTokenTypes = exports.SupportedTokenTypes || (exports.SupportedTokenTypes = {}));
//# sourceMappingURL=types.js.map