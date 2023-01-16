import { Injectable } from "@nestjs/common";
import { BitfieldProvider as BitfieldProviderCore } from "@open-monordo/bitfield-permission-manager-core";


@Injectable()
export class BitfieldProvider extends BitfieldProviderCore {}