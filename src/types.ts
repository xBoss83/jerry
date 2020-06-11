import {Client, Collection, Guild, Message, TextChannel, Embed, Member, User, Role, GuildTextableChannel, VoiceChannel, CategoryChannel, ClientOptions} from "eris";

export interface ICommandContext{
    msg: Message;
    channel: TextChannel;
    guild: Guild;
    member: Member;
    user: User;
    content: string;
    args: Array<string>;
    dev: boolean;
}