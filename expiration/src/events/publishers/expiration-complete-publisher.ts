import { Subjects, Publisher, ExpirationCompleteEvent } from "@kohlernetworks/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;

}