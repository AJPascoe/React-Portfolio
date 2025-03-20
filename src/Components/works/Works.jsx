import "./works.css";

export default function Works() {
    return (
        <div className="works" id="works">
            <table style={{ border: '1px solid black', width: '100%' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Header 1</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Header 2</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Header 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid black', padding: '8px' }}>Data 1</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>Data 2</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>Data 3</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black', padding: '8px' }}>Data 4</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>Data 5</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>Data 6</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}