import { Module } from '@nestjs/common';
import { BitfieldProvider } from './providers';
import { BitfieldWrapper } from './wrappers';

@Module({
  providers: [BitfieldProvider, BitfieldWrapper],
  exports: [BitfieldProvider, BitfieldWrapper],
  imports: [],
})
export class BitfieldManagerModule {}