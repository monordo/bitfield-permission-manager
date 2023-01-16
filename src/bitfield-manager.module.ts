import { Module } from '@nestjs/common';
import { BitfieldProvider } from './providers/bitfield.provider';
import { BitfieldWrapper } from './wrappers/bitfield.wrapper';
import { PermissionClusterManager } from './clusters/manager.cluster';
import { AbstractPermissionModel, PermissionCluster } from '@open-monordo/bitfield-permission-manager-core';

@Module({
  providers: [BitfieldWrapper, BitfieldProvider],
  exports: [BitfieldProvider, BitfieldWrapper],
  imports: [],
})
export class BitfieldManagerModule {
  static forRoot(clusters: { [key: string]: typeof AbstractPermissionModel[] }) {
    const connectionProvider = {
      provide: PermissionClusterManager,
      useFactory: () => {
        const newClusters: { [key: string]: PermissionCluster } = {};
        for (const key in clusters) {
          newClusters[key] = new PermissionCluster(clusters[key]);
        }
        return new PermissionClusterManager(newClusters)
      },
      // inject: [PermissionClusterManager],
    };

    return {
      module: BitfieldManagerModule,
      providers: [BitfieldWrapper, BitfieldProvider, connectionProvider],
      exports: [BitfieldProvider, BitfieldWrapper, connectionProvider],
    };
  }
}