const mongoose = require("mongoose");

async function main() {
    try {
        await mongoose.connect("mongodb://localhost:27017/teste");

        const testeSchema = mongoose.Schema({ nome: { type: String, required: true }, idade: { type: Number, required: true } });
        const Teste = mongoose.model("Teste", testeSchema);

        await Teste.create({ nome: "Alexandre", idade: 53 });

        const lixo = await Teste.find({ nome: "Alexandre" });
        console.log(lixo);
    } catch (err) {
        console.log(err);
    }
    mongoose.disconnect();
}

main();
