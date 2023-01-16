import { NestFactory } from "@nestjs/core";
import { BitfieldManagerModule } from "./bitfield-manager.module";
import { BitfieldWrapper } from "./wrappers/bitfield.wrapper";
import { BitfieldProvider } from "./providers/bitfield.provider";
import { AbstractPermissionModel, Perm, Permission, PermissionCluster } from "@open-monordo/bitfield-permission-manager-core";
import { PermissionClusterManager } from "./clusters/manager.cluster";

export const bitfieldPermissionManager = async (clusters?: { [key: string]: typeof AbstractPermissionModel[] }): Promise<{
  provider: BitfieldProvider;
  wrapper: BitfieldWrapper;
  clusterManager: PermissionClusterManager;
}> => {
  const app = await NestFactory.createApplicationContext(
    BitfieldManagerModule.forRoot(clusters ?? {}),
    // { logger: false },
  );

  return {
    provider: app.get(BitfieldProvider),
    wrapper: app.get(BitfieldWrapper),
    clusterManager: app.get(PermissionClusterManager),
  }
};