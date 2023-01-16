import { BitfieldProvider } from "../providers/bitfield.provider";
import { Injectable } from "@nestjs/common";
import { BitfieldWrapper as BitfieldWrapperCore } from "@open-monordo/bitfield-permission-manager-core";


@Injectable()
export class BitfieldWrapper extends BitfieldWrapperCore {

  constructor(
    private readonly _: BitfieldProvider,
  ) {
    super(_);
  }
}