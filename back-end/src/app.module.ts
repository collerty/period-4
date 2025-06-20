import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from '@nestjs/config';
import {UsersModule} from './users/users.module';
import {AuthModule} from './auth/auth.module';
import {PrismaModule} from "./prisma/prisma.module";
import {ClothesModule} from "./clothes/clothes.module";
import {OutfitsModule} from "./outfits/outfits.module";
import { CloudinaryModule } from './cloudinary.module';
import { UploadController } from './upload.controller';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, AuthModule, PrismaModule, ClothesModule, OutfitsModule, CloudinaryModule],
  controllers: [AppController, UploadController],
  providers: [AppService],
})
export class AppModule {
}