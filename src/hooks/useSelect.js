import React, {useState} from 'react';

const useSelect = (initialState, options) => {

        // State del custom hook
        const [state, updateState] = useState(initialState)

        // Interfaz a devolver
        const SelectNews = () => (
            <select
                className="browser-default"
                value={state}
                onChange={e => updateState(e.target.value)}
            >
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        )

    return [state, SelectNews]

};

export default useSelect;
