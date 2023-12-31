/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "kitchen";

export interface Empty {
}

export interface TotalTicket {
  resId: number;
  total: number;
}

export interface TotalTicketList {
  totals: TotalTicket[];
}

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

export interface UserId {
  id: number;
}

export interface KitchenId {
  id: number;
}

export interface TicketId {
  id: number;
}

export interface Ticket {
  id: number;
  status: string;
  order: Order | undefined;
}

export interface TicketList {
  tickets: Ticket[];
}

export interface UpdateTicketDto {
  id: number;
  status: string;
}

export interface CreateTicketDto {
  userId: number;
  resId: number;
  menus: Menu[];
}

export const KITCHEN_PACKAGE_NAME = "kitchen";

export interface KitchenServiceClient {
  createTicket(request: CreateTicketDto): Observable<Ticket>;

  getTickets(request: KitchenId): Observable<TicketList>;

  getTicketsByUserId(request: UserId): Observable<TicketList>;

  updateTicket(request: UpdateTicketDto): Observable<Ticket>;

  completeTicket(request: TicketId): Observable<Empty>;

  getAllKitchenTotalTickets(request: Empty): Observable<TotalTicketList>;
}

export interface KitchenServiceController {
  createTicket(request: CreateTicketDto): Promise<Ticket> | Observable<Ticket> | Ticket;

  getTickets(request: KitchenId): Promise<TicketList> | Observable<TicketList> | TicketList;

  getTicketsByUserId(request: UserId): Promise<TicketList> | Observable<TicketList> | TicketList;

  updateTicket(request: UpdateTicketDto): Promise<Ticket> | Observable<Ticket> | Ticket;

  completeTicket(request: TicketId): Promise<Empty> | Observable<Empty> | Empty;

  getAllKitchenTotalTickets(request: Empty): Promise<TotalTicketList> | Observable<TotalTicketList> | TotalTicketList;
}

export function KitchenServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "createTicket",
      "getTickets",
      "getTicketsByUserId",
      "updateTicket",
      "completeTicket",
      "getAllKitchenTotalTickets",
    ];
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
