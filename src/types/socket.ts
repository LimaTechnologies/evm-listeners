export enum SocketEvents {

    NewPairs = 'new-pairs',
    TrustedPairs = 'trusted-pairs',
    VerifiedPairs = 'verified-pairs',

    LockedPairs = 'locked-pairs',
    RennouncedPairs = 'rennounced-pairs',

    RuggedPairs = 'rugged-pairs',

}

export type RoomNames = `${SocketEvents}`;

export interface WebSocketData {
    roomName: SocketEvents;
}