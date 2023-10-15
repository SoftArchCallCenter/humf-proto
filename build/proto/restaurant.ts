/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "restaurant";

export interface Empty {
}

export interface RestaurantId {
  id: number;
}

export interface Menu {
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface MenuList {
  Menu: Menu[];
}

export interface FilterRestaurantDto {
  name: string;
  openTime: string;
  closeTime: string;
  address: string;
}

export interface CreateRestaurantDto {
  name: string;
  openTime: string;
  closeTime: string;
  address: string;
}

export interface UpdateRestaurantDto {
  id: number;
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

export interface RestaurantServiceClient {
  getAllRestaurant(request: Empty): Observable<RestaurantList>;

  getRestaurant(request: RestaurantId): Observable<Restaurant>;

  filterRestaurant(request: FilterRestaurantDto): Observable<RestaurantList>;

  getAllMenus(request: RestaurantId): Observable<MenuList>

  addRestaurant(request: CreateRestaurantDto): Observable<Restaurant>;

  updateRestaurant(request: UpdateRestaurantDto): Observable<Restaurant>;

  deleteRestaurant(request: RestaurantId): Observable<Empty>;
}

export interface RestaurantServiceController {
  getAllRestaurant(request: Empty): Promise<RestaurantList> | Observable<RestaurantList> | RestaurantList;

  getRestaurant(request: RestaurantId): Promise<Restaurant> | Observable<Restaurant> | Restaurant;

  filterRestaurant(request: FilterRestaurantDto): Promise<RestaurantList> | Observable<RestaurantList> | RestaurantList;

  getAllMenus(request: RestaurantId): Promise<MenuList> | Observable<MenuList> | MenuList;

  addRestaurant(request: CreateRestaurantDto): Promise<Restaurant> | Observable<Restaurant> | Restaurant;

  updateRestaurant(request: UpdateRestaurantDto): Promise<Restaurant> | Observable<Restaurant> | Restaurant;

  deleteRestaurant(request: RestaurantId): Promise<Empty> | Observable<Empty> | Empty;
}

export function RestaurantServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "getAllRestaurant",
      "getRestaurant",
      "filterRestaurant",
      "getAllMenus",
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
