/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientDuplexStream,
  ClientOptions,
  ClientUnaryCall,
  handleBidiStreamingCall,
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
    requestStream: true,
    responseStream: true,
    requestSerialize: (value: CreateLeaseRequest) => Buffer.from(CreateLeaseRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateLeaseRequest.decode(value),
    responseSerialize: (value: CreateLeaseResponse) => Buffer.from(CreateLeaseResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateLeaseResponse.decode(value),
  },
  keepLease: {
    path: "/sync.Service/KeepLease",
    requestStream: true,
    responseStream: true,
    requestSerialize: (value: KeepLeaseRequest) => Buffer.from(KeepLeaseRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => KeepLeaseRequest.decode(value),
    responseSerialize: (value: KeepLeaseResponse) => Buffer.from(KeepLeaseResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => KeepLeaseResponse.decode(value),
  },
  dropLease: {
    path: "/sync.Service/DropLease",
    requestStream: true,
    responseStream: true,
    requestSerialize: (value: DropLeaseRequest) => Buffer.from(DropLeaseRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DropLeaseRequest.decode(value),
    responseSerialize: (value: DropLeaseResponse) => Buffer.from(DropLeaseResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DropLeaseResponse.decode(value),
  },
  getPeerNodes: {
    path: "/sync.Service/GetPeerNodes",
    requestStream: false,
    responseStream: false,
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
  createLease: handleBidiStreamingCall<CreateLeaseRequest, CreateLeaseResponse>;
  keepLease: handleBidiStreamingCall<KeepLeaseRequest, KeepLeaseResponse>;
  dropLease: handleBidiStreamingCall<DropLeaseRequest, DropLeaseResponse>;
  getPeerNodes: handleUnaryCall<GetPeerNodesRequest, GetPeerNodesResponse>;
  localLock: handleUnaryCall<LocalLockRequest, LocalLockResponse>;
  localUnlock: handleUnaryCall<LocalUnlockRequest, LocalUnlockResponse>;
  globalLock: handleUnaryCall<GlobalLockRequest, GlobalLockResponse>;
  globalUnlock: handleUnaryCall<GlobalUnlockRequest, GlobalUnlockResponse>;
}

export interface ServiceClient extends Client {
  createLease(): ClientDuplexStream<CreateLeaseRequest, CreateLeaseResponse>;
  createLease(options: Partial<CallOptions>): ClientDuplexStream<CreateLeaseRequest, CreateLeaseResponse>;
  createLease(
    metadata: Metadata,
    options?: Partial<CallOptions>,
  ): ClientDuplexStream<CreateLeaseRequest, CreateLeaseResponse>;
  keepLease(): ClientDuplexStream<KeepLeaseRequest, KeepLeaseResponse>;
  keepLease(options: Partial<CallOptions>): ClientDuplexStream<KeepLeaseRequest, KeepLeaseResponse>;
  keepLease(
    metadata: Metadata,
    options?: Partial<CallOptions>,
  ): ClientDuplexStream<KeepLeaseRequest, KeepLeaseResponse>;
  dropLease(): ClientDuplexStream<DropLeaseRequest, DropLeaseResponse>;
  dropLease(options: Partial<CallOptions>): ClientDuplexStream<DropLeaseRequest, DropLeaseResponse>;
  dropLease(
    metadata: Metadata,
    options?: Partial<CallOptions>,
  ): ClientDuplexStream<DropLeaseRequest, DropLeaseResponse>;
  getPeerNodes(
    request: GetPeerNodesRequest,
    callback: (error: ServiceError | null, response: GetPeerNodesResponse) => void,
  ): ClientUnaryCall;
  getPeerNodes(
    request: GetPeerNodesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetPeerNodesResponse) => void,
  ): ClientUnaryCall;
  getPeerNodes(
    request: GetPeerNodesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetPeerNodesResponse) => void,
  ): ClientUnaryCall;
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
