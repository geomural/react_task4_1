import React from 'react';
import PropTypes from 'prop-types';

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? "rgb(" + parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16) + ")" : null;
}

function ColorsForm(props) {
    const {colorRGB, setColorRGB} = props;

    const changeColor = ({target}) => {
        if (target.value.length === 7) {
            if (hexToRgb(target.value)) {
                console.log("set color");
                setColorRGB(hexToRgb(target.value));
            } else {
                setColorRGB("ошибка");
            }
        }
    }

    return (
        <form>
            <input id="hexInput" type="text" maxLength="7" onChange={changeColor}/>
            <br />
            <input id="rgbInput" type="text" value={colorRGB} readOnly />
        </form>
    )
}

ColorsForm.propTypes = {
    colorRGB: PropTypes.string.isRequired,
    setColorRGB: PropTypes.func.isRequired
}
export default ColorsForm;