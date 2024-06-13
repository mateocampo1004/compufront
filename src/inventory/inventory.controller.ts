
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { Item } from './item.entity';

@Controller('items')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.inventoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Item> {
    return this.inventoryService.findOne(id);
  }

  @Post()
  create(@Body() item: Item): Promise<Item> {
    return this.inventoryService.create(item);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() item: Item): Promise<Item> {
    return this.inventoryService.update(id, item);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.inventoryService.remove(id);
  }
}