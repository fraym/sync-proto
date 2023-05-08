// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.21.12
// source: sync/service.proto

package syncpb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// ServiceClient is the client API for Service service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ServiceClient interface {
	CreateLease(ctx context.Context, opts ...grpc.CallOption) (Service_CreateLeaseClient, error)
	KeepLease(ctx context.Context, opts ...grpc.CallOption) (Service_KeepLeaseClient, error)
	DropLease(ctx context.Context, opts ...grpc.CallOption) (Service_DropLeaseClient, error)
	GetPeerNodes(ctx context.Context, in *GetPeerNodesRequest, opts ...grpc.CallOption) (*GetPeerNodesResponse, error)
	LocalLock(ctx context.Context, in *LocalLockRequest, opts ...grpc.CallOption) (*LocalLockResponse, error)
	LocalUnlock(ctx context.Context, in *LocalUnlockRequest, opts ...grpc.CallOption) (*LocalUnlockResponse, error)
	GlobalLock(ctx context.Context, in *GlobalLockRequest, opts ...grpc.CallOption) (*GlobalLockResponse, error)
	GlobalUnlock(ctx context.Context, in *GlobalUnlockRequest, opts ...grpc.CallOption) (*GlobalUnlockResponse, error)
}

type serviceClient struct {
	cc grpc.ClientConnInterface
}

func NewServiceClient(cc grpc.ClientConnInterface) ServiceClient {
	return &serviceClient{cc}
}

func (c *serviceClient) CreateLease(ctx context.Context, opts ...grpc.CallOption) (Service_CreateLeaseClient, error) {
	stream, err := c.cc.NewStream(ctx, &Service_ServiceDesc.Streams[0], "/sync.Service/CreateLease", opts...)
	if err != nil {
		return nil, err
	}
	x := &serviceCreateLeaseClient{stream}
	return x, nil
}

type Service_CreateLeaseClient interface {
	Send(*CreateLeaseRequest) error
	Recv() (*CreateLeaseResponse, error)
	grpc.ClientStream
}

type serviceCreateLeaseClient struct {
	grpc.ClientStream
}

