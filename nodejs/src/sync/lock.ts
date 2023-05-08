/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "sync";

export interface LocalLockRequest {
  leaseId: string;
  tenantId: string;
  globalConcern: string;
  localConcern: string;
}

export interface LocalLockResponse {
}

export interface LocalUnlockRequest {
  leaseId: string;
  tenantId: string;
  globalConcern: string;
  localConcern: string;
}

export interface LocalUnlockResponse {
}

export interface GlobalLockRequest {
  leaseId: string;
  tenantId: string;
  globalConcern: string;
}

export interface GlobalLockResponse {
}

export interface GlobalUnlockRequest {
  leaseId: string;
  tenantId: string;
  globalConcern: string;
}

export interface GlobalUnlockResponse {
}

function createBaseLocalLockRequest(): LocalLockRequest {
  return { leaseId: "", tenantId: "", globalConcern: "", localConcern: "" };
}

export const LocalLockRequest = {
  encode(message: LocalLockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leaseId !== "") {
      writer.uint32(10).string(message.leaseId);
    }
    if (message.tenantId !== "") {
      writer.uint32(18).string(message.tenantId);
    }
    if (message.globalConcern !== "") {
      writer.uint32(26).string(message.globalConcern);
    }
    if (message.localConcern !== "") {
      writer.uint32(34).string(message.localConcern);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LocalLockRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocalLockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.leaseId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.globalConcern = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.localConcern = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LocalLockRequest {
    return {
      leaseId: isSet(object.leaseId) ? String(object.leaseId) : "",
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      globalConcern: isSet(object.globalConcern) ? String(object.globalConcern) : "",
      localConcern: isSet(object.localConcern) ? String(object.localConcern) : "",
    };
  },

  toJSON(message: LocalLockRequest): unknown {
    const obj: any = {};
    message.leaseId !== undefined && (obj.leaseId = message.leaseId);
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.globalConcern !== undefined && (obj.globalConcern = message.globalConcern);
    message.localConcern !== undefined && (obj.localConcern = message.localConcern);
    return obj;
  },

  create<I extends Exact<DeepPartial<LocalLockRequest>, I>>(base?: I): LocalLockRequest {
    return LocalLockRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LocalLockRequest>, I>>(object: I): LocalLockRequest {
    const message = createBaseLocalLockRequest();
    message.leaseId = object.leaseId ?? "";
    message.tenantId = object.tenantId ?? "";
    message.globalConcern = object.globalConcern ?? "";
    message.localConcern = object.localConcern ?? "";
    return message;
  },
};

function createBaseLocalLockResponse(): LocalLockResponse {
  return {};
}

export const LocalLockResponse = {
  encode(_: LocalLockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LocalLockResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocalLockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): LocalLockResponse {
    return {};
  },

  toJSON(_: LocalLockResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<LocalLockResponse>, I>>(base?: I): LocalLockResponse {
    return LocalLockResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LocalLockResponse>, I>>(_: I): LocalLockResponse {
    const message = createBaseLocalLockResponse();
    return message;
  },
};

function createBaseLocalUnlockRequest(): LocalUnlockRequest {
  return { leaseId: "", tenantId: "", globalConcern: "", localConcern: "" };
}

export const LocalUnlockRequest = {
  encode(message: LocalUnlockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leaseId !== "") {
      writer.uint32(10).string(message.leaseId);
    }
    if (message.tenantId !== "") {
      writer.uint32(18).string(message.tenantId);
    }
    if (message.globalConcern !== "") {
      writer.uint32(26).string(message.globalConcern);
    }
    if (message.localConcern !== "") {
      writer.uint32(34).string(message.localConcern);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LocalUnlockRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocalUnlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.leaseId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.globalConcern = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.localConcern = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LocalUnlockRequest {
    return {
      leaseId: isSet(object.leaseId) ? String(object.leaseId) : "",
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      globalConcern: isSet(object.globalConcern) ? String(object.globalConcern) : "",
      localConcern: isSet(object.localConcern) ? String(object.localConcern) : "",
    };
  },

  toJSON(message: LocalUnlockRequest): unknown {
    const obj: any = {};
    message.leaseId !== undefined && (obj.leaseId = message.leaseId);
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.globalConcern !== undefined && (obj.globalConcern = message.globalConcern);
    message.localConcern !== undefined && (obj.localConcern = message.localConcern);
    return obj;
  },

  create<I extends Exact<DeepPartial<LocalUnlockRequest>, I>>(base?: I): LocalUnlockRequest {
    return LocalUnlockRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LocalUnlockRequest>, I>>(object: I): LocalUnlockRequest {
    const message = createBaseLocalUnlockRequest();
    message.leaseId = object.leaseId ?? "";
    message.tenantId = object.tenantId ?? "";
    message.globalConcern = object.globalConcern ?? "";
    message.localConcern = object.localConcern ?? "";
    return message;
  },
};

function createBaseLocalUnlockResponse(): LocalUnlockResponse {
  return {};
}

export const LocalUnlockResponse = {
  encode(_: LocalUnlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LocalUnlockResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocalUnlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): LocalUnlockResponse {
    return {};
  },

  toJSON(_: LocalUnlockResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<LocalUnlockResponse>, I>>(base?: I): LocalUnlockResponse {
    return LocalUnlockResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LocalUnlockResponse>, I>>(_: I): LocalUnlockResponse {
    const message = createBaseLocalUnlockResponse();
    return message;
  },
};

function createBaseGlobalLockRequest(): GlobalLockRequest {
  return { leaseId: "", tenantId: "", globalConcern: "" };
}

export const GlobalLockRequest = {
  encode(message: GlobalLockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leaseId !== "") {
      writer.uint32(10).string(message.leaseId);
    }
    if (message.tenantId !== "") {
      writer.uint32(18).string(message.tenantId);
    }
    if (message.globalConcern !== "") {
      writer.uint32(26).string(message.globalConcern);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GlobalLockRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGlobalLockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.leaseId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.globalConcern = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GlobalLockRequest {
    return {
      leaseId: isSet(object.leaseId) ? String(object.leaseId) : "",
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      globalConcern: isSet(object.globalConcern) ? String(object.globalConcern) : "",
    };
  },

  toJSON(message: GlobalLockRequest): unknown {
    const obj: any = {};
    message.leaseId !== undefined && (obj.leaseId = message.leaseId);
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.globalConcern !== undefined && (obj.globalConcern = message.globalConcern);
    return obj;
  },

  create<I extends Exact<DeepPartial<GlobalLockRequest>, I>>(base?: I): GlobalLockRequest {
    return GlobalLockRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GlobalLockRequest>, I>>(object: I): GlobalLockRequest {
    const message = createBaseGlobalLockRequest();
    message.leaseId = object.leaseId ?? "";
    message.tenantId = object.tenantId ?? "";
    message.globalConcern = object.globalConcern ?? "";
    return message;
  },
};

function createBaseGlobalLockResponse(): GlobalLockResponse {
  return {};
}

export const GlobalLockResponse = {
  encode(_: GlobalLockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GlobalLockResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGlobalLockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): GlobalLockResponse {
    return {};
  },

  toJSON(_: GlobalLockResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GlobalLockResponse>, I>>(base?: I): GlobalLockResponse {
    return GlobalLockResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GlobalLockResponse>, I>>(_: I): GlobalLockResponse {
    const message = createBaseGlobalLockResponse();
    return message;
  },
};

function createBaseGlobalUnlockRequest(): GlobalUnlockRequest {
  return { leaseId: "", tenantId: "", globalConcern: "" };
}

export const GlobalUnlockRequest = {
  encode(message: GlobalUnlockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leaseId !== "") {
      writer.uint32(10).string(message.leaseId);
    }
    if (message.tenantId !== "") {
      writer.uint32(18).string(message.tenantId);
    }
    if (message.globalConcern !== "") {
      writer.uint32(26).string(message.globalConcern);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GlobalUnlockRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGlobalUnlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.leaseId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.globalConcern = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GlobalUnlockRequest {
    return {
      leaseId: isSet(object.leaseId) ? String(object.leaseId) : "",
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      globalConcern: isSet(object.globalConcern) ? String(object.globalConcern) : "",
    };
  },

  toJSON(message: GlobalUnlockRequest): unknown {
    const obj: any = {};
    message.leaseId !== undefined && (obj.leaseId = message.leaseId);
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.globalConcern !== undefined && (obj.globalConcern = message.globalConcern);
    return obj;
  },

  create<I extends Exact<DeepPartial<GlobalUnlockRequest>, I>>(base?: I): GlobalUnlockRequest {
    return GlobalUnlockRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GlobalUnlockRequest>, I>>(object: I): GlobalUnlockRequest {
    const message = createBaseGlobalUnlockRequest();
    message.leaseId = object.leaseId ?? "";
    message.tenantId = object.tenantId ?? "";
    message.globalConcern = object.globalConcern ?? "";
    return message;
  },
};

function createBaseGlobalUnlockResponse(): GlobalUnlockResponse {
  return {};
}

export const GlobalUnlockResponse = {
  encode(_: GlobalUnlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GlobalUnlockResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGlobalUnlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): GlobalUnlockResponse {
    return {};
  },

  toJSON(_: GlobalUnlockResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GlobalUnlockResponse>, I>>(base?: I): GlobalUnlockResponse {
    return GlobalUnlockResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GlobalUnlockResponse>, I>>(_: I): GlobalUnlockResponse {
    const message = createBaseGlobalUnlockResponse();
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
