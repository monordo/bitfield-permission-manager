import { Injectable, Logger } from "@nestjs/common"

@Injectable()
export class BitfieldProvider {
  logger = new Logger(BitfieldProvider.name)

  static numberToBitfield(number: number): bigint { return BigInt((1n << BigInt(number))) }

  numberToBitfield(number: number): bigint { return BigInt((1n << BigInt(number))) }

  addPermission = (permissions: bigint, bit: bigint): bigint => !this.hasPermission(permissions, bit) ? permissions | bit : permissions

  addPermissions = (permissions: bigint, bits: bigint[]): bigint => {
    let tmp = permissions;
    for (const bit of bits) tmp = this.addPermission(tmp, bit);
    return tmp;
  }

  revokePermission = (permissions: bigint, bit: bigint): bigint => permissions & ~bit

  revokePermissions = (permissions: bigint, bits: bigint[]): bigint => {
    let tmp = permissions;
    for (const bit of bits) tmp = this.revokePermission(tmp, bit);
    return tmp;
  }

  hasPermission = (permissions: bigint, bit: bigint): boolean => (permissions & bit) === bit

  hasPermissionsOR = (permissions: bigint, bits: bigint[]): boolean => !!bits.find((bit) => this.hasPermission(permissions, bit))

  hasPermissionsAND = (permissions: bigint, bits: bigint[]): boolean => !bits.find((bit) => !this.hasPermission(permissions, bit))

  compute = (bits: bigint[], initial?: bigint): bigint => this.addPermissions(initial ?? 0n, bits)

  test = (permisisons: bigint, query: bigint[][]): boolean => {
    if (permisisons === BigInt(0) && query.length !== 0) return false
    const andArray = query.map((bits) => this.hasPermissionsOR(permisisons, bits))
    return andArray.find((bit) => !bit) === undefined
  }
}