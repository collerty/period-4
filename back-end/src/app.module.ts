import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from '@nestjs/config';
import {UsersModule} from './users/users.module';
import {AuthModule} from './auth/auth.module';
import {PrismaModule} from "./prisma/prisma.module";
import {ClothesModule} from "./clothes/clothes.module";
import {OutfitsModule} from "./outfits/outfits.module";

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, AuthModule, PrismaModule, ClothesModule, OutfitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}