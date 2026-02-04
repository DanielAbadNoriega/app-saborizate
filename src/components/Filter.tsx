
interface FiltersProps {
    type: string;
    selectedItem: string;
    options: string[];
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Filter = ({ type, selectedItem, options, handleChange }: FiltersProps) => {
    return (
        <div className={`custom-select ${selectedItem !== "" ? "active" : ""}`}>
            <select name="filter" value={selectedItem} className="filter" onChange={(e) => handleChange(e)}>
                <option value="">{type}</option>
                {options.map(op =>
                    <option key={op} value={op}>
                        {op}
                    </option>)}
            </select>
        </div>
    )
}

export default Filter;