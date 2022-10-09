import { NestFactory } from "@nestjs/core";
import { AbstractPermissionModel } from "./abstracts/permissions-model.abstract";
import { BitfieldManagerModule } from "./bitfield-manager.module";
import { Perm } from "./decorators";
import { BitfieldProvider } from "./providers/bitfield.provider";
import { Permission } from "./tools";

export const bitfieldPermissionManager = async (): Promise<BitfieldProvider> => {
  const app = await NestFactory.createApplicationContext(
    BitfieldManagerModule,
    { logger: false },
  );

  return app.get(BitfieldProvider);
};
