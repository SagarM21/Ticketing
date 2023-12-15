import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@sagarm21tickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
