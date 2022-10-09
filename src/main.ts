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



// class PermBatch {
//   static get = (): PermBatch => new PermBatch();

//   getNames = (): string[] => {
//     return Object.keys(this)
//   }
// }

// class MyPerms extends PermBatch {
//   static readonly ADMIN = BitfieldProvider.numberToBitfield(0);
//   static readonly MOD = 1n;
//   static readonly USER = "2n";

// }


// const test = (base: PermBatch) => {
//   console.log(Object.keys(base), base[Object.keys(base)[0]]);
//   console.log(base.getNames());
// }


// (async () => {
  
//   // const permissions: PermissionBatch = {
//   //   owner: BitfieldProvider.numberToBitfield(0),
//   //   admin: BitfieldProvider.numberToBitfield(1),
//   //   read: BitfieldProvider.numberToBitfield(2),
//   //   update: BitfieldProvider.numberToBitfield(3),
//   //   delete: BitfieldProvider.numberToBitfield(4),
//   //   share: BitfieldProvider.numberToBitfield(5),
//   // }

//   // const bitfieldProvider = await bitfieldPermissionManager()

//   // const perm = bitfieldProvider.compute([ MyPerms.ADMIN, permissions.admin ])

//   // console.log(bitfieldProvider.testBatch(perm, MyPerms))
  
//   // test(MyPerms.get())


// })();