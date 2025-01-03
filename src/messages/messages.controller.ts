import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get('/:id')
  getMessage(@Param('id') id: string): string {
    return `This action returns a message by id ${id}`;
  }

  @Get()
  getAllMessages(): string {
    return 'This action returns all messages';
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto): string {
    console.log(body);
    return `Create message ${JSON.stringify(body)}`;
  }
}
