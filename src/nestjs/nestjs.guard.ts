import { CanActivate, ExecutionContext, Injectable, SetMetadata } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { GqlExecutionContext } from '@nestjs/graphql';
import { BitfieldProvider } from "..";

export const Permissions = (query: bigint[][]) => SetMetadata('BTFpermissions', query);

@Injectable()
export class BitfieldPermissionGuard implements CanActivate {
  constructor(
    protected reflector: Reflector,
    protected readonly permissionsService: BitfieldProvider,
  ) { }

  checkPermissions = (userPermissions: bigint, query: bigint[][]): boolean => this.permissionsService.test(userPermissions, query);

  canActivate(context: ExecutionContext): boolean {
    const query = this.reflector.get<bigint[][]>('BTFpermissions', context.getHandler());
    if (!query) return true;
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return this.checkPermissions(user.permissions, query);
  }
}

@Injectable()
export class BitfieldPermissionGQLGuard extends BitfieldPermissionGuard {
 canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context);
    const query = this.reflector.get<bigint[][]>('BTFpermissions', context.getHandler());
    if (!query) return true;
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    return this.checkPermissions(user.permissions, query);
  }
}