func (x *serviceCreateLeaseClient) Send(m *CreateLeaseRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *serviceCreateLeaseClient) Recv() (*CreateLeaseResponse, error) {
	m := new(CreateLeaseResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *serviceClient) KeepLease(ctx context.Context, opts ...grpc.CallOption) (Service_KeepLeaseClient, error) {
	stream, err := c.cc.NewStream(ctx, &Service_ServiceDesc.Streams[1], "/sync.Service/KeepLease", opts...)
	if err != nil {
		return nil, err
	}
	x := &serviceKeepLeaseClient{stream}
	return x, nil
}

type Service_KeepLeaseClient interface {
	Send(*KeepLeaseRequest) error
	Recv() (*KeepLeaseResponse, error)
	grpc.ClientStream
}

type serviceKeepLeaseClient struct {
	grpc.ClientStream
}

func (x *serviceKeepLeaseClient) Send(m *KeepLeaseRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *serviceKeepLeaseClient) Recv() (*KeepLeaseResponse, error) {
	m := new(KeepLeaseResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *serviceClient) DropLease(ctx context.Context, opts ...grpc.CallOption) (Service_DropLeaseClient, error) {
	stream, err := c.cc.NewStream(ctx, &Service_ServiceDesc.Streams[2], "/sync.Service/DropLease", opts...)
	if err != nil {
		return nil, err
	}
	x := &serviceDropLeaseClient{stream}
	return x, nil
}

type Service_DropLeaseClient interface {
	Send(*DropLeaseRequest) error
	Recv() (*DropLeaseResponse, error)
	grpc.ClientStream
}

type serviceDropLeaseClient struct {
	grpc.ClientStream
}

func (x *serviceDropLeaseClient) Send(m *DropLeaseRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *serviceDropLeaseClient) Recv() (*DropLeaseResponse, error) {
	m := new(DropLeaseResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *serviceClient) GetPeerNodes(ctx context.Context, in *GetPeerNodesRequest, opts ...grpc.CallOption) (*GetPeerNodesResponse, error) {
	out := new(GetPeerNodesResponse)
	err := c.cc.Invoke(ctx, "/sync.Service/GetPeerNodes", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) LocalLock(ctx context.Context, in *LocalLockRequest, opts ...grpc.CallOption) (*LocalLockResponse, error) {
	out := new(LocalLockResponse)
	err := c.cc.Invoke(ctx, "/sync.Service/LocalLock", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) LocalUnlock(ctx context.Context, in *LocalUnlockRequest, opts ...grpc.CallOption) (*LocalUnlockResponse, error) {
	out := new(LocalUnlockResponse)
	err := c.cc.Invoke(ctx, "/sync.Service/LocalUnlock", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) GlobalLock(ctx context.Context, in *GlobalLockRequest, opts ...grpc.CallOption) (*GlobalLockResponse, error) {
	out := new(GlobalLockResponse)
	err := c.cc.Invoke(ctx, "/sync.Service/GlobalLock", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) GlobalUnlock(ctx context.Context, in *GlobalUnlockRequest, opts ...grpc.CallOption) (*GlobalUnlockResponse, error) {
	out := new(GlobalUnlockResponse)
	err := c.cc.Invoke(ctx, "/sync.Service/GlobalUnlock", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ServiceServer is the server API for Service service.
// All implementations must embed UnimplementedServiceServer
// for forward compatibility
type ServiceServer interface {
	CreateLease(Service_CreateLeaseServer) error
	KeepLease(Service_KeepLeaseServer) error
	DropLease(Service_DropLeaseServer) error
	GetPeerNodes(context.Context, *GetPeerNodesRequest) (*GetPeerNodesResponse, error)
	LocalLock(context.Context, *LocalLockRequest) (*LocalLockResponse, error)
	LocalUnlock(context.Context, *LocalUnlockRequest) (*LocalUnlockResponse, error)
	GlobalLock(context.Context, *GlobalLockRequest) (*GlobalLockResponse, error)
	GlobalUnlock(context.Context, *GlobalUnlockRequest) (*GlobalUnlockResponse, error)
	mustEmbedUnimplementedServiceServer()
}

// UnimplementedServiceServer must be embedded to have forward compatible implementations.
type UnimplementedServiceServer struct {
}

func (UnimplementedServiceServer) CreateLease(Service_CreateLeaseServer) error {
	return status.Errorf(codes.Unimplemented, "method CreateLease not implemented")
}
func (UnimplementedServiceServer) KeepLease(Service_KeepLeaseServer) error {
	return status.Errorf(codes.Unimplemented, "method KeepLease not implemented")
}
func (UnimplementedServiceServer) DropLease(Service_DropLeaseServer) error {
	return status.Errorf(codes.Unimplemented, "method DropLease not implemented")
}
func (UnimplementedServiceServer) GetPeerNodes(context.Context, *GetPeerNodesRequest) (*GetPeerNodesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPeerNodes not implemented")
}
func (UnimplementedServiceServer) LocalLock(context.Context, *LocalLockRequest) (*LocalLockResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method LocalLock not implemented")
}
func (UnimplementedServiceServer) LocalUnlock(context.Context, *LocalUnlockRequest) (*LocalUnlockResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method LocalUnlock not implemented")
}
func (UnimplementedServiceServer) GlobalLock(context.Context, *GlobalLockRequest) (*GlobalLockResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GlobalLock not implemented")
}
func (UnimplementedServiceServer) GlobalUnlock(context.Context, *GlobalUnlockRequest) (*GlobalUnlockResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GlobalUnlock not implemented")
}
func (UnimplementedServiceServer) mustEmbedUnimplementedServiceServer() {}

// UnsafeServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ServiceServer will
// result in compilation errors.
type UnsafeServiceServer interface {
	mustEmbedUnimplementedServiceServer()
}

func RegisterServiceServer(s grpc.ServiceRegistrar, srv ServiceServer) {
	s.RegisterService(&Service_ServiceDesc, srv)
}

func _Service_CreateLease_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(ServiceServer).CreateLease(&serviceCreateLeaseServer{stream})
}

type Service_CreateLeaseServer interface {
	Send(*CreateLeaseResponse) error
	Recv() (*CreateLeaseRequest, error)
	grpc.ServerStream
}

type serviceCreateLeaseServer struct {
	grpc.ServerStream
}

func (x *serviceCreateLeaseServer) Send(m *CreateLeaseResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *serviceCreateLeaseServer) Recv() (*CreateLeaseRequest, error) {
	m := new(CreateLeaseRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _Service_KeepLease_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(ServiceServer).KeepLease(&serviceKeepLeaseServer{stream})
}

type Service_KeepLeaseServer interface {
	Send(*KeepLeaseResponse) error
	Recv() (*KeepLeaseRequest, error)
	grpc.ServerStream
}

type serviceKeepLeaseServer struct {
	grpc.ServerStream
}

func (x *serviceKeepLeaseServer) Send(m *KeepLeaseResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *serviceKeepLeaseServer) Recv() (*KeepLeaseRequest, error) {
	m := new(KeepLeaseRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _Service_DropLease_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(ServiceServer).DropLease(&serviceDropLeaseServer{stream})
}

type Service_DropLeaseServer interface {
	Send(*DropLeaseResponse) error
	Recv() (*DropLeaseRequest, error)
	grpc.ServerStream
}

type serviceDropLeaseServer struct {
	grpc.ServerStream
}

func (x *serviceDropLeaseServer) Send(m *DropLeaseResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *serviceDropLeaseServer) Recv() (*DropLeaseRequest, error) {
	m := new(DropLeaseRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _Service_GetPeerNodes_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetPeerNodesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).GetPeerNodes(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/sync.Service/GetPeerNodes",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).GetPeerNodes(ctx, req.(*GetPeerNodesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_LocalLock_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(LocalLockRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).LocalLock(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/sync.Service/LocalLock",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).LocalLock(ctx, req.(*LocalLockRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_LocalUnlock_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(LocalUnlockRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).LocalUnlock(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/sync.Service/LocalUnlock",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).LocalUnlock(ctx, req.(*LocalUnlockRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_GlobalLock_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GlobalLockRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).GlobalLock(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/sync.Service/GlobalLock",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).GlobalLock(ctx, req.(*GlobalLockRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_GlobalUnlock_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GlobalUnlockRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).GlobalUnlock(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/sync.Service/GlobalUnlock",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).GlobalUnlock(ctx, req.(*GlobalUnlockRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Service_ServiceDesc is the grpc.ServiceDesc for Service service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Service_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "sync.Service",
	HandlerType: (*ServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetPeerNodes",
			Handler:    _Service_GetPeerNodes_Handler,
		},
		{
			MethodName: "LocalLock",
			Handler:    _Service_LocalLock_Handler,
		},
		{
			MethodName: "LocalUnlock",
			Handler:    _Service_LocalUnlock_Handler,
		},
		{
			MethodName: "GlobalLock",
			Handler:    _Service_GlobalLock_Handler,
		},
		{
			MethodName: "GlobalUnlock",
			Handler:    _Service_GlobalUnlock_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "CreateLease",
			Handler:       _Service_CreateLease_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
		{
			StreamName:    "KeepLease",
			Handler:       _Service_KeepLease_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
		{
			StreamName:    "DropLease",
			Handler:       _Service_DropLease_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
	},
	Metadata: "sync/service.proto",
}
