/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "restaurant";

export interface Empty {
}

export interface RestaurantId {
  id: number;
}

export interface CreateRestaurantDto {
  name: string;
  openTime: string;
  closeTime: string;
  address: string;
}

export interface UpdateRestaurantDto {
  name: string;
  openTime: string;
  closeTime: string;
  address: string;
}

export interface Restaurant {
  id: number;
  name: string;
  openTime: string;
  closeTime: string;
  address: string;
}

export interface RestaurantList {
  Restaurant: Restaurant[];
}

export const RESTAURANT_PACKAGE_NAME = "restaurant";

export interface RestaurantGrpcServiceClient {
  getAllRestaurant(request: Empty): Observable<RestaurantList>;

  getRestaurant(request: RestaurantId): Observable<Restaurant>;

  addRestaurant(request: CreateRestaurantDto): Observable<Restaurant>;

  updateRestaurant(request: UpdateRestaurantDto): Observable<Restaurant>;

  deleteRestaurant(request: RestaurantId): Observable<Empty>;
}

export interface RestaurantGrpcServiceController {
  getAllRestaurant(request: Empty): Promise<RestaurantList> | Observable<RestaurantList> | RestaurantList;

  getRestaurant(request: RestaurantId): Promise<Restaurant> | Observable<Restaurant> | Restaurant;

  addRestaurant(request: CreateRestaurantDto): Promise<Restaurant> | Observable<Restaurant> | Restaurant;

  updateRestaurant(request: UpdateRestaurantDto): Promise<Restaurant> | Observable<Restaurant> | Restaurant;

  deleteRestaurant(request: RestaurantId): Promise<Empty> | Observable<Empty> | Empty;
}

export function RestaurantGrpcServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "getAllRestaurant",
      "getRestaurant",
      "addRestaurant",
      "updateRestaurant",
      "deleteRestaurant",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("RestaurantGrpcService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("RestaurantGrpcService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const RESTAURANT_GRPC_SERVICE_NAME = "RestaurantGrpcService";
