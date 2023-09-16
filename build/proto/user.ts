/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "user";

export interface Empty {
}

export interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  photoUrl: string;
}

export interface UserList {
  User: User[];
}

export interface UserId {
  id: string;
}

export const USER_PACKAGE_NAME = "user";

export interface UserServiceClient {
  getAllUser(request: Empty): Observable<UserList>;

  getUser(request: UserId): Observable<User>;

  addUser(request: User): Observable<User>;

  updateUser(request: User): Observable<User>;

  deleteUser(request: UserId): Observable<Empty>;
}

export interface UserServiceController {
  getAllUser(request: Empty): Promise<UserList> | Observable<UserList> | UserList;

  getUser(request: UserId): Promise<User> | Observable<User> | User;

  addUser(request: User): Promise<User> | Observable<User> | User;

  updateUser(request: User): Promise<User> | Observable<User> | User;

  deleteUser(request: UserId): Promise<Empty> | Observable<Empty> | Empty;
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getAllUser", "getUser", "addUser", "updateUser", "deleteUser"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const USER_SERVICE_NAME = "UserService";
