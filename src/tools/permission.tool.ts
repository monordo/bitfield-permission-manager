import { BitfieldProvider } from "../providers";
import { AbstractPermission } from "../abstracts";
import { BitfieldWrapper } from "..";

export class Permission extends AbstractPermission {
  name: string;

  value: bigint;

  initial: number;

  constructor(value: bigint, initial: number, name: string) {
    super();
    this.value = value;
    this.initial = initial;
    this.name = name;
  }

  can(permissions: bigint | string): boolean {
    return !(new BitfieldWrapper(new BitfieldProvider()).test(permissions, [[this]]));
  }
}