import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Produto } from "../../produtos/entities/produtos.entity";

@Entity({ name: "tb_categorias" })
export class Categoria {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 255, nullable: false })
  tipo!: string;

  @OneToMany(() => Produto, (produto) => produto.categoria)
  produto!: Produto[];
}
