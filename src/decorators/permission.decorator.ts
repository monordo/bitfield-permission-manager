import { BitfieldProvider } from "..";

const isPermissionMetaKey = Symbol("isPermission");

export function Perm(permission: number): PropertyDecorator {
    return (target, key): void => {
        let original = target[key];
        original = BitfieldProvider.numberToBitfield(permission);
        Reflect.deleteProperty(target, key);
        Reflect.defineProperty(target, key, {
            get: () => original,
            set: newVal => {
                original = BitfieldProvider.numberToBitfield(newVal);
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