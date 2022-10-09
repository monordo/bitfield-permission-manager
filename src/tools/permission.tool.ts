import { BitfieldProvider } from "../providers";
import { AbstractPermission } from "../abstracts";

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

  can(permissions: bigint): boolean {
    return new BitfieldProvider().test(permissions, [[this.value]]);
  }
}