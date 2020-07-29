import { ChatService } from './../chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
})
export class ChatRoomComponent implements OnInit {
  user: string;
  room: string;
  messageText: string;
  messageArray: Array<{ user: string; message: string }> = [];
  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService
      .newUserJoined()
      .subscribe((data) => this.messageArray.push(data));

    this.chatService
      .userLeftRoom()
      .subscribe((data) => this.messageArray.push(data));

    this.chatService
      .newMessageReceived()
      .subscribe((data) => this.messageArray.push(data));
  }
  join() {
    this.chatService.joinRoom({ user: this.user, room: this.room });
  }

  leave() {
    this.chatService.leaveRoom({ user: this.user, room: this.room });
    this.room = '';
    this.messageText = '';
  }

  sendMessage() {
    this.chatService.sendMessage({
      user: this.user,
      room: this.room,
      message: this.messageText,
    });
    this.messageText = '';
  }
}
