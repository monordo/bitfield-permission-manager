import { BitfieldProvider } from "../providers";
import { AbstractPermission } from "../abstracts";
import { Permission } from "./permission.tool";

export class MixedPermission extends AbstractPermission {
  name: string;

  permissions: Permission[][];

  constructor(permissions: Array<Permission | MixedPermission>[], name: string) {
    super();
    this.name = name;
    this.permissions = [];
    permissions.forEach((permissions) => {
      const tmp = [];
      permissions.forEach((permission) => {
        if (permission instanceof Permission) {
          tmp.push(permission);
        }
        if (permission instanceof MixedPermission) {
          this.permissions.push(...permission.permissions);
        }
      });
      if (tmp.length > 0) this.permissions.push(tmp);
    });
  }

  can(permissions: bigint): boolean {
    const formated = this.permissions.map((permissions) => permissions.map((permission) => permission.value));
    return new BitfieldProvider().test(permissions, formated);
  }

  toCompute(): Permission[] {
    const perms = [];
    this.permissions.forEach((permissions) => {
      permissions.forEach((permission) => {
        perms.push(permission);
      });
    });
    return perms;
  }
}