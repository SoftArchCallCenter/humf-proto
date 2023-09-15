/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "restaurant";

export interface Empty {
}

export interface Restaurant {
  id: string;
  name: string;
  openTime: string;
  closeTime: string;
  address: string;
}

export interface RestaurantList {
  Restaurant: Restaurant[];
}

export interface RestaurantId {
  id: string;
}

export const RESTAURANT_PACKAGE_NAME = "restaurant";

export interface RestaurantServiceClient {
  getAllRestaurant(request: Empty): Observable<RestaurantList>;

  getRestaurant(request: RestaurantId): Observable<Restaurant>;

  addRestaurant(request: Restaurant): Observable<Restaurant>;

  updateRestaurant(request: Restaurant): Observable<Restaurant>;

  deleteRestaurant(request: RestaurantId): Observable<Empty>;
}

export interface RestaurantServiceController {
  getAllRestaurant(request: Empty): Promise<RestaurantList> | Observable<RestaurantList> | RestaurantList;

  getRestaurant(request: RestaurantId): Promise<Restaurant> | Observable<Restaurant> | Restaurant;

  addRestaurant(request: Restaurant): Promise<Restaurant> | Observable<Restaurant> | Restaurant;

  updateRestaurant(request: Restaurant): Promise<Restaurant> | Observable<Restaurant> | Restaurant;

  deleteRestaurant(request: RestaurantId): Promise<Empty> | Observable<Empty> | Empty;
}

export function RestaurantServiceControllerMethods() {
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
      GrpcMethod("RestaurantService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("RestaurantService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const RESTAURANT_SERVICE_NAME = "RestaurantService";