import { Injectable } from "@nestjs/common";
import { PermissionCluster } from "@open-monordo/bitfield-permission-manager-core";


@Injectable()
export class PermissionClusterManager {

  public clusters: { [key: string]: PermissionCluster } = {};

  constructor(clusters: { [key: string]: PermissionCluster }) {
    this.clusters = clusters;
  }

  public get(key: string): PermissionCluster {
    const cluster = this.clusters[key];
    if (!cluster) {
      throw new Error(`Cluster ${key} not found`);
    }
    return this.clusters[key]
  }
}