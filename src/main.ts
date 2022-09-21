// Here place you library context constructor function

import { NestFactory } from "@nestjs/core";
import { BitfieldManagerModule } from "./bitfield-manager.module";
import { BitfieldProvider } from "./providers/bitfield.provider";

export const bitfieldPermissionManager = async (): Promise<BitfieldProvider> => {
    const app = await NestFactory.createApplicationContext(
        BitfieldManagerModule,
        { logger: false },
    );

    return app.get(BitfieldProvider);
};



class PermissionEnum {
    static USER = BitfieldProvider.numberToBitfield(0);
    static ADMIN = BitfieldProvider.numberToBitfield(1);
    static MODERATOR = BitfieldProvider.numberToBitfield(2);
    static OPERATOR = BitfieldProvider.numberToBitfield(3);
    static BANNED = BitfieldProvider.numberToBitfield(4);
}


(async () => {
    const permissionManager = await bitfieldPermissionManager();


    // Compute permissions

    const permissions = permissionManager.compute([
        PermissionEnum.USER,
        PermissionEnum.MODERATOR,
    ]);

    const permissions2 = permissionManager.compute([
        PermissionEnum.OPERATOR,
    ], permissions);

    // Check permissions

    /*
        type PermissionQuery = [
            [OR, OR, OR], // AND
            [OR, OR, OR], // AND
            [OR, OR, OR], // AND
        ]
    */

    let check = permissionManager.test(permissions, [[ PermissionEnum.USER ]]); // true
    check = permissionManager.test(permissions, [[ PermissionEnum.OPERATOR ]]); // false
    check = permissionManager.test(permissions, [[ PermissionEnum.USER, PermissionEnum.ADMIN ]]); // true
    check = permissionManager.test(permissions, [[ PermissionEnum.USER ], [ PermissionEnum.ADMIN, PermissionEnum.MODERATOR ]]); // true
    check = permissionManager.test(permissions, [[ PermissionEnum.USER ], [ PermissionEnum.ADMIN ]]); // false


     check = permissionManager.test(permissions2, [[ PermissionEnum.USER ]]); // true
    check = permissionManager.test(permissions2, [[ PermissionEnum.OPERATOR ]]); // true
    check = permissionManager.test(permissions2, [[ PermissionEnum.USER, PermissionEnum.ADMIN ]]); // true
    check = permissionManager.test(permissions2, [[ PermissionEnum.USER ], [ PermissionEnum.ADMIN, PermissionEnum.MODERATOR ], [ PermissionEnum.OPERATOR ]]); // true
    check = permissionManager.test(permissions2, [[ PermissionEnum.USER ], [ PermissionEnum.ADMIN, PermissionEnum.MODERATOR ]]); // true
    check = permissionManager.test(permissions2, [[ PermissionEnum.USER ], [ PermissionEnum.ADMIN ]]); // false

    // Check permissions whith separate functions

    check = permissionManager.hasPermissionsOR(permissions, [PermissionEnum.USER, PermissionEnum.ADMIN]); // true

    check = permissionManager.hasPermissionsAND(permissions, [PermissionEnum.USER, PermissionEnum.ADMIN]); // false



    // Add permissions to existing permissions

    const permissions3 = permissionManager.addPermission(permissions, PermissionEnum.BANNED);

    const permissions4 = permissionManager.addPermissions(permissions, [PermissionEnum.BANNED, PermissionEnum.OPERATOR]);


    // Revoke permissions to existing permissions

    const permissions5 = permissionManager.revokePermission(permissions, PermissionEnum.BANNED);

    const permissions6 = permissionManager.revokePermissions(permissions, [PermissionEnum.USER, PermissionEnum.MODERATOR]);

})();