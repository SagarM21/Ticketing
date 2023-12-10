import {
  OrderCreatedEvent,
  Publisher,
  Subjects,
} from "@sagarm21tickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
