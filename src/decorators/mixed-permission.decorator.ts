import { MixedPermission, Permission } from "../tools";
import { isPermissionMetaKey } from "./permission.decorator";

const isMixedPermissionMetaKey = Symbol("isMixedPermission");

export function MixedPerm(...permissions: Array<Permission | MixedPermission>[]): PropertyDecorator {
    return (target, key): void => {
        let original = target[key];
        original = new MixedPermission(
            permissions,
            key.toString()
        )

        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: () => original,
            set: _ => {},
            enumerable: false,
            configurable: false
        });
        Reflect.defineMetadata(isPermissionMetaKey, true, target, key);
        Reflect.defineMetadata(isMixedPermissionMetaKey, true, target, key);
    };
}

export function isMixedPermission (target: any, propertyKey: string): boolean | undefined {
    return Reflect.getMetadata(isMixedPermissionMetaKey, target, propertyKey);
}