import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@sagarm21tickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
