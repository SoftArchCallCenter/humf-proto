/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "restaurant";

export interface Empty {
}

export interface MenuId {
  id: number;
}

export interface RestaurantId {
  id: number;
}

export interface CreateMenuDto {
  name: string;
  price: number;
  description: string;
}

export interface UpdateMenuDto {
  id: number;
  name: string;
  price: number;
  description: string;
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

export const RESTAURANT_PACKAGE_NAME = "restaurant";

export interface MenuServiceClient {
  getAllMenu(request: Empty): Observable<MenuList>;

  getMenu(request: MenuId): Observable<Menu>;

  getAllMenuByRestaurant(request: RestaurantId): Observable<MenuList>;

  createMenu(request: CreateMenuDto): Observable<Menu>;

  updateMenu(request: UpdateMenuDto): Observable<Menu>;

  deleteMenu(request: MenuId): Observable<Empty>;
}

export interface MenuServiceController {
  getAllMenu(request: Empty): Promise<MenuList> | Observable<MenuList> | MenuList;

  getMenu(request: MenuId): Promise<Menu> | Observable<Menu> | Menu;

  getAllMenuByRestaurant(request: RestaurantId): Promise<MenuList> | Observable<MenuList> | MenuList;

  createMenu(request: CreateMenuDto): Promise<Menu> | Observable<Menu> | Menu;

  updateMenu(request: UpdateMenuDto): Promise<Menu> | Observable<Menu> | Menu;

  deleteMenu(request: MenuId): Promise<Empty> | Observable<Empty> | Empty;
}

export function MenuServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "getAllMenu",
      "getMenu",
      "getAllMenuByRestaurant",
      "createMenu",
      "updateMenu",
      "deleteMenu",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("MenuService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("MenuService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const MENU_SERVICE_NAME = "MenuService";
