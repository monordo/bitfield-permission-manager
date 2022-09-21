import { Module } from '@nestjs/common';
import { BitfieldProvider } from './providers';

@Module({
  providers: [BitfieldProvider],
  exports: [],
  imports: [],
})
export class BitfieldManagerModule {}