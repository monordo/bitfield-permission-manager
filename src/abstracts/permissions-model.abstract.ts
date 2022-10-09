import { isPermisison } from "../decorators";
import { Permission } from "../tools";

const innerTempPropsName = '__TempProperties__';

// function fooAnnotation(value: string){
//     console.log('fooAnnotation init...');
//     return (ctor: any): void => {
//       console.log('fooAnnotation called...');
//     //   Reflect.defineMetadata('fooAnnotation', value, target);
//       const vProps = ctor[innerTempPropsName];


//       console.log(Object.keys(ctor));
//       // now process the vProps...
//       delete ctor[innerTempPropsName];
//     };
//   };


// @fooAnnotation('kk')
export abstract class AbstractPermissionModel {
    static getNames(): string[] {
        return Object.getOwnPropertyNames(this).filter((key) => isPermisison(this, key));
    }

    static can(permission: bigint): Permission[] {
        const keys = Object.getOwnPropertyNames(this).filter((key) => isPermisison(this, key));
        return keys.map((key) => this[key]).filter((perm) => perm.can(permission));
    }
}
