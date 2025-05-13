import Button from '../button/Button';
import logo from './logo-with-shadow.png';
import './Intro.css';

export default () => {
    return (
        <div className="py-5">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h1 class="intro-heading">
                        <div>Vite</div> 
                        Next Generation Frontend Tooling
                    </h1>
                    <p className="fs-3 text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, nisi.</p>
                    <div className="d-flex gap-2 py-2">
                        <Button />
                        <Button />
                        <Button />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={logo} alt="" width="320" />
                    </div>
                </div>
            </div>
        </div>
    );
}