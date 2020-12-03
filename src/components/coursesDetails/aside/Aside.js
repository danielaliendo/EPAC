import React from 'react';
import ButtonInscription from './ButtonInscription'
import ModalButtonInscription from './ModalButtonInscription';
import TableInformation from './TableInformation';

const Aside = ( { curso } ) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [dense, setDense] = React.useState(false);

    const [secondary, setSecondary] = React.useState(false);

    return (
        <aside>
            <div className="aside">
                <ButtonInscription curso={curso} handleClickOpen={handleClickOpen} open={open}/>
                <ModalButtonInscription curso={curso} handleClose={handleClose} open={open} />
                <TableInformation curso={curso} dense={dense} />
               
                <div className="blocks">
                    <div className="block">
                        <div className="blockTitle">
                            <h4>Área temática</h4>
                        </div>
                        <div className="blockText">
                            <ul>
                                <li>Cursos para electricistas</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Aside;