import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Param,
  ParseIntPipe,
  Put,
} from "@nestjs/common";
import { Categoria } from "../entities/categorias.entity";
import { CategoriasService } from "../service/categorias.service";

@Controller("/categorias")
export class CategoriasController {
  constructor(private readonly categoriaService: CategoriasService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Categoria[]> {
    return this.categoriaService.findAll();
  }
  @Get("/tipo/:tipo")
  @HttpCode(HttpStatus.OK)
  findByTipo(@Param("tipo") tipo: string): Promise<Categoria[]> {
    return this.categoriaService.findByTipo(tipo);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriaService.create(categoria);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriaService.update(categoria);
  }

  @Delete("/:id")
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param("id", ParseIntPipe) id: number) {
    return this.categoriaService.delete(id);
  }
}
