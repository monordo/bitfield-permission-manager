import { Permission } from "../tools";
import { BitfieldProvider } from "../providers";

const isPermissionMetaKey = Symbol("isPermission");

export function Perm(permission: number): PropertyDecorator {
    return (target, key): void => {
        let original = target[key];
        original = new Permission(
            BitfieldProvider.numberToBitfield(permission),
            permission,
            key.toString()
        )

        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: () => original,
            set: newVal => {
                original = new Permission(
                    BitfieldProvider.numberToBitfield(newVal),
                    newVal,
                    key.toString()
                )
            },
            enumerable: false,
            configurable: false
        });
        Reflect.defineMetadata(isPermissionMetaKey, true, target, key);
    };
}

export function isPermisison(target: any, propertyKey: string): boolean | undefined {
    return Reflect.getMetadata(isPermissionMetaKey, target, propertyKey);
}