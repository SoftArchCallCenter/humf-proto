/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "queue";

/** ไม่น่าต้องมี id */
export interface Order {
}

export const QUEUE_PACKAGE_NAME = "queue";

export interface KitchenServiceClient {
  createOrder(request: Order): Observable<Order>;
}

export interface KitchenServiceController {
  createOrder(request: Order): Promise<Order> | Observable<Order> | Order;
}

export function KitchenServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createOrder"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("KitchenService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("KitchenService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const KITCHEN_SERVICE_NAME = "KitchenService";
