import { Module } from "@nestjs/common";
import { ProdutoService } from "../service/produtos.service";
import { ProdutoController } from "../controler/produtos.controller";
import { Produto } from "../entities/produtos.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  providers: [ProdutoService],
  controllers: [ProdutoController],
  exports: [TypeOrmModule],
})
export class ProdutoModule {}
