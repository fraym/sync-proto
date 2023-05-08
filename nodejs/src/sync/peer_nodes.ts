/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "sync";

export interface GetPeerNodesRequest {
  app: string;
}

export interface GetPeerNodesResponse {
  peerNodeIp: string[];
}

function createBaseGetPeerNodesRequest(): GetPeerNodesRequest {
  return { app: "" };
}

export const GetPeerNodesRequest = {
  encode(message: GetPeerNodesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.app !== "") {
      writer.uint32(10).string(message.app);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPeerNodesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPeerNodesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.app = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetPeerNodesRequest {
    return { app: isSet(object.app) ? String(object.app) : "" };
  },

  toJSON(message: GetPeerNodesRequest): unknown {
    const obj: any = {};
    message.app !== undefined && (obj.app = message.app);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPeerNodesRequest>, I>>(base?: I): GetPeerNodesRequest {
    return GetPeerNodesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPeerNodesRequest>, I>>(object: I): GetPeerNodesRequest {
    const message = createBaseGetPeerNodesRequest();
    message.app = object.app ?? "";
    return message;
  },
};

function createBaseGetPeerNodesResponse(): GetPeerNodesResponse {
  return { peerNodeIp: [] };
}

export const GetPeerNodesResponse = {
  encode(message: GetPeerNodesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.peerNodeIp) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPeerNodesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPeerNodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.peerNodeIp.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetPeerNodesResponse {
    return { peerNodeIp: Array.isArray(object?.peerNodeIp) ? object.peerNodeIp.map((e: any) => String(e)) : [] };
  },

  toJSON(message: GetPeerNodesResponse): unknown {
    const obj: any = {};
    if (message.peerNodeIp) {
      obj.peerNodeIp = message.peerNodeIp.map((e) => e);
    } else {
      obj.peerNodeIp = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPeerNodesResponse>, I>>(base?: I): GetPeerNodesResponse {
    return GetPeerNodesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPeerNodesResponse>, I>>(object: I): GetPeerNodesResponse {
    const message = createBaseGetPeerNodesResponse();
    message.peerNodeIp = object.peerNodeIp?.map((e) => e) || [];
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
