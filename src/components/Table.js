import Component from '../interface/component.js';

export default class Table extends Component {
    setConfig(configuration) {
        this.columns = configuration.columns ?? [];
        this.data = configuration.data ?? [];
    }

    itemTemplate(data, idx) {
        return this.columns
            .map((col) => {
                let innerContent;

                if (col.render !== undefined) innerContent = col.render(data, idx);
                else innerContent = data[col.key];

                return `<td>${innerContent}</td>`;
            })
            .join('');
    }

    itemListTemplate() {
        return this.data
            .map(
                (data, idx) => `
                <tr>${this.itemTemplate(data, idx)}</tr>
            `
            )
            .join('');
    }

    columnTemplate() {
        return this.columns.map((col) => `<th>${col.label}</th>`).join('');
    }

    template() {
        return `
            <table>
                <thead><tr>${this.columnTemplate()}</tr></thead>
                <tbody>${this.itemListTemplate()}</tbody>
            </table>
        `;
    }
}
