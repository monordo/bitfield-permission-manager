import { Injectable, Logger } from "@nestjs/common"
import { BitfieldProvider } from "../providers/bitfield.provider";
import { Permission } from "..";

@Injectable()
export class BitfieldWrapper {
  logger = new Logger(BitfieldWrapper.name)

  constructor(private readonly provider: BitfieldProvider) {}

  addPermission = (permissions: bigint | string, bit: bigint | string | Permission): bigint => {
    let fBit = typeof bit === "string" ? BigInt(bit) : bit
    fBit = typeof fBit === "bigint" ? fBit : (bit as Permission).value
    const fPerms = typeof permissions === "string" ? BigInt(permissions) : permissions
    return this.provider.addPermission(fPerms, fBit)
  }

  addPermissions = (permissions: bigint | string, bits: bigint[] | string[] | Permission[]): bigint => {
    let tmp = typeof permissions === "string" ? BigInt(permissions) : permissions
    for (const bit of bits) tmp = this.addPermission(tmp, bit);
    return tmp;
  }

  // revokePermission = (permissions: bigint, bit: bigint): bigint => permissions & ~bit

  revokePermission = (permissions: bigint | string, bit: bigint | string | Permission): bigint => {
    let fBit = typeof bit === "string" ? BigInt(bit) : bit
    fBit = typeof fBit === "bigint" ? fBit : (bit as Permission).value
    const fPerms = typeof permissions === "string" ? BigInt(permissions) : permissions
    return this.provider.revokePermission(fPerms, fBit)
  }

  revokePermissions = (permissions: bigint | string, bits: bigint[] | string[] | Permission[]): bigint => {
    let tmp = typeof permissions === "string" ? BigInt(permissions) : permissions
    for (const bit of bits) tmp = this.revokePermission(tmp, bit);
    return tmp;
  }

  hasPermission = (permissions: bigint | string, bit: bigint | string | Permission): boolean => {
    const fBit = typeof bit === "string" ? BigInt(bit) : typeof bit === "bigint" ? bit : (bit as Permission).value
    const fperms = typeof permissions === "string" ? BigInt(permissions) : permissions
    return this.provider.hasPermission(fperms, fBit)
  }

  /*
   * @return {string | null} - Returns null if has permissions, otherwise returns string array of missing permissions
   */
  hasPermissionsOR = (permissions: bigint | string, bits: Permission[]): string[] | null => {
    if (bits.length === 0) return null
    let has: boolean = bits.some((bit) => this.hasPermission(permissions, bit))
    return !has ? bits.map((bit) => bit.name) : null
  }

  // hasPermissionsAND = (permissions: bigint, bits: bigint[]): boolean => !bits.find((bit) => !this.hasPermission(permissions, bit))

  hasPermissionsAND = (permissions: bigint | string, bits: Permission[]): string[] | null => {
    const hasNot: string[] = bits.filter((bit) => !this.hasPermission(permissions, bit)).map((bit) => bit.name)
    return hasNot.length > 0 ? hasNot : null
  }

  compute = (bits: bigint[] | string[] | Permission[], initial?: bigint | string): bigint => this.addPermissions(initial ?? 0n, bits)

  /*
   * @params {bigint | string} permisisons - The permissions to check
   * @params {Permission[][]} query - The query to check against => [AND, AND] => [ [OR, OR], [OR, OR] ]
   */
  test = (permisisons: bigint | string, query: Permission[][]): {
    AND: { OR: string[] }[]
  } | null => {
    if (permisisons === BigInt(0) && query.length !== 0) return null;
    const andArray = query.map((bits) => this.hasPermissionsOR(permisisons, bits))
    const failedOr = andArray.filter((failed) => failed).map((failed) => ({ OR: failed }))
    return failedOr.length > 0 ? { AND: failedOr } : null
  }
}