import styles from './Calculadora.module.css'

export function Calculadora() {

    const handleCalculate = () => {
        const altura = parseFloat(document.querySelector('[placeholder="Altura (em metros)"]').value);
        const peso = parseFloat(document.querySelector('[placeholder="Peso (em quilos)"]').value);
        const imc = peso / (altura ** 2);

        const resultado = document.querySelector('p');


        const categoriasIMC = [
            { min: 1, max: 17, mensagem: "muito abaixo do peso" },
            { min: 17, max: 18.5, mensagem: "abaixo peso" },
            { min: 18.5, max: 25, mensagem: "peso normal" },
            { min: 25, max: 30, mensagem: "acima do peso" },
            { min: 30, max: 35, mensagem: "obesidade" },
            { min: 35, max: 40, mensagem: "obesidade severa" },
            { min: 40, max: 1000, mensagem: "obesidade mórbida" }
        ];

        let mensagemResultado = "Insira valores válidos.";

        if (imc > 0) {
            for (let categoria of categoriasIMC) {
                if (imc >= categoria.min && imc < categoria.max) {
                    mensagemResultado = `Seu IMC é: ${imc.toFixed(2)}, ${categoria.mensagem}.`;
                    break;
                }
            }
        }

        resultado.textContent = mensagemResultado;

        document.querySelector('[placeholder="Altura (em metros)"]').value = "";
        document.querySelector('[placeholder="Peso (em quilos)"]').value = "";
    }

    return (
        <div className={styles.content}>
            <h1>Calculadora IMC</h1>
            <input type="number" max={3} min={0} placeholder="Altura (em metros)" />
            <input type="number" placeholder="Peso (em quilos)" />
            <button onClick={handleCalculate}>Calcular</button>
            <p className={styles.resultado}></p>
        </div>
    )
}

