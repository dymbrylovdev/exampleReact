import React, {useContext} from 'react';

const ThemedButton = () =>  {
    const {globalContext} = useContext(ThemeContext);

    return (
        <>
            <button value={globalContext}/>;
        </>
    );
}

export default ThemedButton;