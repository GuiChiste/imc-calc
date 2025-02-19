import styles from './Tabela.module.css';
export function Tabela() {
    return (
        <div className={styles.blocoTab}>
            <h1>Tabela IMC</h1>
            <table >
                <thead>
                    <tr>
                        <th >IMC</th>
                        <th >Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Menor que 17</td>
                        <td>Muito abaixo do peso</td>
                    </tr>
                    <tr>
                        <td>Entre 17 e 18.49</td>
                        <td>Abaixo do peso</td>
                    </tr>
                    <tr>
                        <td>Entre 18.5 e 24.99</td>
                        <td>Peso normal</td>
                    </tr>
                    <tr>
                        <td>Entre 25 e 29.99</td>
                        <td>Acima do Peso</td>
                    </tr>
                    <tr>
                        <td>Entre 30 e 34.99</td>
                        <td>Obesidade I</td>
                    </tr>
                    <tr>
                        <td>Entre 35 e 39.99</td>
                        <td>Obesidade II (severa)</td>
                    </tr>
                    <tr>
                        <td>Acima de 40</td>
                        <td>Obesidade III (Mórbida)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}