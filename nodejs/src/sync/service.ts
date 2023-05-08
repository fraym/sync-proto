/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientReadableStream,
  ClientUnaryCall,
  handleServerStreamingCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import {
  CreateLeaseRequest,
  CreateLeaseResponse,
  DropLeaseRequest,
  DropLeaseResponse,
  KeepLeaseRequest,
  KeepLeaseResponse,
} from "./lease";
import {
  GlobalLockRequest,
  GlobalLockResponse,
  GlobalUnlockRequest,
  GlobalUnlockResponse,
  LocalLockRequest,
  LocalLockResponse,
  LocalUnlockRequest,
  LocalUnlockResponse,
} from "./lock";
import { GetPeerNodesRequest, GetPeerNodesResponse } from "./peer_nodes";

export const protobufPackage = "sync";

export type ServiceService = typeof ServiceService;
export const ServiceService = {
  createLease: {
    path: "/sync.Service/CreateLease",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateLeaseRequest) => Buffer.from(CreateLeaseRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateLeaseRequest.decode(value),
    responseSerialize: (value: CreateLeaseResponse) => Buffer.from(CreateLeaseResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateLeaseResponse.decode(value),
  },
  keepLease: {
    path: "/sync.Service/KeepLease",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: KeepLeaseRequest) => Buffer.from(KeepLeaseRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => KeepLeaseRequest.decode(value),
    responseSerialize: (value: KeepLeaseResponse) => Buffer.from(KeepLeaseResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => KeepLeaseResponse.decode(value),
  },
  dropLease: {
    path: "/sync.Service/DropLease",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DropLeaseRequest) => Buffer.from(DropLeaseRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DropLeaseRequest.decode(value),
    responseSerialize: (value: DropLeaseResponse) => Buffer.from(DropLeaseResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DropLeaseResponse.decode(value),
  },
  getPeerNodes: {
    path: "/sync.Service/GetPeerNodes",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: GetPeerNodesRequest) => Buffer.from(GetPeerNodesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetPeerNodesRequest.decode(value),
    responseSerialize: (value: GetPeerNodesResponse) => Buffer.from(GetPeerNodesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetPeerNodesResponse.decode(value),
  },
  localLock: {
    path: "/sync.Service/LocalLock",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LocalLockRequest) => Buffer.from(LocalLockRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LocalLockRequest.decode(value),
    responseSerialize: (value: LocalLockResponse) => Buffer.from(LocalLockResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LocalLockResponse.decode(value),
  },
  localUnlock: {
    path: "/sync.Service/LocalUnlock",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LocalUnlockRequest) => Buffer.from(LocalUnlockRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LocalUnlockRequest.decode(value),
    responseSerialize: (value: LocalUnlockResponse) => Buffer.from(LocalUnlockResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LocalUnlockResponse.decode(value),
  },
  globalLock: {
    path: "/sync.Service/GlobalLock",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GlobalLockRequest) => Buffer.from(GlobalLockRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GlobalLockRequest.decode(value),
    responseSerialize: (value: GlobalLockResponse) => Buffer.from(GlobalLockResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GlobalLockResponse.decode(value),
  },
  globalUnlock: {
    path: "/sync.Service/GlobalUnlock",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GlobalUnlockRequest) => Buffer.from(GlobalUnlockRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GlobalUnlockRequest.decode(value),
    responseSerialize: (value: GlobalUnlockResponse) => Buffer.from(GlobalUnlockResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GlobalUnlockResponse.decode(value),
  },
} as const;

export interface ServiceServer extends UntypedServiceImplementation {
  createLease: handleUnaryCall<CreateLeaseRequest, CreateLeaseResponse>;
  keepLease: handleUnaryCall<KeepLeaseRequest, KeepLeaseResponse>;
  dropLease: handleUnaryCall<DropLeaseRequest, DropLeaseResponse>;
  getPeerNodes: handleServerStreamingCall<GetPeerNodesRequest, GetPeerNodesResponse>;
  localLock: handleUnaryCall<LocalLockRequest, LocalLockResponse>;
  localUnlock: handleUnaryCall<LocalUnlockRequest, LocalUnlockResponse>;
  globalLock: handleUnaryCall<GlobalLockRequest, GlobalLockResponse>;
  globalUnlock: handleUnaryCall<GlobalUnlockRequest, GlobalUnlockResponse>;
}

export interface ServiceClient extends Client {
  createLease(
    request: CreateLeaseRequest,
    callback: (error: ServiceError | null, response: CreateLeaseResponse) => void,
  ): ClientUnaryCall;
  createLease(
    request: CreateLeaseRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateLeaseResponse) => void,
  ): ClientUnaryCall;
  createLease(
    request: CreateLeaseRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateLeaseResponse) => void,
  ): ClientUnaryCall;
  keepLease(
    request: KeepLeaseRequest,
    callback: (error: ServiceError | null, response: KeepLeaseResponse) => void,
  ): ClientUnaryCall;
  keepLease(
    request: KeepLeaseRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: KeepLeaseResponse) => void,
  ): ClientUnaryCall;
  keepLease(
    request: KeepLeaseRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: KeepLeaseResponse) => void,
  ): ClientUnaryCall;
  dropLease(
    request: DropLeaseRequest,
    callback: (error: ServiceError | null, response: DropLeaseResponse) => void,
  ): ClientUnaryCall;
  dropLease(
    request: DropLeaseRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DropLeaseResponse) => void,
  ): ClientUnaryCall;
  dropLease(
    request: DropLeaseRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DropLeaseResponse) => void,
  ): ClientUnaryCall;
  getPeerNodes(
    request: GetPeerNodesRequest,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<GetPeerNodesResponse>;
  getPeerNodes(
    request: GetPeerNodesRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<GetPeerNodesResponse>;
  localLock(
    request: LocalLockRequest,
    callback: (error: ServiceError | null, response: LocalLockResponse) => void,
  ): ClientUnaryCall;
  localLock(
    request: LocalLockRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LocalLockResponse) => void,
  ): ClientUnaryCall;
  localLock(
    request: LocalLockRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LocalLockResponse) => void,
  ): ClientUnaryCall;
  localUnlock(
    request: LocalUnlockRequest,
    callback: (error: ServiceError | null, response: LocalUnlockResponse) => void,
  ): ClientUnaryCall;
  localUnlock(
    request: LocalUnlockRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LocalUnlockResponse) => void,
  ): ClientUnaryCall;
  localUnlock(
    request: LocalUnlockRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LocalUnlockResponse) => void,
  ): ClientUnaryCall;
  globalLock(
    request: GlobalLockRequest,
    callback: (error: ServiceError | null, response: GlobalLockResponse) => void,
  ): ClientUnaryCall;
  globalLock(
    request: GlobalLockRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GlobalLockResponse) => void,
  ): ClientUnaryCall;
  globalLock(
    request: GlobalLockRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GlobalLockResponse) => void,
  ): ClientUnaryCall;
  globalUnlock(
    request: GlobalUnlockRequest,
    callback: (error: ServiceError | null, response: GlobalUnlockResponse) => void,
  ): ClientUnaryCall;
  globalUnlock(
    request: GlobalUnlockRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GlobalUnlockResponse) => void,
  ): ClientUnaryCall;
  globalUnlock(
    request: GlobalUnlockRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GlobalUnlockResponse) => void,
  ): ClientUnaryCall;
}

export const ServiceClient = makeGenericClientConstructor(ServiceService, "sync.Service") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ServiceClient;
  service: typeof ServiceService;
};
