/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "kitchen";

export interface Empty {
}

export interface Order {
}

export interface KitchenId {
  id: string;
}

export interface TicketId {
  id: string;
}

export interface Ticket {
}

export interface TicketList {
  tickets: Ticket[];
}

export interface UpdateTicketDto {
  id: string;
}

export const KITCHEN_PACKAGE_NAME = "kitchen";

export interface KitchenServiceClient {
  getOrder(request: KitchenId): Observable<Order>;

  createTicket(request: KitchenId): Observable<TicketList>;

  getTickets(request: KitchenId): Observable<TicketList>;

  updateTicket(request: UpdateTicketDto): Observable<Ticket>;

  completeTicket(request: TicketId): Observable<Empty>;
}

export interface KitchenServiceController {
  getOrder(request: KitchenId): Promise<Order> | Observable<Order> | Order;

  createTicket(request: KitchenId): Promise<TicketList> | Observable<TicketList> | TicketList;

  getTickets(request: KitchenId): Promise<TicketList> | Observable<TicketList> | TicketList;

  updateTicket(request: UpdateTicketDto): Promise<Ticket> | Observable<Ticket> | Ticket;

  completeTicket(request: TicketId): Promise<Empty> | Observable<Empty> | Empty;
}

export function KitchenServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getOrder", "createTicket", "getTickets", "updateTicket", "completeTicket"];
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
