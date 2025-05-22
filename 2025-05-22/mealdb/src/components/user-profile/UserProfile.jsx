import { useState } from 'react';

export default () => {
    const [show, setShow] = useState(false);

    return (
        <div className="flex-shrink-0 dropdown">
            <a href="#" 
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle show" 
                data-bs-toggle="dropdown" 
                aria-expanded="true"
                onClick={(e) => setShow(!show)}
            > 
                <img 
                    src="https://github.com/mdo.png" 
                    alt="mdo" 
                    width="32" 
                    height="32" 
                    className="rounded-circle" 
                /> 
            </a> 
            <ul 
                className={'dropdown-menu text-small shadow ' + (show ? ' show' : '')}
                data-popper-placement="bottom-end"
                style={{
                    right: 0
                }}
            > 
                <li><a className="dropdown-item" href="#">New project...</a></li> 
                <li><a className="dropdown-item" href="#">Settings</a></li> 
                <li><a className="dropdown-item" href="#">Profile</a></li> 
                <li>
                    <hr className="dropdown-divider" />
                </li> 
                <li>
                    <a className="dropdown-item" href="#">Sign out</a>
                </li> 
            </ul>
        </div>
    );
}