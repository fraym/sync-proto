#! /bin/bash
for filename in ./sync/*.proto; do
	params="$params --go_opt=Msync/$(basename $filename)=github.com/fraym/sync-proto/go/syncpb"
	params="$params --go-grpc_opt=Msync/$(basename $filename)=github.com/fraym/sync-proto/go/syncpb"
done

protoc \
  --proto_path=./ \
	--go_out=./go/ \
	--go-grpc_out=./go/ \
	${params[@]} \
	--go_opt=module=github.com/fraym/sync-proto/go \
	--go-grpc_opt=module=github.com/fraym/sync-proto/go \
	**/*.proto
