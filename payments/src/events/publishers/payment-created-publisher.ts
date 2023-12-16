import {
  PaymentCreatedEvent,
  Publisher,
  Subjects,
} from "@sagarm21tickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
