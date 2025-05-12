// Norint importuoti nuotrauką
import image from './logo.png';

export default () => {
    return (
        <div style={{ textAlign: 'center'}}>
            <img src={image} alt="" width="300" />
        </div>
    );
}