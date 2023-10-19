/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "queue";

/** ไม่น่าต้องมี id */
export interface Order {
}

export const QUEUE_PACKAGE_NAME = "queue";

export interface QueueServiceClient {
  createOrder(request: Order): Observable<Order>;
}

export interface QueueServiceController {
  createOrder(request: Order): Promise<Order> | Observable<Order> | Order;
}

export function QueueServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createOrder"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("QueueService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("QueueService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const QUEUE_SERVICE_NAME = "QueueService";
