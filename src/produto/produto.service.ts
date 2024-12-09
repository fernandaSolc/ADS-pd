import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Funcionario } from '../funcionario/entities/funcionario.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
    @InjectRepository(Funcionario)
    private funcionarioRepository: Repository<Funcionario>,
  ) {}

  async findAll(): Promise<Produto[]> {
    return this.produtoRepository.find({ relations: ['funcionariosFavoritos', 'funcionariosCompraram'] });
  }

  async findOne(id: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOne({
      where: { id_produto: id },
      relations: ['funcionariosFavoritos', 'funcionariosCompraram'],
    });
    if (!produto) {
      throw new NotFoundException('Produto not found');
    }
    return produto;
  }

  create(createProdutoDto: CreateProdutoDto): Promise<Produto> {
    const produto = this.produtoRepository.create(createProdutoDto);
    return this.produtoRepository.save(produto);
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto): Promise<Produto> {
    const produto = await this.findOne(id);
    Object.assign(produto, updateProdutoDto);
    return this.produtoRepository.save(produto);
  }

  async remove(id: number): Promise<void> {
    const produto = await this.findOne(id);
    await this.produtoRepository.remove(produto);
  }

  // Logica de produtos favoritos

  async listarFavoritos(funcionarioId: number): Promise<Produto[]> {
    const funcionario = await this.funcionarioRepository.findOne({
      where: { id_funcionario: funcionarioId },
      relations: ['produtosFavoritos'],
    });

    if (!funcionario) {
      throw new NotFoundException('Funcionario not found');
    }

    return funcionario.produtosFavoritos;
  }

  async favoritarProduto(produtoId: number, funcionarioId: number): Promise<string> {
    const produto = await this.produtoRepository.findOne({
      where: { id_produto: produtoId },
      relations: ['funcionariosFavoritos'],
    });

    if (!produto) {
      throw new NotFoundException('Produto not found');
    }

    const funcionario = await this.funcionarioRepository.findOne({
      where: { id_funcionario: funcionarioId },
      relations: ['produtosFavoritos'],
    });

    if (!funcionario) {
      throw new NotFoundException('Funcionario not found');
    }

    // Verificar se o produto já está nos favoritos
    if (produto.funcionariosFavoritos.find((f) => f.id_funcionario === funcionarioId)) {
      throw new Error('Produto já está nos favoritos');
    }

    produto.funcionariosFavoritos.push(funcionario);
    await this.produtoRepository.save(produto);

    return 'Produto adicionado aos favoritos com sucesso!';
  }

  // Logica de produtos comprados

  async listarComprados(funcionarioId: number): Promise<Produto[]> {
    const funcionario = await this.funcionarioRepository.findOne({
      where: { id_funcionario: funcionarioId },
      relations: ['produtosComprados'],
    });

    if (!funcionario) {
      throw new NotFoundException('Funcionario not found');
    }

    return funcionario.produtosComprados;
  }


  async comprarProduto(produtoId: number, funcionarioId: number): Promise<string> {
    const produto = await this.produtoRepository.findOne({
      where: { id_produto: produtoId },
      relations: ['funcionariosCompraram'],
    });

    if (!produto) {
      throw new NotFoundException('Produto not found');
    }

    const funcionario = await this.funcionarioRepository.findOne({
      where: { id_funcionario: funcionarioId },
      relations: ['produtosComprados'],
    });

    if (!funcionario) {
      throw new NotFoundException('Funcionario not found');
    }

    // Verificar se o produto já foi comprado
    if (produto.funcionariosCompraram.find((f) => f.id_funcionario === funcionarioId)) {
      throw new Error('Produto já foi comprado');
    }

    produto.funcionariosCompraram.push(funcionario);
    await this.produtoRepository.save(produto);

    return 'Produto comprado com sucesso!';
  }

}
