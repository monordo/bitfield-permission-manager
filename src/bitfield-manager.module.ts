import { Module } from '@nestjs/common';
import { BitfieldProvider } from './providers';
import { BitfieldWrapper } from './wrappers';

@Module({
  providers: [BitfieldWrapper, BitfieldProvider],
  exports: [BitfieldProvider, BitfieldWrapper],
  imports: [],
})
export class BitfieldManagerModule {}