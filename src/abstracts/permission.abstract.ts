

export abstract class AbstractPermission {
    abstract name: string;

    abstract can(permission: bigint): boolean;
}