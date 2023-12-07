import nats, { Message } from "node-nats-streaming";

console.clear();

const client = nats.connect("ticketing", "123", {
  url: "http://localhost:4222",
});

client.on("connect", () => {
  console.log("Listener connected to NATS");

  const subscription = client.subscribe("ticket:created");
  subscription.on("message", (msg: Message) => {
    // console.log("Message Received", msg);
    const data = msg.getData();
    if (typeof data === "string") {
      console.log(`Received event #${msg.getSequence()}, with data: ${data}`);
    }
  });
});
