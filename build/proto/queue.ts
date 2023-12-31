/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "queue";

export interface Menu {
  id: number;
  name: string;
  price: number;
  description: string;
  quatity: number;
}

export interface Order {
  userId: number;
  resId: number;
  menus: Menu[];
}

export interface RestaurantId {
  id: number;
}

export interface AcceptOrderDto {
  accept: boolean;
  resId: number;
}

export const QUEUE_PACKAGE_NAME = "queue";

export interface QueueServiceClient {
  createOrder(request: Order): Observable<Order>;

  consumeQueue(request: RestaurantId): Observable<Order>;

  acceptOrder(request: AcceptOrderDto): Observable<Order>;
}

export interface QueueServiceController {
  createOrder(request: Order): Promise<Order> | Observable<Order> | Order;

  consumeQueue(request: RestaurantId): Promise<Order> | Observable<Order> | Order;

  acceptOrder(request: AcceptOrderDto): Promise<Order> | Observable<Order> | Order;
}

export function QueueServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createOrder", "consumeQueue", "acceptOrder"];
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
