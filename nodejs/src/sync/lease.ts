/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "sync";

export interface CreateLeaseRequest {
  ip: string;
  app: string;
  ttl: number;
}

export interface CreateLeaseResponse {
  leaseId: string;
}

export interface KeepLeaseRequest {
  leaseId: string;
  ttl: number;
}

export interface KeepLeaseResponse {
}

export interface DropLeaseRequest {
  leaseId: string;
}

export interface DropLeaseResponse {
}

function createBaseCreateLeaseRequest(): CreateLeaseRequest {
  return { ip: "", app: "", ttl: 0 };
}

export const CreateLeaseRequest = {
  encode(message: CreateLeaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ip !== "") {
      writer.uint32(10).string(message.ip);
    }
    if (message.app !== "") {
      writer.uint32(18).string(message.app);
    }
    if (message.ttl !== 0) {
      writer.uint32(24).int32(message.ttl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateLeaseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateLeaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ip = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.app = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.ttl = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateLeaseRequest {
    return {
      ip: isSet(object.ip) ? String(object.ip) : "",
      app: isSet(object.app) ? String(object.app) : "",
      ttl: isSet(object.ttl) ? Number(object.ttl) : 0,
    };
  },

  toJSON(message: CreateLeaseRequest): unknown {
    const obj: any = {};
    message.ip !== undefined && (obj.ip = message.ip);
    message.app !== undefined && (obj.app = message.app);
    message.ttl !== undefined && (obj.ttl = Math.round(message.ttl));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateLeaseRequest>, I>>(base?: I): CreateLeaseRequest {
    return CreateLeaseRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateLeaseRequest>, I>>(object: I): CreateLeaseRequest {
    const message = createBaseCreateLeaseRequest();
    message.ip = object.ip ?? "";
    message.app = object.app ?? "";
    message.ttl = object.ttl ?? 0;
    return message;
  },
};

function createBaseCreateLeaseResponse(): CreateLeaseResponse {
  return { leaseId: "" };
}

export const CreateLeaseResponse = {
  encode(message: CreateLeaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leaseId !== "") {
      writer.uint32(10).string(message.leaseId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateLeaseResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateLeaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.leaseId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateLeaseResponse {
    return { leaseId: isSet(object.leaseId) ? String(object.leaseId) : "" };
  },

  toJSON(message: CreateLeaseResponse): unknown {
    const obj: any = {};
    message.leaseId !== undefined && (obj.leaseId = message.leaseId);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateLeaseResponse>, I>>(base?: I): CreateLeaseResponse {
    return CreateLeaseResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateLeaseResponse>, I>>(object: I): CreateLeaseResponse {
    const message = createBaseCreateLeaseResponse();
    message.leaseId = object.leaseId ?? "";
    return message;
  },
};

function createBaseKeepLeaseRequest(): KeepLeaseRequest {
  return { leaseId: "", ttl: 0 };
}

export const KeepLeaseRequest = {
  encode(message: KeepLeaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leaseId !== "") {
      writer.uint32(10).string(message.leaseId);
    }
    if (message.ttl !== 0) {
      writer.uint32(16).int32(message.ttl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeepLeaseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeepLeaseRequest();
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
          if (tag !== 16) {
            break;
          }

          message.ttl = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): KeepLeaseRequest {
    return {
      leaseId: isSet(object.leaseId) ? String(object.leaseId) : "",
      ttl: isSet(object.ttl) ? Number(object.ttl) : 0,
    };
  },

  toJSON(message: KeepLeaseRequest): unknown {
    const obj: any = {};
    message.leaseId !== undefined && (obj.leaseId = message.leaseId);
    message.ttl !== undefined && (obj.ttl = Math.round(message.ttl));
    return obj;
  },

  create<I extends Exact<DeepPartial<KeepLeaseRequest>, I>>(base?: I): KeepLeaseRequest {
    return KeepLeaseRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<KeepLeaseRequest>, I>>(object: I): KeepLeaseRequest {
    const message = createBaseKeepLeaseRequest();
    message.leaseId = object.leaseId ?? "";
    message.ttl = object.ttl ?? 0;
    return message;
  },
};

function createBaseKeepLeaseResponse(): KeepLeaseResponse {
  return {};
}

export const KeepLeaseResponse = {
  encode(_: KeepLeaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeepLeaseResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeepLeaseResponse();
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

  fromJSON(_: any): KeepLeaseResponse {
    return {};
  },

  toJSON(_: KeepLeaseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<KeepLeaseResponse>, I>>(base?: I): KeepLeaseResponse {
    return KeepLeaseResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<KeepLeaseResponse>, I>>(_: I): KeepLeaseResponse {
    const message = createBaseKeepLeaseResponse();
    return message;
  },
};

function createBaseDropLeaseRequest(): DropLeaseRequest {
  return { leaseId: "" };
}

export const DropLeaseRequest = {
  encode(message: DropLeaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leaseId !== "") {
      writer.uint32(10).string(message.leaseId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DropLeaseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDropLeaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.leaseId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DropLeaseRequest {
    return { leaseId: isSet(object.leaseId) ? String(object.leaseId) : "" };
  },

  toJSON(message: DropLeaseRequest): unknown {
    const obj: any = {};
    message.leaseId !== undefined && (obj.leaseId = message.leaseId);
    return obj;
  },

  create<I extends Exact<DeepPartial<DropLeaseRequest>, I>>(base?: I): DropLeaseRequest {
    return DropLeaseRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DropLeaseRequest>, I>>(object: I): DropLeaseRequest {
    const message = createBaseDropLeaseRequest();
    message.leaseId = object.leaseId ?? "";
    return message;
  },
};

function createBaseDropLeaseResponse(): DropLeaseResponse {
  return {};
}

export const DropLeaseResponse = {
  encode(_: DropLeaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DropLeaseResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDropLeaseResponse();
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

  fromJSON(_: any): DropLeaseResponse {
    return {};
  },

  toJSON(_: DropLeaseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DropLeaseResponse>, I>>(base?: I): DropLeaseResponse {
    return DropLeaseResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DropLeaseResponse>, I>>(_: I): DropLeaseResponse {
    const message = createBaseDropLeaseResponse();
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
