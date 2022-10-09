import { isPermisison } from '@/decorators/permission.decorator';
import 'reflect-metadata'
import { BitfieldProvider } from '..';


export type PermissionRecordKey = string | number | symbol;

export class PermissionBatch {

    static getNames(): string[] {
        return Object.getOwnPropertyNames(this).filter((key) => isPermisison(this, key));
    }

    static test<T extends PermissionRecordKey = string>(permission: bigint): T[] {
        const keys = Object.getOwnPropertyNames(this).filter((key) => isPermisison(this, key));
        const provider = new BitfieldProvider();

        const results = keys.map((key) => provider.test(permission, [[ this[key] ]]))
        return keys.filter((key, index) => results[index]) as T[];
    }
}


// export class UserPermissions extends PermissionBatch {
//     @Perm(2)
//     static readonly toto: bigint;

//     @Perm(3)
//     static readonly titi: bigint;
// }



// enum PermEnum {
//     test = "test"
// }

// const provider = new BitfieldProvider();

// const perm = provider.compute([UserPermissions.toto]);

// console.log(UserPermissions.test(perm));

// const tt = UserPermissions.toRecord<PermEnum>();

// console.log(tt);

// console.log(tt)

// PermissionBatch.test = 5;
