
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}

  findAll(): Promise<Item[]> {
    return this.itemRepository.find();
  }

  findOne(id: number): Promise<Item> {
    return this.itemRepository.findOneBy({ id });
  }

  create(item: Item): Promise<Item> {
    return this.itemRepository.save(item);
  }

  async update(id: number, item: Item): Promise<Item> {
    await this.itemRepository.update(id, item);
    return this.itemRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.itemRepository.delete(id);
  }
}