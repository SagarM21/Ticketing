import {
  OrderCancelledEvent,
  Publisher,
  Subjects,
} from "@sagarm21tickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
