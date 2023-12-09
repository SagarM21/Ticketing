import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@sagarm21tickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
