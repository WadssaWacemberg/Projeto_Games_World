import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Categoria } from "../../categorias/entities/categorias.entity";

@Entity({ name: "tb_produtos" })
export class Produto {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 255, nullable: false })
  nome!: string;

  @Column({ length: 500, nullable: false })
  descricao!: string;

  @Column({ length: 100 })
  console!: string;

  @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
  preco!: number;

  @Column()
  foto!: string;

  @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
    onDelete: "CASCADE",
  })
  categoria!: Categoria;
}
