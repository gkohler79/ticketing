import { Publisher, Subjects, TicketCreatedEvent } from '@kohlernetworks/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}