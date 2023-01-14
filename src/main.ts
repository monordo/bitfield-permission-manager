import { NestFactory } from "@nestjs/core";
import { AbstractPermissionModel } from "./abstracts";
import { BitfieldManagerModule } from "./bitfield-manager.module";
import { Perm } from "./decorators";
import { BitfieldProvider } from "./providers";
import { Permission } from "./tools";
import { bitfieldSqlWhereBuilder } from "./tools/sql-builder.tool";
import { BitfieldWrapper } from ".";

export const bitfieldPermissionManager = async (): Promise<{
  provider: BitfieldProvider;
  wrapper: BitfieldWrapper;
}> => {
  const app = await NestFactory.createApplicationContext(
    BitfieldManagerModule,
    { logger: false },
  );

  return {
    provider: app.get(BitfieldProvider),
    wrapper: app.get(BitfieldWrapper)
  }
};


// export const permissions = {
//   owner: BitfieldProvider.numberToBitfield(0),
//   admin: BitfieldProvider.numberToBitfield(1),
//   read: BitfieldProvider.numberToBitfield(2),
//   update: BitfieldProvider.numberToBitfield(3),
//   delete: BitfieldProvider.numberToBitfield(4),
//   share: BitfieldProvider.numberToBitfield(5),
// };

// export class GroupAccountPermissions extends AbstractPermissionModel {
//   @Perm(1)
//   static readonly UPDATE_GROUP_INFO: Permission;

//   @Perm(2)
//   static readonly ADD_ACCOUNT: Permission;

//   @Perm(3)
//   static readonly REMOVE_ACCOUNT: Permission;

//   @Perm(4)
//   static readonly MANAGE_PERMISSIONS: Permission;

//   @Perm(5)
//   static readonly CREATE_ADDRESS: Permission;

//   @Perm(6)
//   static readonly UPDATE_ADDRESS: Permission;

//   @Perm(7)
//   static readonly DELETE_ADDRESS: Permission;

//   @Perm(8)
//   static readonly ADD_PROFILE: Permission;

//   @Perm(9)
//   static readonly REMOVE_PROFILE: Permission;

//   @Perm(10)
//   static readonly UPDATE_PROFILE: Permission;

//   @Perm(11)
//   static readonly ADMIN: Permission;
// }


// (async () => {
//   const app = await bitfieldPermissionManager();


//   // console.log(permissions.owner)
//   // console.log(GroupAccountPermissions.REMOVE_ACCOUNT, GroupAccountPermissions.UPDATE_GROUP_INFO)

//   // const perm = bitfieldManager.compute([
//   //   permissions.admin,
//   //   permissions.read,
//   // ])
//   // console.log(perm, bitfieldManager.hasPermission(perm, permissions.read));

//   // bitfieldSqlWhereBuilder("permissions", [
//   //   []
//   // ]);
//   // console.log('\n//////////////////////////////////\n')

//   // bitfieldSqlWhereBuilder("permissions", [
//   //   [GroupAccountPermissions.ADMIN, GroupAccountPermissions.UPDATE_GROUP_INFO],
//   // ]);
//   // console.log('\n//////////////////////////////////\n')

//   // bitfieldSqlWhereBuilder("permissions", [
//   //   [GroupAccountPermissions.ADMIN, GroupAccountPermissions.UPDATE_GROUP_INFO],
//   //   [GroupAccountPermissions.REMOVE_ACCOUNT, GroupAccountPermissions.DELETE_ADDRESS],
//   // ]);

//   // console.log('\n//////////////////////////////////\n')

//   // bitfieldSqlWhereBuilder("permissions", [
//   //   [GroupAccountPermissions.ADMIN],
//   //   [GroupAccountPermissions.ADMIN],
//   // ]);
// })()