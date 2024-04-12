import express from "express";
const app = express();
import amqp from "amqplib";
app.listen(6060);
var msg=[]
var channel, connection;
async function connect() {
  const amqpServer = "amqp://localhost:5672";
  connection = await amqp.connect(amqpServer);
  channel = await connection.createChannel();
  await channel.assertQueue("Queue-A");
}
connect();

app.post("/:name", async (req, res) => {
  console.log("Sending to Queue B ", req.params.name);
  channel.sendToQueue(
    "Queue-B",
    Buffer.from(
      JSON.stringify({
        name: req.params.name,
      })
    )
  );
  channel.consume("Queue-A", (data) => {
    const d = JSON.parse(data.content);
    console.log("Consuming Queue-A",d);
    msg.push(d)
    channel.ack(data);
  });
  // return res.json(msg);
  res.json(msg);
});