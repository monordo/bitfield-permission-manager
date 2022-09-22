import { Module } from '@nestjs/common';
import { BitfieldProvider } from './providers';

@Module({
  providers: [BitfieldProvider],
  exports: [BitfieldProvider],
  imports: [],
})
export class BitfieldManagerModule {}