import { PaymentCreatedEvent, Publisher, Subjects } from '@kohlernetworks/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}