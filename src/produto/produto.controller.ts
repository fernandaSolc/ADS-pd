import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Controller('loja/produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  findAll() {
    return this.produtoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.produtoService.findOne(id);
  }

  @Post()
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtoService.create(createProdutoDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtoService.update(id, updateProdutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.produtoService.remove(id);
  }

  // Rotas de produtos favoritos

  @Get('favoritos/:funcionarioId')
  async listarFavoritos(@Param('funcionarioId') funcionarioId: number) {
    return this.produtoService.listarFavoritos(funcionarioId);
  }

  @Post(':id/favoritar/:funcionarioId')
  async favoritarProduto(
    @Param('id') id: number,
    @Param('funcionarioId') funcionarioId: number,
  ) {
    return this.produtoService.favoritarProduto(id, funcionarioId);
  }

  // Rotas de produtos comprados

  @Get('comprados/:funcionarioId')
  async listarComprados(@Param('funcionarioId') funcionarioId: number) {
    return this.produtoService.listarComprados(funcionarioId);
  }

  @Post(':id/comprar')
  async comprarProduto(
    @Param('id') produtoId: number,
    @Body('funcionarioId') funcionarioId: number,
  ) {
    return this.produtoService.comprarProduto(produtoId, funcionarioId);
  }
}
