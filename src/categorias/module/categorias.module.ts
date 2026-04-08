import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categoria } from "../entities/categorias.entity";
import { CategoriasService } from "../service/categorias.service";
import { CategoriasController } from "../controller/categorias.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Categoria])],

  controllers: [CategoriasController],

  providers: [CategoriasService],

  exports: [TypeOrmModule],
})
export class CategoriasModule {}
