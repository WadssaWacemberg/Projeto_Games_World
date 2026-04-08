import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produto } from "./produtos/entities/produtos.entity";
import { Categoria } from "./categorias/entities/categorias.entity";
import { ProdutoModule } from "./produtos/module/produtos.module";
import { CategoriasModule } from "./categorias//module/categorias.module";
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "1026",
      database: "db_gamesworld",
      entities: [Produto, Categoria],
      synchronize: true,
    }),
    ProdutoModule,
    CategoriasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
