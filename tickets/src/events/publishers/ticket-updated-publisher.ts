import { Publisher, Subjects, TicketUpdatedEvent } from '@kohlernetworks/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}