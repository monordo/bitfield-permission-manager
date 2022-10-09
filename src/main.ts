import { NestFactory } from "@nestjs/core";
import { BitfieldManagerModule } from "./bitfield-manager.module";
import { BitfieldProvider } from "./providers";

export const bitfieldPermissionManager = async (): Promise<BitfieldProvider> => {
  const app = await NestFactory.createApplicationContext(
    BitfieldManagerModule,
    { logger: false },
  );

  return app.get(BitfieldProvider);
};
