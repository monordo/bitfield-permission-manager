import { isPermisison } from "../decorators";
import { Permission } from "../tools";

const innerTempPropsName = '__TempProperties__';
export abstract class AbstractPermissionModel {
    static getNames(): string[] {
        return Object.getOwnPropertyNames(this).filter((key) => isPermisison(this, key));
    }

    static can(permission: bigint): Permission[] {
        const keys = Object.getOwnPropertyNames(this).filter((key) => isPermisison(this, key));
        return keys.map((key) => this[key]).filter((perm) => perm.can(permission));
    }
}
