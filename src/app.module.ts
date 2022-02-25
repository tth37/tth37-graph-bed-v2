import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "./config/config.module";
import { GraphModule } from './graph/graph.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [ConfigModule, GraphModule, FileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
