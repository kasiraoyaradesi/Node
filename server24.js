import express from "express"
const app = express();
import amqp from "amqplib"
var channel, connection;
app.use(express.json());
app.listen(9090)

async function connect() {
    const amqpServer = "amqp://localhost:5672";
    connection = await amqp.connect(amqpServer);
    channel = await connection.createChannel();
    await channel.assertQueue("Queue-B");
}

connect().then(() => {
    channel.consume("Queue-B", (data) => {
        const { name } = JSON.parse(data.content);
        console.log("Consuming Queue-B",name);
        channel.ack(data);
        console.log("Sending to Queue A ", {msg:"Hello "+ name});
        channel.sendToQueue(
            "Queue-A",
            Buffer.from(JSON.stringify({ msg:"Hello "+ name }))
        );
    });
});