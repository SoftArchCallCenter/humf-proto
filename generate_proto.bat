@echo off
setlocal enabledelayedexpansion

:: Set the path to the protoc-gen-ts_proto executable
set PROTOC_GEN_TS_PROTO=.\node_modules\.bin\protoc-gen-ts_proto.cmd

:: Set the output directory
set OUTPUT_DIR=.\build\

:: Set the nestJs option
set TS_PROTO_OPT=nestJs=true

:: Set the input directory containing your .proto files
set PROTO_DIR=.\proto\

:: Run protoc command
for %%f in (!PROTO_DIR!*.proto) do (
  protoc ^
    --plugin=protoc-gen-ts_proto=!PROTOC_GEN_TS_PROTO! ^
    --ts_proto_out=!OUTPUT_DIR! ^
    --ts_proto_opt=!TS_PROTO_OPT! ^
    %%f
)

endlocal
