import { Publisher, OrderCreatedEvent, Subjects } from "@kohlernetworks/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
};